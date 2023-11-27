"use client"

import { PageTitle } from "../components/PageTitle"
import { useShopContext } from "../hooks/useShopContext"
import { CartProductRow } from "./CartProductRow"
import { useState } from "react"
import Script from "next/script"
import ReCAPTCHA from "react-google-recaptcha"



const Cart = () => {

  const {cart} = useShopContext()
  const [recaptchaValue, setRecaptchaValue] = useState(null);


  // GET SUBTOTAL OF ALL CART ITEMS
  const getSubtotal = () => {
    const subtotal = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return subtotal.toFixed(2)
  }


  const getTaxTotal = () => {
    const taxTotal = cart.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity * item.tax;
    }, 0)
    return taxTotal.toFixed(2)
  }


//   useEffect(() => {
//     getTaxTotal()
//   }, [cart])

  // const handleCheckout = async () => {
  //   await fetch("http://localhost:3000/checkout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({items: cart})
  //   }).then((response) => {
  //     return response.json()
  //   }).then((response) => {
  //     if(response.url) {
  //       window.location.assign(response.url)
  //     }
  //   })
  // }



    function validateRecaptcha() {
      var recaptchaResponse = grecaptcha.getResponse();

      if (recaptchaResponse.length == 0) {
          alert("Please complete the reCAPTCHA.");
          return false; // Prevent form submission
      }

      return true; // Allow form submission
    }



    const handleRecaptchaChange = (value) => {
      // This function is called when the user completes the reCAPTCHA challenge
      setRecaptchaValue(value);
    };


    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   // Check if reCAPTCHA is verified before submitting the form
    //   if (isRecaptchaVerified) {
    //     // Perform form submission logic here
    //     console.log('Form submitted with data:', formData);
    //   } else {
    //     console.log('Please complete the reCAPTCHA challenge.');
    //   }
    // };


    // WORKING CODE, IMPLEMENT AFTER RECATCHA VALIDATED BY GOOGLE
    const handleCheckout = async () => {
      
      const res = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // body: JSON.stringify({items: cart})
        body: JSON.stringify({
          items: cart
        })
      })
  
      if(res.ok) {
        const {url} = await res.json()
        window.location.assign(url)
      }
    }


    const handleSubmitAndValidate = async (e) => {

      e.preventDefault()
      console.log("sending these items to backend...", cart)

    // Check if reCAPTCHA is verified before submitting the form
    
    if (recaptchaValue) {

      try {
        const res = await fetch("http://localhost:3000/api/recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            response: recaptchaValue
          })
        })

        const data = await res.json()

        if(data.success) {
          console.log("verification successful")
          handleCheckout()
        }

      } catch(err) {
         console.log("an arror has occured:", err)
      }


    }

}


  return (
    <>
      <main className="cart-page">
          <PageTitle title="Cart - Checkout" />
          <div className="books-list px-5 lg:px-36 bg-gray-100 py-20 mt-24 overflow-x-auto">
              <table className="w-full">
                  <thead>
                      <tr className="text-center bg-gray-200 border-2 border-gray-200">
                          <td>Remove</td>
                          <td>Item</td>
                          <td>About</td>
                          <td>Price</td>
                          <td>Quantity</td>
                          <td>Total</td>
                      </tr>
                  </thead>
                  <tbody>
                      {cart.map((item) => (
                          <CartProductRow key={item.id} item={item} />
                      ))}
                      <tr>
                          <td colSpan="4"></td>
                          <td className="text-right">Subtotal:</td>
                          <td className="text-center">${getSubtotal()}</td>
                      </tr>
                      <tr>
                          <td colSpan="4"></td>
                          <td className="text-right">Tax:</td>
                          <td className="text-center">${getTaxTotal()}</td>
                      </tr>
                      <tr>
                          <td colSpan="4"></td>
                          <td className="text-right font-bold">Total:</td>
                          <td className="text-center font-bold">${(+getSubtotal() + +getTaxTotal()).toFixed(2)}</td>
                      </tr>
                  </tbody>
              </table>
              <div className="flex flex-col items-end">
                <form onSubmit={handleSubmitAndValidate}>
                  {/* <div className="g-recaptcha" data-sitekey="6LdFCTwoAAAAAJz1TIkSuEFdE1AKYDoFa0S7Hcmm"></div> */}
                  <ReCAPTCHA sitekey="6LdFCTwoAAAAAJz1TIkSuEFdE1AKYDoFa0S7Hcmm" onChange={handleRecaptchaChange} />
                  <button className="bg-green-500 hover:bg-green-600 mt-6 text-gray-50 py-3 px-5 rounded me-[3px]">Checkout</button>
                </form>
              </div>
          </div>
      </main>
      <Script
        src="https://www.google.com/recaptcha/api.js"
      />
    </>
  )
}


export default Cart
"use client"

import { PageTitle } from "../components/PageTitle"
import { useShopContext } from "../hooks/useShopContext"
import { CartProductRow } from "./CartProductRow"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { FixedQuantityProductRow } from "./FixedQuantityProductRow"



const Cart = () => {

  const {cart} = useShopContext();
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(null)


  // GET SUBTOTAL OF ALL CART ITEMS
  const getSubtotal = () => {
    const subtotal = cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);
    return subtotal.toFixed(2)
  }


  // REMOVED BECAUSE IT'S CALCULATED BY STRIPE AUTOMATICALLY AT CHECKOUT
  // const getTaxTotal = () => {
  //   const taxTotal = cart.reduce((accumulator, item) => {
  //       return accumulator + item.price * item.quantity * item.tax;
  //   }, 0)
  //   return taxTotal.toFixed(2)
  // }


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


    const handleRecaptchaChange = (value) => {
      // This function is called when the user completes the reCAPTCHA challenge
      setRecaptchaValue(value);
    };


    // WORKING CODE, RUN AFTER SUCCESSFUL RECATCHA VALIDATION
    const handleCheckout = async () => {

      console.log("handleCheckout fired")
      
      const res = await fetch("/api/checkout", {
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
      } else {
        setProcessing(false)
        setError("Oops, something went wrong. Try again later.")
      }
    }


    const handleSubmitAndValidate = async (e) => {

    e.preventDefault()
    console.log("sending these items to backend...", cart)

    setProcessing(true)

    // Check if reCAPTCHA is verified before submitting the form
    
    if (recaptchaValue) {

      try {
        const res = await fetch("/api/recaptcha", {
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
          // console.log("logging cart contents:", cart)
        }

      } catch(err) {
         console.log("an arror has occured:", err)
         setProcessing(false)
      }

    } else {
      setError("Please check the box above before proceeding")
      setProcessing(false)
    }

}


  return (
    <>
      <main className="cart-page">
          <PageTitle title="Cart" image="/images/illustrations/shop-page-illustration.png" alt="cart page illustration" />
          <div className="books-list px-5 lg:px-36 bg-gray-100 py-20 overflow-x-auto">
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
                      {cart.map((product) => (
                          <CartProductRow key={product.id} product={product} />
                      ))}
                      <tr>
                          <td colSpan="4"></td>
                          <td className="text-right font-semibold">Subtotal:</td>
                          <td className="text-center font-semibold py-4">{getSubtotal()}</td>
                      </tr>
                      {/* <tr>
                          <td colSpan="4"></td>
                          <td className="text-right">Tax:</td>
                          <td className="text-center">${getTaxTotal()}</td>
                      </tr>
                      <tr>
                          <td colSpan="4"></td>
                          <td className="text-right font-bold">Total:</td>
                          <td className="text-center font-bold">${(+getSubtotal() + +getTaxTotal()).toFixed(2)}</td>
                      </tr> */}
                      <tr>
                          <td colSpan="4"></td>
                          {/* <td className="text-right font-bold"></td> */}
                          <td colSpan="2" className="text-right text-sm italic">Tax and Shipping calculated at Checkout</td>
                      </tr>
                  </tbody>
              </table>
              <div className="flex flex-col items-end">
                <form onSubmit={handleSubmitAndValidate}>
                  <ReCAPTCHA sitekey="6LdFCTwoAAAAAJz1TIkSuEFdE1AKYDoFa0S7Hcmm" onChange={handleRecaptchaChange} className="mt-4" />
                  <div className="text-red-500 mt-2 text-[0.9rem] h-[1rem]">{error && error}</div>
                  <button className="bg-green-500 hover:bg-green-600 mt-4 text-gray-50 py-3 px-5 rounded me-[3px]" disabled={processing}>{processing ? "Processing..." : "Checkout"}</button>
                </form>
              </div>
          </div>
      </main>
    </>
  )
}


export default Cart
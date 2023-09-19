"use client"


import { PageTitle } from "../components/PageTitle"
import { useShopContext } from "../hooks/useShopContext"
import { CartProductRow } from "./CartProductRow"
import { useEffect } from "react"


const Cart = () => {

  const {cart} = useShopContext()


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

    const handleCheckout = async () => {
    console.log("sending these items to backend...", cart)

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


  return (
    <main className="cart-page">
        <PageTitle title="Cart - Checkout" />
        <div className="books-list px-5 lg:px-36 bg-gray-100 py-20 mt-24 overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="text-center bg-gray-200 border-2 border-gray-200">
                        <td>Remove</td>
                        <td>Item</td>
                        <td>Description</td>
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
            <button className="bg-green-500 mt-6 text-gray-50 p-5 float-right" onClick={handleCheckout}>Checkout</button>
        </div>
    </main>
  )
}


export default Cart
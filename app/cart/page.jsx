"use client"


import { PageTitle } from "../components/PageTitle"
import { useShopContext } from "../hooks/useShopContext"
import { booksList } from "../shop/shopItems"
import { CartProductRow } from "./CartProductRow"


const Cart = () => {

  const {checkoutList} = useShopContext()

  const cartItems = booksList.filter((book) => checkoutList.includes(book.id));


  console.log("from cart page:", cartItems)


  return (
    <main className="shot-page">
        <PageTitle title="Cart - Checkout" />
        <div className="books-list px-5 lg:px-36 bg-gray-100 py-20 mt-24">
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
                    {cartItems.map((item) => (
                        <CartProductRow key={item.id} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  )
}


export default Cart
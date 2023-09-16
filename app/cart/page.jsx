"use client"


import { PageTitle } from "../components/PageTitle"
import { useShopContext } from "../hooks/useShopContext"
import { booksList } from "../shop/shopItems"
import { CartProductCard } from "../shop/CartProductCard"


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
                        <td>Item</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td className="w-[30%] py-6 border-2 border-gray-200">
                                    <div className="h-[120px] flex justify-center"> 
                                        <img src={item.imageUrl} alt={item.title} style={{maxHeight: "100%"}} />
                                    </div>
                                </td>
                                <td className="w-[30%] border-2 border-gray-200 px-5">{item.title}</td>
                                <td className="w-[10%] border-2 border-gray-200 px-5 text-center">${item.price}</td>
                                <td className="w-[20%] border-2 border-gray-200 px-5 text-center">quantity</td>
                                <td className="w-[10%] border-2 border-gray-200 px-5 text-center">$2</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </main>
  )
}


export default Cart
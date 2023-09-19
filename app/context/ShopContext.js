"use client"

import { createContext, useState } from "react"
import { toast } from "react-toastify"

export const ShopContext = createContext()


export const ShopContextProvider = ({children}) => {

    const notifyAdd = (item) => toast.success(`"${item}" \n was added to your cart!`)
    const notifySubtract = (item) => toast.success(`"${item}" \n was removed from your cart!`)
    const notifyItemRemoved = () => toast.success("Item removed!")
    const [cartItemsTotal, setCartItemsTotal] = useState(0)


    const [cart, setCart] = useState([])


    console.log("cart contents:", cart)


    // ADD ITEM TO CART BY EITHER CLICKING 'ADD TO CART' BUTTON OR INCREASING ITEM QUANTITY
    const addToCart = (item, id) => {
        // check if this item is already in the cart
        const itemIndex = cart.findIndex((item) => item.id === id)
        if(itemIndex === -1) {
            setCart((prev) => [...prev, item])
            setCartItemsTotal((prev) => prev + 1)
        } else {
            const updatedCart = [...cart]
            updatedCart[itemIndex].quantity += 1
            setCart(updatedCart)
            setCartItemsTotal((prev) => prev + 1)
        }
        notifyAdd(item.title)
    }

    const subtractFromCart = (item, id) => {
        const itemIndex = cart.findIndex((item) => item.id === id)
        const updatedCart = [...cart]
        updatedCart[itemIndex].quantity -= 1
        setCart(updatedCart)
        setCartItemsTotal((prev) => prev - 1)
        notifySubtract(item.title)
    }

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id)
        setCart(updatedCart)
        notifyItemRemoved()
    }

    const contextExports = {
        cartItemsTotal,
        setCartItemsTotal,
        removeFromCart,
        addToCart,
        subtractFromCart,
        cart
    }

    return (
        <ShopContext.Provider value={contextExports}>
            {children}
        </ShopContext.Provider>
    )

}
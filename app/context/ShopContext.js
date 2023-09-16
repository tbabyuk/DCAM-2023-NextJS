"use client"

import { createContext, useState } from "react"
import { toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';


export const ShopContext = createContext()


export const ShopContextProvider = ({children}) => {

    const notifyAdd = (item) => toast.success(`"${item}" \n was added to your cart!`)
    const notifyAddQty = () => toast.success(`Item added!`)
    const notifySubtractQty = () => toast.success(`Item removed!`)
    const notifyItemRemoved = () => toast.success("Item deleted!")
    const [numCartItems, setNumCartItems] = useState(0)
    const [checkoutList, setCheckoutList] = useState([])

    const name = "Brad"
    const addItem = (itemName, itemId) => {
        setNumCartItems((prev) => prev + 1)
        notifyAdd(itemName)
        console.log(itemName, itemId)
        setCheckoutList((prev) => [...checkoutList, itemId])
    }

    const addItemQuantity = () => {
        setNumCartItems((prev) => prev + 1)
        notifyAddQty()
    }

    const subtractItemQuantity = () => {
        setNumCartItems((prev) => prev - 1)
        notifySubtractQty()
    }

    const updateCheckoutList = (id, quantity) => {
        const newCheckoutList = checkoutList.filter((item) => item !== id)
        setCheckoutList(newCheckoutList)
        setNumCartItems((prev) => prev - quantity)
        notifyItemRemoved()
    }

    console.log("checkList is:", checkoutList)

    return (
        <ShopContext.Provider value={{numCartItems, addItem, checkoutList, updateCheckoutList, addItemQuantity, subtractItemQuantity}}>
            {children}
        </ShopContext.Provider>
    )

}
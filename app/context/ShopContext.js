"use client"

import { createContext, useState } from "react"
import { toast } from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css';


export const ShopContext = createContext()


export const ShopContextProvider = ({children}) => {

    const notify = (item) => toast.success(`"${item}" \n was added to your cart!`)
    const [numCartItems, setNumCartItems] = useState(0)
    const [checkoutList, setCheckoutList] = useState([])

    const name = "Brad"
    const addItem = (itemName, itemId) => {
        setNumCartItems((prev) => prev + 1)
        notify(itemName)
        console.log(itemName, itemId)
        setCheckoutList((prev) => [...checkoutList, itemId])
    }

    console.log("checkList is:", checkoutList)

    return (
        <ShopContext.Provider value={{numCartItems, addItem, checkoutList}}>
            {children}
        </ShopContext.Provider>
    )

}
"use client"

import { useShopContext } from "../hooks/useShopContext"


export const AddToCartButton = ({itemName, itemId}) => {
  
  const {addItem} = useShopContext()

  const handleAddItem = () => {
        addItem(itemName, itemId)
  }


  return (
    <>
        <button className="w-full mt-1 mx-auto bg-green-500 hover:bg-green-400 rounded text-gray-50 text-sm py-2" onClick={handleAddItem}>Add to Cart</button>
    </>
  )
}
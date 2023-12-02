"use client"

import { useShopContext } from "../hooks/useShopContext"


export const AddToCartButton = ({item, id, origin}) => {
  
  const {addToCart} = useShopContext()


  return (
    <>
        <button className="w-full mt-1 mx-auto bg-green-500 hover:bg-green-600 rounded text-gray-50 text-sm py-2" onClick={() => addToCart(item, id, origin)}>Add to Cart</button>
    </>
  )
}
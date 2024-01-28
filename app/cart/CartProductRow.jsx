"use client"

import { useState } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { useShopContext } from "../hooks/useShopContext"
import { toast } from "react-toastify"



export const CartProductRow = ({product}) => {


  const {addToCart, subtractFromCart, removeFromCart, setCartItemsTotal} = useShopContext()


  const handleAdd = () => {
    if(product.quantity < 10) {
        addToCart(product, product.id)
    } else {
        toast.error("Oops, you've reached the maximum number of products available in stock!")
    }
  }

  const handleSubtract = () => {
    if(product.quantity > 1) {
        subtractFromCart(product, product.id)
    } else {
        removeFromCart(product.id)
        setCartItemsTotal((prev) => prev - 1)
    }
  }

  const handleRemove = () => {
      removeFromCart(product.id)
      setCartItemsTotal((prev) => prev - product.quantity)
  }


  return (
    <tr>
      <td className="w-[5%] min-w-[80px] border-2 border-gray-200">
        <div className="w-full flex justify-center">
          <RxCross1 className="text-[1.5rem] text-gray-500 cursor-pointer" onClick={handleRemove} />
        </div>
      </td>
      <td className="w-[25%] min-w-[150px] py-6 border-2 border-gray-200">
          <div className="h-[120px] flex flex-shrink-0 justify-center"> 
              <img src={product.source} alt={product.title} style={{maxHeight: "100%"}} />
          </div>
      </td>
      <td className="w-[30%] min-w-[180px] border-2 border-gray-200 px-5">{product.title}</td>
      <td className="w-[10%] min-w-[80px] border-2 border-gray-200 px-5 text-center">${product.price}</td>
      <td className="w-[20%] min-w-[180px] border-2 border-gray-200 px-5 text-center"><BiLeftArrow className="me-2 inline-block text-[1.2rem] cursor-pointer" onClick={handleSubtract} />{product.quantity}<BiRightArrow className="ms-2 inline-block text-[1.2rem] cursor-pointer" onClick={handleAdd} /></td>
      <td className="w-[10%] min-w-[80px] border-2 border-gray-200 px-5 text-center">${(product.price * product.quantity).toFixed(2)}</td>
    </tr>
  )
}

"use client"

import { useState } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { useShopContext } from "../hooks/useShopContext"
import { toast } from "react-toastify"



export const CartProductRow = ({item}) => {


  const {addToCart, subtractFromCart, removeFromCart, setCartItemsTotal} = useShopContext()


  const handleAdd = () => {
    if(item.quantity < 10) {
        addToCart(item, item.id)
    } else {
        toast.error("Oops, you've reached the maximum number of items available in stock!")
    }
  }

  const handleSubtract = () => {
    if(item.quantity > 1) {
        subtractFromCart(item, item.id)
    } else {
        removeFromCart(item.id)
        setCartItemsTotal((prev) => prev - 1)
    }
  }

  const handleRemove = () => {
      removeFromCart(item.id)
      setCartItemsTotal((prev) => prev - item.quantity)
  }


  return (
    <tr>
      <td className="w-[5%] border-2 border-gray-200">
        <div className="w-full flex justify-center">
          <RxCross1 className="text-[1.5rem] text-gray-500 cursor-pointer" onClick={handleRemove} />
        </div>
      </td>
      <td className="w-[25%] py-6 border-2 border-gray-200">
          <div className="h-[120px] flex justify-center"> 
              <img src={item.imageUrl} alt={item.title} style={{maxHeight: "100%"}} />
          </div>
      </td>
      <td className="w-[30%] border-2 border-gray-200 px-5">{item.title}</td>
      <td className="w-[10%] border-2 border-gray-200 px-5 text-center">${item.price}</td>
      <td className="w-[20%] border-2 border-gray-200 px-5 text-center"><BiLeftArrow className="me-2 inline-block text-[1.2rem] cursor-pointer" onClick={handleSubtract} />{item.quantity}<BiRightArrow className="ms-2 inline-block text-[1.2rem] cursor-pointer" onClick={handleAdd} /></td>
      <td className="w-[10%] border-2 border-gray-200 px-5 text-center">${(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  )
}

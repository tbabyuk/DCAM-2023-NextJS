"use client"

import { useState } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { useShopContext } from "../hooks/useShopContext"
import { toast } from "react-toastify"



export const FixedQuantityProductRow = ({item}) => {


  const {removeFromCart} = useShopContext()


  const handleRemove = () => {
      removeFromCart(item.id)
      setCartItemsTotal((prev) => prev - item.quantity)
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
              <img src={item.source} alt={item.title} style={{maxHeight: "100%"}} />
          </div>
      </td>
      <td className="w-[30%] min-w-[180px] border-2 border-gray-200 px-5">{item.title}</td>
      <td className="w-[10%] min-w-[80px] border-2 border-gray-200 px-5 text-center">${item.price}</td>
      <td className="w-[20%] min-w-[180px] border-2 border-gray-200 px-5 text-center">1</td>
      <td className="w-[10%] min-w-[80px] border-2 border-gray-200 px-5 text-center">${item.price}</td>
    </tr>
  )
}

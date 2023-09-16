"use client"

import { useState } from "react"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"
import { RxCross1 } from "react-icons/rx"
import { useShopContext } from "../hooks/useShopContext"



export const CartProductRow = ({item}) => {

  const {updateCheckoutList, addItemQuantity, subtractItemQuantity} = useShopContext()

  const [quantity, setQuantity] = useState(1)

  const handleAddQuantity = () => {
    if(quantity < 10) {
      setQuantity((prev) => prev + 1)
    }
    addItemQuantity()
  }

  const handleSubtractQuantity = () => {
    if(quantity > 1) {
      setQuantity((prev) => prev - 1)
      subtractItemQuantity()
    }
  }


  return (
    <tr>
      <td className="w-[5%] border-2 border-gray-200">
        <div className="w-full flex justify-center">
          <RxCross1 className="text-[1.5rem] text-gray-500 cursor-pointer" onClick={() => updateCheckoutList(item.id, quantity)} />
        </div>
      </td>
      <td className="w-[25%] py-6 border-2 border-gray-200">
          <div className="h-[120px] flex justify-center"> 
              <img src={item.imageUrl} alt={item.title} style={{maxHeight: "100%"}} />
          </div>
      </td>
      <td className="w-[30%] border-2 border-gray-200 px-5">{item.title}</td>
      <td className="w-[10%] border-2 border-gray-200 px-5 text-center">${item.price}</td>
      <td className="w-[20%] border-2 border-gray-200 px-5 text-center"><BiLeftArrow className="me-2 inline-block text-[1.2rem] cursor-pointer" onClick={handleSubtractQuantity} />{quantity}<BiRightArrow className="ms-2 inline-block text-[1.2rem] cursor-pointer" onClick={handleAddQuantity}/></td>
      <td className="w-[10%] border-2 border-gray-200 px-5 text-center">${(item.price * quantity).toFixed(2)}</td>
    </tr>
  )
}


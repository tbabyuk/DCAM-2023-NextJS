"use client"


import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";


export const BookSpecsDropdown = ({item}) => {

  const [specsOpen, setSpecsOpen] = useState(true)    


  return (
    <div>
    <p className="border-t-2 border-gray-200 py-2 mt-6 mb-4 flex justify-between items-center cursor-pointer" onClick={() => setSpecsOpen(!specsOpen)}>View Book Details: <IoMdArrowDropdown size="1.5rem" className="text-gray-600" /></p>
    {specsOpen && (
        <ul className="text-[0.9rem]">
            <li>Author: {item.author}</li>
            <li>Publisher: {item.publisher}</li>
            <li>Published: {item.year}</li>
            <li>Pages: {item.pages}</li>
            <li>ISBN: {item.ISBN}</li>
        </ul>
    )}

    </div>

  )
}
"use client"
import { useState } from "react"



export const SightReadingBooksFilter = ({setFilterValue}) => {

    const [selectedBooks, setSelectedBooks] = useState("sight-reading-all")

    const handleFilterBooks = (value) => {
        setSelectedBooks(value)
        setFilterValue(value)
    }


    return (
        <div className="px-5 lg:px-36 xl:px-52 py-8 border-b-2 bg-gray-100 border-gray-300">
            <div className="w-full sm:w-[250px] mb-6 md:mb-0 mr-10">
                <p className="mb-1">Filter sight-reading books:</p>
                <select 
                    className="w-full h-8 cursor-pointer border-2 border-gray-400" 
                    value={selectedBooks}
                    onChange={(e) => handleFilterBooks(e.target.value)}
                >
                    <option value="sight-reading-all">all sight-reading books</option>
                    <option value="sight-reading-rcm">rcm sight-reading books</option>
                    <option value="sight-reading-non-rcm">non-rcm sight-reading books</option>
                </select>
            </div>
        </div>
    )
}
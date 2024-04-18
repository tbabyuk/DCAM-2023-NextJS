"use client"
import { useState } from "react"



export const TheoryBooksFilter = ({setFilterValue}) => {

    const [selectedBooks, setSelectedBooks] = useState("theory-all")

    const handleFilterBooks = (value) => {
        console.log("do I fire? 1")
        setSelectedBooks(value)
        setFilterValue(value)
    }


    return (
        <div className="px-5 lg:px-36 xl:px-52 py-8 border-b-2 bg-gray-100 border-gray-300">
            <div className="w-full sm:w-[250px] mb-6 md:mb-0 mr-10">
                <p className="mb-1">Filter theory books:</p>
                <select 
                    className="w-full h-8 cursor-pointer border-2 border-gray-400" 
                    value={selectedBooks}
                    onChange={(e) => handleFilterBooks(e.target.value)}
                >
                    <option value="theory-all">all theory books</option>
                    <option value="theory-rcm">rcm theory books</option>
                    <option value="theory-non-rcm">non-rcm theory books</option>
                </select>
            </div>
            {/* <div className="flex">
                <label className="flex flex-col pr-8">
                    <span className="mb-2">All Theory Books</span>
                    <input 
                        type="radio" 
                        name="scope" 
                        value="all"
                        onChange={e => handleScopeChange(e.target.value)}
                        checked={scope === "all"}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-2">RCM Theory Books Only</span>
                    <input 
                        type="radio"
                        name="scope" 
                        value="rcm"
                        onChange={e => handleScopeChange(e.target.value)}
                        checked={scope === "rcm"}
                    />
                </label>
            </div> */}
        </div>
    )
}
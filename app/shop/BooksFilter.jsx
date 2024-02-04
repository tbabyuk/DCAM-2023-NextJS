"use client"
import { useState } from "react"



export const BooksFilter = ({handleInstrumentValue, handleScopeValue}) => {

    const [instrument, setInstrument] = useState("piano")
    const [scope, setScope] = useState("all")


    const handleInstrumentChange = (instrumentValue) => {
        console.log("do I fire? 1")
        setInstrument(instrumentValue)
        handleInstrumentValue(instrumentValue)
    }

    const handleScopeChange = (scopeValue) => {
        console.log("do I fire? 1")
        setScope(scopeValue)
        handleScopeValue(scopeValue)
    }



    return (
        <div className="flex flex-col md:flex-row py-8 border-b-2 border-gray-300">
            <div className="w-full md:w-[250px] mb-6 md:mb-0 mr-10">
                <p className="mb-1">Choose instrument/subject:</p>
                <select 
                    className="w-full h-8 cursor-pointer border-2 border-gray-400" 
                    value={instrument}
                    onChange={(e) => handleInstrumentChange(e.target.value)}
                >
                    <option value="piano">piano books</option>
                    <option value="theory">music theory books</option>
                </select>
            </div>
            <div className="flex">
                <label className="flex flex-col pr-8">
                    <span className="mb-2">All Books</span>
                    <input 
                        type="radio" 
                        name="scope" 
                        value="all"
                        onChange={e => handleScopeChange(e.target.value)}
                        checked={scope === "all"}
                    />
                </label>
                <label className="flex flex-col">
                    <span className="mb-2">RCM Books Only</span>
                    <input 
                        type="radio" 
                        name="scope" 
                        value="rcm"
                        onChange={e => handleScopeChange(e.target.value)}
                        checked={scope === "rcm"}
                    />
                </label>
            </div>
        </div>
    )
}
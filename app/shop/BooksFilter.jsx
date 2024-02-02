"use client"
import { useState } from "react"



export const BooksFilter = ({handleInstrumentValue, handleScopeValue}) => {

    const [instrument, setInstrument] = useState("piano")
    const [scope, setScope] = useState("all")


    const handleInstrumentChange = (instrumentValue) => {
        setInstrument(instrumentValue)
        handleInstrumentValue(instrumentValue)
    }

    const handleScopeChange = (scopeValue) => {
        setScope(scopeValue)
        handleScopeValue(scopeValue)
    }



    return (
        <div className="bg-blue-300 flex p-4 gap-6">
            <div className="w-[200px]">
                <p>Instrument:</p>
                <select 
                    className="w-full" 
                    value={instrument}
                    onChange={(e) => handleInstrumentChange(e.target.value)}
                >
                    <option value="piano">piano</option>
                    <option value="abc">abc</option>
                    <option value="theory">theory</option>
                </select>
            </div>
            <div className="flex">
                <label className="flex flex-col justify-center ">
                    <span>All Books</span>
                    <input 
                        type="radio" 
                        name="scope" 
                        value="all"
                        onChange={e => handleScopeChange(e.target.value)}
                        checked={scope === "all"}
                    />
                </label>
                <label className="flex flex-col justify-center ">
                    <span>RCM Books Only</span>
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
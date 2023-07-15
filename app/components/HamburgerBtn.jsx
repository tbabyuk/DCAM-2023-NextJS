"use client"

import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react"

const HamburgerBtn = ({children}) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)

    const handleDropdown = (e) => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const handleMessage = () => {
        alert("Boo!")
    }

    return ( 
        <>
        <RxHamburgerMenu className="cursor-pointer" size="2em" onClick={handleDropdown} />
            {dropdownIsOpen && (
                <>
                    {children}
                </>
            )}
        </>

     );
}
 
export default HamburgerBtn;
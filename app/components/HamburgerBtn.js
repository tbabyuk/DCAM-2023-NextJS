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
        <RxHamburgerMenu onClick={handleDropdown} />
            {dropdownIsOpen && (
                <>
                {children}
                </>
            )}
        </>

     );
}
 
export default HamburgerBtn;
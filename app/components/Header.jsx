"use client"

// import { GiShoppingCart } from "react-icons/gi"
import { useState } from "react";
import Slider from "./Slider";
import { IoMdArrowDropdown } from "react-icons/io"
import { useShopContext } from "../hooks/useShopContext";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import { TopHeader } from "./TopHeader";




const Header = () => {

    const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false)
    const [lessonsDropdownIsOpen, setLessonsDropdownIsOpen] = useState(false)
    const path = usePathname()

    const handleDropdownMenu = () => {
        setDropdownMenuIsOpen((prev) => !prev)
    }

    const {cartItemsTotal} = useShopContext()

    return (
        <header className="flex flex-col mb-28">
            {/* LOGO & CONTACT HEADER */}
            <TopHeader />
            <Navigation />
            <Slider />
        </header>
     );
}




 
export default Header;
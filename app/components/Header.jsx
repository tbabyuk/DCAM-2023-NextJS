"use client"

import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import { GiShoppingCart } from "react-icons/gi"
import { useState } from "react";
import Slider from "./Slider";
import { IoMdArrowDropdown } from "react-icons/io"
import { MMSLoginButton } from "./MMSLoginButton";
import { useShopContext } from "../hooks/useShopContext";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";




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
            <div className="header-top px-5 py-8 md:py-4 bg-[url('/bg_top_header.jpg')] bg-cover text-gray-100 flex flex-col md:flex-row justify-between items-center">

                <Link href="/"><img src="/dcam_logo_white.png" className="pb-8 md:pb-0" style={{maxWidth: "180px", height: "auto"}} alt="Da Capo Academy of Music logo" /></Link>

                <div className="hidden md:block">
                    <MMSLoginButton  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="hidden lg:my-0 lg:me-10 lg:block">
                        <a
                            href="https://www.facebook.com/dacapomusic.ca/" target="_blank" 
                            className="hover:text-lightRed me-5 inline-block">
                            <FaFacebookSquare size="2em"/> 
                        </a>
                        <a
                            href="https://www.instagram.com/dacapomusic.ca/" target="_blank" 
                            className="hover:text-lightRed me-5 inline-block">
                            <FaInstagramSquare size="2em" />
                        </a>
                        <a
                            href="https://www.youtube.com/watch?v=gSPAOkyO4AA&feature=youtu.be" target="_blank" className="hover:text-lightRed inline-block">
                            <FaYoutubeSquare size="2em" />
                        </a>
                    </div>
                    <div className="flex md:flex-col xl:flex-row md:items-start">
                        <a href = "mailto: info@dacapomusic.ca" className="flex items-center pe-8 md:pe-0 md:pb-3 xl:pb-0 xl:pe-6 hover:text-lightRed text-[1.1rem] md:text-[0.95rem]"><HiOutlineMail className="me-1" />EMAIL US</a>
                        <a href="tel:+4162379595"className="flex items-center ps-8 md:ps-0 hover:text-lightRed text-[1.1rem] md:text-[0.95rem]"><BsTelephone className={"me-1"}/>CALL US</a>
                    </div>
                </div>
            </div>
            <Navigation />
            <Slider />
        </header> 
     );
}




 
export default Header;
"use client"

import { Fragment, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { GiShoppingCart } from "react-icons/gi"
import { IoIosArrowDown } from "react-icons/io"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useShopContext } from "../hooks/useShopContext";


export const Navigation = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [subnav1IsOpen, setSubnav1IsOpen] = useState(false)
    const [subnav2IsOpen, setSubnav2IsOpen] = useState(false)
    
    const {cartItemsTotal} = useShopContext()

    // <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>


return (
    <nav className="navigation w-full bg-regBlue">
        <div className="h-11 flex justify-start items-center bg-darkBlue md:hidden">
            {isOpen ? <RxCross1 size="1.8em" className="cursor-pointer h-full text-gray-50 mx-3" onClick={() => setIsOpen(false)} /> : <RxHamburgerMenu size="2em" className="cursor-pointer text-gray-50 mx-3" onClick={() => setIsOpen(true)} />}
        </div>
        <ul
        className={`${isOpen ? "block absolute bg-regBlue w-full" : "hidden"} md:static md:flex md:justify-center text-gray-50 z-[5] text-[0.95rem]`}>
            <Link href="/" onClick={() => setIsOpen(false)}><li className="menu-item">Home</li></Link>
            <li className="menu-item hover:bg-regBlue relative cursor-pointer" onMouseEnter={() => setSubnav1IsOpen(true)} onMouseLeave={() => setSubnav1IsOpen(false)} onClick={() => setSubnav1IsOpen(!subnav1IsOpen)}>Lessons<IoIosArrowDown className="ms-1" />
                {subnav1IsOpen && (
                    <ul className="absolute bottom-0 left-0 translate-y-[100%] w-full md:w-[220px] flex flex-col bg-darkBlue text-[0.95rem] z-[6]">
                        <Link href="/piano-lessons-etobicoke" onClick={() => setIsOpen(false)}><li className="submenu-item">Piano Lessons</li></Link>
                        <Link href="/guitar-lessons-etobicoke" onClick={() => setIsOpen(false)}><li className="submenu-item">Guitar Lessons</li></Link>
                        <Link href="/drum-lessons-etobicoke" onClick={() => setIsOpen(false)}><li className="submenu-item">Drum Lessons</li></Link>
                        <Link href="/voice-lessons-etobicoke" onClick={() => setIsOpen(false)}><li className="submenu-item">Voice Lessons</li></Link>
                        <Link href="/music-theory-lessons-etobicoke" onClick={() => setIsOpen(false)}><li className="submenu-item">Music Theory Lessons</li></Link>
                        <Link href="/toddler-music-classes" onClick={() => setIsOpen(false)}><li className="submenu-item">Toddler Music Classes</li></Link>
                        <Link href="/intro-to-music-program" onClick={() => setIsOpen(false)}><li className="submenu-item">Intro to Music Program</li></Link>
                    </ul>
                )}
            </li>
            <Link href="/rates" className="hover:bg-purple-500" onClick={() => setIsOpen(false)}><li className="menu-item">Rates</li></Link>
            <Link href="/teachers" onClick={() => setIsOpen(false)}><li className="menu-item">Teachers</li></Link>
            <Link href="/reviews" onClick={() => setIsOpen(false)}><li className="menu-item">Reviews</li></Link>
            {/* <Link href="/gallery" onClick={() => setIsOpen(false)}><li className="menu-item">Gallery</li></Link> */}
            <Link href="/about" onClick={() => setIsOpen(false)}><li className="menu-item">About</li></Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}><li className="menu-item">Contact</li></Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}><li className="menu-item">Blog</li></Link>
            <Link href="/careers" onClick={() => setIsOpen(false)}><li className="menu-item">Careers</li></Link>
            <li className="menu-item hover:bg-regBlue relative cursor-pointer" onMouseEnter={() => setSubnav2IsOpen(true)} onMouseLeave={() => setSubnav2IsOpen(false)} onClick={() => setSubnav2IsOpen(!subnav2IsOpen)}>Resources<IoIosArrowDown className=" ms-1" />
                {subnav2IsOpen && (
                    <ul className="absolute bottom-0 left-0 translate-y-[100%] w-full md:w-[220px] flex flex-col bg-darkBlue text-[0.95rem] z-[6]">
                        <Link href="https://rcm-wizard.dacapomusic.ca/" onClick={() => setIsOpen(false)}><li className="submenu-item">RCM Wizard</li></Link>
                    </ul>
                )}
            </li>
            {/* <Link href="/shop" onClick={() => setIsOpen(false)}><li className="menu-item">Shop</li></Link> */}
                {/*reactivate the cart below to see current cart item count  */}
            {/* <Link href="/cart"><button className={`z-20 cart absolute right-0 bg-green-500 text-white h-10 px-4 flex items-center`}><GiShoppingCart className="me-1" />Cart ({cartItemsTotal})</button></Link> */}
        </ul>
    </nav>  

    // <nav className="navigation w-full bg-regBlue">
    //     <p>blksjdf</p>
    // </nav>
    )
}

export default Navigation
"use client"

import { Fragment, useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { IoIosArrowDown } from "react-icons/io"
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";


export const Navigation = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [subnavIsOpen, setSubnavIsOpen] = useState(false)

    // <div className={`md:flex ${isOpen ? "block" : "hidden"}`}>


return (
    <nav className="navigation w-full bg-regBlue">
        <div className="h-10 flex justify-start bg-darkBlue md:hidden">
            {isOpen ? <RxCross1 size="1.8em" className="cursor-pointer h-10 text-gray-50 mx-3" onClick={() => setIsOpen(false)} /> : <RxHamburgerMenu size="2em" className="cursor-pointer h-10 text-gray-50 mx-3" onClick={() => setIsOpen(true)} />}
        </div>
        <AnimatePresence>
            <motion.ul
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            exit={{ opacity: 0 }}
            className={`${isOpen ? "block absolute bg-regBlue w-full" : "hidden"} md:static md:flex md:justify-center text-gray-50 z-[5]`}>
            <Link href="/" onClick={() => setIsOpen(false)}><li className="menu-item">Home</li></Link>
            <li className="menu-item hover:bg-regBlue relative cursor-pointer" onMouseEnter={() => setSubnavIsOpen(true)} onMouseLeave={() => setSubnavIsOpen(false)} onClick={() => setSubnavIsOpen(!subnavIsOpen)}>Lessons<IoIosArrowDown className=" ms-1" />
                {subnavIsOpen && (
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
        {/* <Link href="/cart"><button className={`z-20 cart absolute right-0 bg-green-500 text-white h-10 px-4 flex items-center`}><GiShoppingCart className="me-1" />Cart ({cartItemsTotal})</button></Link> */}
            </motion.ul>
        </AnimatePresence>
    </nav>  

    // <nav className="navigation w-full bg-regBlue">
    //     <p>blksjdf</p>
    // </nav>
    )
}

export default Navigation
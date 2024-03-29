"use client"

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { IoIosArrowDown } from "react-icons/io"
import Link from "next/link";


export const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [subnav1IsOpen, setSubnav1IsOpen] = useState(false)
    const [subnav2IsOpen, setSubnav2IsOpen] = useState(false)


return (
    <nav className="navigation w-full bg-regBlue">
        <div className="h-11 flex justify-start items-center bg-regBlue md:hidden">
            {isOpen ? <RxCross1 size="1.8em" className="cursor-pointer h-full text-gray-50 mx-3" onClick={() => setIsOpen(false)} /> : <RxHamburgerMenu size="2em" className="cursor-pointer text-gray-50 mx-3" onClick={() => setIsOpen(true)} />}
        </div>
        <ul
        className={`${isOpen ? "block absolute bg-regBlue w-full" : "hidden"} md:static md:flex md:flex-wrap md:justify-center text-gray-50 z-20 text-[0.95rem]`}>
            <Link href="/" onClick={() => setIsOpen(false)}><li className="menu-item border-t-2 border-b-2 border-gray-200 md:border-none">Home</li></Link>
            <li className="dropdown-menu-item relative cursor-pointer border-b-2 border-gray-200 md:border-none" onMouseEnter={() => setSubnav1IsOpen(true)} onMouseLeave={() => setSubnav1IsOpen(false)} onClick={() => setSubnav1IsOpen(!subnav1IsOpen)}>Lessons<IoIosArrowDown className="ms-1" />
                {subnav1IsOpen && (
                    <ul className="absolute bottom-0 left-0 translate-y-[100%] w-full md:w-[220px] flex flex-col bg-regBlue text-[0.95rem] z-20">
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
            <Link href="/rates" className="hover:bg-purple-500" onClick={() => setIsOpen(false)}><li className="menu-item border-b-2 border-gray-200 md:border-none">Rates</li></Link>
            <Link href="/teachers" onClick={() => setIsOpen(false)}><li className="menu-item border-b-2 border-gray-200 md:border-none">Teachers</li></Link>
            <Link href="/reviews" onClick={() => setIsOpen(false)}><li className="menu-item border-b-2 border-gray-200 md:border-none">Reviews</li></Link>
            {/* <Link href="/gallery" onClick={() => setIsOpen(false)}><li className="menu-item">Gallery</li></Link> */}
            <Link href="/about" onClick={() => setIsOpen(false)}><li className="menu-item border-b-2 border-gray-200 md:border-none">About</li></Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}><li className="menu-item border-b-2 border-gray-200 md:border-none">Contact</li></Link>
            {/* <Link href="/blog" onClick={() => setIsOpen(false)}><li className="menu-item border-b-2 border-gray-200 md:border-none">Blog</li></Link> */}
            <Link href="/careers" onClick={() => setIsOpen(false)}><li className="menu-item border-b-2 border-gray-200 md:border-none">Careers</li></Link>
            <li className="dropdown-menu-item relative cursor-pointer border-b-2 border-gray-200 md:border-none" onMouseEnter={() => setSubnav2IsOpen(true)} onMouseLeave={() => setSubnav2IsOpen(false)} onClick={() => setSubnav2IsOpen(!subnav2IsOpen)}>Tools<IoIosArrowDown className=" ms-1" />
                {subnav2IsOpen && (
                    <ul className="absolute bottom-0 left-0 translate-y-[100%] w-full md:w-[220px] flex flex-col bg-regBlue text-[0.95rem] z-[6]">
                        <Link href="/tools/rcm-wizard" onClick={() => setIsOpen(false)}><li className="submenu-item">RCM Wizard</li></Link>
                    </ul>
                )}
            </li>
            <Link href="/shop" onClick={() => setIsOpen(false)}><li className={`menu-item `}>Shop</li></Link>
        </ul>
    </nav>  

    // <nav className="navigation w-full bg-regBlue">
    //     <p>blksjdf</p>
    // </nav>
    )
}

export default Navigation
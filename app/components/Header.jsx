"use client"

import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react";
import Slider from "./Slider";
import { IoMdArrowDropdown } from "react-icons/io"
import { MMSLoginButton } from "./MMSLoginButton";

const Header = () => {

    const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false)
    const [lessonsDropdownIsOpen, setLessonsDropdownIsOpen] = useState(false)

    const handleDropdownMenu = () => {
        setDropdownMenuIsOpen((prev) => !prev)
    }



    return (
        <header className="flex flex-col mb-28">
            
            {/* LOGO & CONTACT HEADER */}
            <div className="header-top px-5 py-8 md:py-4 bg-gradient-to-r from-regRed via-regRed to-darkRed text-gray-100 flex flex-col md:flex-row justify-between items-center">

                <Link href="/"><img src="/dcam_logo_white.png" style={{maxWidth: "180px", height: "auto"}} alt="Da Capo Academy of Music logo" /></Link>

                <div className="hidden md:block">
                    <MMSLoginButton  />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="flex justify-center md:hidden my-8 lg:my-0 lg:me-10 lg:block">
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
                    <div className="flex flex-col items-center md:items-start">
                        <a href = "mailto: info@dacapomusic.ca" className="flex items-center pb-8 md:pb-2 hover:text-lightRed text-[1.1rem] md:text-[0.95rem]"><HiOutlineMail className="me-1" />info@dacapomusic.ca</a>
                        <a href="tel:+4162379595"className="flex items-center hover:text-lightRed text-[1.1rem] md:text-[0.95rem]"><BsTelephone className={"me-1"}/>(416) 237-9595</a>
                    </div>
                </div>
            </div>

            {/* NAVIGATION */}
            <nav className="bg-regBlue h-10 text-gray-100 relative">
                <div className="pe-3 h-full flex items-center justify-end md:hidden"><RxHamburgerMenu size="2em" className="cursor-pointer" style={{rotate: dropdownMenuIsOpen && "90deg"}} onClick={handleDropdownMenu} /></div>

                <ul className={`absolute ${dropdownMenuIsOpen ? 'block' : 'hidden'} w-full top-10 py-8 leading-10 text-center bg-regBlue opacity-90 md:bg-inherit md:py-0 md:top-0 md:flex md:justify-center lg:px-20 xl:px-40 z-20 md:z-10`}>
                    <li>
                        <Link href="/" className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href="" className="flex items-center justify-center px-4 hover:bg-darkBlue" onClick={() => setLessonsDropdownIsOpen((prev) => !prev)} onMouseEnter={() => setLessonsDropdownIsOpen(true)} onMouseLeave={() => setLessonsDropdownIsOpen(false)}>Lessons&nbsp;<IoMdArrowDropdown size="1.2rem" /></Link>
                        {lessonsDropdownIsOpen && (
                            <ul className="bg-gray-800 opacity-100 md:w-52 relative sm:absolute cursor-pointer flex flex-col" onClick={() => setLessonsDropdownIsOpen(true)} onMouseEnter={() => setLessonsDropdownIsOpen(true)} onMouseLeave={() => setLessonsDropdownIsOpen(false)}>
                                <li className="md:flex md:ps-4 hover:bg-darkBlue">
                                    <Link href="/piano-lessons-etobicoke">Piano Lessons</Link>
                                </li>
                                <li className="md:flex md:ps-4 hover:bg-darkBlue">
                                    <Link href="/guitar-lessons-etobicoke">Guitar Lessons</Link>
                                </li>
                                <li className="md:flex md:ps-4 hover:bg-darkBlue">
                                    <Link href="/drum-lessons-etobicoke">Drum Lessons</Link>
                                </li>
                                <li className="md:flex md:ps-4 hover:bg-darkBlue">
                                    <Link href="/voice-lessons-etobicoke">Voice Lessons</Link>
                                </li>
                                <li className="md:flex md:ps-4 hover:bg-darkBlue">
                                    <Link href="/music-theory-lessons-etobicoke">Music Theory Lessons</Link>
                                </li>
                                <li className="md:flex md:ps-4 hover:bg-darkBlue">
                                    <Link href="/toddler-music-classes-etobicoke">Toddler Music Classes</Link>
                                </li>
                                <li className="md:flex md:ps-4 hover:bg-darkBlue">
                                    <Link href="/intro-to-music-program">Intro to Music Program</Link>
                                </li>

                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/rates"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Rates</Link>
                    </li>
                    <li>
                        <Link href="/teachers"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Teachers</Link>
                    </li>
                    <li>
                        <Link href="/reviews"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Reviews</Link>
                    </li>
                    <li>
                        <Link href="/gallery"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Gallery</Link>
                    </li>
                    <li>
                        <Link href="/about"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link href="/contact"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link href="/blog"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Blog</Link>
                    </li>
                    <li>
                        <Link href="/shop"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownMenuIsOpen(false)}>Shop</Link>
                    </li>
                </ul>
            </nav>
            {/* SLIDER */}
            <Slider />
        </header> 

     );
}




 
export default Header;
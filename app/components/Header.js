"use client"

import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react";
import Slider from "./Slider";
import { IoMdArrowDropdown } from "react-icons/io"
// import { BgVideo } from "./BgVideo";

const Header = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
    const [lessonsDropdownIsOpen, setLessonsDropdownIsOpen] = useState(false)

    const handleDropdown = (e) => {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    const handleLessonsDropdown = (e) => {
        setLessonsDropdownIsOpen(true)
    }




    return (
        <header className="flex flex-col mb-24">
            
            <div className="header-top px-5 py-10 md:py-5 bg-gradient-to-r from-lightBlue via-darkBlue to-darkBlue text-gray-100 flex flex-col md:flex-row justify-between items-center">
                <div className="flex">
                    <Link href="/"><img src="/dcam_logo_white.png" style={{maxWidth: "220px", height: "auto"}} alt="Da Capo Academy of Music logo" /></Link>
                </div>
                <div className="md:flex">
                    <div className="flex justify-center items-center py-10 md:py-0 md:me-14">
                        <Link 
                            href="https://www.facebook.com/dacapomusic.ca/" target="_blank" 
                            className="hover:text-lightRed me-5">
                            <FaFacebookSquare size="2em"/> 
                        </Link>
                        <Link 
                            href="https://www.instagram.com/dacapomusic.ca/" target="_blank" 
                            className="hover:text-lightRed me-5">
                            <FaInstagramSquare size="2em" />
                        </Link>
                        <Link 
                            href="https://www.youtube.com/watch?v=gSPAOkyO4AA&feature=youtu.be" target="_blank" className="hover:text-lightRed">
                            <FaYoutubeSquare size="2em" />
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start">
                        <Link href = "mailto: info@dacapomusic.ca" className="flex items-center pb-8 md:pb-2 hover:text-lightRed"><HiOutlineMail className="me-1" />info@dacapomusic.ca</Link>
                        <Link href="tel:+4162379595"className="flex items-center hover:text-lightRed"><BsTelephone className={"me-1"}/>(416) 237-9595</Link>
                    </div>
                </div>
            </div>

            {/* NAVIGATION */}
            <nav className="bg-regBlue h-10 text-gray-100 relative">
                <div className="pe-3 h-full flex items-center justify-end md:hidden"><RxHamburgerMenu size="2em" className="cursor-pointer" style={{rotate: dropdownIsOpen && "90deg"}} onClick={(e) => handleDropdown(e)} /></div>

                <ul className={`absolute ${dropdownIsOpen ? 'block' : 'hidden'} w-full top-10 py-8 leading-10 text-center bg-regBlue opacity-90 md:bg-inherit md:py-0 md:top-0 md:flex md:justify-center lg:px-20 xl:px-40 z-10`}>
                    <li>
                        <Link href="/" className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link href="/lessons" className="flex items-center px-4 hover:bg-darkBlue cursor-pointer" onMouseEnter={() => setLessonsDropdownIsOpen(true)} onMouseLeave={() => setLessonsDropdownIsOpen(false)}>Lessons&nbsp;<IoMdArrowDropdown size="1.2rem" /></Link>
                        {lessonsDropdownIsOpen && (
                            <ul className="bg-regBlue w-52 absolute cursor-pointer" onMouseEnter={() => setLessonsDropdownIsOpen(true)} onMouseLeave={() => setLessonsDropdownIsOpen(false)}>
                                <li className="flex ps-4 hover:bg-darkBlue">
                                    <Link href="/piano-lessons-etobicoke">Piano Lessons</Link>
                                </li>
                                <li className="flex ps-4 hover:bg-darkBlue">
                                    <Link href="/guitar-lessons-etobicoke">Guitar Lessons</Link>
                                </li>
                                <li className="flex ps-4 hover:bg-darkBlue">
                                    <Link href="/drum-lessons-etobicoke">Drum Lessons</Link>
                                </li>
                                <li className="flex ps-4 hover:bg-darkBlue">
                                    <Link href="/voice-lessons-etobicoke">Voice Lessons</Link>
                                </li>
                                <li className="flex ps-4 hover:bg-darkBlue">
                                    <Link href="/music-theory-lessons-etobicoke">Music Theory Lessons</Link>
                                </li>
                                <li className="flex ps-4 hover:bg-darkBlue">
                                    <Link href="/toddler-music-classes-etobicoke">Toddler Classes</Link>
                                </li>
                                <li className="flex ps-4 hover:bg-darkBlue">
                                    <Link href="/intro-to-music-program">Intro to Music</Link>
                                </li>

                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/rates"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>Rates</Link>
                    </li>
                    <li>
                        <Link href="/teachers"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>Teachers</Link>
                    </li>
                    <li>
                        <Link href="/reviews"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>Reviews</Link>
                    </li>
                    <li>
                        <Link href="/gallery"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>Gallery</Link>
                    </li>
                    <li>
                        <Link href="/about"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link href="/contact"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>Contact</Link>
                    </li>
                    <li>
                        <Link href="/blog"className="block px-4 hover:bg-darkBlue cursor-pointer" onClick={() => setDropdownIsOpen(false)}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <Slider />
        </header> 

     );

    //  {lessonsDropdownIsOpen && (
    //     <p>This is a test</p>
    // )}
}




 
export default Header;
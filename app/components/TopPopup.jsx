"use client"

import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"



export const TopPopup = () => {

    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 1000)
    }, [])
    

    return (
        <AnimatePresence>
            { isOpen && (
                    <motion.div className="h-[115px] w-full bg-[url('/popup-banners/christmas-banner.jpg')] fixed top-0 rounded-b-2xl"
                    initial={{ y: -200, opacity: 0.5 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0.5 }}
                    transition={{ duration: 0.5 }}        
                    >
                        <div className="text-[3.5rem] absolute top-1 right-2 text-white cursor-pointer"><IoMdClose onClick={() => setIsOpen(false)} /></div>
                        <div className="popup h-full flex flex-col justify-center items-center text-white">
                            <p>Happy New Year to Everyone!</p>
                            <p>Classes resume on Tuesday, January 2nd, 2024!</p>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
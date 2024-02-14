"use client"

import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { MMSLoginButton } from "./MMSLoginButton";
import { GiShoppingCart } from "react-icons/gi";
import { useShopContext } from "../hooks/useShopContext";




export const TopHeader = () => {

    const {cartItemsTotal} = useShopContext()


    return (
            <div className="header-top relative px-5 py-6 md:py-4 bg-[url('/top-header-bg-instruments.png')] bg-cover text-gray-100 flex flex-col md:flex-row justify-between md:items-center">

                <div className="flex justify-between items-center md:w-[70%] md:justify-between lg:w-[60%]">
                    <Link href="/"><img src="/dcam_logo_white.png" className="md:pb-0" style={{maxWidth: "180px", height: "auto"}} alt="Da Capo Academy of Music logo" /></Link>

                    <div className="hidden sm:block">
                        <MMSLoginButton  />
                    </div>

                    <Link href="/cart"><button className="cart-button"><GiShoppingCart className="me-1" />Cart ({cartItemsTotal})</button></Link>
                </div>

                <div className="border-b-2 border-white border-opacity-50 my-6"></div>

                <div className="flex flex-col sm:flex-row sm:justify-evenly md:flex-col items-center xl:flex-row md:items-start">
                    <a href = "mailto: info@dacapomusic.ca" className="flex items-center mb-5 sm:mb-0 md:pe-0 md:pb-2 xl:pb-0 xl:pe-6 hover:text-regRed text-[1.1rem] md:text-[1rem]"><HiOutlineMail className="me-1" />info@dacapomusic.ca</a>
                    <a href="tel:+14162379595" className="flex items-center hover:text-regRed text-[1.1rem] md:text-[1rem]"><BsTelephone className={"me-1"}/>(416) 237-9595</a>
                </div>
            </div>
    )
}
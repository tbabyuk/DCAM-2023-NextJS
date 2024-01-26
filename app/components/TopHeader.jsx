"use client"

import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { MMSLoginButton } from "./MMSLoginButton";
import { TrialButton } from "./TrialButton";
import { RegisterButton } from "./RegisterButton";
import { GiShoppingCart } from "react-icons/gi";
import { useShopContext } from "../hooks/useShopContext";




export const TopHeader = () => {

    const {cartItemsTotal} = useShopContext()


    return (
            <div className="header-top relative px-5 py-8 md:py-4 bg-darkBlue bg-cover text-gray-100 flex flex-col md:flex-row justify-between items-center">
                <Link href="/"><img src="/dcam_logo_white.png" className="pb-8 md:pb-0" style={{maxWidth: "180px", height: "auto"}} alt="Da Capo Academy of Music logo" /></Link>

                <div className="hidden md:block">
                    <MMSLoginButton  />
                </div>

                <Link href="/cart"><button className="cart-button"><GiShoppingCart className="me-1" />Cart ({cartItemsTotal})</button></Link>

                <div className="flex flex-col sm:flex-row md:flex-col xl:flex-row md:items-start">
                    <a href = "mailto: info@dacapomusic.ca" className="flex items-center mb-5 sm:mb-0 md:pe-0 md:pb-2 xl:pb-0 xl:pe-6 hover:text-regRed text-[1.1rem] md:text-[1rem]"><HiOutlineMail className="me-1" />info@dacapomusic.ca</a>
                    <a href="tel:+4162379595" className="flex items-center ps-8 md:ps-0 hover:text-regRed text-[1.1rem] md:text-[1rem]"><BsTelephone className={"me-1"}/>(416) 237-9595</a>
                </div>
            </div>
    )
}
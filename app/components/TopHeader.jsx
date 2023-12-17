import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi"
import { MMSLoginButton } from "./MMSLoginButton";
import { TrialButton } from "./TrialButton";



export const TopHeader = () => {

    return (
            <div className="header-top px-5 py-8 md:py-4 bg-[url('/bg_top_header.jpg')] bg-cover text-gray-100 flex flex-col md:flex-row justify-between items-center">

            <Link href="/"><img src="/dcam_logo_white.png" className="pb-8 md:pb-0" style={{maxWidth: "180px", height: "auto"}} alt="Da Capo Academy of Music logo" /></Link>

            <div className="hidden md:block">
                <MMSLoginButton  />
            </div>

            <div className="pb-8 md:pb-0">
                <TrialButton />
            </div>
            <div className="flex md:flex-col xl:flex-row md:items-start">
                <a href = "mailto: info@dacapomusic.ca" className="flex items-center pe-8 md:pe-0 md:pb-3 xl:pb-0 xl:pe-6 hover:text-lightRed text-[1.1rem] md:text-[0.95rem]"><HiOutlineMail className="me-1" />EMAIL US</a>
                <a href="tel:+4162379595"className="flex items-center ps-8 md:ps-0 hover:text-lightRed text-[1.1rem] md:text-[0.95rem]"><BsTelephone className={"me-1"}/>CALL US</a>
            </div>
        </div>
    )
}
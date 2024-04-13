"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export const Breadcrumbs = () => {

  const path = usePathname()

  const crumbs = path.split("/").filter(Boolean)

  console.log("logging crumb:", crumbs)

  return (
    <div className="px-5 lg:px-36 xl:px-52 py-2 bg-gray-200 border-b-2 border-gray-300">
        <p className="flex">Navigate Shop:&nbsp;&nbsp;&nbsp;&nbsp; 
        {crumbs.map((crumb, index) => (
          <span key={index}>
            <Link href={"/" + crumbs.slice(0, index + 1).join("/")} className="hover:text-dcam-orange-950">{crumb}</Link>
            &nbsp;{index !== crumbs.length - 1 && " |"}&nbsp;&nbsp;
          </span>
        ))}
        </p>
    </div>
  )
}
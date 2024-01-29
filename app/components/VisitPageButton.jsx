import Link from "next/link"


export const VisitPageButton = ({text, link}) => {
  return (
    <Link href={link}>
        <button className="visit-page-button block mx-auto">{text}</button>
    </Link>
  )
}
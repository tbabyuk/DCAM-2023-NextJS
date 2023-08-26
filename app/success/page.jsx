"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const SuccessPage = () => {

  const message = useRef()


  useEffect(() => {
    message.current.scrollIntoView({
      behavior: "smooth"
    })
    // const answer = message.current.offsetTop;
    // scrollTo({
    //   top: answer
    // })
  }, [])

  return (
    <div className="text-center text-green-600 px-5" ref={message}>
        <p>Your form was successfully submitted - thank you!</p>
        <p>Please expect to hear back from us within 1-2 business days!</p>
        <br />
        <p className="text-gray-600">Return to <Link href="/"><span className="font-semibold dcam-link">Home Page</span></Link></p>
    </div>
  )
}

export default SuccessPage

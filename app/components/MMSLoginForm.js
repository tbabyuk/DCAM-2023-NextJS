"use client"


import { useEffect, useRef } from "react"

export const MMSStudentLoginForm = () => {

  const formRef = useRef()

  useEffect(() => {
    const script = document.createElement("script")
    script.src = 'https://app.mymusicstaff.com/Widget/v2/Login.ashx'
    script.async = 'true'

    formRef.current.appendChild(script)

    return () => {
      if (formRef.current && formRef.current.contains(script)) {
        formRef.current.removeChild(script);   
        } 
      };
  }, [])

    return <div ref={formRef}></div>

}


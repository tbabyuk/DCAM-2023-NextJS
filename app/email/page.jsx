"use client"

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {


  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    message: ""
  })
//   const [email, setEmail] = useState("")
//   const [subject, setSubject] = useState("")
//   const [message, setMessage] = useState("")

  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("/api/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailData)
    })

            if(response.ok) {
            const responseData = await response.json()
            console.log(responseData)
        } else {
            console.error("error sending email", response.statusText)
        }

    // try {
    //     const response = await fetch('/api/email', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(emailData)
    //     });

    //     if(response.ok) {
    //         const responseData = await response.json()
    //         console.log(responseData)
    //     } else {
    //         console.error("error sending email", response.statusText)
    //     }
    //   } catch (error) {
    //     console.error('Error sending email:', error);
    //   }
  }


  return (
    <main className="h-[100vh] bg-blue-900 pt-20">
        <form className="bg-gray-300 w-fit mx-auto flex flex-col p-10" onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center mb-6">Email Form</h2>
          <label>
            <span className="block">To (email):</span>
            <input className="w-full" type="email" required value={emailData.to} onChange={e => setEmailData(prev => ({...prev, to: e.target.value}))} />
          </label>
          <label>
            <span className="block">Subject:</span>
            <input className="w-full" type="text" required value={emailData.subject} onChange={e => setEmailData(prev => ({...prev, subject: e.target.value}))} />
          </label>
          <label>
            <span className="block">Your message:</span>
            <textarea name="" id="" cols="30" rows="5" required value={emailData.message} onChange={e => setEmailData(prev => ({...prev, message: e.target.value}))}></textarea>
          </label>
          <button className="bg-green-400 mt-6 py-3">Send Message</button>
        </form>
    </main>
  )
}

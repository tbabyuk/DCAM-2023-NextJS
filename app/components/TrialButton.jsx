"use client"

import { useState, useRef } from "react";
import { IoMusicalNotes } from "react-icons/io5";



export const TrialButton = () => {

const studentNameRef = useRef()
const parentNameRef = useRef()
const instrumentRef = useRef()
const phoneRef = useRef()
const emailRef = useRef()
const sourceRef = useRef()

const [modalIsOpen, setModalIsOpen] = useState(false)
const [submitting, setSubmitting] = useState(false)
const [showSuccessResponse, setShowSuccessResponse] = useState(false)
const [showErrorResponse, setShowErrorResponse] = useState(false)

    const handleCloseModal = (e) => {
        if(e.target.classList.contains("backdrop") || (e.target.classList.contains("exit"))) {
            setModalIsOpen(false)
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        setSubmitting(true)
        const response = await fetch("/api/trial", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student: studentNameRef.current.value.trim(),
                parent: parentNameRef.current.value.trim(),
                instrument: instrumentRef.current.value,
                phone: phoneRef.current.value.trim(),
                email: emailRef.current.value.trim(),
                source: sourceRef.current.value
            })
        })


        if(response.status === 200) {
            console.log("status is:", response.status)
            const responseData = await response.json()
            console.log("responseData from ok:", responseData.message)
            setSubmitting(false)
            setShowSuccessResponse(true)
        } else {
            console.log("status is:", response.status)
            const responseData = await response.json()
            console.log("responseData from error:", responseData.error)
            setSubmitting(false)
            setShowErrorResponse(true)
        }
    }


return ( 
    <>
        <button className="trial-button-hero" onClick={() => setModalIsOpen(true)}><IoMusicalNotes className="me-1" />Book a Free Trial</button>

        {modalIsOpen && (
            <div className="backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center z-40" onClick={(e) => handleCloseModal(e)}>
            <span className="exit absolute top-0 right-6 md:right-10 text-white text-7xl cursor-pointer">&times;</span>
                <div className="modal flex w-[85%] max-w-[380px] min-h-[300px] px-5 sm:px-10 py-7 mt-7 md:mt-2 bg-gray-100 text-black rounded">
                    {!showSuccessResponse && !showErrorResponse && (
                            <form className="flex flex-col w-full mx-auto" onSubmit={handleSubmit}>
                            <h2 className="text-center font-bold text-xl text-regGreen">FREE TRIAL LESSON</h2>
                            <p className="text-xs text-center mb-6">Get started with your free trial lesson today!</p>
                            <label className="mb-4">
                                <span className="block text-sm">Student Name:</span>
                                <input 
                                    type="text" 
                                    className="w-full h-8 border-2 border-gray-300 ps-2 text-sm" 
                                    ref={studentNameRef}
                                    autoFocus
                                    required
                                />
                            </label>
                            <label className="mb-4">
                                <span className="block text-sm">Parent/Guardian Name:</span>
                                <input 
                                    type="text" 
                                    className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                                    ref={parentNameRef}
                                    required
                                />
                            </label>
                            <label className="mb-4">
                                <span className="block text-sm">Desired Instrument:</span>
                                <select className="w-full h-8 border-2 border-gray-300 text-sm" ref={instrumentRef} defaultValue="choose instrument" required>
                                    <option value="choose instrument" disabled>choose instrument</option>
                                    <option value="piano">piano</option>
                                    <option value="guitar">guitar</option>
                                    <option value="bass guitar">bass guitar</option>
                                    <option value="ukulele">ukulele</option>
                                    <option value="drums">drums</option>
                                    <option value="voice">voice</option>
                                    <option value="theory">music theory</option>
                                    <option value="theory">music for toddlers</option>
                                    {/* <option value="theory">intro to music</option> */}
                                </select>
                            </label>
                            <label className="mb-4">
                                <span className="block text-sm">Phone:</span>
                                <input 
                                    type="tel"
                                    className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                                    ref={phoneRef}
                                    required
                                />
                            </label>
                            <label className="mb-4">
                                <span className="block text-sm">Email:</span>
                                <input 
                                    type="email"
                                    className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                                    ref={emailRef}
                                    required
                                />
                            </label>
                            <label className="mb-4">
                                <span className="block text-sm">How did you hear about us?</span>
                                <select className="w-full h-8 border-2 border-gray-300 text-sm" ref={sourceRef} defaultValue="choose option" required>
                                    <option value="choose option" disabled>choose option</option>
                                    <option value="google">google search</option>
                                    <option value="humbertown">humbertown sign</option>
                                    <option value="humbertown">friend/relative</option>
                                    <option value="social">social media (FB/IG)</option>
                                    <option value="flyer">print flyer</option>
                                    <option value="blog">blog article</option>
                                    <option value="other">other</option>
                                </select>
                            </label>
                            <button className="dcam-button w-full mt-3 h-10" disabled={submitting}>{submitting ? "Submitting...Please wait..." : "Submit"}</button>
                        </form>
                    )}
                    
                    {showSuccessResponse && (
                        <div className="h-full text-green-600 px-5 self-center flex flex-col text-center">           
                             <p className="mb-6">Your form was successfully submitted - thank you!</p>
                             <p className="mb-6">Please expect to hear back from us within 1-2 business days!</p><br />
                             <button className="dcam-button" onClick={() => setModalIsOpen(false)}>Close Modal</button>
                        </div>
                    )}

                    {showErrorResponse && (
                        <div className="h-full text-red-600 px-5 self-center flex flex-col text-center">           
                             <p className="mb-6">Sorry, there was a problem submitting your form. Please refresh and try again or send us a direct email at <span className="font-bold">info@dacapomusic.ca</span></p>
                             <button className="dcam-button" onClick={() => setModalIsOpen(false)}>Close Modal</button>
                        </div>
                    )}
                </div>
            </div>
            )
        }
    </>
);


}
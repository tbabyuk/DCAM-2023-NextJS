"use client"

import { useState, useEffect, useRef } from "react";

export const TrialButton = () => {

const studentNameRef = useRef()
const parentNameRef = useRef()
const instrumentRef = useRef()
const phoneRef = useRef()
const emailRef = useRef()
const sourceRef = useRef()

const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleCloseModal = (e) => {
        if(e.target.classList.contains("backdrop") || (e.target.classList.contains("exit"))) {
            setModalIsOpen(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(studentNameRef.current.value, parentNameRef.current.value, instrumentRef.current.value, phoneRef.current.value, emailRef.current.value, sourceRef.current.value)
    }


return ( 
    <>
        <button className="dcam-button text-lg" onClick={() => setModalIsOpen(true)}>Free Trial Lesson</button>

        {modalIsOpen && (
            <div className="backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center" onClick={(e) => handleCloseModal(e)}>
            <span className="exit absolute top-0 right-8 md:right-10 text-white text-7xl cursor-pointer">&times;</span>
                <div className="modal w-[85%] sm:w-[380px] px-5 sm:px-10 py-7 mt-8 bg-gray-100 text-black rounded">
                    <form className="flex flex-col" onSubmit={handleSubmit}>
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
                            <select className="w-full h-8 border-2 border-gray-300 text-sm" ref={instrumentRef} required>
                                <option value="" disabled selected>choose instrument</option>
                                <option value="piano">piano</option>
                                <option value="guitar">guitar</option>
                                <option value="ukulele">ukulele</option>
                                <option value="drums">drums</option>
                                <option value="voice">voice</option>
                                <option value="theory">music theory</option>
                                <option value="theory">music for toddlers</option>
                                <option value="theory">intro to music</option>
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
                            <select className="w-full h-8 border-2 border-gray-300 text-sm" ref={sourceRef} required>
                                <option value="" disabled selected>choose option</option>
                                <option value="google">google search</option>
                                <option value="humbertown">humbertown sign</option>
                                <option value="humbertown">friend/relative</option>
                                <option value="social">social media (FB/IG)</option>
                                <option value="flyer">print flyer</option>
                                <option value="blog">blog article</option>
                                <option value="other">other</option>
                            </select>
                        </label>
                        <button className="dcam-button w-full mt-3 h-10">Submit</button>
                    </form>
                </div>
            </div>
            )
        }
    </>
);


}
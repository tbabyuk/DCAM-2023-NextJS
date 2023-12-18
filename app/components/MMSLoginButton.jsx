"use client"

import { useState } from "react";
import {MMSStudentLoginForm} from "./MMSLoginForm";



export const MMSLoginButton = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleCloseModal = (e) => {
        if(e.target.classList.contains("backdrop") || (e.target.classList.contains("exit"))) {
            setModalIsOpen(false)
        }
    }

  return (
    <>
        <button className="mms-button" onClick={() => setModalIsOpen(true)}><img src="/mms_logo.png" className="w-6 me-1" />Student Portal</button>

        {modalIsOpen && (
                <div className="backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center z-30" onClick={(e) => handleCloseModal(e)}>
                <span className="exit absolute top-0 right-5 sm:right-10 text-white text-7xl cursor-pointer">&times;</span>
                    <div className="modal w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 px-5 sm:px-10 py-7 mt-6 sm:mt-12 bg-gray-100 text-black">
                        <MMSStudentLoginForm />
                    </div>
                </div>
            )
        }
    </>
  )
}







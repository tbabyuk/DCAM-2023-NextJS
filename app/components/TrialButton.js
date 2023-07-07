"use client"


import { useState } from "react";
import styles from "./TrialButton.module.css"


export const TrialButton = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleTrial = () => {
        console.log("you want a trial lesson?")
    }

    const handleCloseModal = (e) => {
        console.log(e.target.classList)
        if(!e.target.classList.contains("modal")) {
            setModalIsOpen(false)
        }
    }


    return ( 
        <>
            <button className="bg-regGreen py-3 px-6 rounded text-gray-100 text-lg" onClick={() => setModalIsOpen(true)}>Free Trial Lesson</button>


            {modalIsOpen && (
                <div className="backdrop fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex justify-center items-center" onClick={(e) => handleCloseModal(e)}>
                    <span className="absolute top-0 right-10 text-white text-7xl cursor-pointer">&times;</span>
                    <div className="modal w-2/5 h-3/5 bg-white text-black">Modal</div>
                </div>
            )
            }
        </>
     );


}
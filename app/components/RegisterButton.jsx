

"use client"

import { useState, useRef } from "react";
import { FaFileSignature } from "react-icons/fa";




export const RegisterButton = () => {



return ( 
    <>
        <button className="register-button" onClick={() => setModalIsOpen(true)}><FaFileSignature className="me-1" />Register Today</button>
    </>
    );

}
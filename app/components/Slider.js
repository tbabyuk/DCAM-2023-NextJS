"use client"

import styles from "./Slider.module.css"
import { useState, useEffect } from "react"
import { TrialButton } from "./TrialButton"


const Slider = () => {

  const [sliderIndex, setSliderIndex] = useState(0)
//   const [currentImage, setCurrentImage] = useState(sliderArray[0])  

  const sliderArray = ["/sliders/slide1.jpg", "/sliders/slide2.jpg", "/sliders/slide3.jpg"]


  useEffect(() => {

    const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex + 1) % sliderArray.length);    
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="h-72 relative">
        <div className="absolute top-0 right-0 text-gray-100 h-full w-full md:w-6/12 px-5 flex flex-col justify-evenly items-center" style={{backgroundImage: "linear-gradient(to right, rgba(16, 55, 86, 0), rgba(16, 55, 86, 1)" }}>
          <h1 className="text-5xl xl:text-6xl text-center">Music Lessons in Etobicoke</h1>
          <h3 className="text-lg italic text-center">Discover the joy of music!</h3>
          <TrialButton />
        </div>
        <img src={`${sliderArray[sliderIndex]}`} className="h-full w-full object-cover" alt="slider image" />    
    </div>  
)
}

export default Slider
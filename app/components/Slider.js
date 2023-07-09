"use client"

import styles from "./Slider.module.css"


import { useState, useEffect } from "react"



const Slider = () => {

  const [sliderIndex, setSliderIndex] = useState(0)
//   const [currentImage, setCurrentImage] = useState(sliderArray[0])  

  const sliderArray = ["/sliders/slide1.jpg", "/sliders/slide2.jpg", "/sliders/slide3.jpg"]


  // useEffect(() => {

  //   const interval = setInterval(() => {
  //       setSliderIndex((prevIndex) => (prevIndex + 1) % sliderArray.length);    
  //   }, 3000)

  //   return () => clearInterval(interval)

  // }, [])

  return (
    <div className="h-72">
        <img src={`${sliderArray[sliderIndex]}`} className="h-full w-full object-cover" alt="slider image" />    
    </div>  
)
}

export default Slider
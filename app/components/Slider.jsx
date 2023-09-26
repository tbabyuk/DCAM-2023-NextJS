"use client"

import styles from "./Slider.module.css"
import { useState, useEffect } from "react"
import SliderOverlay from "./SliderOverlay"
import MMSStudentLoginForm from "./MMSLoginForm"


const Slider = () => {

  const sliderImagesArray = ["/sliders/slide-piano.jpg", "/sliders/slide-guitar.jpg", "/sliders/slide-voice.jpg", "/sliders/slide-drums.jpg"]


  const [sliderIndex, setSliderIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex === sliderImagesArray.length - 1 ? 0 : prevIndex + 1));    
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="h-80 relative">

        {/* <MMSStudentLoginForm /> */}

        <SliderOverlay />

        {sliderImagesArray.map((image, index) => (
          <img
            key={index} 
            src={image} 
            className={`${styles["slider-image"]} ${index === sliderIndex ? styles.active : ""} absolute h-full w-full object-cover`} 
            alt="slider image"
          />    
        ))}

    </div>  
)
}

export default Slider
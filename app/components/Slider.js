"use client"

import styles from "./Slider.module.css"
import { useState, useEffect } from "react"
import SliderOverlay from "./SliderOverlay"


const Slider = () => {

  const sliderImagesArray = ["/sliders/slide1.jpg", "/sliders/slide2.jpg", "/sliders/slide3.jpg"]


  const [sliderIndex, setSliderIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex === sliderImagesArray.length - 1 ? 0 : prevIndex + 1));    
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="h-80 relative">

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
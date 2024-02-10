"use client"

import styles from "./Slider.module.css"
import { useState, useEffect } from "react"
import { MainSliderOverlay } from "./MainSliderOverlay"
import { ShopSliderOverlay } from "./ShopSliderOverlay"


export const Slider = () => {

  const sliderImagesArray = ["/sliders/piano-1200.jpg", "/sliders/guitar-1200.jpg", "/sliders/voice-1200-2.jpg", "/sliders/drums-1200.jpg"]


  const [sliderIndex, setSliderIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex === sliderImagesArray.length - 1 ? 0 : prevIndex + 1));    
    }, 6000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className="h-[calc(100vh-260px)] md:h-[calc(100vh-124px)] max-h-[600px] relative">
        <ShopSliderOverlay />
        <MainSliderOverlay />

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
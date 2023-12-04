"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// components
import { InstrumentCard } from "./InstrumentCard";


const instrumentsList = [
    {
        name: "piano",
        imageSrc: "/images/instruments/piano.jpg",
        url: "/piano-lessons-etobicoke"
    },
    {
        name: "guitar",
        imageSrc: "/images/instruments/guitar.jpg",
        url: "/guitar-lessons-etobicoke"
    },
    {
        name: "drums",
        imageSrc: "/images/instruments/drums.jpg",
        url: "/drum-lessons-etobicoke"
    },
    {
        name: "voice",
        imageSrc: "/images/instruments/voice.jpg",
        url: "/voice-lessons-etobicoke"
    },
    {
        name: "music theory",
        imageSrc: "/images/instruments/theory.jpg",
        url: "/music-theory-lessons-etobicoke"
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, right: "80px", top: "45%", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, right: "80px", top: "45%", background: "gray"}}
        onClick={onClick}
      />
    );
  }


export const InstrumentsSlider = () => {


    var settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
              breakpoint: 1600,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      return (
          <Slider {...settings} className="px-20">
            {instrumentsList.map((instrument, index) => {
            return <InstrumentCard key={index} instrument={instrument.name} imageSrc={instrument.imageSrc} url={instrument.url} />
          })}          
          </Slider>
    );
}
  

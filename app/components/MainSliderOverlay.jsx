import Typewriter from "typewriter-effect"
import { RegisterButtonHero } from "./RegisterButtonHero"
import { TrialButtonHero } from "./TrialButtonHero"


export const MainSliderOverlay = () => {

  return (
        <div className="absolute top-0 right-0 py-6 text-[1.5rem] text-gray-100 h-full w-full md:w-8/12 lg:w-6/12 px-5 flex flex-col justify-evenly z-[2]" style={{backgroundImage: "linear-gradient(to right, rgba(16, 55, 86, 0), rgba(16, 55, 86, 0.8), rgba(16, 55, 86, 1)" }}>
            <div className="flex flex-col sm:flex-row px-8 gap-5 xl:px-20 mb-4">
              <TrialButtonHero />
              <RegisterButtonHero />
            </div>
            <h1 className="text-5xl xl:text-6xl text-center lg:px-22 xl:px-32">Discover the Joy of Music!</h1>
            <h2 className="text-xl hidden md:block py-4 roboto px-6 xl:mx-16 text-center leading-9">In-person (and online!) music lessons for children and adults in the Etobicoke neighbourhood of Humber Valley Village!</h2>
            <h2 className="text-2xl md:hidden py-4 roboto px-6 xl:mx-16 text-center">Music Lessons in Etobicoke!</h2>
            {/* <div className="text-center sm:hidden"> */}
            {/* <Typewriter 
              options={{
                strings: ["PIANO", "GUITAR", "BASS GUITAR", "VOICE", "DRUMS", "UKULELE", "MUSIC THEORY"],
                autoStart: true,
                loop: true,
              }}
            /> */}
            {/* </div> */}
        </div>  
    )
}

import { TrialButton } from "./TrialButton"
import Typewriter from "typewriter-effect"


const SliderOverlay = () => {

  return (

        <div className="absolute top-0 right-0 text-gray-100 h-full w-full md:w-6/12 px-5 flex flex-col justify-evenly items-center z-10" style={{backgroundImage: "linear-gradient(to right, rgba(16, 55, 86, 0), rgba(16, 55, 86, 0.8), rgba(16, 55, 86, 1)" }}>
            <h1 className="text-5xl xl:text-6xl text-center lg:px-32">Discover the joy of Music!</h1>
            <Typewriter 
                        options={{
                        strings: ["PIANO", "GUITAR", "VOICE", "DRUMS", "UKULELE", "MUSIC THEORY"],
                        autoStart: true,
                        loop: true,
                      }}
                      />
            <TrialButton />
        </div>  
    )
}

export default SliderOverlay
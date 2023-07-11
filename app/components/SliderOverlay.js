
import { TrialButton } from "./TrialButton"


const SliderOverlay = () => {

  return (

        <div className="absolute top-0 right-0 text-gray-100 h-full w-full md:w-6/12 px-5 flex flex-col justify-evenly items-center z-10" style={{backgroundImage: "linear-gradient(to right, rgba(16, 55, 86, 0), rgba(16, 55, 86, 1)" }}>
            <h1 className="text-5xl xl:text-6xl text-center">Music Lessons in Etobicoke</h1>
            <h3 className="text-lg italic text-center">Discover the joy of music!</h3>
            <TrialButton />
        </div>  
    )
}

export default SliderOverlay
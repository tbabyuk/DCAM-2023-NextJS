import Slider from "../components/Slider"



const HomeLayout = ({ children }) => {
    return (
        <>
            <Slider />
            {children}
        </>
    )
  }

export default HomeLayout
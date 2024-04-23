
import { FaFileSignature } from "react-icons/fa";
import Link from "next/link";



export const RegisterButtonHero = () => {

    return ( 
        <Link href="/register" className="w-full"><button className="hero-button"><FaFileSignature />&nbsp;Register for Lessons</button></Link>
        
    );

}

import { FaFileSignature } from "react-icons/fa";
import Link from "next/link";



export const RegisterButtonHero = () => {

    return ( 
        <Link href="/register"><button className="register-button-hero"><FaFileSignature className="me-1" />Register for Lessons</button></Link>
    );

}
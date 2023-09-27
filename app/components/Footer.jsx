import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"


const Footer = () => {
    return ( 
        <footer className="mt-40 grid grid-cols-1 gap-y-14 md:grid-cols-2 lg:grid-cols-4 px-5 py-8 bg-[url('/bg_top_header.jpg')] bg-cover min-h-50 text-gray-50 font-roboto">
            <div>
                <h4 className="mb-6 inline-block border-b-2">FOLLOW US:</h4>
                    <div className="social-links flex">
                        <Link 
                            href="https://www.facebook.com/dacapomusic.ca/" target="_blank" 
                            className="hover:text-lightRed me-3">
                            <FaFacebookSquare size="2.5em"/> 
                        </Link>
                        <Link 
                            href="https://www.instagram.com/dacapomusic.ca/" target="_blank" 
                            className="hover:text-lightRed me-3">
                            <FaInstagramSquare size="2.5em" />
                        </Link>
                        <Link 
                            href="https://www.youtube.com/watch?v=gSPAOkyO4AA&feature=youtu.be" target="_blank"          className="hover:text-lightRed">
                            <FaYoutubeSquare size="2.5em" />
                        </Link>
                    </div>
            </div>
            <div>
                <h4 className="mb-6 inline-block border-b-2">WHAT WE OFFER:</h4>
                <ul className="text-sm leading-7 font-light">
                    <li><Link href="#" className="hover:text-lightRed">Piano Lessons</Link></li>
                    <li><Link href="#" className="hover:text-lightRed">Guitar Lessons</Link></li>
                    <li><Link href="#" className="hover:text-lightRed">Drum Lessons</Link></li>
                    <li><Link href="#" className="hover:text-lightRed">Voice Lessons</Link></li>
                    <li><Link href="#" className="hover:text-lightRed">Music Theory Lessons</Link></li>
                    <li><Link href="#" className="hover:text-lightRed">Toddler Music Classes</Link></li>
                    <li><Link href="#" className="hover:text-lightRed">Intro to Music Program</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="mb-6 inline-block border-b-2">LEARN MORE:</h4>
                <ul className="text-sm leading-7 font-light">
                    <li><Link href="/rates" className="hover:text-lightRed">Rates</Link></li>
                    <li><Link href="/teachers" className="hover:text-lightRed">Teachers</Link></li>
                    <li><Link href="/reviews" className="hover:text-lightRed">Reviews</Link></li>
                    <li><Link href="/gallery" className="hover:text-lightRed">Gallery</Link></li>
                    <li><Link href="/about" className="hover:text-lightRed">About</Link></li>
                    <li><Link href="/contact" className="hover:text-lightRed">Contact</Link></li>
                    <li><Link href="/blog" className="hover:text-lightRed">Blog</Link></li>
                    <li><Link href="/privacypolicy" className="hover:text-lightRed">Privacy Policy</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="mb-6 inline-block border-b-2">CONTACT US:</h4>
                <ul className="text-sm leading-10 font-light">
                    <li><Link href="tel:+4162379595" className="hover:text-lightRed">(416) 237-9595</Link></li>
                    <li><Link href="mailto: info@dacapomusic.ca" className="hover:text-lightRed">info@dacapomusic.ca</Link></li>
                    <li><Link href="https://goo.gl/maps/S1fjfDa8jyphqcLw9" target="_blank" className="me-8 hover:text-lightRed">270 The Kingsway, Etobicoke, ON M9A 3T7</Link></li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;
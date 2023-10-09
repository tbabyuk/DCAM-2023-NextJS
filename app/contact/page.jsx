import { PageTitle } from "../components/PageTitle";
import Head from "next/head";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const metadata = {
    title: "DCAM | Contact",
    description: "Contact information"
}

const Contact = () => {
    
    return ( 
        <main className="contact-page">
            <PageTitle title="Contact Us" />
                <div className="grid md:grid-cols-2 lg:px-36 xl:px-52 py-20 mt-24 bg-gray-100">
                    <section className="contact mb-10 md:mb-0 md:pe-5 lg:pe-10 px-5 lg:px-0">
                        <div className="mb-10">
                            <h2 className="text-lg font-semibold">Telephone:</h2><Link href="tel:+4162379595" className="flex items-center hover:text-lightRed"><BsTelephone className={"me-1"}/>(416) 237-9595</Link>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-lg font-semibold">Email:</h2>
                            <Link href = "mailto: info@dacapomusic.ca" className="flex items-center me-8 hover:text-lightRed"><HiOutlineMail className="me-1" />info@dacapomusic.ca</Link>                        
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">If arriving by TTC:</h2>
                                <p>1. Get off at Royal York station</p>
                                <p>2. Take either of the following buses and get off at Strath Humber Ct (Court):<br />
                                    * 73 Royal York B or C<br />
                                    * 48 Rathburn
                                </p>
                        </div>
                    </section>

                    <section className="address px-5">
                        <h2 className="text-lg font-semibold">Our Location:</h2>
                        <p>270 The Kingsway, Etobicoke, ON M9A 3T7</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3584966482185!2d-79.52234452407666!3d43.66151347110163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37bb608630c7%3A0x69f2141676b811d2!2sDa%20Capo%20Academy%20of%20Music!5e0!3m2!1sen!2sca!4v1688345265242!5m2!1sen!2sca" className="w-full" height="280" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />                       
                    </section>
                </div>

                <section className="neighbourhood text-center px-5 lg:px-36 xl:px-52 py-20">
                    <h2 className="text-lg font-semibold mb-5">OUR NEIGHBOURHOOD:</h2>
                    <p>Located in the beautiful Etobicoke neighbourhood of <Link href="https://en.wikipedia.org/wiki/Humber_Valley_Village" target="_blank" className="hover:text-lightRed">Humber Valley Village</Link>, we are just minutes away from the following schools:</p>
                    <table className="mx-auto my-10">
                        <thead>
                            <tr>
                                <th className="border-2 p-3">SCHOOL</th>
                                <th className="border-2 p-3">DRIVING TIME</th>
                                <th className="border-2 p-3">WALKING TIME</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 p-3"><Link href="https://www.kcs.on.ca/" target="_blank" className="dcam-link">Kingsway College School (KCS)</Link></td>
                                <td className="border-2">2 minutes</td>
                                <td className="border-2">8 minutes</td>
                            </tr>
                            <tr>
                                <td className="border-2 p-3"><Link href="https://schoolweb.tdsb.on.ca/humbervalley" target="_blank" className="dcam-link">Humber Valley Village Junior Middle School</Link></td>
                                <td className="border-2">4 minutes</td>
                                <td className="border-2">13 minutes</td>
                            </tr>
                            <tr>
                                <td className="border-2 p-3"><Link href="https://schoolweb.tdsb.on.ca/lambtonkingsway" target="_blank" className="dcam-link">Lambton-Kingsway Junior Middle School</Link></td>
                                <td className="border-2">4 minutes</td>
                                <td className="border-2">15 minutes</td>
                            </tr>
                            <tr>
                                <td className="border-2 p-3"><Link href="https://www.tcdsb.org/o/ourladyofsorrows" target="_blank" className="dcam-link">Our Lady of Sorrows Catholic School</Link></td>
                                <td className="border-2">5 minutes</td>
                                <td className="border-2">20 minutes</td>
                            </tr>
                            <tr>
                                <td className="border-2 p-3"><Link href="https://schoolweb.tdsb.on.ca/etobicokeci" target="_blank" className="dcam-link">Etobicoke Collegiate Institute (ECI)</Link></td>
                                <td className="border-2">4 minutes</td>
                                <td className="border-2">17 minutes</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
        </main>
     );
}
 
export default Contact;
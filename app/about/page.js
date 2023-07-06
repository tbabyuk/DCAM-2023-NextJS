
import Link from "next/link";

export const metadata = {
    title: 'About Page',
    description: 'Cool Music School About Page',
  }

const About = () => {
    return ( 
        <>
        <Link href="/">Go to Home Page</Link>
        <h1>This is the About Page</h1>
        </>
     );
}
 
export default About;
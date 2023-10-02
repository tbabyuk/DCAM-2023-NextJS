import { PageTitle } from "../components/PageTitle";
import Head from "next/head";

export const metadata = {
    title: "DCAM | About",
    description: "Our story"
}

const About = () => {
    
    return ( 
        <>
            <Head>
                <title>Da Capo Academy of Music | About</title>
            </Head>
            <main className="about-page">
                <PageTitle title="About Us" />
                    <section className="content leading-7 grid md:grid-cols-2 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                        <div className="md:pe-10 mb-10 md:mb-0">
                            <p><strong>Da Capo Academy of Music (DCAM)</strong> began as an at-home piano studio and opened its doors at Humbertown Shopping Centre in September 2018. Our name comes from the Italian musical term “Da Capo”, which means “from the beginning” and is a common term found in sheet music. At DCAM, we offer private music lessons to students of all ages and skill levels and also prepare students for RCM (Royal Conservatory of Music) exams, recitals, auditions, and competitions. To showcase their progress, students have an opportunity to participate in one or both of our bi-annual music recitals. We are passionate about music and love to pass this passion on to our students! Whether you are a parent wanting to start your child on a musical path or an adult who has finally decided seriously start learning a music instrument - we welcome you at our school!</p>
                        </div>

                        <div>
                            <img src="/school_1.jpg" alt="Da Capo Academy of Music first recital" className="rounded-xl shadow-lg" />
                        </div>
                    </section>
            </main>
        </>
     );
}
 
export default About;
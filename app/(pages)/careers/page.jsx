import { PageTitle } from "../components/PageTitle";
import { TeacherApplicationForm } from "./TeacherApplicationForm";


export const metadata = {
    title: "Careers | Da Capo Academy of Music",
    description: "Work opportunities at Da Capo Academy of Music",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "About Us | Da Capo Academy of Music",
        description: "The story of how we got started",
        url: "https://dacapomusic.ca/careers",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
}


const Careers = () => {
    
    return ( 
            <main className="careers-page pb-36">
                <PageTitle title="Careers" image="/images/page-headers/careers-page.jpg" />

                <section className="content leading-7 px-5 lg:px-36 xl:px-52 py-20">
                    <div className="bg-gray-100 p-8 rounded-xl border-2 border-gray-300 shadow-lg">
                        <h3 className="text-regRed roboto text-2xl mb-2">Current Openings:</h3>
                        <ul className="list-disc list-inside mb-6">
                            <li>piano teacher (substitute)</li>
                        </ul>
                        <div className="border-b-2 border-gray-300 my-7"></div>
                        <h3 className="text-regRed roboto text-xl mb-2">Description:</h3>
                        <p>We are currently looking for a talented and motivated substitute teacher for piano, to be on call when needed. This position has potential to become permanent part-time in September 2024. If this is something you are interested in, please fill out the application below and we will be in touch if we feel you might be the right fit!</p>
                    </div>
                </section>

                <section className="content leading-7 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                    <div className="mb-10 md:mb-0">
                        <p className="mb-6">We are regularly looking for new talented and passionate musicians/teachers to join our team. Feel free to fill out the application below and we will keep your resume on file for when we are hiring. You can choose to apply for a permanent weekly position or as a substitute teacher. Some teachers start out with us as subs and later transition to a more permanent role, so this might be a good way to get your foot in the door.</p>

                        <p className="mb-6">Please keep in mind that we mostly look for teachers who live close or within a reasonable commuting distance to our school. Applicants outside of the GTA (Greater Toronto Area) will not be considered.</p>

                        <p className="mb-6">Please do not submit more than one application. Rest assured that if you applied once, we have your application on file and will reach out to you when we are hiring and if we feel you are the right fit for the role.</p>

                        <p>Thank you!</p>
                    </div>

                </section>

                <section className="register-page px-5 lg:px-36 xl:px-52 py-20">
                    <TeacherApplicationForm />
                </section>
            </main>
     );
}
 
export default Careers
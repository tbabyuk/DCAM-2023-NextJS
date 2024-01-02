import { PageTitle } from "../components/PageTitle";
import { TeacherApplicationForm } from "./TeacherApplicationForm";


export const metadata = {
    title: "About Us | Da Capo Academy of Music",
    description: "The story of how we got started",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "About Us | Da Capo Academy of Music",
        description: "The story of how we got started",
        url: "https://dacapomusic.ca/about",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
}


const Careers = () => {
    
    return ( 
        <>
            <main className="careers-page">
                <PageTitle title="Careers" />
                    <section className="content leading-7 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                        <div className="md:pe-10 mb-10 md:mb-0">
                            <p className="mb-6">We are regularly looking for new talented and passionate musicians/teachers to join our team. Feel free to fill out the application below and we will keep your resume on file. Even if we are not actively looking for a new teacher, feel free to apply as a substitute teacher to start with, which can be a great way to get your foot in the door. Many teachers start out with us as subs and later transition to a more permanent role.</p>

                            <p>Please do not submit more than one application. Rest assured that if you applied once, we have your application on file and will reach out to you when we are hiring and if we feel you are the right fit for the role.</p>
                        </div>
                    </section>
                    <section className="register-page px-5 lg:px-36 xl:px-52 py-20 mb-24">
                        <TeacherApplicationForm />
                    </section>
            </main>
        </>
     );
}
 
export default Careers
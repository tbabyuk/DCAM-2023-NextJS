import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";
import { LessonFormatSection } from "@/app/components/LessonFormatSection";
import { LessonDurationSection } from "@/app/components/LessonDuration";
import { LessonTeachersSection } from "@/app/components/LessonTeachersSection";


export const metadata = {
    title: "Guitar Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Looking for guitar lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
    keywords: ["guitar lessons etobicoke", "ukulele lessons etobicoke", "guitar teacher etobicoke", "music lessons etobicoke"],
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Guitar Lessons in Etobicoke | Da Capo Academy of Music",
        description: "Looking for guitar lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
        url: "https://dacapomusic.ca/guitar-lessons-etobicoke",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        // publishedTime: "2020-07-27T22:12:00+00:00",
        // images: [    
        //     {
        //         url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-waltzes%2Feasy_chopin_waltzes_cover.jpg?alt=media&token=b08eb378-7fc7-440c-95ac-199b39f5f89f",
        //         width: 1200,
        //         height: 628,
        //         type: "image/jpeg"
        //     }
        // ],
    },
}


const GuitarLessonsPage = () => {

    return ( 
        <main className="guitar-page">
            <PageTitle title="Guitar Lessons in Etobicoke" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <p>Whether you want to be in a band, impress your friends at a party, or just play for yourself - the possibilities are endless when it comes to the  guitar! No wonder it's one of the most popular instruments today!<br /><br />
                    At DCAM, you learn guitar through a fun and gradual process that combines proper technique with music that you actually want to play! Just like guitars, we realize that students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student's individual skill level and musical taste.</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/lessons/guitar_lesson.jpg" alt="guitar lesson in progress" style={{width: "190px"}} className="rounded-md mx-auto" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start guitar lessons?" />
                <p>Six is our minimum recommended age for starting guitar lessons. At this age, most children are developed enough physically to be able to comfortably hold a small guitar and have enough finger-strength to be able to depress the strings. However, if your child is younger and you think they are ready to start, we would be happy to give them a free trial lesson and give you our recommendation.</p>
            </section>

            <LessonFormatSection />

            <LessonDurationSection />

            <section className="materials leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/book_intro_to_guitar.jpg" className="mx-auto rounded-xl shadow-lg" style={{width: "130px"}} alt="lesson in progress" />
                    </figure>
                    <p>Beginning students can start out with our “Intro to Guitar” book series, which includes 3 books. These books help lay all the important foundation for beginning guitarists, including the reading of tablature, strumming patterns, and lots of fun songs to play along to! After completing the series, students are free to start learning songs that interest them and can join our “Band Experience” program, which allows them to get a feel for what it's like to play in a group with other instruments and musicians.</p>
                </div>
            </section>

            <section className="instruments leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Instruments" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <p>Students can choose to play either an acoustic, electric, or classical guitar. For young children, guitars with nylon strings are recommended, as they don't put a lot of strain on the fingers. Children will also require a guitar that fits their size/age, which can be bought or rented from most music stores or directly from us. Students are expected to have their own guitar and to bring it with them to every lesson.<br /><br />
                    <span className="italic block text-[0.9rem]">Not sure what the right guitar size is for your child? Check out <a href="https://dacapomusic.ca/child-guitar-sizes/" target="_blank" className="dcam-link">this blog article</a>.</span>
                    <span className="italic block text-[0.9rem]">Need a guitar? Talk to us or check out <a href="https://www.long-mcquade.com/" target="_blank" className="dcam-link">Long & McQuade</a>, who offer buy or rent options.</span>
                    </p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/lessons/guitar_instruments.jpg" alt="guitar lesson in progress" style={{width: "320px"}} className="rounded-md mx-auto" />
                    </figure>
                </div>
            </section>

            <section className="styles leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Styles" />
                <p>Students can choose to learn any musical style they want on the piano, such as pop, jazz,  classical, etc. Those wishing to go the Royal Conservatory route should expect a heavy focus on classical music.</p>
            </section>

            <LessonTeachersSection />

            <PageBottomTrialButton />
        </main>
     );
}
 
export default GuitarLessonsPage;
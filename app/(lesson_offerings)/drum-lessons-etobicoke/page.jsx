import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";
import { LessonDurationSection } from "@/app/components/LessonDuration";
import { LessonTeachersSection } from "@/app/components/LessonTeachersSection";
import { LessonFormatSection } from "@/app/components/LessonFormatSection";


export const metadata = {
    title: "Drum Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Looking for drum lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Drum Lessons in Etobicoke | Da Capo Academy of Music",
        description: "Looking for drum lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
        url: "https://dacapomusic.ca/drum-lessons-etobicoke",
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


const DrumLessonsPage = () => {
    return ( 
        <main className="drums-page">
            <PageTitle title="Drum Lessons in Etobicoke" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <p>Whether you want to play in a band, improve your sense of rhythm, or just let out some steam - there is no denying that drums are just an all-round fun instrument to play!<br /><br /> In our studio, we incorporate real song tracks into our lessons so that you get a genuine playing experience. Students can also choose to play either an acoustic or electric drum set, or alternate between both!</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/lessons/drum_lessons.jpg" alt="guitar lesson in progress" style={{width: "190px"}} className="rounded-md mx-auto" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start drum lessons?" />
                <p>At 6, most children are grown enough to have a comfortable reach around the drums and are mentally ready to get the maximum benefit from their lessons. However, if your child is younger and you think they are ready to start, we would be happy to give them a free trial lesson and give you our recommendation.</p>
            </section>

            <LessonFormatSection />

            <LessonDurationSection />
            
            <section className="materials leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/drum_books.jpg" className="mx-auto rounded-xl shadow-lg w-[280px]" alt="lesson in progress" />
                    </figure>
                    <p>Beginning students can start out with our “Intro to Guitar” book series, which includes 3 books. These books help lay all the important foundation for beginning guitarists, including the reading of tablature, strumming patterns, and lots of fun songs to play along to! After completing the series, students are free to start learning songs that interest them and can join our “Band Experience” program, which allows them to get a feel for what it's like to play in a group with other instruments and musicians.</p>
                </div>
            </section>

            <section className="instruments leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Instruments" />
                <p>At DCAM, students can choose between an electric and an acoustic drum kit.</p><br />
                <p><span className="italic block">Don't have a drum kit? Talk to us or check out <a href="https://www.long-mcquade.com/"className="dcam-link" target="_blank">Long & McQuade</a>. They offer both acoustic and electric drum kits for both sale and rent.</span></p>
            </section>

            <section className="styles leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Styles" />
                <p>Students can choose to drum to rock & roll, pop, jazz, or blues. We do it all! We also prepare students for the Royal Conservatory Percussion examinations.</p>
            </section>

            <LessonTeachersSection />

            <PageBottomTrialButton />
        </main>
     );
}
 
export default DrumLessonsPage;
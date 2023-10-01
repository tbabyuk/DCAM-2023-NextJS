import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";
import { LessonTeachersSection } from "@/app/components/LessonTeachersSection";


export const metadata = {
    title: "Intro to Music Program | Da Capo Academy of Music",
    description: "This program is designed to give students a chance to try out several different instruments to help them decide which one they like best.",
    keywords: ["intro to music"],
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Intro to Music Program | Da Capo Academy of Music",
        description: "This program is designed to give students a chance to try out several different instruments to help them decide which one they like best.",
        url: "https://dacapomusic.ca/intro-to-music-program",
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


const IntroToMusicPage = () => {
    return ( 
        <main className="intro-to-music-page">
            <PageTitle title="Intro To Music Program" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0">
                    <p>This class is designed to give students a chance to try out several different instruments to help them decide which one they like best. It is aimed at students who have not yet picked an instrument to specialize in. At the end of this class, students can choose to sign up for regular lessons on the instrument they have chosen.</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/lessons/confused_child.jpg" alt="toddler music lesson in progress" className="rounded-md mx-auto w-[140px]" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start the Intro to Music Program?" />
                <p>We generally recommend 6 as the minimum age for this program.</p>
            </section>

            <section className="format leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Lesson Format" />
                <p>This program takes place over a period of four weeks, with one lesson per week. Each week, students get to try a different instrument. Students can choose a maximum of four instruments currently offered by us. Lessons take place either one-on-one with a teacher or in small groups.</p>
            </section>

            <section className="duration leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>All “Intro to Music” lessons are 30 minutes long.</p>
            </section>

            <section className="materials leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/instruments.jpg" alt="a girl doing music theory" className="rounded-md mx-auto w-[80px]" />
                    </figure>
                    <p>We provide instruments for each lesson, but for portable instruments like guitars and violins, students are free to bring their own if they wish. Please let us know ahead of time if you plan to bring your own instrument or if need us to provide one for you.</p>
                </div>
            </section>

            <LessonTeachersSection />

            <PageBottomTrialButton />
        </main>
     );
}
 
export default IntroToMusicPage;
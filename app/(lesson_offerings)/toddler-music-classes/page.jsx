import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";
import { LessonTeachersSection } from "@/app/components/LessonTeachersSection";


export const metadata = {
    title: "Toddler Music Classes in Etobicoke | Da Capo Academy of Music",
    description: "Group music classes aimed at toddlers and preschoolers (ages 2-5)",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Toddler Music Classes in Etobicoke | Da Capo Academy of Music",
        description: "Group music classes aimed at toddlers and preschoolers (ages 2-5)",
        url: "https://dacapomusic.ca/toddler-music-classes",
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


const ToddlerMusicPage = () => {
    return ( 
        <main className="toddler-music-page">
            <PageTitle title="Toddler Lessons in Etobicoke" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0">
                    <p>Our “Musical Beginnings” class is a group class aimed at toddlers and preschoolers (ages 2-5). It is designed to introduce young children to music and help them develop an understanding of rhythm, pitch and musicality at an early age. This class is a great gateway into starting to learn an instrument.</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/lessons/toddler_lessons.jpg" alt="toddler music lesson in progress" className="rounded-md mx-auto w-[140px]" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start toddler music classes?" />
                <p>This class is designed for children aged 2-5.</p>
            </section>

            <section className="format leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Lesson Format" />
                <p>Classes take place in a small circle of 4-8 children and a teacher. During the class, the teacher engages children through songs and encourages them to sing along, clap, and perform movements to music. Children participate in music-making by using a variety of little instruments such as egg shakers, tambourines, and xylophones.</p>
            </section>

            <section className="duration leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>“Musical Beginnings” classes normally last for 45 minutes.</p>
            </section>

            <section className="materials leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/toddler_instruments.jpg" alt="a girl doing music theory" className="rounded-md mx-auto w-[80px]" />
                    </figure>
                    <p>The most common instruments in our group toddler and preschooler classes are egg shakers, tambourines, and xylophones.</p>
                </div>
            </section>

            <LessonTeachersSection />

            <PageBottomTrialButton />
        </main>
     );
}
 
export default ToddlerMusicPage;
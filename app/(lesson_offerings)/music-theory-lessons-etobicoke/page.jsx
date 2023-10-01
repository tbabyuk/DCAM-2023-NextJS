import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";
import { LessonDurationSection } from "@/app/components/LessonDuration";
import { LessonTeachersSection } from "@/app/components/LessonTeachersSection";
import { LessonFormatSection } from "@/app/components/LessonFormatSection";


export const metadata = {
    title: "Music Theory Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Looking for music theory lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
    keywords: ["music theory lessons etobicoke", "music lessons etobicoke"],
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Music Theory Lessons in Etobicoke | Da Capo Academy of Music",
        description: "Looking for music theory lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
        url: "https://dacapomusic.ca/music-theory-lessons-etobicoke",
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


const TheoryLessonsPage = () => {
    
    return ( 
        <main className="theory-page">
            <PageTitle title="Music Theory Lessons in Etobicoke" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0">
                    <p>Quoting from the RCM Theory Syllabus (2016), <span className="italic">“The study of theory is an essential component of well-rounded musical training and is intended to support the practical studies to enhance and enrich the musical experience.”</span> We absolutely agree with this statement!<br /><br />At DCAM, you can take Music Theory as a separate lesson or in combination with the study of your favourite instrument.</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/lessons/theory_lessons.jpg" alt="a girl doing music theory" className="rounded-md mx-auto w-[140px]" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start music theory lessons?" />
                <p>Students can begin studying the basics of music theory as young as 5 years old. Getting an early start in music theory gives young students an edge when the get into the more complicated material.</p>
            </section>

            <LessonFormatSection />

            <LessonDurationSection />

            <section className="materials leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/theory_books.jpg" alt="a girl doing music theory" className="rounded-md mx-auto w-[80px]" />
                    </figure>
                    <p>Since many of our students eventually intend to write the RCM theory exams, RCM books are our most popular choice for theory studies. However, there are plenty of other great theory books out there which we would be happy to teach if that is what our students would prefer. One example of such books is Barbara Wharram's “Rudimentary Rudiments of Music”.</p>
                </div>
            </section>

            <LessonTeachersSection />

            <PageBottomTrialButton />
        </main>
     );
}
 
export default TheoryLessonsPage;
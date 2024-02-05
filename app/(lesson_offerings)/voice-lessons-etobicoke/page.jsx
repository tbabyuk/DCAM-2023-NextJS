import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";
import { LessonFormatSection } from "@/app/components/LessonFormatSection";
import { LessonDurationSection } from "@/app/components/LessonDuration";
import { LessonTeachersSection } from "@/app/components/LessonTeachersSection";


export const metadata = {
    title: "Voice Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Looking for voice lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Voice Lessons in Etobicoke | Da Capo Academy of Music",
        description: "Looking for voice lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
        url: "https://dacapomusic.ca/voice-lessons-etobicoke",
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


const VoiceLessonsPage = () => {

    return ( 
        <main className="voice-page pb-36">
            <PageTitle title="Voice Lessons in Etobicoke" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col-reverse md:flex-row mb-6 md:mb-0">
                    <p>Do you or your child like to sing? Are you looking for voice lessons that are fun but also individualized to your or your child's level and interest? Our voice lessons are designed to be educational and fun at the same time. Bring in a song that you want to learn or use one of our method books to take your singing to the next level - it's up to you!<br /><br /> With proper technique and training, you will be surprized at what your voice can do! Call to book your free trial today!</p>
                    <figure className="flex-shrink-0 md:ms-10 mb-10 md:mb-0">
                        <img src="/lessons/voice_lessons.jpg" alt="a girl singing" className="rounded-md mx-auto w-[160px]" />
                    </figure>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start voice lessons?" />
                <p>Age 7 and up is a good time for children to begin singing lessons. At this age children are mature enough and have enough awareness of their own body to be able to follow the teacher's instructions. Although their voice has not yet matured at this age, they will benefit greatly from developing proper singing habits and techniques that they can continue to apply as they get older. At this age, teachers are careful not to put too much pressure on the vocal chords to avoid causing unnecessary strain.</p>
            </section>

            <LessonFormatSection />

            <LessonDurationSection />

            <section className="materials leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/voice_books.jpg" alt="a girl doing music theory" className="rounded-md mx-auto w-[170px]" />
                    </figure>
                    <p>Students have the option of purchasing one of our method books or bringing in their own material. Those wishing to go the Royal Conservatory route might want to focus on RCM materials, otherwise a teacher can help the student select a book most suitable to their needs and goals. Some teachers also choose to use their own material that they have accumulated over time and found to be effective with their students.</p>
                </div>
            </section>

            <section className="styles leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Styles" />
                <p>Students can choose from a wide variety of genres such as pop, jazz, and blues. Very often students will have a specific song they would like to learn to sing, which are teachers are more than happy to help with.</p>
            </section>

            <LessonTeachersSection background="bg-gray-100" />

            <PageBottomTrialButton />
        </main>
     );
}
 
export default VoiceLessonsPage;
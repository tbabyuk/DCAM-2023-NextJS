import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";
import { LessonFormatSection } from "@/app/components/LessonFormatSection";
import { LessonDurationSection } from "@/app/components/LessonDuration";
import { LessonTeachersSection } from "@/app/components/LessonTeachersSection";


export const metadata = {
    title: "Piano Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Schedule your free, no-obligation trial lesson today and see why we are the best choice for piano lessons in Etobicoke and surrounding area!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Piano Lessons in Etobicoke | Da Capo Academy of Music",
        description: "Schedule your free, no-obligation trial lesson today and see why we are the best choice for piano lessons in Etobicoke and surrounding area!",
        url: "https://dacapomusic.ca/piano-lessons-etobicoke",
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


const PianoLessonsPage = () => {
    return ( 
        <main className="piano-page pb-36">
            <PageTitle title="Piano Lessons in Etobicoke" />

            <section className="overview leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Overview" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/marcus_piano.jpg" className="mx-auto rounded-xl shadow-lg" style={{width: "250px"}} alt="lesson in progress" />
                    </figure>
                    <p>Piano is the most popular instrument in the world - and for many reasons. It's very visual, expressive, and, unlike many other instruments, allows us to play a large number of notes simultaneously. It's sort of like having a whole orchestra at your fingertips! But as a wise man once said: “It's easy to play the piano, but it's hard to play it well”.<br /><br />
                    At DCAM, we believe technique can make or break your piano playing, which is why we do our best to make sure our students learn correct technique from the very beginning - before it becomes a habit.<br /><br />
                    We also realize that our students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student's individual skill level and musical taste.
                    </p>
                </div>
            </section>

            <section className="age leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start piano lessons?" />
                <p>Five is the age at which most children have enough mental focus, self-awareness, and finger strength to start piano lessons. At this age, 30-minute lessons are the recommended option.<br /><br />
                If your child is younger than 5 and you think they are ready to start lessons - sign them up for a free trial lesson and we will be happy to give you our recommendation!</p>
            </section>

            <LessonFormatSection />

            <LessonDurationSection />

            <section className="materials leading-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="flex flex-col md:flex-row mb-6 md:mb-0">
                    <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0">
                        <img src="/lessons/abc_books.jpg" alt="a girl doing music theory" className="rounded-md mx-auto w-[170px]" />
                    </figure>
                    <p>For complete beginners, we like to use “The ABC of Piano Playing” series by Boris Berlin, which contains Books 1, 2, and 3. These books are a great introduction to the keyboard and music notation and contain many simple and catchy tunes. After finishing all three of these books, students have several options. Those following the Royal Conservatory path will be able to start either the “Preparatory A Piano Repertoire” or jump straight into the “Level 1 Piano Repertoire”. For students who do not wish to do the Royal Conservatory exams, books will be chosen based on their individual musical preferences.</p>
                </div>
            </section>

            <section className="instruments leading-8 px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Instruments" />
                <div className="flex flex-col items-center">
                    <p>At DCAM, students learn using upright acoustic pianos. While we don't expect all our students to have an acoustic piano at home, we do recommend getting at least a weighted keyboard. Weighted simply means that the keys have a slight resistance, similar to that of a real piano.<br /><br />
                    <span className="italic block">Interested in getting a piano? Talk to us or check out <a href="https://www.long-mcquade.com/" className="dcam-link" target="_blank">Long & McQuade</a>. They offer a variety of pianos for both sale and rent.</span>
                    </p>
                    <div className="flex flex-col md:flex-row w-full justify-evenly mt-8">
                        <img src="/lessons/eterna.jpg" className="w-full md:w-80 rounded-md mb-6 md:mb-0 md:me-6" />
                        <img src="/lessons/kawai.jpg" className="w-full md:w-80 rounded-md" />
                    </div>
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
 
export default PianoLessonsPage;
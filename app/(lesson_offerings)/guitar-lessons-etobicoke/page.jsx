

import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import Link from "next/link";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";

export const metadata = {
    title: "Guitar Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Looking for guitar lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
    keywords: ["guitar lessons", "ukulele lessons", "guitar lessons etobicoke", "ukulele lessons etobicoke"]
}

const GuitarLessonsPage = () => {

    return ( 
        <main className="guitar-page">
            <PageTitle title="Guitar Lessons in Etobicoke" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="md:flex md:items-center">
                    <p>Whether you want to be in a band, impress your friends at a party, or just play for yourself – the possibilities are endless when it comes to the  guitar! No wonder it’s one of the most popular instruments today!

                    At Da Capo Academy of Music, you learn guitar through a fun and gradual process that combines proper technique with music that you actually want to play! Just like guitars, we realize that students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student’s individual skill level and musical taste.

                    Ready to start learning? Book your free trial lesson today!
                    </p>
                    <img src="/lessons/guitar_lessons.jpg" className="mx-auto md:ms-5 mt-5 md:mt-0 md:h-52 rounded-md" />

                </div>
            </section>

            <section className="age px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start guitar lessons?" />
                <p>Six is our minimum recommended age for starting guitar lessons. At this age, most children are developed enough physically to be able to comfortably hold a small guitar and have enough finger-strength to be able to depress the strings. However, if your child is younger and you think they are ready to start, we would be happy to give them a free trial lesson and give you our recommendation.</p>
            </section>

            <section className="format px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Lesson Format" />
                <p><strong>Private lessons</strong>: these are one-on-one lessons with student and teacher. Private lessons are a great option for students looking for highly-focused and individualized music instruction. The teacher is able to give their full attention to one student and students normally progress faster in this environment.<br /><br />
                <strong>Semi-private lessons</strong>: these lessons consist of two students per teacher. Semi-private lessons can be a budget-friendly option for parents with two children or two friends wanting to learn the same instrument together. The one obvious drawback is that students don’t receive as much focused and individualized attention from the teacher as they do with private lessons.</p>
            </section>

            <section className="duration px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>At DCAM, students can choose between 30-minute, 45-minute, or 1-hour lessons. Small children generally start with 30-minute lessons and increase lesson duration as they get older and/or with the recommendation from their teacher. For teenagers and adults, a minimum lesson time of 45 minutes is strongly recommended.</p>
            </section>

            <section className="materials px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="md:flex md:items-center">
                    <img src="/lessons/book_intro_to_guitar.jpg" className="mx-auto mb-5 md:mb-0 md:me-5 md:h-40 rounded-md" />
                    <p>Beginning students can start out with our “Intro to Guitar” book series, which includes 3 books. These books help lay all the important foundation for beginning guitarists, including the reading of tablature, strumming patterns, and lots of fun songs to play along to! After completing the series, students are free to start learning songs that interest them and can join our “Band Experience” program, which allows them to get a feel for what it’s like to play in a group with other instruments and musicians.</p>
                </div>
            </section>

            <section className="instruments px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Instruments" />
                <div className="md:flex md:items-center">
                    <p>Students can choose to play either an acoustic, electric, or classical guitar. For young children, guitars with nylon strings are recommended, as they don’t put a lot of strain on the fingers. Children will also require a guitar that fits their size/age, which can be bought or rented from most music stores or directly from us. Students are expected to have their own guitar and to bring it with them to every lesson.<br /><br />

                    <span className="italic block">Not sure what the right guitar size is for your child? Check out <a href="https://dacapomusic.ca/child-guitar-sizes/" target="_blank" className="dcam-link">this blog article</a>.</span><br />
                    <span className="italic block">Need a guitar? Talk to us or check out <a href="https://www.long-mcquade.com/" target="_blank" className="dcam-link">Long & McQuade</a>, who offer buy or rent options.</span>
                    </p>
                    <img src="/lessons/guitar_lesson.jpg" className="mx-auto md:ms-5 mt-5 rounded-md md:h-56" />

                </div>
            </section>


            <section className="styles px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Styles" />
                <p>Students can choose to learn any musical style they want on the piano, such as pop, jazz,  classical, etc. Those wishing to go the Royal Conservatory route should expect a heavy focus on classical music.</p>
            </section>

            <section className="teachers px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Teachers" />
                <p>Our teachers are all qualified professionals and passionate musicians. We do our best to match a student with a teacher that we think would best fit their musical goals as well as their personalities. We understand that while some students prefer a relaxed teaching approach, there are always those for whom a more strict approach is more effective. Students also have the option to request to change their teacher if they wish to do so. Learn more about our teachers on our <Link href="/teachers" className="dcam-link">Teachers Section</Link>.</p>
            </section>

            <PageBottomTrialButton />
        </main>
     );
}
 
export default GuitarLessonsPage;


import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import Link from "next/link";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";

export const metadata = {
    title: "Piano Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Schedule your free, no-obligation trial lesson today and see why we are the best choice for piano lessons in Etobicoke and surrounding area!",
    keywords: ["piano lessons", "piano lessons etobicoke"]
}

const PianoLessonsPage = () => {
    return ( 
        <main className="piano-page">
            <PageTitle title="Piano Lessons in Etobicoke" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="md:flex md:items-center">
                    <img src="/lessons/piano_lessons.jpg" className="mx-auto md:me-5 mb-5 md:h-80 rounded-md" />
                    <p>Piano is the most popular instrument in the world – and for many good reasons. It’s very visual, expressive, and, unlike many other instruments, allows us to play a large number of notes at the same time. It’s sort of like having a whole orchestra at your fingertips! But as a wise man once said (and as many experienced pianists will tell you): “It’s easy to play the piano, but it’s hard to play it well”.<br /><br />

                    At DCAM, we believe technique can make or break your piano playing, which is why we do our best to make sure our students (especially young children) learn correct technique from the very beginning – before it becomes a habit. Having good technique is an absolutely essential foundation to the student’s proper development and growth as a musician.<br /><br />

                    We also realize that our students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student’s individual skill level and musical taste.
                    </p>
                </div>
            </section>

            <section className="age px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start piano lessons?" />
                <p>Five is the age at which most children have enough mental focus, self-awareness, and finger strength to start piano lessons. At this age, 30-minute lessons are the recommended option.<br /><br />
                If your child is younger than 5 and you think they are ready to start lessons – sign them up for a free trial lesson and we will be happy to give you our recommendation!</p>
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
                <img src="/lessons/abc_books.jpg" className="me-5 mb-5 md:mb-0 rounded-md md:h-48" />
                <p>For complete beginners, we like to use “The ABC of Piano Playing” series by Boris Berlin, which contains Books 1, 2, and 3. These books are a great introduction to the keyboard and music notation and contain many simple and catchy tunes. After finishing all three of these books, students have several options. Those following the Royal Conservatory path will be able to start either the “Preparatory A Piano Repertoire” or jump straight into the “Level 1 Piano Repertoire”. For students who do not wish to do the Royal Conservatory exams, books will be chosen based on their individual musical preferences.
                </p>
            </div>
            </section>

            <section className="instruments px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Instruments" />
                <div className="flex flex-col items-center">
                    <p>At DCAM, students learn using upright acoustic pianos. While we don’t expect all our students to have an acoustic piano at home, we do recommend getting at least a weighted keyboard. Weighted simply means that the keys have a slight resistance, similar to that of a real piano.<br /><br />
                    <span className="italic block">Interested in getting a piano? Talk to us or check out <a href="https://www.long-mcquade.com/" className="dcam-link" target="_blank">Long & McQuade</a>. They offer a variety of pianos for both sale and rent.</span>
                    </p>
                    <div className="flex flex-col md:flex-row w-full justify-evenly mt-8">
                        <img src="/lessons/eterna.jpg" className="w-full md:w-80 rounded-md mb-6 md:mb-0 md:me-6" />
                        <img src="/lessons/kawai.jpg" className="w-full md:w-80 rounded-md" />
                    </div>
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
 
export default PianoLessonsPage;




import { PageTitle } from "../components/PageTitle";
import { PageSubtitle } from "../components/PageSubtitle";
import Link from "next/link";
import { PageBottomTrialButton } from "../components/PageBottomTrialButton";

const VoiceLessonsPage = () => {
    return ( 
        <main className="voice-page">
            <PageTitle title="Voice Lessons in Etobicoke" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="md:flex md:items-center">
                    <p>Do you or your child like to sing? Are you looking for voice lessons that are fun but also individualized to your or your child’s level and interest? Our voice lessons are designed to be educational and fun at the same time. Bring in a song that you want to learn or use one of our method books to take your singing to the next level – it’s up to you! With proper technique and training, you will be surprized at what your voice can do! Call to book your free trial today!</p>
                    <img src="/lessons/voice_lessons.jpg" className="mx-auto md:ms-5 mt-5 md:mt-0 md:h-52 rounded-md" />

                </div>
            </section>

            <section className="age px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start voice lessons?" />
                <p>Age 7 and up is a good time for children to begin singing lessons. At this age children are mature enough and have enough awareness of their own body to be able to follow the teacher’s instructions. Although their voice has not yet matured at this age, they will benefit greatly from developing proper singing habits and techniques that they can continue to apply as they get older. At this age, teachers are careful not to put too much pressure on the vocal chords to avoid causing unnecessary strain.</p>
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
                    <img src="/lessons/voice_books.jpg" className="mx-auto mb-5 md:mb-0 md:me-5 md:h-40 rounded-md" />
                    <p>Students have the option of purchasing one of our method books or bringing in their own material. Those wishing to go the Royal Conservatory route might want to focus on RCM materials, otherwise a teacher can help the student select a book most suitable to their needs and goals. Some teachers also choose to use their own material that they have accumulated over time and found to be effective with their students.</p>
                </div>
            </section>

            <section className="styles px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Styles" />
                <p>Students can choose from a wide variety of genres such as pop, jazz, and blues. Very often students will have a specific song they would like to learn to sing, which are teachers are more than happy to help with.</p>
            </section>

            <section className="teachers px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Teachers" />
                <p>Our teachers are all qualified professionals and passionate musicians. We do our best to match a student with a teacher that we think would best fit their musical goals as well as their personalities. We understand that while some students prefer a relaxed teaching approach, there are always those for whom a more strict approach is more effective. Students also have the option to request to change their teacher if they wish to do so. Learn more about our teachers on our <Link href="/teachers" className="dcam-link">Teachers Section</Link>.</p>
            </section>

            <PageBottomTrialButton />
        </main>
     );
}
 
export default VoiceLessonsPage;
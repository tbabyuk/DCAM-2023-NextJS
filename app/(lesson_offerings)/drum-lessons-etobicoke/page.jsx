import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import Link from "next/link";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";

export const metadata = {
    title: "Drum Lessons in Etobicoke | Da Capo Academy of Music",
    description: "Looking for drum lessons in Etobicoke? We are here for you! Call or visit our website to register for your free, no-obligation trial lesson TODAY!",
    keywords: ["drum lessons", "drum lessons etobicoke"]
}

const DrumLessonsPage = () => {
    return ( 
        <main className="drums-page">
            <PageTitle title="Drum Lessons in Etobicoke" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="md:flex md:items-center">
                    <p>Whether you want to play in a band, improve your sense of rhythm, or just let out some steam – there is no denying that drums are just an all-round fun instrument to play. In our studio, we incorporate real song tracks into our lessons so that you get a genuine playing experience. Students can also choose to play either an acoustic or electric drum set, or alternate between both!</p>
                    <img src="/lessons/drum_lessons.jpg" className="mx-auto md:ms-5 mt-5 md:mt-0 md:h-52 rounded-md" />

                </div>
            </section>

            <section className="age px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start drum lessons?" />
                <p>At 6, most children are grown enough to have a comfortable reach around the drums and are mentally ready to get the maximum benefit from their lessons. However, if your child is younger and you think they are ready to start, we would be happy to give them a free trial lesson and give you our recommendation.</p>
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
                    <img src="/lessons/drum_books.jpg" className="mx-auto mb-5 md:mb-0 md:me-5 md:h-40 rounded-md" />
                    <p>Beginning students can start out with our “Intro to Guitar” book series, which includes 3 books. These books help lay all the important foundation for beginning guitarists, including the reading of tablature, strumming patterns, and lots of fun songs to play along to! After completing the series, students are free to start learning songs that interest them and can join our “Band Experience” program, which allows them to get a feel for what it’s like to play in a group with other instruments and musicians.</p>
                </div>
            </section>

            <section className="instruments px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Instruments" />
                <div className="flex flex-col items-center">
                    <p>At DCAM, students can choose between an electric and an acoustic drum kit.<br /><br />
                    <span className="italic block">Don’t have a drum kit? Talk to us or check out <a href="https://www.long-mcquade.com/"className="dcam-link" target="_blank">Long & McQuade</a>. They offer both acoustic and electric drum kits for both sale and rent.</span></p>
                    <div className="flex flex-col md:flex-row w-full justify-evenly mt-8">
                        <img src="/lessons/eterna.jpg" className="w-full md:w-80 rounded-md mb-6 md:mb-0 md:me-6" />
                        <img src="/lessons/kawai.jpg" className="w-full md:w-80 rounded-md" />
                    </div>
                </div>
            </section>


            <section className="styles px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Styles" />
                <p>Students can choose to drum to rock & roll, pop, jazz, or blues. We do it all! We also prepare students for the Royal Conservatory Percussion examinations.</p>
            </section>

            <section className="teachers px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Teachers" />
                <p>Our teachers are all qualified professionals and passionate musicians. We do our best to match a student with a teacher that we think would best fit their musical goals as well as their personalities. We understand that while some students prefer a relaxed teaching approach, there are always those for whom a more strict approach is more effective. Students also have the option to request to change their teacher if they wish to do so. Learn more about our teachers on our <Link href="/teachers" className="dcam-link">Teachers Section</Link>.</p>
            </section>

            <PageBottomTrialButton />
        </main>
     );
}
 
export default DrumLessonsPage;
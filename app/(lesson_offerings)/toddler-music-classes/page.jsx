import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import Link from "next/link";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";

export const metadata = {
    title: "Toddler Music Classes | Da Capo Academy of Music",
    description: "Group music classes aimed at toddlers and preschoolers (ages 2-5)",
    keywords: ["toddler music classes", "toddler music classes etobicoke"]
}

const ToddlerMusicPage = () => {
    return ( 
        <main className="toddler-music-page">
            <PageTitle title="Toddler Lessons in Etobicoke" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="md:flex md:items-center">
                    <p>Our “Musical Beginnings” class is a group class aimed at toddlers and preschoolers (ages 2-5). It is designed to introduce young children to music and help them develop an understanding of rhythm, pitch and musicality at an early age. This class is a great gateway into starting to learn an instrument.</p>
                    <img src="/lessons/toddler_lessons.jpg" className="mx-auto md:ms-5 mt-5 md:mt-0 md:h-52 rounded-md" />

                </div>
            </section>

            <section className="age px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start toddler music classes?" />
                <p>This class is designed for children aged 2-5.</p>
            </section>

            <section className="format px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Lesson Format" />
                <p>Classes take place in a small circle of 4-8 children and a teacher. During the class, the teacher engages children through songs and encourages them to sing along, clap, and perform movements to music. Children participate in music-making by using a variety of little instruments such as egg shakers, tambourines, and xylophones.</p>
            </section>

            <section className="duration px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>“Musical Beginnings” classes normally last for 45 minutes.</p>
            </section>

            <section className="materials px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Instruments" />
                <div className="md:flex md:items-center">
                    <img src="/lessons/toddler_instruments.jpg" className="mx-auto mb-5 md:mb-0 md:me-5 md:h-40 rounded-md" />
                    <p>The most common instruments in our group toddler and preschooler classes are egg shakers, tambourines, and xylophones.</p>
                </div>
            </section>

            <section className="teachers px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Teachers" />
                <p>Our teachers are all qualified professionals and passionate musicians. We do our best to match a student with a teacher that we think would best fit their musical goals as well as their personalities. We understand that while some students prefer a relaxed teaching approach, there are always those for whom a more strict approach is more effective. Students also have the option to request to change their teacher if they wish to do so. Learn more about our teachers on our <Link href="/teachers" className="dcam-link">Teachers Section</Link>.</p>
            </section>

            <PageBottomTrialButton />
        </main>
     );
}
 
export default ToddlerMusicPage;
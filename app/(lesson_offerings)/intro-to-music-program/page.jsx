import { PageTitle } from "../../components/PageTitle";
import { PageSubtitle } from "../../components/PageSubtitle";
import Link from "next/link";
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton";

export const metadata = {
    title: "Intro to Music Program | Da Capo Academy of Music",
    description: "This program is designed to give students a chance to try out several different instruments to help them decide which one they like best.",
    keywords: ["intro to music"]
}

const IntroToMusicPage = () => {
    return ( 
        <main className="intro-to-music-page">
            <PageTitle title="Intro To Music Program" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="md:flex md:items-center">
                    <p>This class is designed to give students a chance to try out several different instruments to help them decide which one they like best. It is aimed at students who have not yet picked an instrument to specialize in. At the end of this class, students can choose to sign up for regular lessons on the instrument they have chosen.</p>
                    <img src="/lessons/confused_child.jpg" className="mx-auto md:ms-5 mt-5 md:mt-0 md:h-52 rounded-md" />

                </div>
            </section>

            <section className="age px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start the Intro to Music Program?" />
                <p>We generally recommend 6 as the minimum age for this program.</p>
            </section>

            <section className="format px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Lesson Format" />
                <p>This program takes place over a period of four weeks, with one lesson per week. Each week, students get to try a different instrument. Students can choose a maximum of four instruments currently offered by us. Lessons take place either one-on-one with a teacher or in small groups.</p>
            </section>

            <section className="duration px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>All “Intro to Music” lessons are 30 minutes long.</p>
            </section>

            <section className="materials px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="md:flex md:items-center">
                    <img src="/lessons/instruments.jpg" className="mx-auto mb-5 md:mb-0 md:me-5 md:h-40 rounded-md" />
                    <p>We provide instruments for each lesson, but for portable instruments like guitars and violins, students are free to bring their own if they wish. Please let us know ahead of time if you plan to bring your own instrument or if need us to provide one for you.</p>
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
 
export default IntroToMusicPage;
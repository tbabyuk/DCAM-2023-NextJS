

import { PageTitle } from "../components/PageTitle";
import { PageSubtitle } from "../components/PageSubtitle";
import Link from "next/link";
import { PageBottomTrialButton } from "../components/PageBottomTrialButton";

const TheoryLessonsPage = () => {
    return ( 
        <main className="theory-page">
            <PageTitle title="Music Theory Lessons in Etobicoke" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                <PageSubtitle subtitle="Overview" />
                <div className="md:flex md:items-center">
                    <p>Quoting from the RCM Theory Syllabus (2016), “The study of theory is an essential component of well-rounded musical training and is intended to support the practical studies to enhance and enrich the musical experience.” We absolutely agree with this statement and strongly recommend that students study music theory concurrently with their practical studies.</p>
                    <img src="/lessons/theory_lessons.jpg" className="mx-auto md:ms-5 mt-5 md:mt-0 md:h-52 rounded-md" />

                </div>
            </section>

            <section className="age px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="What is a good age to start music theory lessons?" />
                <p>Students can begin studying the basics of music theory as young as 5 years old. Getting an early start in music theory gives young students an edge when the get into the more complicated material.</p>
            </section>

            <section className="format px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Lesson Format" />
                <p><strong>Private lessons</strong>: these are one-on-one lessons with student and teacher. Private lessons are a great option for students looking for highly-focused and individualized music instruction. For music theory, the teacher introduces the various concepts of music theory to the student and the student then does multiple practice exercises to ensure they understand and can apply the concept correctly. Prior to writing an official RCM theory exam, students are also given practice tests taken from previous theory examinations, which helps familiarize them with the test structure and gain confidence going into the exam.<br /><br />
                <strong>Semi-private lessons</strong>: these lessons consist of two students per teacher. Semi-private lessons can be a budget-friendly option for parents with two children or two friends wanting to learn the same instrument together. The one obvious drawback is that students don’t receive as much focused and individualized attention from the teacher as they do with private lessons. With regards to theory, the lesson format would look very similar to the one described in “private lessons”, with the addition of some pair-work and peer-checking exercises where students would get to work together.</p>
            </section>

            <section className="duration px-5 lg:px-36 xl:px-52 py-20">
                <PageSubtitle subtitle="Lesson Duration" />
                <p>At DCAM, students can choose between 30-minute, 45-minute, or 1-hour lessons. Small children generally start with 30-minute lessons and increase lesson duration as they get older and/or with the recommendation from their teacher. For teenagers and adults, a minimum lesson time of 45 minutes is strongly recommended.</p>
            </section>

            <section className="materials px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">
                <PageSubtitle subtitle="Materials" />
                <div className="md:flex md:items-center">
                    <img src="/lessons/theory_books.jpg" className="mx-auto mb-5 md:mb-0 md:me-5 md:h-40 rounded-md" />
                    <p>Since many of our students eventually intend to write the RCM theory exams, RCM books are our most popular choice for theory studies. However, there are plenty of other great theory books out there which we would be happy to teach if that is what our students would prefer. One example of such books is Barbara Wharram’s “Rudimentary Rudiments of Music”.</p>
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
 
export default TheoryLessonsPage;

import { PostTitle } from "../components/PostTitle"
import { PostSource } from "../components/PostSource"
import { PostSectionHeading } from "../components/PostSectionHeading"
import { PostHeading } from "../components/PostHeading"
import { PostSubheading } from "../components/PostSubheading"
import { PageBottomTrialButton } from "../components/PageBottomTrialButton"
import { PostDivider } from "../components/PostDivider"
import PostImage from "../components/PostImage"


export const metadata = {
    title: "RCM Violin Exam Requirements | Da Capo Academy of Music",
    description: "Breakdown of marks for all RCM Violin Exams",
    keywords: ["RCM", "RCM Exams", "RCM Violin Exams", "RCM Violin Exam Marks"]
  }


const PostViolinExamMarkGuide = () => {
  return (
            <main className="rcm-piano-exam-mark-guide-post text-gray-700 text-[0.9rem]">
            <PostTitle title="RCM Violin Exam Requirements (all grades)" date="July 2, 2020" />
            <PostImage url="https://dacapomusic.ca/wp-content/uploads/2020/07/rcm_violin_exam_requirements_cover.jpg" alt="RCM Violin Exam requirements cover photo"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="mb-5">If you are a violin student planning to do your RCM practical exams and want to know precisely what you will be graded on – this is the page for you! This guide will tell you exactly what each section of the exam is worth to help you decide how to allocate your prep time for optimal results! We created our “Ultimate RCM Violin Exam Mark Guide” with you – the student – in mind!</p>

                    <PostSource source="RCM Violin Syllabus, 2021" />
                </div>
            </section>

            <PostHeading heading="RCM VIOLIN EXAM REQUIREMENTS FOR: ELEMENTARY LEVELS (Preparatory - Level 4)" />
            <PostSubheading subheading="Preparatory Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_prep_requirements.jpg" alt="mark breakdown for Preparatory Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. This section is worth 56 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of 1 etude and technical tests. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 1 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_1_requirements.jpg" alt="mark breakdown for RCM Level 1 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. This section is worth 56 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 2 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_2_requirements.jpg" alt="mark breakdown for RCM Level 2 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. This section is worth 56 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 3 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_3_requirements.jpg" alt="mark breakdown for RCM Level 3 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. This section is worth 60 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 4 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_4_requirements.jpg" alt="mark breakdown for RCM Level 4 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. This section is worth 60 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>


            <PostDivider />

            <PostHeading heading="RCM VIOLIN EXAM REQUIREMENTS FOR: INTERMEDIATE LEVELS (Level 5 - Level 8)" />
            <PostSubheading subheading="Level 5 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_5_requirements.jpg" alt="mark breakdown for RCM Level 5 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 3 extra marks for List A and C pieces if they have them memorized. This section is worth 60 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Starting at level 5, students must also write a co-requisite theory exam if they wish to earn a Comprehensive Certificate for their particular level. For level 5, the co-requisite theory exam is “Level 5 Theory”.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 6 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_6_requirements.jpg" alt="mark breakdown for RCM Level 6 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 3 extra marks for List A and C  pieces if they have them memorized. This section is worth 60 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write a co-requisite theory exam (“Level 6 Theory”) if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 7 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_7_requirements.jpg" alt="mark breakdown for RCM Level 7 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 3 extra marks for List A and C pieces if they have them memorized. This section is worth 50 marks.</p>
                    <p className="mb-5"><span className="underline">Orchestral Excerpts</span>: this new component is introduced to the exam starting at this level and is worth 10 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write the co-requisite “Level 7 Theory” exam if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 8 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_8_requirements.jpg" alt="mark breakdown for RCM Level 8 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces and can earn 2 extra marks for List A, C and D pieces if they have them memorized.  This section is worth 50 marks.</p>
                    <p className="mb-5"><span className="underline">Orchestral Excerpts</span>: 2 excerpts are now required for this component, for a total of 10 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write the co-requisite “Level 8 Theory” exam if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>


            <PostDivider />

            <PostHeading heading="RCM VIOLIN EXAM REQUIREMENTS FOR: ADVANCED LEVELS (Level 9 - Level 10)" />
            <PostSubheading subheading="Level 9 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_9_requirements.jpg" alt="mark breakdown for RCM Level 9 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces for Level 9 Repertoire. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 50 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Orchestral Excerpts</span>: 2 excerpts must be performed, for a total of 10 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write the co-requisite “Level 8 Theory”, “Level 9 History”, and “Level 9 Harmony” (or “Keyboard Harmony”) exams if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 10 Violin" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/violin_level_10_requirements.jpg" alt="mark breakdown for RCM Level 10 Violin" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces for Level 10 Repertoire. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 50 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Orchestral Excerpts</span>: 2 excerpts must be performed, for a total of 10 marks.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 70 being the passing grade.</p>
                    <p className="italic mb-5">Students must also write the co-requisite “Level 8 Theory”, “Level 9 History”, “Level 9 Harmony” (or “Keyboard Harmony”), “Level 10 History”, and “Level 10 Harmony & Counterpoint” (or “Keyboard Harmony”) exams if they wish to earn a Comprehensive Certificate for this level.</p>
                    <p className="italic">Students who plan to pursue an ARCT (Associate of the Royal Conservatory) Diploma after Level 10 must receive either an overall mark of 75 or a minimum of 70% in each section of this exam. The numbers in bold parentheses indicate the minimum number of marks required to receive 70% for each section.</p>
                </div>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostViolinExamMarkGuide
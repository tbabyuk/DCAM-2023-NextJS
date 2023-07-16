
import { PostTitle } from "../components/PostTitle"
import { PostSource } from "../components/PostSource"
import { PostSectionHeading } from "../components/PostSectionHeading"
import { PostHeading } from "../components/PostHeading"
import { PostSubheading } from "../components/PostSubheading"
import { PageBottomTrialButton } from "../components/PageBottomTrialButton"
import { PostDivider } from "../components/PostDivider"
import PostImage from "../components/PostImage"


export const metadata = {
    title: "RCM Piano Exam Requirements | Da Capo Academy of Music",
    description: "Breakdown of marks for all RCM Piano Exams",
    keywords: ["RCM", "RCM Exams", "RCM Piano Exams", "RCM Piano Exam Marks"]
  }


const PostPianoExamMarkGuide = () => {
  return (
            <main className="rcm-piano-exam-mark-guide-post text-gray-700 text-[0.9rem]">
            <PostTitle title="RCM Piano Exam Requirements (all grades)" date="June 22, 2020" />
            <PostImage url="https://dacapomusic.ca/wp-content/uploads/2020/06/rcm_piano_exam_requirements_cover.jpg" alt="RCM Piano Exam requirements cover photo"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="mb-5">If you are a piano student planning to do your RCM practical exams and want to know precisely what you will be graded on – you’ve come to the right place! This guide will tell you exactly what each section of the exam is worth to help you decide how to allocate your prep time for optimal results! We created this RCM Piano Exam Mark Guide with you – the student – in mind!</p>

                    <p className="mb-5">Although the grading information in this article has been updated according to the latest, 2022 RCM Piano Syllabus, we kept the grading schemes for the old, 2015 Syllabus as we thought our readers might find it useful to compare what has changed, if anything. We hope you find it useful!</p>

                    <PostSource source="RCM Piano Syllabus, 2022" />
                </div>
            </section>

            <PostHeading heading="RCM PIANO EXAM REQUIREMENTS FOR: ELEMENTARY LEVELS (Preparatory A - Level 4)" />
            <PostSubheading subheading="Preparatory A Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/prep_a_requirements.jpg" alt="mark breakdown for RCM Prep A piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 66 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of technical tests only. A maximum of 14 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Preparatory B Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/prep_b_requirements.jpg" alt="mark breakdown for RCM Prep B piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 66 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of technical tests only. A maximum of 14 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 1 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_1_requirements.jpg" alt="mark breakdown for RCM Level 1 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 1 etude. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 2 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_2_requirements.jpg" alt="mark breakdown for RCM Level 2 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 1 etude. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 3 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_3_requirements.jpg" alt="mark breakdown for RCM Level 3 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 4 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_4_requirements.jpg" alt="mark breakdown for RCM Level 4 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="RCM PIANO EXAM REQUIREMENTS FOR: INTERMEDIATE LEVELS (Level 5 - Level 8)" />
            <PostSubheading subheading="Level 5 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_5_requirements.jpg" alt="mark breakdown for RCM Level 5 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Starting at level 5, students must also write a co-requisite theory exam if they wish to earn a Comprehensive Certificate for their particular level. For level 5, the co-requisite theory exam is Level 5 Theory.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 6 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_6_requirements.jpg" alt="mark breakdown for RCM Level 6 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write a co-requisite theory exam (Level 6 Theory) if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 7 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_7_requirements.jpg" alt="mark breakdown for RCM Level 7 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write a co-requisite theory exam (Level 7 Theory) if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 8 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_8_requirements.jpg" alt="mark breakdown for RCM Level 8 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces and can earn 1.5 extra marks per piece if they have it memorized.  A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write a co-requisite theory exam (Level 8 Theory) if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="RCM PIANO EXAM REQUIREMENTS FOR: ADVANCED LEVELS (Level 9 - Level 10)" />
            <PostSubheading subheading="Level 9 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_9_requirements.jpg" alt="mark breakdown for RCM Level 9 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces for Level 9 Repertoire. 1 mark per piece (see parentheses) will be deducted for not having it memorized.  A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write co-requisite theory exams if they wish to earn a Comprehensive Certificate for this level. For Level 9, the co-requisite theory exams consist of: “Level 8 Theory”, “Level 9 Harmony” (or “Keyboard Harmony”), and “Level 9 History”</p>
                </div>
            </section>

            <PostSubheading subheading="Level 10 Piano (new 2022 syllabus)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="/blog_images/level_10_requirements.jpg" alt="mark breakdown for RCM Level 10 piano" />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 5 pieces for Level 10 Repertoire. 1 mark per piece (see parentheses) will be deducted for not having it memorized.  A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic mb-5">Students must also write co-requisite theory exams if they wish to earn a Comprehensive Certificate for this level. For Level 10, the co-requisite theory exams consist of: “Level 8 Theory”, “Level 9 Harmony” (or “Keyboard Harmony”), “Level 9 History”,  “Level 10 Harmony & Counterpoint” (or “Keyboard Harmony”), and “Level 10 History”.</p>
                    <p className="italic">Students who plan to pursue an ARCT (Associate of the Royal Conservatory) Diploma after Level 10 must receive either an overall mark of 75 or a minimum of 70% in each section of this exam. The numbers in bold parentheses indicate the minimum number of marks required to receive 70% for each section.</p>
                </div>
            </section>


            <PageBottomTrialButton />
        </main>

  )
}

export default PostPianoExamMarkGuide
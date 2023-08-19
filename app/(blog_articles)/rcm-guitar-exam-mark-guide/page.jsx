
import { PostTitle } from "../../components/PostTitle"
import { PostSource } from "../../components/PostSource"
import { PostSectionHeading } from "../../components/PostSectionHeading"
import { PostHeading } from "../../components/PostHeading"
import { PostSubheading } from "../../components/PostSubheading"
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton"
import { PostDivider } from "../../components/PostDivider"
import PostImage from "../../components/PostImage"

export const metadata = {
    title: "RCM Guitar Exam Requirements (all grades) | Da Capo Academy of Music",
    description: "Planning to do your RCM guitar exams? Find out what you need to know and exactly how you will be graded in our RCM guitar exam mark guide!",
    keywords: ["RCM", "RCM Exams", "RCM Guitar Exams", "RCM Guitar Exam Marks"]
}

const PostGuitarExamMarkGuide = () => {
  return (
            <main className="rcm-piano-exam-mark-guide-post text-gray-700 text-[0.9rem]">
            <PostTitle title="RCM Guitar Exam Requirements (all grades)" date="July 28, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Frcm_guitar_requirements_cover.jpg?alt=media&token=fbc771be-a559-4d96-94fc-51041d4e8358" alt="RCM Guitar Exam requirements cover photo"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="mb-5">Planning to do your RCM guitar exam but not sure what exactly you will be graded on and how? You’ve come to the right place! This guide will tell you what each section of the exam is worth to help you decide how to better allocate your prep time for optimal results! We created this RCM Guitar Exam Mark Guide with you – the student – in mind!</p>

                    <PostSource source="RCM Classical Guitar Syllabus, 2018" />
                </div>
            </section>

            <PostHeading heading="RCM GUITAR EXAM REQUIREMENTS FOR: ELEMENTARY LEVELS (Preparatory - Level 4)" />
            <PostSubheading subheading="Preparatory Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_prep_requirements.jpg?alt=media&token=d43bcf71-397b-4314-9f0a-34a8a0a71404" alt="mark breakdown for RCM Preparatory Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of technical tests and one etude. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 1 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_1_requirements.jpg?alt=media&token=e4f6fff6-efff-45cf-9822-59d5f07ffe36" alt="mark breakdown for RCM Level 1 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 1 etude. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 2 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_2_requirements.jpg?alt=media&token=e59a66fd-b2fd-428e-8279-cf2b541dd1a0" alt="mark breakdown for RCM Level 2 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. No memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 3 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_3_requirements.jpg?alt=media&token=e3c021f9-0469-4baa-9a20-86d09464e89c" alt="mark breakdown for RCM Level 3 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. No memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 4 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_4_requirements.jpg?alt=media&token=56c59f84-57f8-4ecb-9d37-67b29fb39d6e" alt="mark breakdown for RCM Level 4 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                </div>
            </section>


            <PostDivider />

            <PostHeading heading="RCM GUITAR EXAM REQUIREMENTS FOR: INTERMEDIATE LEVELS (Level 5 - Level 8)" />
            <PostSubheading subheading="Level 5 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_5_requirements.jpg?alt=media&token=e5d55dde-8cb0-4e11-b078-0c000eff733b" alt="mark breakdown for RCM Level 5 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Starting at level 5, students must also write a co-requisite theory exam if they wish to earn a Comprehensive Certificate for their particular level. For level 5, the co-requisite theory exam is “Level 5 Theory”.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 6 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_6_requirements.jpg?alt=media&token=b8f4fc62-7261-48aa-a10b-51ce946307c0" alt="mark breakdown for RCM Level 6 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write a co-requisite theory exam (“Level 6 Theory”) if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 7 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_7_requirements.jpg?alt=media&token=34f04003-fe97-43c6-add7-cb291a9072bb" alt="mark breakdown for RCM Level 7 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write the co-requisite “Level 7 Theory” exam if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 8 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_8_requirements.jpg?alt=media&token=7ab864ea-b951-4726-99c6-f5c12168f4aa" alt="mark breakdown for RCM Level 8 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write the co-requisite “Level 8 Theory” exam if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>


            <PostDivider />

            <PostHeading heading="RCM GUITAR EXAM REQUIREMENTS FOR: ADVANCED LEVELS (Level 9 - Level 10)" />
            <PostSubheading subheading="Level 9 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_9_requirements.jpg?alt=media&token=066e57fd-ccc7-4492-bde0-75c5578976b1" alt="mark breakdown for RCM Level 9 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic">Students must also write the co-requisite “Level 8 Theory”, “Level 9 History”, and “Level 9 Harmony” (or “Keyboard Harmony”) exams if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PostSubheading subheading="Level 10 Guitar" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20 flex flex-col md:flex-row">
                <div className="flex-shrink-0 flex justify-center items-start">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-guitar-exam-mark-guide%2Fguitar_level_10_requirements.jpg?alt=media&token=181779b5-8bf6-4a4e-9cb6-5e90e8051383" alt="mark breakdown for RCM Level 10 Guitar" style={{width: "400px"}} />
                </div>
                <div className="mt-8 md:mt-0 md:ms-8">
                    <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 60 marks can be earned for this section.</p>
                    <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                    <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                    <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                    <p className="italic mb-5">Students must also write the co-requisite “Level 8 Theory”, “Level 9 History”, “Level 9 Harmony” (or “Keyboard Harmony”), “Level 10 History”, and “Level 10 Harmony & Counterpoint” (or “Keyboard Harmony”) exams if they wish to earn a Comprehensive Certificate for this level.</p>
                </div>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostGuitarExamMarkGuide
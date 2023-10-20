import { PostTitle } from "@/app/components/PostTitle"
import { PostSource } from "@/app/components/PostSource"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheadingRed } from "@/app/components/PostSubheadingRed"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "RCM Violin Exam Requirements (all grades) | Da Capo Academy of Music",
    description: "Find out exactly what the RCM Violin exam requirements are for all grades and how each exam is graded in this quick-reference guide.",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "RCM Violin Exam Requirements (all grades) | Da Capo Academy of Music",
        description: "Find out exactly what the RCM Violin exam requirements are for all grades and how each exam is graded in this quick-reference guide.",
        url: "https://dacapomusic.ca/blog/rcm-violin-exam-mark-guide",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-07-03T01:09:21+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Frcm_violin_exam_requirements_cover.jpg?alt=media&token=3d10b0fd-add2-4f0c-a474-5ae99ed7549e",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostViolinExamMarkGuide = () => {
  return (
            <main className="rcm-violin-exam-mark-guide-post text-gray-700 text-[0.95rem]">
            <PostTitle title="RCM Violin Exam Requirements (all grades)" date="July 2, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Frcm_violin_exam_requirements_cover.jpg?alt=media&token=3d10b0fd-add2-4f0c-a474-5ae99ed7549e" alt="RCM Violin Exam requirements cover photo"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="mb-5">If you are a violin student planning to do your RCM practical exams and want to know precisely what you will be graded on - this is the page for you! This guide will tell you exactly what each section of the exam is worth to help you decide how to allocate your prep time for optimal results! We created our “Ultimate RCM Violin Exam Mark Guide” with you - the student - in mind!</p>
                    <PostSource source="RCM Violin Syllabus, 2021" />
                </div>
            </section>

            <SectionDivider />

            <PostHeading heading="RCM VIOLIN EXAM REQUIREMENTS FOR: ELEMENTARY LEVELS (Preparatory - Level 4)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Preparatory Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_prep_requirements.jpg?alt=media&token=22279b70-ffaa-48e9-866c-bc237a0b5177" alt="mark breakdown for Preparatory Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. This section is worth 56 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of 1 etude and technical tests. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 1 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_1_requirements.jpg?alt=media&token=8e7c6a64-9eb6-41e7-9c90-4434321b2ad9" alt="mark breakdown for RCM Level 1 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. This section is worth 56 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 2 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_2_requirements.jpg?alt=media&token=c9015077-5303-4460-bee0-896bc079f419" alt="mark breakdown for RCM Level 2 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 2 pieces and can earn 3 extra marks per piece if they have it memorized. This section is worth 56 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 3 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_3_requirements.jpg?alt=media&token=e63114eb-b140-49b7-bf7e-e4214e8c5ee8" alt="mark breakdown for RCM Level 3 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. This section is worth 60 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 4 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_4_requirements.jpg?alt=media&token=9707711f-302c-4261-b1b7-8f4ce5f138aa" alt="mark breakdown for RCM Level 4 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. This section is worth 60 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>


            <PostDivider />

            <PostHeading heading="RCM VIOLIN EXAM REQUIREMENTS FOR: INTERMEDIATE LEVELS (Level 5 - Level 8)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 5 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_5_requirements.jpg?alt=media&token=7d605e0f-adb3-46af-b179-a8a5aa3b1029" alt="mark breakdown for RCM Level 5 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 3 extra marks for List A and C pieces if they have them memorized. This section is worth 60 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Starting at level 5, students must also write a co-requisite theory exam if they wish to earn a Comprehensive Certificate for their particular level. For level 5, the co-requisite theory exam is “Level 5 Theory”.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 6 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_6_requirements.jpg?alt=media&token=e02fe93a-2416-4952-90c1-39e0b9818e5f" alt="mark breakdown for RCM Level 6 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 3 extra marks for List A and C  pieces if they have them memorized. This section is worth 60 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 2 etudes and technical tests. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write a co-requisite theory exam (“Level 6 Theory”) if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 7 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_7_requirements.jpg?alt=media&token=0c82f47f-17b9-4c75-8f5a-89032fc5a444" alt="mark breakdown for RCM Level 7 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 3 extra marks for List A and C pieces if they have them memorized. This section is worth 50 marks.</p>
                        <p className="mb-5"><span className="underline">Orchestral Excerpts</span>: this new component is introduced to the exam starting at this level and is worth 10 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write the co-requisite “Level 7 Theory” exam if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 8 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_8_requirements.jpg?alt=media&token=40a9b3a0-6ad1-4b3f-a5ff-94d79b6088b3" alt="mark breakdown for RCM Level 8 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces and can earn 2 extra marks for List A, C and D pieces if they have them memorized.  This section is worth 50 marks.</p>
                        <p className="mb-5"><span className="underline">Orchestral Excerpts</span>: 2 excerpts are now required for this component, for a total of 10 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write the co-requisite “Level 8 Theory” exam if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>


            <PostDivider />

            <PostHeading heading="RCM VIOLIN EXAM REQUIREMENTS FOR: ADVANCED LEVELS (Level 9 - Level 10)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 9 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_9_requirements.jpg?alt=media&token=029d20a6-a88a-4b79-8218-8d8603824097" alt="mark breakdown for RCM Level 9 Violin" style={{width: "400px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces for Level 9 Repertoire. A number of marks (see parentheses) will be deducted for not having memorized the indicated pieces. A maximum of 50 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Orchestral Excerpts</span>: 2 excerpts must be performed, for a total of 10 marks.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes 1 etude and technical tests. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 20 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Musicianship</span>: includes Ear Tests and Sight Reading components, each worth 10 marks, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write the co-requisite “Level 8 Theory”, “Level 9 History”, and “Level 9 Harmony” (or “Keyboard Harmony”) exams if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 10 Violin" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-violin-exam-mark-guide%2Fviolin_level_10_requirements.jpg?alt=media&token=1a95241d-bac1-40ee-b181-2922e0a2547a" alt="mark breakdown for RCM Level 10 Violin" style={{width: "400px"}} />
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
                </div>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostViolinExamMarkGuide
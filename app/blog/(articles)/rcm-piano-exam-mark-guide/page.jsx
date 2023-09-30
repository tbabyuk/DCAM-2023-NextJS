import { PostTitle } from "@/app/components/PostTitle"
import { PostSource } from "@/app/components/PostSource"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheading } from "@/app/components/PostSubheading"
import { PostSubheadingRed } from "@/app/components/PostSubheadingRed"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "RCM Piano Exam Requirements (all grades) | Da Capo Academy of Music",
    description: "Find out exactly what the RCM Piano exam requirements are for all grades and how each exam is graded in this quick-reference guide.",
    keywords: ["RCM", "RCM Exams", "RCM Piano Exams", "RCM Piano Exam Marks"],
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "RCM Piano Exam Requirements (all grades) | Da Capo Academy of Music",
        description: "Find out exactly what the RCM Piano exam requirements are for all grades and how each exam is graded in this quick-reference guide.",
        url: "https://dacapomusic.ca/blog/rcm-piano-exam-mark-guide",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-06-23T02:03:09+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Frcm_piano_exam_requirements_cover.jpg?alt=media&token=985855d2-b649-4179-9a16-4d4e8a85dd58",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostPianoExamMarkGuide = () => {
  return (
            <main className="rcm-piano-exam-mark-guide-post text-gray-700 text-[0.95rem]">
            <PostTitle title="RCM Piano Exam Requirements (all grades)" date="June 22, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Frcm_piano_exam_requirements_cover.jpg?alt=media&token=985855d2-b649-4179-9a16-4d4e8a85dd58" alt="RCM Piano Exam requirements cover photo"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="mb-5">If you are a piano student planning to do your RCM practical exams and want to know precisely what you will be graded on - you've come to the right place! This guide will tell you exactly what each section of the exam is worth to help you decide how to allocate your prep time for optimal results! We created this RCM Piano Exam Mark Guide with you - the student - in mind!</p>

                    <p className="mb-5">Although the grading information in this article has been updated according to the latest, 2022 RCM Piano Syllabus, we kept the grading schemes for the old, 2015 Syllabus as we thought our readers might find it useful to compare what has changed, if anything. We hope you find it useful!</p>

                    <PostSource source="RCM Piano Syllabus, 2022" />
                </div>
            </section>

            <SectionDivider />

            <PostHeading heading="RCM PIANO EXAM REQUIREMENTS FOR: ELEMENTARY LEVELS (Preparatory A - Level 4)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Preparatory A Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2FprepA_22.PNG?alt=media&token=8affba27-9eea-4359-b721-e719676a6409" alt="mark breakdown for RCM Prep A piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 66 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of technical tests only. A maximum of 14 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Preparatory B Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2FprepB_22.PNG?alt=media&token=d81d69df-9fd4-499a-a969-07d5fed25b78" alt="mark breakdown for RCM Prep B piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 66 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: consists of technical tests only. A maximum of 14 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 1 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl1_22.PNG?alt=media&token=657402b9-d5d2-4859-8e5d-c7b5ab2051a0" alt="mark breakdown for RCM Level 1 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 1 etude. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 2 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl2_22.PNG?alt=media&token=c7f64789-48d9-4226-bf8f-bcabdc3896e5" alt="mark breakdown for RCM Level 2 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 1 etude. Note that no memory marks are given for the etude, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 3 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl3_22.PNG?alt=media&token=07fac88f-dafa-458e-9701-0a4f7a0b2132" alt="mark breakdown for RCM Level 3 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 4 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl4_22.PNG?alt=media&token=1385fd15-5f81-43ee-89b9-a0a61cbfb3b8" alt="mark breakdown for RCM Level 4 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold">The exam is out of 100, with 60 being the passing grade.</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="RCM PIANO EXAM REQUIREMENTS FOR: INTERMEDIATE LEVELS (Level 5 - Level 8)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 5 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl5_22.PNG?alt=media&token=b827ae54-5649-4f52-a86a-b4d3eeb9639f" alt="mark breakdown for RCM Level 5 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Starting at level 5, students must also write a co-requisite theory exam if they wish to earn a Comprehensive Certificate for their particular level. For level 5, the co-requisite theory exam is Level 5 Theory.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 6 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl6_22.PNG?alt=media&token=ee9fbbdb-1a3e-40f4-a6ee-7b3c294feca4" alt="mark breakdown for RCM Level 6 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write a co-requisite theory exam (Level 6 Theory) if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 7 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl7_22.PNG?alt=media&token=1cdf808d-4087-4603-adcc-03154cc6e5b1" alt="mark breakdown for RCM Level 7 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write a co-requisite theory exam (Level 7 Theory) if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 8 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl8_22.PNG?alt=media&token=aa270e15-9827-4083-b9bd-6adef9541827" alt="mark breakdown for RCM Level 8 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces and can earn 1.5 extra marks per piece if they have it memorized.  A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write a co-requisite theory exam (Level 8 Theory) if they wish to earn a Comprehensive Certificate for this level.</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="RCM PIANO EXAM REQUIREMENTS FOR: ADVANCED LEVELS (Level 9 - Level 10)" bottom="mb-12" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 9 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl9_22.PNG?alt=media&token=bda6e259-02da-495d-96aa-364ca10f35f4" alt="mark breakdown for RCM Level 9 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 4 pieces for Level 9 Repertoire. 1 mark per piece (see parentheses) will be deducted for not having it memorized.  A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Students must also write co-requisite theory exams if they wish to earn a Comprehensive Certificate for this level. For Level 9, the co-requisite theory exams consist of: “Level 8 Theory”, “Level 9 Harmony” (or “Keyboard Harmony”), and “Level 9 History”</p>
                    </div>
                </div>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-20">
                <PostSubheadingRed subheading="Level 10 Piano" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl10_22.PNG?alt=media&token=d16c7ec4-14f9-47f2-90ba-b641fd37ad06" alt="mark breakdown for RCM Level 10 piano" />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 5 pieces for Level 10 Repertoire. 1 mark per piece (see parentheses) will be deducted for not having it memorized.  A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic mb-5">Students must also write co-requisite theory exams if they wish to earn a Comprehensive Certificate for this level. For Level 10, the co-requisite theory exams consist of: “Level 8 Theory”, “Level 9 Harmony” (or “Keyboard Harmony”), “Level 9 History”,  “Level 10 Harmony & Counterpoint” (or “Keyboard Harmony”), and “Level 10 History”.</p>
                        <p className="italic">Students who plan to pursue an ARCT (Associate of the Royal Conservatory) Diploma after Level 10 must receive either an overall mark of 75 or a minimum of 70% in each section of this exam. The numbers in bold parentheses indicate the minimum number of marks required to receive 70% for each section.</p>
                    </div>
                </div>
            </section>


            <PageBottomTrialButton />
        </main>

  )
}

export default PostPianoExamMarkGuide
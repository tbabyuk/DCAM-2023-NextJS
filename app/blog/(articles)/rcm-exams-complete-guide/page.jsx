import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheading } from "@/app/components/PostSubheading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import { PostSource } from "@/app/components/PostSource"
import Link from "next/link"
import PostImage from "@/app/components/PostImage"

export const metadata = {
    title: "RCM Exams: Your Complete Guide | Da Capo Academy of Music",
    description: "Exam fees, exam dates, types of exams, exam mark information, and more! Your complete resource for all you need to know about RCM Exams.",
    keywords: ["rcm exams", "rcm exams explained", "about rcm exams", "royal conservatory of music exams"]
}

const PostRCMExamsGuide = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="RCM Exams: Your Complete Guide" date="April 8, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Frcm_exams_complete_guide_cover.jpg?alt=media&token=f1afe2cc-5aa9-4d9c-b8dc-5e25f3e0f165" alt="RCM Exams Complete Guide cover"/>

            <PostSectionHeading heading="Table of Contents" />
            <section className="px-5 lg:px-36 xl:px-64 mb-32">
                <div>
                    <ul className="list-disc list-inside leading-8 bg-gray-100 w-fit mx-auto p-5 rounded">
                        <li><Link href="#what_is_rcm" className="dcam-link">What is RCM?</Link></li>
                        <li><Link href="#types_of_rcm_exams" className="dcam-link">Types of RCM Exams</Link></li>
                        <li><Link href="#list_of_rcm_exams" className="dcam-link">List of RCM Exams</Link></li>
                        <li><Link href="#instruments_offered" className="dcam-link">List of Instruments Offered</Link></li>
                        <li><Link href="#length_of_rcm_exams" className="dcam-link">How long are RCM Exams?</Link></li>
                        <li><Link href="#rcm_exam_dates" className="dcam-link">RCM Exam dates</Link></li>
                        <li><Link href="#rcm_exam_fees" className="dcam-link">RCM Exam fees</Link></li>
                        <li><Link href="#rcm_exam_grading" className="dcam-link">How are RCM Exams graded?</Link></li>
                        <li><Link href="#when_are_results_posted" className="dcam-link">When are RCM Exam results posted?</Link></li>
                        <li><Link href="#rcm_and_highschool_credits" className="dcam-link">RCM Exams and high school credits</Link></li>
                        <li><Link href="#rcm_contact" className="dcam-link">RCM contact information</Link></li>
                    </ul>
                </div>           
            </section>

            <span id="what_is_rcm" />
            <PostHeading heading="What is RCM?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>RCM stands for Royal Conservatory of Music, which was founded in Toronto, Canada in 1886 and prides itself on being one of the largest and most respected music-education institutions in the world. RCM offers a variety of exams as part of its popular “Certificate Program”. These exams evaluate students’ proficiency on a musical instrument or knowledge of music-related concepts and topics. Students who successfully pass their exams receive an official certificate recognizing their achievement. RCM certificates are well-regarded and widely-recognized as being an objective and reliable measure of a student’s musical proficiency. According to RCM, more than 100,000 of their exams are taken every year across North America.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Frcm_building_toronto.jpeg?alt=media&token=60f05310-a6aa-4d3a-b36c-d3e70c3316e5" alt="rcm building in Toronto" style={{width: "320px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>The RCM building at 273 Bloor St. West, Toronto, Canada</small></figcaption>
                    </figure>
                </div>
            </section>

            <PostDivider />

            <span id="types_of_rcm_exams" />
            <PostHeading heading="Types of RCM Exams" bottom="mb-16" />
            <PostSubheading subheading="Practical Exams" align="text-center" bottom="mb-8" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Fpractical_exams.png?alt=media&token=221517ba-09a3-4784-9e30-f079eacc99e1" alt="RCM practical exams" style={{width: "160px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>Practical exams are mostly about your ability and expertise on your instrument. They are usually done one-on-one with an examiner and can take place either in-person or (since Covid-19) online through Zoom. Practical exams generally consist of four parts: “repertoire”, “technical requirements”, “ear tests” and “sight reading”, but the exact structure can differ depending on the instrument and level.</p>
                    </div>
                </div>
                <p className="leading-8 mb-6"><span className="font-bold">1. Repertoire</span> - for this part, students are required to perform a set number of musical pieces, each representing a different style and musical period. Each piece can be chosen from a wide selection of options that RCM provides. The higher the student's level, the more pieces they must perform and the bigger their complexity. This is the longest part of the exam.</p>
                <p className="leading-8 mb-6"><span className="font-bold">2. Technical Requirements</span> - designed to complement the demands of the repertoire, this part is sub-divided into “technical tests” and “etudes”. Technical tests are things like scales, chords, and arpeggios, which are meant to develop students' technical prowess and finger dexterity. Etudes are shorter musical pieces designed to develop a specific technical skill within a musical context.</p>
                <p className="leading-8 mb-6"><span className="font-bold">3. Ear Tests</span> - this part of the practical exam involves almost no playing on the part of the student. Instead, the the student is asked to listen to and correctly identify things like intervals, chord qualities, and chord progressions, which are played by the examiner. Students are also required to listen to a short melody and then play it back to the examiner.</p>
                <p className="leading-8 mb-6"><span className="font-bold">4. Sight Reading</span> - this is where students are given a musical excerpt that they have (hopefully) never encountered before. After clapping the rhythm of a short passage from this excerpt, they must then play the whole excerpt. As a general rule, the difficulty level of the sight-reading excerpt is 3 levels below the level for which you are doing the exam. So for a level 6 exam, the sight-reading excerpt will be comparable in difficulty to RCM level 3. </p>
            </section>

            <PostSubheading subheading="Written Exams" align="text-center" bottom="mb-8" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p className="mb-6">These exams take place either in arcm exams - written classroom setting with a supervisor or online on your computer. The most common written exams are “theory”, “history”, and “harmony”.</p>
                        <p><span className="font-bold">1. Theory</span> - these exams test students' knowledge of the building blocks of music and include topics such as major and minor scales, chords, intervals, rhythm, transposition, etc.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Fwritten_exams.png?alt=media&token=bf6b1b9e-5ba5-476d-9e75-46020c7165d5" alt="RCM practical exams" style={{width: "190px"}} className="rounded-md" />
                    </figure>
                </div>
                <p className="leading-8 mb-6"><span className="font-bold">2. History</span> - as the name suggests, history exams test students’ knowledge of important dates, musical eras and developments associated with each one, biographical information of well-known composers, etc. Expect to do plenty of memorizing here.</p>
                <p className="leading-8 mb-6"><span className="font-bold">3. Harmony</span> - harmony is what happens when many sounds come together. On this exam, students are tested on their knowledge of concepts such as counterpoint, chord progressions, harmonization, cadences, modulations, phrase structures, compositional techniques, and more.</p>
            </section>

            
            <PostDivider />
            
            <span id="list_of_rcm_exams" />
            <PostHeading heading="List of RCM Exams" bottom="mb-16" />
            <PostSubheading subheading="Practical Exams" align="text-center" bottom="mb-8" />     
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-10">Note: exams and exam names might differ from instrument to instrument. For purposes of demonstration, the following list is for <span className="font-bold">piano</span>. To see a list of practical exams for other instruments, download the appropriate syllabus from the RCM website by clicking <a href="https://www.rcmusic.com/learning/examinations/academic-resources-and-policies/syllabi-and-syllabi-errata" target="_blank" className="dcam-link">here</a>.</p>
                <table className="blog-table mx-auto w-full md:w-[50%]">
                    <thead>
                        <tr>
                            <th>Exams (piano only example)</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Preparatory A</td>
                        </tr>
                        <tr>
                            <td>Preparatory B</td>
                        </tr>
                        <tr>
                            <td>Level 1</td>
                        </tr>
                        <tr>
                            <td>Level 2</td>
                        </tr>
                        <tr>
                            <td>Level 3</td>
                        </tr>
                        <tr>
                            <td>Level 4</td>
                        </tr>
                        <tr>
                            <td>Level 5</td>
                        </tr>
                        <tr>
                            <td>Level 6</td>
                        </tr>
                        <tr>
                            <td>Level 7</td>
                        </tr>
                        <tr>
                            <td>Level 8</td>
                        </tr>
                        <tr>
                            <td>Level 9</td>
                        </tr>
                        <tr>
                            <td>Level 10</td>
                        </tr>
                        <tr>
                            <td>Associate Diploma (ARCT) in Piano, Performer</td>
                        </tr>
                        <tr>
                            <td>Associate Diploma (ARCT) in Piano, Pedagogy</td>
                        </tr>
                        <tr>
                            <td>Licentiate Diploma (LRCM) in Piano, Performer</td>
                        </tr>
                    </tbody>
                </table>
                <PostSource source="RCM Piano Syllabus, 2022 Edition" />
            </section>
            <PostSubheading subheading="Written Exams" align="text-center" bottom="mb-8" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">     
                <p className="leading-8 mb-10">Note: this list only includes exams that are part of the “Celebrate Theory” book series (and are also the most popular). You can find more exams in the “RCM Exam Fees” section. Keep in mind that Preparatory to Level 4 theory levels are not tested with formal examinations.</p>
                <table className="blog-table mx-auto w-full md:w-[50%]">
                    <thead>
                        <tr>
                            <th>Exams</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Level 5 Theory</td>
                        </tr>
                        <tr>
                            <td>Level 6 Theory</td>
                        </tr>
                        <tr>
                            <td>Level 7 Theory</td>
                        </tr>
                        <tr>
                            <td>Level 8 Theory</td>
                        </tr>
                        <tr>
                            <td>Level 9 Harmony</td>
                        </tr>
                        <tr>
                            <td>Level 9 History</td>
                        </tr>
                        <tr>
                            <td>Level 10 Harmony & Counterpoint</td>
                        </tr>
                        <tr>
                            <td>Level 10 History</td>
                        </tr>
                        <tr>
                            <td>ARCT Harmony & Counterpoint</td>
                        </tr>
                        <tr>
                            <td>ARCT History</td>
                        </tr>
                        <tr>
                            <td>ARCT Analysis</td>
                        </tr>
                    </tbody>
                </table>
                <PostSource source="RCM Theory Syllabus, 2016 Edition" />
            </section>

            <PostDivider />

            <span id="instruments_offered" />
            <PostHeading heading="List of Instruments Offered" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Finstruments.png?alt=media&token=29a5ae65-959e-4059-a85f-c0daa66cd5e6" alt="musical instruments" className="rounded-md md:w-[55%]" style={{width: "250px"}} />
                </figure>
                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <tbody className="text-center">
                        <tr>
                            <td>Accordion</td>
                        </tr>
                        <tr>
                            <td>Bassoon</td>
                        </tr>
                        <tr>
                            <td>Cello</td>
                        </tr>
                        <tr>
                            <td>Clarinet</td>
                        </tr>
                        <tr>
                            <td>Classical guitar</td>
                        </tr>
                        <tr>
                            <td>Double bass</td>
                        </tr>
                        <tr>
                            <td>Euphonium</td>
                        </tr>
                        <tr>
                            <td>Flute</td>
                        </tr>
                        <tr>
                            <td>Harp</td>
                        </tr>
                        <tr>
                            <td>Harpsichord</td>
                        </tr>
                        <tr>
                            <td>Horn</td>
                        </tr>
                        <tr>
                            <td>Oboe</td>
                        </tr>
                        <tr>
                            <td>Organ</td>
                        </tr>
                        <tr>
                            <td>Percussion</td>
                        </tr>
                        <tr>
                            <td>Piano</td>
                        </tr>
                        <tr>
                            <td>Recorder</td>
                        </tr>
                        <tr>
                            <td>Saxophone</td>
                        </tr>
                        <tr>
                            <td>Speech arts and drama</td>
                        </tr>
                        <tr>
                            <td>Theory</td>
                        </tr>
                        <tr>
                            <td>Trombone</td>
                        </tr>
                        <tr>
                            <td>Trumpet</td>
                        </tr>
                        <tr>
                            <td>Tuba</td>
                        </tr>
                        <tr>
                            <td>Viola</td>
                        </tr>
                        <tr>
                            <td>Violin</td>
                        </tr>
                        <tr>
                            <td>Voice</td>
                        </tr>
                    </tbody>
                </table>
                <PostSource source="The Royal Conservatory" /><br />
            </section>


            <PostDivider />

            <span id="length_of_rcm_exams" />
            <PostHeading heading="How Long Are RCM Exams?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Frcm_exam_length.png?alt=media&token=bcb65b3a-32de-4cf6-b87c-c695d7686382" alt="a clock" className="rounded-md md:w-[55%]" style={{width: "200px"}} />
                </figure>
                <PostSubheading subheading="Practical Exams" align="text-center" bottom="mb-8" />     
                <p className="leading-8 mb-10">RCM does not specify exact length for its practical exams, but they generally go anywhere from 15 minutes for beginner levels to over 1 hour for the advanced levels.</p>
                <PostSubheading subheading="Written Exams" align="text-center" bottom="mb-8" />     
                <p className="leading-8 mb-10">Written exams have time limits and students must finish their exam within the allotted time.</p>
                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <thead>
                        <tr>
                            <th>Exam</th>
                            <th>In-Person</th>
                            <th>Online</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Level 5 Theory</td>
                            <td>1 hour</td>
                            <td>1 hour</td>
                        </tr>
                        <tr>
                            <td>Level 6 Theory</td>
                            <td>2 hours</td>
                            <td>1 hour</td>
                        </tr>
                        <tr>
                            <td>Level 7 Theory</td>
                            <td>2 hours</td>
                            <td>1 hour</td>
                        </tr>
                        <tr>
                            <td>Level 8 Theory</td>
                            <td>2 hours</td>
                            <td>1 hour</td>
                        </tr>
                        <tr>
                            <td>Level 9 Harmony</td>
                            <td>3 hours</td>
                            <td>not available</td>
                        </tr>
                        <tr>
                            <td>Level 9 History</td>
                            <td>not available</td>
                            <td>70 minutes</td>
                        </tr>
                        <tr>
                            <td>Level 10 Harmony & Counterpoint</td>
                            <td>3 hours</td>
                            <td>not available</td>
                        </tr>
                        <tr>
                            <td>Level 10 History</td>
                            <td>not available</td>
                            <td>110 minutes</td>
                        </tr>
                        <tr>
                            <td>ARCT Harmony & Counterpoint</td>
                            <td>3 hours</td>
                            <td>not available</td>
                        </tr>
                        <tr>
                            <td>ARCT History</td>
                            <td>not available</td>
                            <td>150 minutes</td>
                        </tr>
                        <tr>
                            <td>ARCT Analysis</td>
                            <td>3 hours</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className="px-5 mt-10 lg:px-36 xl:px-64 text-center">
                    <p className="italic text-gray-500">For all other exams and up-to-date information on this topic, please visit the RCM website at <a href="https://www.rcmusic.com/learning/examinations/remote-exams/remote-theory-exams/overview" target="_blank" className="dcam-link">this link</a></p>
                </div>            
            </section>

            <PostDivider />

            <span id="rcm_exam_dates" />
            <PostHeading heading="RCM Exam Dates" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="Remote (online) Exams" align="text-center" bottom="mb-8" />     
                <p className="leading-8 mb-10">Remote exams can be booked on a continuous basis. You can register for a Remote Exam from your RCM account.</p>

                <PostSubheading subheading="In-Person Exams (2023-2024)" align="text-center" bottom="mb-8" />     
                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <thead>
                        <tr>
                            <th colSpan="2">AUGUST 2023 SESSION</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Registration Opens</td>
                            <td>April 4, 2023</td>
                        </tr>
                        <tr>
                            <td>Registration Deadline</td>
                            <td>June 6, 2023</td>
                        </tr>
                        <tr>
                            <td>Theory Examinations</td>
                            <td>August 11 & 12, 2023</td>
                        </tr>
                        <tr>
                            <td>Practical Examinations</td>
                            <td>August 14 - 26, 2023</td>
                        </tr>
                    </tbody>
                </table>

                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <thead>
                        <tr>
                            <th colSpan="2">DECEMBER 2023/JANUARY 2024 SESSION</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Registration Opens</td>
                            <td>September 12, 2023</td>
                        </tr>
                        <tr>
                            <td>Registration Deadline</td>
                            <td>November 7, 2023</td>
                        </tr>
                        <tr>
                            <td>Theory Examinations</td>
                            <td>December 8 & 9, 2023</td>
                        </tr>
                        <tr>
                            <td>Practical Examinations</td>
                            <td>January 15 - 27, 2024</td>
                        </tr>
                    </tbody>
                </table>

                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <thead>
                        <tr>
                            <th colSpan="2">APRIL 2024 SESSION (PIANO ONLY)</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Registration Opens</td>
                            <td>November 14, 2023</td>
                        </tr>
                        <tr>
                            <td>Registration Deadline</td>
                            <td>January 9, 2024</td>
                        </tr>
                        <tr>
                            <td>Theory Examinations</td>
                            <td>not available</td>
                        </tr>
                        <tr>
                            <td>Practical Examinations</td>
                            <td>April 15 - 20, 2024</td>
                        </tr>
                    </tbody>
                </table>

                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <thead>
                        <tr>
                            <th colSpan="2">MAY/JUNE 2024 SESSION</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Registration Opens</td>
                            <td>January 16, 2024</td>
                        </tr>
                        <tr>
                            <td>Registration Deadline</td>
                            <td>March 5, 2024</td>
                        </tr>
                        <tr>
                            <td>Theory Examinations</td>
                            <td>May 10 & 11, 2024</td>
                        </tr>
                        <tr>
                            <td>Practical Examinations</td>
                            <td>June 3 - 22, 2024</td>
                        </tr>
                    </tbody>
                </table>

                <PostSource source={<a href="https://www.rcmusic.com/learning/examinations/examination-resources-for-students/examination-dates-canada#panel-445" className="dcam-link">RCM Examination Dates - Canada</a>} /><br />

                <div className="text-center">
                    <p className="italic text-gray-500">For more Exam dates, please visit RCM website at <a href="https://www.rcmusic.com/learning/examinations/examination-resources-for-students/examination-dates-canada#panel-445" target="_blank" className="dcam-link">this link</a></p>
                </div><br />
                <div className="text-center">
                    <p className="italic text-gray-500">For US dates, please visit RCM website at <a href="https://www.rcmusic.com/learning/examinations/examination-resources-for-students/examination-dates-us#panel-446" target="_blank" className="dcam-link">this link</a></p>
                </div>
           
            </section>
            
            <PostDivider />

            <span id="rcm_exam_fees" />
            <PostHeading heading="RCM Exam Fees" bottom="mb-10" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="text-center mb-16">
                    <p className="italic text-gray-500">The below are Canadian fees. For US fees, click <a href="https://www.rcmusic.com/learning/examinations/examination-resources-for-students/examination-and-other-service-fees-us#PracticalExaminationFees-6" target="_blank" className="dcam-link">here</a></p><br />
                    <p className="italic text-gray-500">The fees below are up to date as of September 2023.</p>
                </div>
                <PostSubheading subheading="Practical Exam Fees" align="text-center" bottom="mb-8" />     
                <table className="blog-table mx-auto w-full md:w-[50%] mb-20">
                    <thead>
                        <tr>
                            <th>Exam</th>
                            <th>Fee</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Preparatory (non-piano)</td>
                            <td>$66</td>
                        </tr>
                        <tr>
                            <td>Preparatory A</td>
                            <td>$66</td>
                        </tr>
                        <tr>
                            <td>Preparatory B</td>
                            <td>$66</td>
                        </tr>
                        <tr>
                            <td>Level 1</td>
                            <td>$107</td>
                        </tr>
                        <tr>
                            <td>Level 2</td>
                            <td>$131</td>
                        </tr>
                        <tr>
                            <td>Level 3</td>
                            <td>$159</td>
                        </tr>
                        <tr>
                            <td>Level 4</td>
                            <td>$169</td>
                        </tr>
                        <tr>
                            <td>Level 5</td>
                            <td>$190</td>
                        </tr>
                        <tr>
                            <td>Level 6</td>
                            <td>$205</td>
                        </tr>
                        <tr>
                            <td>Level 7</td>
                            <td>$217</td>
                        </tr>
                        <tr>
                            <td>Level 8</td>
                            <td>$274</td>
                        </tr>
                        <tr>
                            <td>Level 9</td>
                            <td>$310</td>
                        </tr>
                        <tr>
                            <td>Level 10</td>
                            <td>$495</td>
                        </tr>
                        <tr>
                            <td>Level 10 Split:<br />Repertoire Only</td>
                            <td>$345</td>
                        </tr>
                        <tr>
                            <td>Level 10 Split:<br /> Technique, Ear Tests, and Sight Reading</td>
                            <td>$345</td>
                        </tr>
                        <tr>
                            <td>Level 10 Split:<br /> Technique, Orchestral Excerpts,<br /> Ear Tests, and Sight Reading</td>
                            <td>$345</td>
                        </tr>
                        <tr>
                            <td>ARCT Performer</td>
                            <td>$825</td>
                        </tr>
                        <tr>
                            <td>ARCT Teacher (non-piano)</td>
                            <td>$809</td>
                        </tr>
                        <tr>
                            <td>ARCT Teacher Part 1 (non-piano)</td>
                            <td>$510</td>
                        </tr>
                        <tr>
                            <td>ARCT Teacher Part 2 (non-piano)</td>
                            <td>$510</td>
                        </tr>
                        <tr>
                            <td>Elementary Piano Pedagogy</td>
                            <td>$433</td>
                        </tr>
                        <tr>
                            <td>Intermediate Piano Pedagogy</td>
                            <td>$453</td>
                        </tr>
                        <tr>
                            <td>Advanced Piano Pedagogy Practical</td>
                            <td>$572</td>
                        </tr>
                        <tr>
                            <td>Advanced Piano Pedagogy Viva Voce</td>
                            <td>$572</td>
                        </tr>
                        <tr>
                            <td>Licentiate - Piano Performance</td>
                            <td>$999</td>
                        </tr>
                        <tr>
                            <td>Level 9 Keyboard Harmony</td>
                            <td>$206</td>
                        </tr>
                        <tr>
                            <td>Level 10 Keyboard Harmony</td>
                            <td>$232</td>
                        </tr>
                        <tr>
                            <td>ARCT Keyboard Harmony</td>
                            <td>$284</td>
                        </tr>
                    </tbody>
                </table>

                <PostSubheading subheading="Written Exam Fees" align="text-center" bottom="mb-8" />     
                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <thead>
                        <tr>
                            <th>Exam</th>
                            <th>Fee</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Level 5 Theory</td>
                            <td>$139</td>
                        </tr>
                        <tr>
                            <td>Level 6 Theory</td>
                            <td>$149</td>
                        </tr>
                        <tr>
                            <td>Level 7 Theory</td>
                            <td>$159</td>
                        </tr>
                        <tr>
                            <td>Level 8 Theory</td>
                            <td>$175</td>
                        </tr>
                        <tr>
                            <td>Level 9 Harmony</td>
                            <td>$206</td>
                        </tr>
                        <tr>
                            <td>Level 9 History</td>
                            <td>$206</td>
                        </tr>
                        <tr>
                            <td>Level 10 Harmony & Counterpoint</td>
                            <td>$232</td>
                        </tr>
                        <tr>
                            <td>Level 10 History</td>
                            <td>$232</td>
                        </tr>
                        <tr>
                            <td>ARCT in Composition & Theory</td>
                            <td>$960</td>
                        </tr>
                        <tr>
                            <td>ARCT Harmony & Counterpoint</td>
                            <td>$283</td>
                        </tr>
                        <tr>
                            <td>ARCT Analytic Techniques</td>
                            <td>$283</td>
                        </tr>
                        <tr>
                            <td>ARCT History</td>
                            <td>$283</td>
                        </tr>
                        <tr>
                            <td>ARCT Teachers Written</td>
                            <td>$283</td>
                        </tr>
                        <tr>
                            <td>Elementary Piano Pedagogy Written</td>
                            <td>$195</td>
                        </tr>
                        <tr>
                            <td>Intermediate Piano Pedagogy Written</td>
                            <td>$215</td>
                        </tr>
                        <tr>
                            <td>Advanced Piano Pedagogy Written</td>
                            <td>$283</td>
                        </tr>
                        <tr>
                            <td>Academic Qualifying Exam</td>
                            <td>$965</td>
                        </tr>
                        <tr>
                            <td>Aural Skills</td>
                            <td>$265</td>
                        </tr>
                        <tr>
                            <td>Baroque Harmony & Counterpoint I</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>Baroque Harmony & Counterpoint II</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>Classical Harmony & Counterpoint</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>Music History after 1900</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>Music History up to 1900</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>Orchestration I</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>Orchestration II</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>Post-1900 Composition Techniques</td>
                            <td>$272</td>
                        </tr>
                        <tr>
                            <td>ARCT in Composition</td>
                            <td>$963</td>
                        </tr>
                        <tr>
                            <td>ARCT in Theory</td>
                            <td>$963</td>
                        </tr>
                        <tr>
                            <td>Romantic and Post Romantic<br /> Harmony and Counterpoint</td>
                            <td>$272</td>
                        </tr>
                    </tbody>
                </table>
                <PostSource source="The Royal Conservatory" /><br />
                <div className="text-center">
                    <p className="italic text-gray-500">For most up-to-date information on fees, visit RCM website at <a href="https://www.rcmusic.com/learning/examinations/examination-resources-for-students/examination-and-other-service-fees-canada" target="_blank" className="dcam-link">this link</a></p>
                </div>
            </section>

            <PostDivider />

            <span id="rcm_exam_grading" />
            <PostHeading heading="How Are RCM Exams Graded?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="Practical Exams" align="text-center" bottom="mb-8" />     
                <div className="bio flex flex-col-reverse md:flex-row">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p className="mb-6">Mark breakdowns for each section can differ depending on the instrument (and exam type), but Repertoire is by far the most important part across all instruments, worth at least 50% of the total exam mark.</p>
                        <p>To give you an idea of how a typical RCM exam is broken down, here is an example from a Grade 5 piano exam, since piano is the most popular instrument among exam takers.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Fteacher_marking.jpg?alt=media&token=6340e7c1-3e81-46a1-83db-2a21f7ac5815" alt="RCM practical exams" style={{width: "150px"}} className="rounded-md" />
                    </figure>
                </div>
                <div className="py-10 flex flex-col md:flex-row mb-6">
                    <div className="flex-shrink-0 flex justify-center items-start">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-exam-mark-guide%2Flvl5_22.PNG?alt=media&token=b827ae54-5649-4f52-a86a-b4d3eeb9639f" alt="mark breakdown for RCM Level 5 piano" style={{width: "350px"}} />
                    </div>
                    <div className="mt-8 md:mt-0 md:ms-8 text-[0.9rem]">
                        <p className="mb-5"><span className="underline">Repertoire</span>: students are required to perform a total of 3 pieces and can earn 2 extra marks per piece if they have it memorized. A maximum of 56 marks can be earned for this section.</p>
                        <p className="mb-5"><span className="underline">Technical Requirements</span>: includes technical tests and 2 etudes. Note that no memory marks are given for the etudes, which means students can have their sheet music in front of them while playing if they wish. A maximum of 24 marks are given for this section.</p>
                        <p className="mb-5"><span className="underline">Ear Tests and Sight Reading</span>: fall under the “Musicianship” component of the test and are worth 10 marks each, for a combined total of 20.</p>
                        <p className="font-semibold mb-5">The exam is out of 100, with 60 being the passing grade.</p>
                        <p className="italic">Starting at level 5, students must also write a co-requisite theory exam if they wish to earn a Comprehensive Certificate for their particular level. For level 5, the co-requisite theory exam is Level 5 Theory.</p>
                    </div>
                </div>
                <div className="text-center mb-20">
                    <p className="italic text-gray-500">To view requirements for all RCM Piano Levels, click <a href="https://dacapomusic.ca/blog/rcm-piano-exam-mark-guide/" target="_blank" className="dcam-link">here</a></p>
                </div>

                <PostSubheading subheading="Written Exams" align="text-center" bottom="mb-8" />
                <div className="bio flex flex-col-reverse md:flex-row mb-20">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 text-[0.9rem]">
                        <p className="mb-6">Here is an example of one of my past exams, which is equivalent to what is today “Level 6 Theory” (yes, I was a theory nerd).</p>
                        <p className="mb-6">As we can see, the mark is out of 100, with 10 marks given for each of the topics on the left.</p>
                        <p className="mb-6">Keep in mind that topics/questions might be different depending on which theory level exam you are writing.</p>
                        <p className="mb-6 font-bold">The passing grade is 60.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Ftheory_lvl6_results.JPG?alt=media&token=eb32fcf1-cff0-46cb-ae8a-b90777e1fa74" alt="RCM level 6 theory exam results" style={{width: "450px"}} className="rounded-md" />
                    </figure>
                </div>

                <PostSubheading subheading="Classification of Exam Marks" align="text-center" bottom="mb-8" />
                <div className="text-center mb-6">
                    <p>This is how RCM classifies your score</p>
                </div>
                <table className="blog-table mx-auto w-full md:w-[50%] mb-12">
                    <tbody className="text-center">
                        <tr>
                            <td>FIRST CLASS HONORS<br /> WITH DISTINCTION</td>
                            <td>90 - 100%</td>
                        </tr>
                        <tr>
                            <td>FIRST CLASS HONORS</td>
                            <td>80 - 89%</td>
                        </tr>
                        <tr>
                            <td>HONORS</td>
                            <td>70 - 79%</td>
                        </tr>
                        <tr>
                            <td>PASS</td>
                            <td>60 - 69%</td>
                        </tr>
                        <tr>
                            <td>FAIL</td>
                            <td>0 - 59%</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="when_are_results_posted" />
            <PostHeading heading="When are RCM Exam Results Posted?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="Practical & Written Exams" align="text-center" bottom="mb-8" />     
                <div className="leading-8 mb-6 text-center">
                    <p className="font-bold">Marks:</p>
                    <p>1-2 weeks after the examination</p>
                </div>
                <div className="leading-8 text-center">
                    <p className="font-bold">Official results and examiner’s comments:</p>
                    <p>4-6 weeks after the examination</p>
                </div>
            </section>

            <PostDivider />

            <span id="rcm_and_highschool_credits" />
            <PostHeading heading="RCM Exams and High School Credits" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="leading-8">
                    <p className="mb-6">High school students in Canada can earn credits with RCM exams. In Ontario, students can earn 2 out of the 30 credits required to graduate by successfully passing the RCM Gr. 7 and Gr. 8 practical exams along with their theory co-requisites. For information on other provinces, click <a href="https://www.rcmusic.com/learning/examinations/high-school-credits-canada" target="_blank" className="dcam-link">here</a>.</p>
                    <p>For US test takers, it is up to each state/school board to decide whether to count RCM examinations towards high school credits, so check with your school.</p>
                </div>
            </section>

            <PostDivider />

            <span id="rcm_contact" />
            <PostHeading heading="RCM Contact Information" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="leading-8 grid md:grid-cols-2 py-10 gap-8 bg-gray-100">
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-6">CANADA</h3>
                        <p><span className="font-semibold">Phone</span>: (416) 408-5019 or 1-800-461-6058</p>
                        <p><span className="font-semibold">Fax</span>: (416) 408-3151</p>
                        <p><span className="font-semibold">Email</span>: candidateservices@rcmusic.ca</p>
                        <p><span className="font-semibold">Address</span>: 273 Bloor St W, Toronto, ON M5S 1W2</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-bold mb-6">UNITED STATES</h3>
                        <p><span className="font-semibold">Phone</span>: 1-866-716-2223</p>
                        <p><span className="font-semibold">Fax</span>: 1-866-716-2224</p>
                        <p><span className="font-semibold">Email</span>: usaccountservices@rcmusic.ca</p>
                        <p><span className="font-semibold">Address</span>: 60 Industrial Parkway, Suite 882, Cheektowaga, NY, 14227-2713 USA</p>
                    </div>
                </div>
            </section>





            <PageBottomTrialButton />
        </main>

  )
}

export default PostRCMExamsGuide
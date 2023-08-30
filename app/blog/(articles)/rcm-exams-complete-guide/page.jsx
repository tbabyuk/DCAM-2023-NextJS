import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheading } from "@/app/components/PostSubheading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import { PostSource } from "@/app/components/PostSource"
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
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>If your child is about to start guitar lessons, you might wonder what the right guitar size for them is, given all the available options. This guide is designed to help you answer this question, with lots of other useful information to help you make the right buying decision. Read on!</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fchild-guitar-sizes%2Fguitar_boy%20150.png?alt=media&token=5f9bdea8-4864-4442-a19a-f76fb839081d" alt="music interval example" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>            
            </section>

            <PostHeading heading="What is RCM?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col-reverse md:flex-row mb-6">
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

            <PostHeading heading="How Long Are RCM Exams?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fc_major_scale.png?alt=media&token=bd533e05-f8cd-4f01-aca3-567183587c83" alt="harmonic interval example" className="rounded-md md:w-[55%]" />
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


            <PageBottomTrialButton />
        </main>

  )
}

export default PostRCMExamsGuide
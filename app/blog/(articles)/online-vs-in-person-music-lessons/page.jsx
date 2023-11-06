import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "Online vs. In-Person Music Lessons | Da Capo Academy of Music",
    description: "Online or in-person music lessons - how do I decide? Find out how the two lesson formats compare and make an informed decision about what works for you!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Online vs. In-Person Music Lessons | Da Capo Academy of Music",
        description: "Online or in-person music lessons - how do I decide? Find out how the two lesson formats compare and make an informed decision about what works for you!",
        url: "https://dacapomusic.ca/blog/online-vs-in-person-music-lessons",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-07-14T04:08:07+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Fonline_vs_in_person_lessons_cover.jpg?alt=media&token=1c0ad664-6496-4e1f-b9ef-00a14a8fec4a",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostOnlineVsInPersonMusicLessons = () => {

  return (
            <main className="text-gray-700">
            <PostTitle title="Online vs. In-Person Music Lessons" date="July 14, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Fonline_vs_in_person_lessons_cover.jpg?alt=media&token=1c0ad664-6496-4e1f-b9ef-00a14a8fec4a" alt="Music Intervals cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24">
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Fonline_lesson.png?alt=media&token=6d0b3a8b-8e06-4fc4-b9e9-3e780713e692" alt="online lesson" style={{width: "240px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>Like it or not, online learning is the new reality for millions of people around the world - and it's here to stay! Music lessons have certainly not escaped this new trend, but the question many music teachers, students, and parents are asking is: how effective are online music lessons vs. traditional, in-person lessons?</p>
                    </div>
                </div>
                <p className="leading-8">In this article, we discuss the benefits and drawbacks of online vs. in-person music lessons and give you our own take on how to best decide between the two options. Most importantly, we want to help parents and students make an informed decision as to what type of lessons work best for them!</p>
            </section>

            <SectionDivider />

            <PostHeading heading="Defining 'online lessons' as they relate to music" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p className="mb-6">First, let's clarify what we mean by “online lessons”. In the context of music learning, the term can mean of three things:</p>
                        <ol className="list-decimal list-inside mb-6">
                            <li>learning from videos (e.g. YouTube, music-based websites)</li>
                            <li>learning from apps (applications) on the smartphone or tablet</li>
                            <li>learning from a teacher via a video connection (Skype, Zoom, etc.)</li>
                        </ol>
                        <p>In this article, we are using the third meaning of "online lessons" - <span className="font-semibold">learning one-on-one from a teacher via a video connection</span>.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Fdefinition.png?alt=media&token=275660a1-f624-4722-a4e3-ce750a8c12b0" alt="dictionary definition" style={{width: "220px"}} className="rounded-md" />
                    </figure>
                </div>            
            </section>

            <PostDivider />

            <PostHeading heading="In-Person Music Lessons: Pros and Cons" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Fpros_and_cons.png?alt=media&token=6789fe35-d583-421c-be29-bd009475d359" alt="pros and cons" style={{width: "220px"}} className="rounded-md" />
                </figure>
                <div className="bio flex flex-col md:flex-row bg-gray-100 p-5 mb-10">
                    <div className="md:me-10 leading-8">
                        <p className="text-lg font-bold mb-6">Advantages:</p>
                        <ul className="list-disc list-inside">
                            <li>teacher able to physically correct student's body posture, hand position, and technique as needed</li>
                            <li>easier to keep young children focused, parent presence less necessary</li>
                            <li>no need to worry about connection issues or slow connection speed</li>
                            <li>audio quality is not a factor</li>
                        </ul>
                    </div>
                    <div className="mt-12 md:mt-0 md:me-10 leading-8">
                        <p className="text-lg font-bold mb-6">Disadvantages:</p>
                        <ul className="list-disc list-inside">
                            <li>require travel time</li>
                            <li>scheduling options might be more restricted</li>
                            <li>limited to teachers who live/work in your approximate geographical location</li>
                            <li>might be more expensive than online lessons, but not always</li>
                        </ul>                    
                    </div>
                </div>         
            </section>

            <PostDivider />

            <PostHeading heading="Online Music Lessons: Pros and Cons" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Fpros_and_cons.png?alt=media&token=6789fe35-d583-421c-be29-bd009475d359" alt="pros and cons" style={{width: "220px"}} className="rounded-md" />
                </figure>
                <div className="bio flex flex-col md:flex-row bg-gray-100 p-5 mb-10">
                    <div className="md:me-10 leading-8">
                        <p className="text-lg font-bold mb-6">Advantages:</p>
                        <ul className="list-disc list-inside">
                            <li>no travel time required, learn from the comfort of your home</li>
                            <li>more flexibility in terms of scheduling</li>
                            <li>ability to learn from anyone in the world, no matter their geographical location</li>
                            <li>might be less expensive than in-person lessons, but not always</li>
                        </ul>
                    </div>
                    <div className="mt-12 md:mt-0 md:me-10 leading-8">
                        <p className="text-lg font-bold mb-6">Disadvantages:</p>
                        <ul className="list-disc list-inside">
                            <li>teacher not able to physically correct student's body posture, hand position, and technique</li>
                            <li>young children require parent's presence and assistance during lessons</li>
                            <li>lesson quality can suffer if either side has problem with internet connection or connection speed</li>
                            <li>sound quality of musical instrument might not be great even with good connection speed</li>
                        </ul>                    
                    </div>
                </div>         
            </section>

            <PostDivider />

            <PostHeading heading="What science is telling us" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Fscience.png?alt=media&token=da1f7335-b227-45ea-8fcd-63243f87042e" alt="photo of a scientist" style={{width: "200px"}} className="rounded-md" />
                </figure>
                <p className="leading-8 mb-6">Like it or not, online learning is the new reality for millions of people around the world - and it's here to stay! Music lessons have certainly not escaped this new trend, but the question many music teachers, students, and parents are asking is: how effective are online music lessons vs. traditional, in-person lessons?</p>
                <p className="leading-8 mb-6">For both studies, student perceptions of their teacher and of the effectiveness of their course in general was slightly higher for the “classroom” group than the “online” group. But when researchers compared the two groups on “learning outcomes” (i.e. their actual test results and final grades), they did not find any significant differences.</p>
                <p className="leading-8 mb-6">In simple terms, what these results tell us is that <span className="font-bold">although students appear to enjoy in-person lessons slightly more than online lessons, the amount of learning that takes place is essentially the same</span>. This is an important point, as many parents wrongly assume that children don't learn as much from online lessons as from in-person lessons.</p>
                <small>* Study 1: “A Comparison of University Student Perceptions and Success Learning Music Online and Face-to-face” by A. Horspool and S. S. Yang. Merlot Journal of Online Learning and Teaching, 2010.
                Study 2: “Comparative Analysis of Learner Satisfaction and Learning Outcomes in Online and Face-to-Face Learning Environments” by S. D. Johnson, S. R. Aragon, N. Shaik, and N. Palma-Rivas. Journal of Interactive Learning Research, 2000.</small>
            </section>

            <PostDivider />

            <PostHeading heading="When in-person lessons are the best option" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fonline-vs-in-person-music-lessons%2Frecommendation.png?alt=media&token=e3a19997-b0cd-425b-b043-44ad0aec3c6a" alt="recommendation" style={{width: "200px"}} className="rounded-md" />
                </figure>
                <p className="leading-8 mb-6">Although most music students would benefit equally well from any of the two lesson formats, here are two situations where we strongly recommend in-person lessons:</p>
                <p className="font-bold leading-8">1. Small children just starting out on their instrument (and to a lesser degree, beginner adult students)</p> 
                <p className="leading-8 mb-6">The reason for this simple: it is critical that a student forms correct playing habits (mainly posture, hand position, finger technique) from the very beginning of their musical studies, as these can significantly enhance or hinder their future progress as musicians. For this to happen correctly and effectively, teachers must have the ability to physically correct (and keep correcting for as long as necessary) any perceivable mistakes in these three areas. Once correct foundational habits have been put into place, students should be able to benefit from online lessons just as much as from in-person lessons.</p>
                <p className="leading-8 font-bold">2. Students intending to pursue music professionally</p> 
                <p className="leading-8">For children whose parents want them to pursue musical professionally, in-person lessons with a well-qualified instructor are their best option. At the end of the day, online lessons simply cannot provide the amount of detailed feedback necessary for absolute musical mastery as traditional, in-person lessons.</p>
            </section>

            <SectionDivider />

            <PostSectionHeading heading="Conclusion" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8">In summary, if you love music and want to learn to play an instrument primarily for your own enjoyment, online lessons are as good of an option as in-person lessons. However, for students who might want to pursue music professionally and for young children just starting out on their instrument, in-person lessons are strongly recommended.</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostOnlineVsInPersonMusicLessons
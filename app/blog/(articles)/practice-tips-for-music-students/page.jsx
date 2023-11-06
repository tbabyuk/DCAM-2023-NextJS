import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"
import { PostSubheadingRed } from "@/app/components/PostSubheadingRed"


export const metadata = {
    title: "Practice Tips for Music Students | Da Capo Academy of Music",
    description: "Are you a music student wondering why your practicing is not getting you the results you want? Maybe you are doing it wrong! These 5 practice tips are garanteed to get you results!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Practice Tips for Music Students | Da Capo Academy of Music",
        description: "Are you a music student wondering why your practicing is not getting you the results you want? Maybe you are doing it wrong! These 5 practice tips are garanteed to get you results!",
        url: "https://dacapomusic.ca/blog/practice-tips-for-music-students",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-04-10T17:19:38+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpractice-tips-for-music-students%2Fpractice_tips_for_music_students_cover.jpg?alt=media&token=bffaba11-c9da-4700-8a03-db4436e4e483&_gl=1*1szjuyu*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0MzQwOC42Ni4xLjE2OTYwNDU2NTMuNTMuMC4w",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostPracticeTipsForMusicStudents = () => {

  return (
            <main className="text-gray-700">
            <PostTitle title="5 Practice Tips for Music Students" date="April 10, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpractice-tips-for-music-students%2Fpractice_tips_for_music_students_cover.jpg?alt=media&token=bffaba11-c9da-4700-8a03-db4436e4e483&_gl=1*1szjuyu*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0MzQwOC42Ni4xLjE2OTYwNDU2NTMuNTMuMC4w" alt="practice tips for music students cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24">
                <p>As with most things in life, there are no shortcuts when it comes to learning a musical instrument. Practice is the only thing that will help you get better and ensure your continuous growth as a musician. But how do we practice in a way that is effective and yields maximum results? In this article, I have assembled 5 practice tips intended to help musicians and music students make the most out of their practicing. But remember - reading alone will do you no good until you actually put these tips into …practice? (pun totally intended!) Ready? Here we go!</p>
            </section>

            <SectionDivider />

            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <PostSubheadingRed subheading="1. DO IT REGULARLY" bottom="mb-16" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpractice-tips-for-music-students%2Fyellow_clock.jpg?alt=media&token=0dc92c22-4f0c-4006-909a-2e567511402d&_gl=1*1yelkq8*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0MzQwOC42Ni4xLjE2OTYwNDM5NTMuNTQuMC4w" alt="a yellow alarm clock" style={{width: "160px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10">
                        <p>Say what you will, but nothing will help you improve faster at your instrument than regular practice. Ideally, this would mean every day, but because this is not realistic for the average student, at least aim for every other day. Remember that when it comes to practicing, higher frequency and shorter duration always beats lower frequency and higher duration. In other words: it is much better to practice 4 times a week in 30-minute intervals than two times a week in 60-minute intervals.</p>
                    </div>
                </div>
                <p>But what can we do to make ourselves practice more often? Where do we get the discipline to just sit down and do it? The method that has worked best for me and many of my most successful students is something called time-blocking. Time-blocking simply means choosing a time in your day which would be dedicated exclusively to a particular activity, which in our case is practicing. Say to yourself: “Every day between 8-9pm is my practice time. During this time, I will get rid of all distractions and dedicate myself fully to my instrument”. When you practice time-blocking often enough, it will become as effortless as brushing your teeth and will require very little discipline to implement (which is the whole point!) Parents: use time-blocking to set up a regular practice routine for your children. Yes, they will resist and probably cry at first, but it will eventually become second nature and the results will be worth it!</p>
            </section>

            <PostDivider />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <PostSubheadingRed subheading="2. HAVE A PRACTICE PLAN" bottom="mb-16" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10">
                        <p>“If you fail to plan, you plan to fail” - said Benjamin Franklin. And yes, he had a point there. Before you start practicing, take a moment to think about what exactly you are going to focus on during your practice. If you are taking lessons, read your teacher&apos;s notes or what they wrote in your homework book and use that to inform your practice plan. (This might seem obvious, but you would be surprised how many students do not read what their teacher writes!)</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpractice-tips-for-music-students%2Fplan.jpg?alt=media&token=a89baabb-948e-44b5-9af6-3ecb38917ee0&_gl=1*5f95o1*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0MzQwOC42Ni4xLjE2OTYwNDQyODMuNTUuMC4w" alt="a post-it note with 'plan' written on it" style={{width: "150px"}} className="rounded-md" />
                    </figure>
                </div>
                <p>If you are a self-directed student, a solid practice plan can sound something like this: “After my warm-up, I want to review my Piece #1 at performance speed and then continue working on Piece #2 hands together at slow speed. I especially want to spend time on Measures #-#, which have a particularly difficult passage. At the end, I am going to spend 15-20 minutes practicing my sight-reading”. Having a plan gives you a clear focus and helps ensure that you don&apos;t waste time wandering around thinking what to do next.</p>
            </section>

            <PostDivider />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <PostSubheadingRed subheading="3. ANALYZE AND REFLECT" bottom="mb-16" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpractice-tips-for-music-students%2Freflect.jpg?alt=media&token=d8dacf08-d174-448d-a1d6-e83b1c930999&_gl=1*1ysx2g9*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0MzQwOC42Ni4xLjE2OTYwNDQ2MTkuNTQuMC4w" alt="person writing in a notebook" style={{width: "170px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10">
                        <p>This is a great tip that in my opinion is often overlooked. So often when we practice, we are almost on “autopilot” mode. We tend to focus so much on the notes that we fail to give proper consideration to other aspects of the music, such as “What historical period was this written in?”, “What is the genre of this piece?”, “What kind of techniques is the composer using to achieve a particular mood or effect?”, “What chord progressions are being used here?”, etc. If you are not familiar with the composer of a piece you are playing - do some research!</p>
                    </div>
                </div>
                <p>Understanding the person behind the music and the period in which they lived will give you a deeper understanding and appreciation of what you are playing. Implementing these tips will help you avoid “mindless practicing” and make you into a much better performer!</p>
            </section>

            <PostDivider />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <PostSubheadingRed subheading="4. HAVE A LONG-TERM GOAL" bottom="mb-16" />
                <div className="flex flex-col-reverse md:flex-row mb-6">
                    <div className="mt-8 md:mt-0 md:me-10">
                        <p>Identifying and working towards a long-term goal will go a long way in keeping you focused and on your toes. For music students, this goal can be doing a music exam, performing at a recital, learning a piece that you&apos;ve always wanted to play, etc. The idea here is to set a long-term goal and then figure out several shorter-term targets that would help you meet your long-term goal in a timely manner.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpractice-tips-for-music-students%2Fgoal.jpg?alt=media&token=ceb5f759-6d1f-48ea-baca-0340a1f0f6d2&_gl=1*17d5jqs*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0MzQwOC42Ni4xLjE2OTYwNDQ4NTcuNTYuMC4w" alt="person in the distance standing near a flag" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                </div>
                <p>For example, if my goal is to do my RCM Grade 7 Piano Exam in exactly one year from now, I would look at the exam requirements to see what I need to know and then figure out some dates by which I have to have each component of the exam learned. This way, I can be confident and I will be fully prepared when the exam date comes around. Goal-setting in general is a great way to ensure steady progress in anything we do and is a great life skill to develop.</p>
            </section>

            <PostDivider />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading="5. BE PATIENT AND STAY POSITIVE" bottom="mb-16" />
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpractice-tips-for-music-students%2Fpositive.jpg?alt=media&token=4bb5341f-e90b-4b39-b278-89205bcba616&_gl=1*1i8fpf2*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0MzQwOC42Ni4xLjE2OTYwNDUxNDcuNTUuMC4w" alt="a girl smiling" style={{width: "170px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10">
                        <p>Last but not least - always remember to be patient and stay positive! In a world of instant gratification, we have come to expect quick results. I have seen many students want to give up because they felt they were “not getting better” or “not improving fast enough”. If this is how you are feeling, ask yourself whether you are spending enough time outside of your music lessons practicing, learning, and growing as a musician. If you are serious about music, you have to understand that it takes time, patience and commitment to achieve solid results.</p>
                    </div>
                </div>
                <p>Yes, there will be many stumbling blocks along the way and times when you will feel discouraged, but is this not just a natural part of trying to achieve any goal? So pick your chin up and put your nose to the grindstone! (Does anyone still use this idiom?) Good luck!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostPracticeTipsForMusicStudents
import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { PostSubheading } from "@/app/components/PostSubheading"


export const metadata = {
    title: "Can You Skip RCM Levels? | Da Capo Academy of Music",
    description: "Can you skip RCM levels? When is it okay to skip and when is it better to do your level exams in order? Read on to find out!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Can You Skip RCM Levels? | Da Capo Academy of Music",
        description: "Can you skip RCM levels? When is it okay to skip and when is it better to do your level exams in order? Read on to find out!",
        url: "https://dacapomusic.ca/blog/can-you-skip-rcm-levels",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-11-24T03:46:11+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fcan-you-skip-rcm-levels%2Fskip_rcm_levels_cover.jpg?alt=media&token=cfa33773-cfc5-4751-aae3-0c800d2b2c24",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostCanYouSkipRCMLevels = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="Can you skip RCM levels?" date="November 23, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fcan-you-skip-rcm-levels%2Fskip_rcm_levels_cover.jpg?alt=media&token=cfa33773-cfc5-4751-aae3-0c800d2b2c24" alt="Can You Skip RCM Levels cover"/>

            <PostSectionHeading heading="Introduction: Defining the Terms" />
            <section className="introduction px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-6">Before jumping into the topic, let's make sure we understand what we mean by "skipping levels". What we are really talking about here is skipping level <span className="font-bold">exams</span>, since you are only officially considered to be at a certain RCM Level after successfully completing the appropriate examination for that level.</p>
                <p className="leading-8 mb-6">*The terms "level" and "grade" mean the same thing in our context and we will be using them interchangeably.*</p>
            </section>

            <PostHeading heading="The Short Answer" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-6">Yes, RCM allows students to skip level exams, but think carefully about your reason for wanting to do this. The fact is, there are no short-cuts for developing proper technique at your instrument and a proper understanding of musical repertoire. So if your reason for skipping level exams is to get to the top levels as soon as possible, your playing will end up being superficial at best.</p>
                <p className="leading-8 mb-6">The one exception to this is the Grade 10 exam, which you cannot skip as it is a necessary prerequisite for students wishing to do their ARCT (Associate of the Royal Conservatory).</p>
                <p className="leading-8">That being said, let’s look at some good and bad reasons for skipping RCM Level exams.</p>
            </section>

            <PostDivider />

            <PostHeading heading="Good Reasons to Skip RCM Levels" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="GOOD REASON #1:" bottom="mb-6" />
                <p className="font-bold leading-8 mb-6">You are working through your RCM books one by one (hopefully with a good teacher), learning a good amount of repertoire from each book, but decide that you'd rather save some money and not do every single exam.</p>
                <p className="leading-8">This is completely reasonable. In fact, some teachers might even recommend to their students not to do every single level exam, especially in Elementary Levels (Prep to Grade 4). Once students get to Intermediate Levels (Grades 5-8) however, the material gets noticeably harder, at which point skipping level exams is not a good idea. Also, keep in mind that starting from Grade 5, students need to complete and pass a co-requisite written examination in order to get their Certificate.</p>
            </section>

            <section className="px-5 lg:px-36 xl:px-64">
                <PostSubheading subheading="GOOD REASON #2:" bottom="mb-6" />
                <p className="font-bold leading-8 mb-6">You have been studying piano for a long time and just recently became aware that you can do RCM exams.</p>
                <p className="leading-8">This is another perfectly acceptable reason to skip level exams. Some teenagers or young adults who have studied piano since they were children could easily (and should) start from an intermediate or in some cases maybe even an advanced level exam right away. Do some research or talk to your teacher (if you have one) to figure out which grade exam you could comfortably handle.</p>
            </section>

            <PostDivider />

            <PostHeading heading="Bad Reasons to Skip RCM Levels" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="BAD REASON #1:" bottom="mb-6" />
                <p className="font-bold leading-8 mb-6">You are on a race to do your RCM exams as soon as possible so you can boast about your high RCM level.</p>
                <p className="leading-8">If this is your objective - please reconsider. As in life, there are no shortcuts in music. To get good at any instrument, you need time, patience, and consistent practice. You also need to play through a good amount of repertoire across various musical genres to become a well-rounded and technically-proficient musician.</p>
            </section>

            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="BAD REASON #2:" bottom="mb-6" />
                <p className="font-bold leading-8 mb-6">You are a mature student who started piano a bit late and want to move quickly to “catch up” on what you have missed.</p>
                <p className="leading-8">If this is your strategy, you will become quite a sloppy musician. Adult/mature students should not feel pressure to “catch up” in music, as this will only lead to bad results. Instead, find a good teacher and focus on improving yourself step-by-step, competing only against yourself. This approach will pay many more dividends as long as you are dedicated and consistent in your practicing.</p>
            </section>



            <PageBottomTrialButton />
        </main>

  )
}

export default PostCanYouSkipRCMLevels
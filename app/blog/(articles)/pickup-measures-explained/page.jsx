import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { PostSubheading } from "@/app/components/PostSubheading"
import { PostSubheadingRed } from "@/app/components/PostSubheadingRed"
import { SectionDivider } from "@/app/components/SectionDivider"
import Link from "next/link"

export const metadata = {
    title: "How to Build a Harmonic Minor Scale | Da Capo Academy of Music",
    description: "Master building the harmonic minor scale in any key with this simple, step-by-step guide. Includes graphics and audio!",
    keywords: ["build a minor scale", "build a harmonic minor scale", "minor scale music theory", "harmonic minor scale music theory"]
}

const PostPickupMeasuresExplained = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="What is a pickup measure in music (and how it works)" date="July 30, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Fwhat_is_a_pickup_measure_cover.jpg?alt=media&token=92d3504f-0bfb-4a92-bfde-c6ed544a7e89" alt="what is a pickup measure cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8">
                    <p className="mb-10">If you&apos;ve ever read sheet music, you&apos;ve undoubtedly come across a pickup measure (aka anacrusis/upbeat/incomplete measure). And while you may have a general idea of what these are all about, perhaps you still have some unanswered questions about them (I know I did when I began playing the piano!).</p>
                    <p>In this article, you will learn all there is to know about pickup measures, so that you can face them confidently in your future musical endeavors. Let&apos;s get started!</p>
                </div>            
            </section>

            <SectionDivider />

            <PostHeading heading="What is a pickup measure?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Fexample_1.png?alt=media&token=5cd6741d-ab62-4bc6-8fb2-1df63c4bbd92" alt="Sean Mendes photo" style={{width: "260px"}} className="rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>A simple anacrusis example from a piece called “Song of the Dark Woods” by Elie Siegmeister. The first measure is a pickup measure or anacrusis, and the note “d” is a pickup note here.</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>A <span className="font-bold">pickup measure</span> (formal name: <span className="font-bold">anacrusis</span>) is a partial measure of notes that precedes the downbeat (strong beat) of the first, full measure. It is sometimes also called an “incomplete measure” or an “upbeat”. The notes of the pickup measure are referred to as “pickup notes”. Because a pickup measure is “incomplete”, it must always be completed at the end of a music piece/section by another partial measure, so that the result is one complete measure.</p>
                    </div>
                </div>            
            </section>

            <PostDivider />

            <PostHeading heading="What is a pickup measure used for?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <p className="mb-10">Composers use pickup measures when they do not want to start a piece of music on a strong (down) beat. Think of the song “Happy Birthday”. The first strong beat in this song actually falls on the “birth” part of the word “birthday”, not on the word “happy”. Because of this, “Happy Birthday” has to start with a pickup measure. Here is what this looks like written down:</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Fhappy_bday_example.png?alt=media&token=d7b75010-67f6-45d5-968e-8e69a149ecd5" alt="An example from the Happy Birthday song" className="w-[100%] md:w-[40%] rounded-md" />
                </figure>
            </section>

            <PostDivider />

            <PostHeading heading="Does a pickup measure count as a measure?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <p className="mb-10">No. Because it&apos;s not a complete measure, we do not count a pickup measure as the first measure of a piece of music when we are numbering measures. The only exception to this would be if the pickup notes in a measure are preceded by rests, so that the total number of beats add up to a full measure. In that case, we would count this as a full measure and number it measure 1.</p>
            </section>

            <PostDivider />

            <PostHeading heading="How is a pickup measure completed?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <p className="mb-10">Having an “incomplete measure” on our hands kind of gives us the urge to complete it, doesn&apos;t it? Well, this is actually something we have to do in music. In fact, every pickup measure must be completed at the end of a piece/section of music so that the total equals to one full measure.</p>
                <p className="mb-20">Let&apos;s look at a few examples of this from real musical pieces.</p>
                <PostSubheadingRed subheading="Example #1" bottom="mb-12" />
                <div className="flex flex-col md:flex-row justify-evenly mb-14">
                    <figure className="flex flex-col justify-center items-center mb-12 md:mb-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Feg_1_a.PNG?alt=media&token=b33686da-799c-42b8-ae53-d37274ff77b2" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure.</small></figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Feg_1_b.PNG?alt=media&token=36529ca9-c2eb-42a3-8d01-efc6e5042897" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure completed.</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10">In the first photo, we can see that we are in common time (4/4 time). Our pickup measure has two beats, which means we need two more beats to have a complete measure. In the second photo, we complete the pickup measure with the two remaining beats.</p>
                <PostSubheadingRed subheading="Example #2" bottom="mb-12" />
                <div className="flex flex-col md:flex-row justify-evenly mb-14">
                    <figure className="flex flex-col justify-center items-center mb-12 md:mb-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Feg_2_a.PNG?alt=media&token=33dba607-f740-4217-b97a-77725f48f213" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure.</small></figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Feg_2_b.PNG?alt=media&token=54429229-4e97-449f-a6c2-fbe4a379cb92" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure completed.</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10">In this example, we are in 6/8 time, which means six pulses (think beats) per measure. In the first photo, we have only the first of the six beats needed for a complete measure. In the second photo, our measure is completed with the remaining 5 beats. </p>
            </section>

            <PostDivider />

            <PostHeading heading="More pickup measure examples" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <p className="mb-10">Lastly, let’s take a look at several examples of anacruses in pieces of different levels of complexity and different time signatures.</p>
                <PostSubheading subheading="Anacrusis in 2/4 time" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row justify-evenly mb-14">
                    <figure className="flex flex-col justify-center items-center mb-12 md:mb-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Ftrumpet1.PNG?alt=media&token=e61a2fd3-ec33-4aeb-b74c-a3a1464ad49f" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure.</small></figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Ftrumpet2.PNG?alt=media&token=fe1fc579-2bde-428c-abc8-73a858152e86" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure completed.</small></figcaption>
                    </figure>
                </div>
                <PostSubheading subheading="Anacrusis in 3/4 time" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row justify-evenly mb-14">
                    <figure className="flex flex-col justify-center items-center mb-12 md:mb-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Fwaltz1.PNG?alt=media&token=7b538e76-be53-44b2-86e1-11b3053d5694" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure.</small></figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Fwaltz2.PNG?alt=media&token=6fd3a2e5-12fa-4a24-91f9-b35db3fdaa7c" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure completed.</small></figcaption>
                    </figure>
                </div>
                <PostSubheading subheading="Anacrusis in cut time" align="text-center" bottom="mb-14" />
                <div className="flex flex-col md:flex-row justify-evenly mb-14">
                    <figure className="flex flex-col justify-center items-center mb-12 md:mb-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Fbouree1.PNG?alt=media&token=4d1e4a1a-a5a7-4611-806e-b90c3976c03b" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure.</small></figcaption>
                    </figure>
                    <figure className="flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fpickup-measures-explained%2Fbouree2.PNG?alt=media&token=8a8a7e02-7075-461d-af57-906e6d592912" alt="A harmonic minor scale using formula" className="w-[100%] md:h-[70%] rounded-md" />
                        <figcaption className="text-gray-500 max-w-[260px] leading-5 text-center"><small>Pickup measure completed.</small></figcaption>
                    </figure>
                </div>
            </section>

            <SectionDivider />
            
            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 leading-8 lg:px-36 xl:px-64 mb-20">
                <p>Pickup measures are quite common and we hope that you now have a better understanding of what they are all about. Remember, always begin by looking at your time signature, which tells you how many beats (or pulses, if you are in compound time) a full measure will have. That way, you will immediately be able to tell which measure is not complete.</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostPickupMeasuresExplained
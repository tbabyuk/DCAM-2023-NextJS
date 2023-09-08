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

const PostBuildAHarmonicMinorScale = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="How to Build a Harmonic Minor Scale" date="May 6, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fbuild_a_harmonic_minor_scale_cover.jpg?alt=media&token=e4afb2cc-b602-4369-8d96-9bfca54c76a7" alt="build a harmonic minor scale cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8">
                    <p className="mb-6">The harmonic minor scale is arguably the most popular of the three minor scales (the others being the <Link href="/build-a-natural-minor-scale" className="dcam-link">natural minor</Link> and <Link href="/build-a-melodic-minor-scale" className="dcam-link">melodic minor</Link>). It is pleasing to the ear but at the same time has a certain melancholic quality, as is the case with all minor scales. In this article, you will learn exactly how to build this scale using two different approaches, with plenty of practice along the way!</p>
                </div>            
            </section>

            <SectionDivider />

            <PostHeading heading="Building a Harmonic Minor Scale" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-16">We can approach building the harmonic minor scale in one of two ways: using a <span className="font-bold">formula</span> (pattern of whole steps and half steps) or using a <span className="font-bold">natural minor scale</span>. Let's have a quick look at each of these methods and how they work.</p>
                <PostSubheading subheading="Method #1: The Formula" bottom="mb-6" />
                <p className="mb-10">All scales follow a specific pattern of whole steps and/or half steps (a formula), and the harmonic minor scale is no exception. For the harmonic minor scale, the formula looks like this:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fharmonic_minor_formula.PNG?alt=media&token=706f805b-a028-495a-b85d-a28fedf6bc1e" alt="harmonic minor scale formula" className="rounded-md" />
                </figure>
                <p className="mb-20">The “W” with a little arrow pointing up represents a raised whole step, which means we have to go up a whole step plus a half step (1.5 whole steps or 3 half steps). This creates an interval of an augmented 2nd between the 6th and 7th degrees of the harmonic minor scale. If we apply this formula starting on any note, we will always end up with a harmonic minor scale!</p>
                <PostSubheading subheading="Method #2: The Natural Minor Scale" bottom="mb-6" />
                <p className="mb-10">The other method (which is quicker as long as you are comfortable with natural minor scales) we can use the build a harmonic minor scale is by taking the natural minor scale and raising its 7th degree by a half step. Here is a little graphic that explains this idea:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fraised_7th.PNG?alt=media&token=f92307d2-995c-40e4-9d28-572623803e39" alt="harmonic minor scale formula" className="rounded-md" />
                </figure>
                <p className="mb-6">Yes, it's as simple as that! If you know your natural minor scales well, the only thing you have to do to get the harmonic minor is raise its 7th degree by a half step! This is another reason why it's important to get very comfortable with your natural minor scales. If you have them down solid, you will have the tools to build the other minor scales easily. (To learn more about the natural minor scale, read our post on the topic <Link href="/build-a-natural-minor-scale" target="_blank" className="dcam-link">here</Link>).</p>
                <p>Now, let's put all this theory into practice by building 3 different harmonic minor scales using the methods we just discussed.</p>
            </section>


            

            <PostDivider />

            <PostHeading heading="Putting It to Practice" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading='Example 1: "A Harmonic Minor Scale"' bottom="mb-12" />
                <PostSubheading subheading="1. Using the formula" bottom="mb-6" />
                <p className="mb-10">For our first example, let's build the <span className="font-bold">A Harmonic Minor</span> scale using the formula method. Starting on "A", let's start applying our pattern of whole steps and half steps.</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fa_har_min_by_formula.PNG?alt=media&token=f3ed531b-eaa4-4fb2-b276-88d1471df373" alt="A harmonic minor scale using formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">"A" to "B" is a whole step, "B" to "C" is a half step, "C" to "D" is a whole step, "D" to "E" is a whole step, "E" to "F" is a half step, "F" to "G♯" is a raised whole step, and "G♯" to "A" is a half step. The result: <span className="font-bold">A Harmonic Minor</span> scale! We can see that this scale consists of the notes "A", "B", "C", "D", "E", "F", "G♯", and (repeated) "A".</p>

                <PostSubheading subheading="2. Using the Natural Minor Scale" bottom="mb-6" />
                <p className="mb-10">This time, let's build the same scale using the Natural Minor Scale method. We begin with our <span className="font-bold">A Natural Minor</span> scale, which looks like this:</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fa_nat_min_keyboard.PNG?alt=media&token=a2387dd5-293f-4849-8d40-1d1c35fa5656" alt="A natural minor scale (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-10">As we can see, this scale only uses the white keys on the piano. Next, let's find the 7th degree of this scale. Counting from "A", we find the our 7th note is "G". Therefore, we need to raise our "G" by one half step to get the harmonic minor scale! Let's do that.</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fa_nat_min_raised_7th_keyboard.PNG?alt=media&token=1a1df2d9-c2ec-4f3a-b467-9e524df565d8" alt="A natural minor with raised 7th (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-10">Raising the "G" by half step gives us a "G♯". And voila - we have our <span className="font-bold">A Harmonic Minor</span> scale!</p>
                <p className="mb-10">Here is what the <span className="font-bold">A Harmonic Minor</span> scale looks like written down on the music staff:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fa_har_min_staff.JPG?alt=media&token=38d53d08-d328-49ff-bff9-40b9d80d7236" alt="a harmonic minor scale on the staff" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>A harmonic minor scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fa_har_min_audio.mp3?alt=media&token=4af2c035-cdb2-47e4-8246-4da22a75a73e" />
                    <figcaption className="text-gray-500"><small>Listen to the A harmonic minor scale</small></figcaption>
                </figure>

                <PostSubheadingRed subheading='Example 2: "D Harmonic Minor Scale"' bottom="mb-12" />
                <PostSubheading subheading="1. Using the formula" bottom="mb-6" />
                <p className="mb-10">Let's apply our formula pattern starting from D:</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fd_har_min_by_formula.jpg?alt=media&token=42522184-28bd-4360-a49d-3334fab6937c" alt="D harmonic minor scale using the formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">"D" to "E" is a whole step, "E" to "F" is a half step, "F" to "G" is a whole step, "G" to "A" is a whole step, "A" to "B♭" is a half step, "B♭" to "C♯" is a raised whole step, and "C♯" to "D" is a half step. Therefore, the <span className="font-bold">D Harmonic Minor</span> scale is made up of "D", "E", "F", "G", "A", "B♭", "C♯" and (repeated) "D".</p>

                <PostSubheading subheading="2. Using the Natural Minor Scale" bottom="mb-6" />
                <p className="mb-10">Let's begin with the <span className="font-bold">D Natural Minor</span> scale, which looks like this:</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fd_nat_min_keyboard.PNG?alt=media&token=8001bb0b-842e-402d-b317-972344c69345" alt="D natural minor scale (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-10">We can see that our 7th degree here is the note "C", which we must raise by a half step. The result:</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fd_nat_min_raised_7th_keyboard.PNG?alt=media&token=a34cfc8b-1c81-4e4c-92da-bb9bb4c98a3e" alt="D natural minor with raised 7th (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-10">Here is what the <span className="font-bold">D Harmonic Minor</span> scale looks like written down on the music staff:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fd_har_min_staff.JPG?alt=media&token=dc62ab5d-320b-464d-b69e-fa2368ac99af" alt="D harmonic minor scale on the staff" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>D harmonic minor scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fd_har_min_audio.mp3?alt=media&token=58d97e12-50e2-4b95-8609-c9154945cf9a" />
                    <figcaption className="text-gray-500"><small>Listen to the D harmonic minor scale</small></figcaption>
                </figure>

                <PostSubheadingRed subheading='Example 3: "C Sharp Harmonic Minor Scale"' bottom="mb-6" />
                <p className="mb-12">Lastly, let's try something a bit harder, the <span className="font-bold">C Sharp Harmonic Minor</span> scale.</p>
                <PostSubheading subheading="1. Using the formula" bottom="mb-10" />
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fc_sharp_har_min_by_formula.PNG?alt=media&token=9168b161-57f2-4e99-a542-c6915741f57c" alt="C sharp harmonic minor scale using the formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">We can see that the <span className="font-bold">C Sharp Harmonic Minor</span> is made up of: "C♯", "D♯", "E", "F♯", "G♯", "A", "B♯", and (repeated) "C♯".</p>

                <PostSubheading subheading="2. Using the Natural Minor Scale" bottom="mb-6" />
                <p className="mb-10">Here is our <span className="font-bold">C Sharp Natural</span> scale:</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fc_sharp_nat_min_keyboard.PNG?alt=media&token=17760440-eaec-4ddd-b27d-6e84808c00db" alt="C sharp natural minor scale (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-10">Next, let's raise our 7th degree, which is "B", by one half step.</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fc_sharp_nat_min_raised_7th_keyboard.PNG?alt=media&token=c150b0a4-2b31-43ef-bc6d-1c22cd25e00c" alt="C sharp natural minor with raised 7th (keyboard)" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-10">And here's our result:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fc_sharp_har_min_staff.JPG?alt=media&token=d86a54b4-8990-4c0e-8a1a-b338d72f88a6" alt="C sharp harmonic minor scale on the staff" className="rounded-md" />
                    <figcaption className="text-gray-500"><small>C sharp harmonic minor scale, ascending and descending</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-10">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fc_sharp_har_min_scale.mp3?alt=media&token=a7410bf0-909d-4d15-8aca-8a27ae63c97c" />
                    <figcaption className="text-gray-500"><small>Listen to the C sharp harmonic minor scale</small></figcaption>
                </figure>
            </section>


            <SectionDivider />
            
            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-6">Hopefully you are now more confident with your Harmonic Minor scales. As mentioned earlier - this scale is very common and you are sure to be using it regularly as a musician!</p>
                <p className="leading-8"><span className="font-bold">Tip</span>: practice playing a harmonic minor scale from a random note and see how long it takes you to figure it out. The more you do it, the easier it gets!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostBuildAHarmonicMinorScale
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

const PostBuildAMelodicMinorScale = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="How to Build a Melodic Minor Scale" date="November 17, 2022" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fbuild_a_melodic_minor_scale_cover.jpg?alt=media&token=50daa80a-fb74-4a3a-85a5-bf829cf853ef&_gl=1*1v50nkt*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTY1NzkuOC4wLjA." alt="build a melodic minor scale cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64">
                <p className="mb-6">The melodic minor scale is one of the three minor scales we have in music (the others being the <Link href="build-a-natural-minor-scale"><span className="dcam-link">natural minor</span></Link> and <Link href="build-a-harmonic-minor-scale"><span className="dcam-link">harmonic minor</span></Link>). One way it is different from the two other minor scales is that it uses different notes depending on whether it is going up (ascending) or down (descending).</p>
                <p>In this article, I am going to show you two different ways to build a melodic minor scale from any note. I hope you&apos;re excited - let&apos;s go!</p>
            </section>

            <SectionDivider />

            <PostHeading heading="Building a Melodic Minor Scale" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-16">There are two approaches we can use to building the melodic minor scale. The first is a sort of cookie-cutter method - by applying a set formula to our notes. The second is a slightly more sophisticated way that will require a bit of prior knowledge of music theory. Let&apos;s begin with the first method now.</p>

                <PostSubheading subheading="Method #1: The Formula" bottom="mb-6" />
                <p className="mb-10">Here, we will create a melodic minor scale by simply following a formula of whole steps and half steps. Remember that the notes of this scale are different depending on whether we are going up or down, which means we will have two different formulas, one of the ascending version and the other for descending. Here they are:</p>
                <figure className="flex-shrink-0 flex flex-col md:flex-row md:justify-between items-center mb-16">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fmel_ascending_formula.png?alt=media&token=8babfb98-8bde-44be-99d2-e3fe866bf5ae&_gl=1*15pw1nf*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NTk5NzQuNjAuMC4w" alt="melodic minor ascending formula" className="rounded-md md:w-[50%]" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fmel_descending_formula.png?alt=media&token=b2974e9f-4521-4bd0-bb17-9f2c3fefb82b&_gl=1*1b9zki2*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjAwMDAuMzQuMC4w" alt="melodic minor descending formula" className="rounded-md md:w-[50%]" />
                </figure>
                <PostSubheading subheading="Method #2: Using the Harmonic & Natural Minor Scales" bottom="mb-6" />
                <p className="mb-10">For this method, we need to be familiar with the natural minor and harmonic minor scales, which can be thought of as the predecessors of the melodic minor scale. In my experience, this method is more practical than just memorizing a formula of whole steps and half steps as it is more meaningful for the brain, which makes it easier to remember (at least for me!).The idea here is to take the harmonic minor scale as our starting point and to modify it slightly on the way up (ascending). Then,  just use the natural minor scale on the way down (descending).</p>
            </section>

            <PostDivider />

            <PostHeading heading="Putting It to Practice" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading='Example 1: "A Melodic Minor Scale"' bottom="mb-12" />
                <PostSubheading subheading="1. Using the Formula" bottom="mb-6" />
                <p className="mb-14">For our first example, let's build a relatively easy minor scale, the <span className="font-bold">A Melodic Minor.</span> Applying our formula of whole steps and half steps gives us the following result:</p>
                <figure className="flex-shrink-0 flex justify-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_mel_min_asc_desc.png?alt=media&token=e4618d7b-c104-4151-9e73-d64365569873&_gl=1*tlobso*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjA2MjcuNDIuMC4w" alt="A melodic minor scale using formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">"A" to "B" is a whole step, "B" to "C" is a half step, "C" to "D" is a whole step, "D" to "E" is a whole step, "E" to "F♯" is a whole step, "F♯" to "G♯" is a whole step, and "G♯" to "A" is a half step. On the way down, we bring the 6th and 7th degrees down by a half step so that "G♯" becomes "G" and "F♯" becomes "F". As a result, the ascending portion of our scale consists of the notes: "A", "B", "C", "D", "E", "F♯", "G♯", and (repeated) "A", while the descending portion consists of the notes: "A", "G", "F", "E", "D", "C", "B", "A" (the natural minor).</p>

                <PostSubheading subheading="2. Using the Harmonic & Natural Minor Scales" bottom="mb-6" />
                <p className="mb-14">For this method, we will take the <span className="font-bold">A Harmonic Minor</span> scale as our starting point, which we know contains a "G♯" as its raised 7th:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_harmonic_minor.PNG?alt=media&token=df6baf8e-4621-44ef-a0f1-4838e272ae8b&_gl=1*1au8jqg*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjExMzIuNDguMC4w" alt="A harmonic minor scale" className="rounded-md md:w-[70%]" />
                </figure>
                <p className="mb-14">For the melodic version, we are only going to use the ascending portion of this scale and modify it slightly by also raising the 6th degree ("F" becomes "F♯"). So let&apos;s do that now:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_min_mel_ascending.PNG?alt=media&token=eb01e62e-aa15-48d8-8cff-dea29e5cdbb3&_gl=1*1u6l4nd*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjEyNjQuMjYuMC4w" alt="A melodic minor, ascending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">Great, we&apos;re half way there. Now for the descending portion, which is even easier. All we have to do is bring our 6th and 7th degrees back down by a half step. In other words, use the <span className="font-bold">A Natural Minor scale</span>. So we get:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_min_mel_descending.PNG?alt=media&token=1eed6a42-82e4-4225-8e02-823e8639d7b7&_gl=1*10c1spx*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjEzNzMuNTMuMC4w" alt="A melodic minor, descending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">Putting the two together, we get a complete, ascending and descending scale:</p>
                <figure className="flex flex-col items-center mb-20">
                <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_mel_min_complete.PNG?alt=media&token=002d6cd2-1a19-466a-9ac2-35b53210ec3e&_gl=1*rbwhc5*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjE1MTEuMjIuMC4w" alt="A melodic minor, ascending and descending" className="rounded-md md:w-[70%]" />
                    <figcaption className="text-gray-500"><small>A melodic minor scale, ascending and descending</small></figcaption>
                </figure>

                <PostDivider />
                <PostDivider />
                <PostDivider />


                <PostSubheadingRed subheading='Example 2: "D Harmonic Minor Scale"' bottom="mb-12" />
                <PostSubheading subheading="1. Using the Formula" bottom="mb-6" />
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
                <PostSubheading subheading="1. Using the Formula" bottom="mb-10" />
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

export default PostBuildAMelodicMinorScale
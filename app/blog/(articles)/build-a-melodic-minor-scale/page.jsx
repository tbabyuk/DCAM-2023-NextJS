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
    title: "How to Build a Melodic Minor Scale | Da Capo Academy of Music",
    description: "Master building the melodic minor scale in any key with this simple, step-by-step guide. Includes helpful graphics!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "How to Build a Melodic Minor Scale | Da Capo Academy of Music",
        description: "Master building the melodic minor scale in any key with this simple, step-by-step guide. Includes helpful graphics!",
        url: "https://dacapomusic.ca/blog/build-a-melodic-minor-scale",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2022-11-17T18:49:52+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fbuild_a_melodic_minor_scale_cover.jpg?alt=media&token=50daa80a-fb74-4a3a-85a5-bf829cf853ef&_gl=1*1c8ugir*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0ODgxOC42Ny4xLjE2OTYwNDg4MjEuNTcuMC4w",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostBuildAMelodicMinorScale = () => {
    
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="How to Build a Melodic Minor Scale" date="November 17, 2022" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fbuild_a_melodic_minor_scale_cover.jpg?alt=media&token=50daa80a-fb74-4a3a-85a5-bf829cf853ef&_gl=1*1c8ugir*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjA0ODgxOC42Ny4xLjE2OTYwNDg4MjEuNTcuMC4w" alt="build a melodic minor scale cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="leading-8 px-5 lg:px-36 xl:px-64">
                <p className="mb-6">The melodic minor scale is one of the three minor scales we have in music (the others being the <Link href="build-a-natural-minor-scale"><span className="dcam-link">natural minor</span></Link> and <Link href="build-a-harmonic-minor-scale"><span className="dcam-link">harmonic minor</span></Link>). One of the ways it is different from the other two minor scales is that it uses different notes depending on whether it is going up (ascending) or down (descending).</p>
                <p>In this article, I am going to show you two different ways to build the melodic minor scale from any note. I hope you&apos;re excited - let&apos;s go!</p>
            </section>

            <SectionDivider />

            <PostHeading heading="Building a Melodic Minor Scale" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-16">There are two approaches we can use to building the melodic minor scale. The first is a sort of cookie-cutter method - by applying a set formula to our notes. The second is a slightly more sophisticated way that will require a bit of prior knowledge of music theory. Let&apos;s begin with the first method now.</p>

                <PostSubheading subheading="Method #1: The Formula" bottom="mb-6" />
                <p className="mb-10">This method allows us to build a melodic minor scale by simply following a formula of whole steps and half steps. Remember that the notes of this scale are different depending on whether we are going up or down, which means we will have two different formulas, one for the ascending version and the other for descending. Here they are:</p>
                <figure className="flex-shrink-0 flex flex-col md:flex-row md:justify-between items-center mb-16">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fmel_ascending_formula.png?alt=media&token=8babfb98-8bde-44be-99d2-e3fe866bf5ae&_gl=1*15pw1nf*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NTk5NzQuNjAuMC4w" alt="melodic minor ascending formula" className="rounded-md md:w-[50%]" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fmel_descending_formula.png?alt=media&token=b2974e9f-4521-4bd0-bb17-9f2c3fefb82b&_gl=1*1b9zki2*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjAwMDAuMzQuMC4w" alt="melodic minor descending formula" className="rounded-md md:w-[50%]" />
                </figure>
                <PostSubheading subheading="Method #2: Using the Harmonic & Natural Minor Scales" bottom="mb-6" />
                <p className="mb-6">For this method, we need to be familiar with the natural minor and harmonic minor scales. In my experience, this method is more practical than just memorizing a formula of whole steps and half steps as it is more meaningful for the brain, which makes it easier to remember (at least for me!). The idea here is to take the harmonic minor scale as our starting point and to modify it slightly on the way up (ascending). Then, just use the natural minor scale on the way down (descending).</p>
                <p>If this doesn't make much sense now, don't worry! Everything will become clear when we put it to practice below, so read on!</p>
            </section>

            <PostDivider />

            <PostHeading heading="Putting It to Practice" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading='Example 1: "A Melodic Minor Scale"' bottom="mb-12" />
                <PostSubheading subheading="1. Using the Formula" bottom="mb-6" />
                <p className="mb-14">For our first example, let's build a relatively easy minor scale, the <span className="font-bold">A Melodic Minor.</span> Applying our formula of whole steps and half steps gives us the following result:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_mel_min_asc_desc.png?alt=media&token=e4618d7b-c104-4151-9e73-d64365569873&_gl=1*tlobso*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjA2MjcuNDIuMC4w" alt="A melodic minor scale using formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">"A" to "B" is a whole step, "B" to "C" is a half step, "C" to "D" is a whole step, "D" to "E" is a whole step, "E" to "F♯" is a whole step, "F♯" to "G♯" is a whole step, and "G♯" to "A" is a half step. On the way down, we bring the 6th and 7th degrees down by a half step so that "G♯" becomes "G" and "F♯" becomes "F", thus giving us the <span className="font-bold">A Natural Minor</span> scale.</p>

                <PostSubheading subheading="2. Using the Harmonic & Natural Minor Scales" bottom="mb-6" />
                <p className="mb-14">For this method, we will take the <span className="font-bold">A Harmonic Minor</span> scale as our starting point, which we know contains a "G♯" as its raised 7th:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_harmonic_minor.PNG?alt=media&token=df6baf8e-4621-44ef-a0f1-4838e272ae8b&_gl=1*1au8jqg*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjExMzIuNDguMC4w" alt="A harmonic minor scale" className="rounded-md md:w-[70%]" />
                </figure>
                <p className="mb-14">Now, we are going to modify our harmonic scale slightly by also raising the 6th degree ("F" becomes "F♯"), which is going to give us the ascending portion of our A Melodic Minor scale. So let&apos;s do that now:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_min_mel_ascending.PNG?alt=media&token=eb01e62e-aa15-48d8-8cff-dea29e5cdbb3&_gl=1*1u6l4nd*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjEyNjQuMjYuMC4w" alt="A melodic minor, ascending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">Great, we&apos;re half way there. Now for the descending portion, which is even easier. All we have to do is bring our 6th and 7th degrees back down by a half step. In other words, use the <span className="font-bold">A Natural Minor</span> scale. So we get:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_min_mel_descending.PNG?alt=media&token=1eed6a42-82e4-4225-8e02-823e8639d7b7&_gl=1*10c1spx*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjEzNzMuNTMuMC4w" alt="A melodic minor, descending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">Putting the two together, we get a complete <span className="font-bold">A Melodic Minor</span> scale, ascending and descending:</p>
                <figure className="flex flex-col items-center mb-20">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fa_mel_min_complete.PNG?alt=media&token=002d6cd2-1a19-466a-9ac2-35b53210ec3e&_gl=1*rbwhc5*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1OTkxMS42MC4xLjE2OTU5NjE1MTEuMjIuMC4w" alt="A melodic minor, ascending and descending" className="rounded-md md:w-[70%]" />
                    <figcaption className="text-gray-500"><small>A melodic minor scale, ascending and descending</small></figcaption>
                </figure>

                <PostSubheadingRed subheading='Example 2: "D Melodic Minor Scale"' bottom="mb-12" />
                <PostSubheading subheading="1. Using the Formula" bottom="mb-6" />
                <p className="mb-14">Following our formula pattern of whole steps and half steps, our <span className="font-bold">D Melodic Minor</span> scale is:</p>
                <figure className="flex-shrink-0 flex justify-center mb-20">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fd_mel_min_completeNG.PNG?alt=media&token=527d5cba-cf52-4829-b047-503301562ea8&_gl=1*17zpwbf*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDc0MTkuNDEuMC4w" alt="D melodic minor scale using the formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>

                <PostSubheading subheading="2. Using the Harmonic & Natural Minor Scales" bottom="mb-6" />
                <p className="mb-14">First, the <span className="font-bold">D Harmonic Minor</span> scale:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fd_har_min_complete.PNG?alt=media&token=ed3a7ab6-ef08-47aa-92c3-07defc7287c4&_gl=1*hx79rq*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDc2MjYuNjAuMC4w" alt="D harmonic minor scale" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-14">For the ascending part of our melodic scale, let's raise the 6th degree on the way up, so that "B♭" becomes just "B":</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fd_mel_min_ascending.PNG?alt=media&token=264d72cc-0f63-4316-af3c-c4fa618e7977&_gl=1*qcpeol*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDc3NTEuNDYuMC4w" alt="D melodic minor, ascending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">For the descending portion, we bring down the 6th and 7th degrees:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fd_mel_min_descending.PNG?alt=media&token=2863da5c-f798-4f26-8ba9-4da3a8eac3fa&_gl=1*do9s2s*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDc5OTEuNTAuMC4w" alt="D melodic minor, descending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">Putting the two together, we get a complete, ascending and descending version of the <span className="font-bold">D Melodic Minor</span> scale:</p>
                <figure className="flex flex-col items-center mb-20">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Fd_mel_min_completeNG.PNG?alt=media&token=527d5cba-cf52-4829-b047-503301562ea8&_gl=1*17zpwbf*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDc0MTkuNDEuMC4w" alt="D melodic minor, ascending and descending" className="rounded-md md:w-[70%]" />
                    <figcaption className="text-gray-500"><small>D melodic minor scale, ascending and descending</small></figcaption>
                </figure>

                <PostSubheadingRed subheading='Example 3: "F♯ Melodic Minor Scale"' bottom="mb-6" />
                <p className="mb-14">Lastly, let's try something a bit harder, the <span className="font-bold">F♯ Melodic Minor</span> scale.</p>
                <PostSubheading subheading="1. Using the Formula" bottom="mb-6" />
                <p className="mb-14">Following our formula patter of whole steps and half steps, we get:</p>
                <figure className="flex-shrink-0 flex justify-center mb-20">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Ff_sharp_min_mel_complete.PNG?alt=media&token=55c5e212-2451-471c-b79b-8ffbe06c128b&_gl=1*l9v2xv*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDgyNTcuNDUuMC4w" alt="F♯ melodic minor scale using the formula" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>

                <PostSubheading subheading="2. Using the Harmonic & Natural Minor Scales" bottom="mb-6" />
                <p className="mb-14">First, the <span className="font-bold">F♯ Harmonic Minor</span> scale:</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Ff_sharp_min_har_complete.PNG?alt=media&token=6d3f2fea-c960-4322-954f-d37d15929bad&_gl=1*1l5m7gw*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDg0NzIuNDQuMC4w" alt="F♯ harmonic minor scale" className="w-[100%] md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-14">For the ascending part of our melodic scale, let's raise the 6th degree on the way up, so that "D" becomes just "D♯":</p>
                <figure className="flex-shrink-0 flex justify-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Ff_sharp_min_mel_ascending.PNG?alt=media&token=55c322a5-2b65-43d6-90a6-2daa87d3d068&_gl=1*hgowd8*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDg1NDMuNDcuMC4w" alt="F♯ melodic minor, ascending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">For the descending portion, we bring down the 6th and 7th degrees:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Ff_sharp_min_mel_descending.PNG?alt=media&token=61bc203d-5be0-414c-bc62-47414ab94d40&_gl=1*biyhr*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDg1ODIuOC4wLjA." alt="F♯ melodic minor, descending" className="rounded-md md:w-[50%]" />
                </figure>
                <p className="mb-14">Putting the two together, we get a complete, ascending and descending scale:</p>
                <figure className="flex flex-col items-center mb-20">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-melodic-minor-scale%2Ff_sharp_min_mel_complete.PNG?alt=media&token=55c5e212-2451-471c-b79b-8ffbe06c128b&_gl=1*l9v2xv*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NjAwNzMzNS42Mi4xLjE2OTYwMDgyNTcuNDUuMC4w" alt="D melodic minor, ascending and descending" className="rounded-md md:w-[70%]" />
                    <figcaption className="text-gray-500"><small>F♯ melodic minor scale, ascending and descending</small></figcaption>
                </figure>
            </section>

            <SectionDivider />
            
            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion leading-8 px-5 lg:px-36 xl:px-64 mb-20">
                <p className="mb-6">Hopefully this tutorial has made you more confident with your Melodic Minor scales.</p>
                <p>Tip: practice writing/playing a melodic minor scale from random notes and see how long it takes you to figure it out. The more you do it, the easier it will get!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostBuildAMelodicMinorScale
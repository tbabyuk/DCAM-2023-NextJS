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
    title: "How to Build a Chromatic Scale | Da Capo Academy of Music",
    description: "Master building the chromatic scale starting from any note in this simple, step-by-step guide. Includes helpful graphics and audio!",
    keywords: ["build a chromatic scale", "chromatic scale music theory"]
}


const PostBuildAChromaticScale = () => {

  return (
        <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="How to Build a Chromatic Scale" date="November 28, 2022" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fbuild_a_chromatic_scale_cover.jpg?alt=media&token=9d8bc98d-b7fe-49e1-90de-b9396f40824c" alt="build a chromatic scale cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-14">The <span className="font-bold">chromatic scale</span> is a scale made up of 12 different notes separated by half-steps (semitones). The 13th note is a repetition of the 1st note an octave apart. On the piano keyboard, if you start on any key and play every note (white and black) in order one octave up or down, you will get a chromatic scale.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_c_keyboard.jpg?alt=media&token=fe56892f-9604-4b1e-bbdb-01082a795d41" alt="chromatic scale on keyboard example" className="md:w-[70%] rounded-md" />
                </figure>
                <p className="mb-20">In music theory, we often write the chromatic scale in both ascending and descending form, separated by a bar line. The bar line makes it easier to write the descending part of the scale by cancelling out all preceding accidentals (see example below).</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_c.PNG?alt=media&token=39131d3f-8ac5-4245-8d5b-996a6585eaa0" alt="chromatic scale on music staff example" className="xl:w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale starting on C</small></figcaption>
                </figure>                
                <figure className="flex flex-col items-center mb-14">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fc_chromatic_audio.mp3?alt=media&token=cf713ec5-c26c-48fb-8f18-134eb866d4ca" />
                    <figcaption className="text-gray-500"><small>Listen to how it sounds when played!</small></figcaption>
                </figure>
                <p className="mb-10">Unlike major and minor scales, there is more than one correct way to write chromatic scales. At the end of the day, our main guiding principle should always be to make it as readable as possible for the musician, who will, after all, be playing the notes! With this thought in mind, let&apos;s dive in and see how we can build the chromatic scale!</p>
                <p className="mb-10 italic font-semibold">Unlike diatonic scales like major and minor, chromatic scales are not based on any key. So for a chromatic scale from the note C, we would just call it "Chromatic scale starting on C", as opposed to "C chromatic scale". This is an important distinction to keep in mind.</p>
            </section>

            <SectionDivider />

            <PostHeading heading="Rules for Notating Chromatic Scales" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-14">When writing/notating a chromatic scale, such as on a music theory exam or in a musical composition, there are some basic rules we need to keep in mind. Here they are:</p>
                <ul className="list-decimal list-inside">
                    <li className="mb-8"><span className="font-bold">Do not change the starting note enharmonically</span><br />Whatever note your chromatic scale starts on must always be written the same way. So if you start on "G♯" for example, do not call it "A♭" later in the scale.</li>
                    <li className="mb-8"><span className="font-bold">Do not use the same letter name more than twice in a row.</span><br />For example, we can not write "F♭", "F♮" and "F♯" when writing a chromatic scale, as this would be using the same letter name ("F") three times.</li>
                    <li className="mb-8"><span className="font-bold">For chromatic scales without a key signature, try to use sharps when ascending and flats when descending.</span><br />This is because for musicians, sharps are easier to read when going up and flats when going down.</li>
                    <li className="mb-8"><span className="font-bold">For chromatic scales with a key signature (such as in a musical score), choose accidentals based on the key signature.</span><br />This means that if the key signature is made up mostly of flats, stick with flats when writing your scale (even the ascending part). The same goes for sharps.</li>
                </ul>
            </section>
            
            <PostDivider />

            <PostHeading heading="Writing Chromatic Scales with and without Key Signatures" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <p className="mb-20">Chromatic scales can be written with or without a key signature. Scales without a key signature are common in music theory exercises or in technical exercises for your particular instrument. In sheet music and musical scores, however, you will often find chromatic passages in a piece of music that is in a specific key. In such cases, the composer has to incorporate a chromatic scale into the key signature. Below, we will see examples of how to write chromatic scales in both situations.</p>

                <PostSubheadingRed subheading="1. Writing Chromatic Scales without a Key Signature" bottom="mb-12" />
                <p className="mb-14">If our starting note is either a natural or a sharp note, use sharps for the ascending and flats for the descending part of the scale, as per <span className="font-bold">Rule #3</span> above. Here are some examples:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_f.PNG?alt=media&token=84ebb295-23fe-4323-be7c-ed109ab9a143" alt="chromatic scale on music staff example" className="xl:w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale starting on F</small></figcaption>
                </figure> 
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Ff_chromatic_audio.mp3?alt=media&token=0c10e41e-bc84-4c01-b1cc-6b6f768c0d69" />
                </figure>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_f_sharp.PNG?alt=media&token=30e6651c-8b7f-46de-a274-bcd075d361d7" alt="chromatic scale starting on F♯" className="xl:w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale starting on F♯</small></figcaption>
                </figure> 
                <figure className="flex flex-col items-center mb-14">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Ff_sharp_chromatic_audio.mp3?alt=media&token=f51e54f2-58ab-45e0-9b90-63cb682d74e9" />
                </figure>
                <p className="mb-14">When the starting note is a flat note, we might need to use some flats and natural signs when going up in order not to break <span className="font-bold">Rule #2</span> above, but we should switch to sharps as soon as possible as per <span className="font-bold">Rule #3</span>. Here is an example:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_d_flat.PNG?alt=media&token=ea9239b1-f1ea-40a0-ab61-5a7ee6fc4dad" alt="chromatic scale starting on D♭" className="xl:w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale starting on D♭</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-14">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fd_flat_chromatic_audio.mp3?alt=media&token=744d419b-a5e8-45c7-8502-fc3a3d868869" />
                </figure>
                <p className="mb-20">Notice that in the scale above, we switched to sharps as soon as we could, after the note “F”. Before that, we had no choice but to use flats and naturals.</p>
            </section>
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading="2. Writing Chromatic Scales with a Key Signature" bottom="mb-12" />
                <p className="mb-10">As mentioned earlier, there is more than one way to write a chromatic scale, and this also applies to chromatic scales with key signatures. The method I will be demonstrating here is one recommended by the ABRSM (Associated Board of the Royal Schools of Music), which I quite like. This method requires us to add one more rule to the four rules we saw earlier. And that rule is:</p>
                <p className="mb-10">5.<span className="font-bold"> The 1st, 4th and 5th degrees of the scale should be represented unaltered.</span><br /> In other words, the notes representing the primary triads of our key should be written in the form in which they naturally occur in that particular key.</p>
                <p className="mb-10">Let&apos;s see how this works in practice by writing a chromatic scale occuring in a key of "B♭ major".</p>
                <p className="mb-14">We know that the key signature of "B♭ Major" is "B♭" and "E♭" and we also know that the 4th and 5th degrees of this scale will be "E♭" and "F", respectively. Let&apos;s keep these facts in mind as we write out our scale.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_in_b_flat_major.PNG?alt=media&token=3b4e66cf-f258-45a9-915e-12bf23397bb7" alt="chromatic scale in B♭ major" className="xl:w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale in the key of B♭ major</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_in_b_flat_major_audio.mp3?alt=media&token=d3588e41-9c03-4c5e-8549-5fdcac20005c" />
                </figure>
                <p className="mb-14">Note that we did not use sharps at all in the ascending part, as recommended by <span className="font-bold">Rule #3</span>. Instead, we stuck to flats as per <span className="font-bold">Rule #4</span>, to keep things consistent throughout our scale. If we had used sharps, this is how our ascending part would look.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-14">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_in_b_flat_major_ascending_wrong.png?alt=media&token=41b90147-bad5-4242-b0a6-2a1da58734e2" alt="chromatic scale in B♭ major, bad example" className="md:w-[60%] rounded-md" />
                </figure>
                <p className="mb-10">While this version might also be considered fine, it&apos;s not preferred. Not only are we not being consistent with our accidentals, but we&apos;re also not following the rule of having our subdominant note unaltered here. Instead of having an "E♭" for the subdominant, we are writing it as "D♯" and therefore violating our rule.</p>
                <p className="mb-14">Here are a few more correct examples, for variety.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_in_e_major.PNG?alt=media&token=dce9620f-a90c-41df-9076-c78df0fcef07" alt="chromatic scale in E major" className="xl:w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale in the key of E Major</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_in_e_major_audio.mp3?alt=media&token=13cb307d-9d4f-4cc6-bb20-7fc2cacc7f7a" />
                </figure>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_scale_in_d_flat_major.PNG?alt=media&token=0adf90c4-e90b-44b4-bc66-2faf74d978ab" alt="chromatic scale in D♭ major" className="xl:w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale in the key of D♭ major</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_in_d_flat_major_audio.mp3?alt=media&token=5477ca2d-670c-4341-986d-1d61a76d5afd" />
                </figure>
            </section>

            <PostDivider />

            <PostHeading heading="Example of a Chromatic Scale in Music" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-14">See a real-world example of the use of chromatic scales in the famous composition by Rimsky-Korsakov called “Flight of the Bumblebee”.</p>
                <div className="flex flex-col items-center">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/aF5ka3z8eLU?si=The8ZfKqiRzGDx9E"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            <SectionDivider />
            
            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-6">Chromatic scales add color and interest to musical compositions and you are bound to come across them may many times in your musical journey. Hopefully you now have a much more solid understanding of how these scales work from a theoretical perspective as well as the knowledge of how to correctly write then in music notation. Good luck!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostBuildAChromaticScale
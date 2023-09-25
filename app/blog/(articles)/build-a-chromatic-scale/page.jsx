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
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-harmonic-minor-scale%2Fbuild_a_harmonic_minor_scale_cover.jpg?alt=media&token=e4afb2cc-b602-4369-8d96-9bfca54c76a7" alt="build a harmonic minor scale cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8">
                    <p className="mb-10">The <span className="font-bold">chromatic scale</span> is a scale made up of 12 different notes separated by half-steps (or semitones). The 13th note is a repetition of the 1st note, an octave apart. On the piano keyboard, if you start on any key and play every note (white and black) in order one octave up or down, you will get a chromatic scale.</p>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_c_keyboard.jpg?alt=media&token=fe56892f-9604-4b1e-bbdb-01082a795d41" alt="chromatic scale on keyboard example" className="md:w-[70%] rounded-md" />
                    </figure>
                    <p className="mb-20">On the music staff, you will often see the chromatic scale written in both ascending and descending form, separated by a bar line. The bar line makes it easier to write the descending part of the scale by cancelling out all preceding accidentals (see example below).</p>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_c.PNG?alt=media&token=39131d3f-8ac5-4245-8d5b-996a6585eaa0" alt="chromatic scale on music staff example" className="w-[85%] rounded-md" />
                        <figcaption className="text-gray-500"><small>Chromatic scale starting on C</small></figcaption>
                    </figure>                
                    <figure className="flex flex-col items-center mb-20">
                        <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fc_chromatic_audio.mp3?alt=media&token=cf713ec5-c26c-48fb-8f18-134eb866d4ca" />
                        <figcaption className="text-gray-500"><small>Listen to how it sounds when played!</small></figcaption>
                    </figure>
                    <p className="mb-10">Unlike major and minor scales, there is more than one correct way to write chromatic scales. At the end of the day, our main guiding principle should always be to make it as readable as possible for the musician, who will, after all, be playing the notes! With this thought in mind, let&apos;s dive in a see how to we can build the chromatic scale!</p>
                    <p className="mb-10 italic">Unlike diatonic scales like major and minor, chromatic scales are not based on any key. So for a chromatic scale from the note C, we would just call it "Chromatic scale starting on C", as opposed to "C chromatic scale". This is an important distinction to keep in mind.</p>
                </div>            
            </section>

            <SectionDivider />

            <PostHeading heading="Rules for Notating Chromatic Scales" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <p className="mb-16">When you need to notate a chromatic scale, such as on a music theory exam or in a musical composition, there are some basic rules we need to keep in mind. The guiding principle behind these agreed-upon rules is to make the notes as easy as possible to read for musicians. Here they are:</p>
                <ul className="list-decimal list-inside">
                    <li className="mb-8"><span className="font-bold">Do not change the starting note enharmonically</span><br />Whatever note your chromatic scale starts on must always be written the same way. So if you start on G♯ for example, do note call the same pitch A♭ later in the scale.</li>
                    <li className="mb-8"><span className="font-bold">Do not use the same letter name more than twice in a row.</span><br />For example, we can not write F♭, F♮ and F♯ when writing a chromatic scale, as this is using the letter name (&apos;F&apos;) three times.</li>
                    <li className="mb-8"><span className="font-bold">For chromatic scales without a key signature, try to use sharps for the ascending part of the scale and flats for the descending part.</span><br />This is because sharps are easier to read when going up and flats when going down.</li>
                    <li className="mb-8"><span className="font-bold">For chromatic scales with a key signature (such as in a musical score), choose accidentals based on the key signature.</span><br />This means that if the key signature is made up mostly of flats, stick with flats when writing your scale (even the ascending part). The same goes for sharps.</li>
                </ul>
            </section>
            
            <PostDivider />


            <PostHeading heading="Writing Chromatic Scales with and without Key Signatures" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <p className="mb-20">Chromatic scales can be written with or without a key signature. Scales without a key signature are common in music theory exercises or in technical exercises for your particular instrument. In sheet music and musical scores, however, you will often find chromatic passages in a piece of music that is in a major or a minor key. In such situations, the composer has to incorporate a chromatic scale into the key signature. Below, we will see examples of both of these cases and learn how to correctly write a chromatic scale in each situation.</p>

                <PostSubheadingRed subheading="Writing a Chromatic Scales without a Key Signature" bottom="mb-12" />
                <p className="mb-20">If our starting note is either a natural or a sharp note, use sharps for the ascending and flats for the descending part of the scale, as per <span className="font-bold">Rule #3</span> above. Let&apos;s see an example of each of these cases:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_f.PNG?alt=media&token=84ebb295-23fe-4323-be7c-ed109ab9a143" alt="chromatic scale on music staff example" className="w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale starting on F</small></figcaption>
                </figure> 
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Ff_chromatic_audio.mp3?alt=media&token=0c10e41e-bc84-4c01-b1cc-6b6f768c0d69" />
                </figure>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_f_sharp.PNG?alt=media&token=30e6651c-8b7f-46de-a274-bcd075d361d7" alt="chromatic scale starting on F♯" className="w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale starting on F♯</small></figcaption>
                </figure> 
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Ff_sharp_chromatic_audio.mp3?alt=media&token=f51e54f2-58ab-45e0-9b90-63cb682d74e9" />
                </figure>
                <p className="mb-20">When the starting note is a flat note, we might need to use some flats and natural signs when going up in order not to break <span className="font-bold">Rule #2</span> above, but we should switch to sharps as soon as possible as per <span className="font-bold">Rule #3</span>. Let&apos;s see an example of this:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fchromatic_on_d_flat.PNG?alt=media&token=ea9239b1-f1ea-40a0-ab61-5a7ee6fc4dad" alt="chromatic scale starting on D♭" className="w-[85%] rounded-md" />
                    <figcaption className="text-gray-500"><small>Chromatic scale starting on D♭</small></figcaption>
                </figure>
                <figure className="flex flex-col items-center mb-20">
                    <audio controls src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fbuild-a-chromatic-scale%2Fd_flat_chromatic_audio.mp3?alt=media&token=744d419b-a5e8-45c7-8502-fc3a3d868869" />
                </figure>
                <p className="mb-20">Notice that in the scale above, we switched to sharps as soon as we could, after the note “F”. Before that, we had no choice but to use flats and naturals.</p>
            </section>
            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading="Writing a Chromatic Scales with a Key Signature" bottom="mb-12" />
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

export default PostBuildAChromaticScale
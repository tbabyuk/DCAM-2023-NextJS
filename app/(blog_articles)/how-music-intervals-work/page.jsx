import { PostTitle } from "../../components/PostTitle"
import { PostSource } from "../../components/PostSource"
import { PostSectionHeading } from "../../components/PostSectionHeading"
import { PostHeading } from "../../components/PostHeading"
import { PostSubheading } from "../../components/PostSubheading"
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton"
import { PostDivider } from "../../components/PostDivider"
import PostImage from "../../components/PostImage"

export const metadata = {
    title: "How Music Intervals Work | Da Capo Academy of Music",
    description: "Learn about major, minor, perfect, diminished and augmented music intervals, how they work, and how to identify them both on the music staff and by ear!",
    keywords: ["music theory", "music intervals", "identify music intervals"]
}


const PostHowMusicIntervalsWork = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="How Music Intervals Work (with examples)" date="July 4, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fmusic_intervals_cover.jpg?alt=media&token=d7d4e709-2a3f-42df-8f1e-8ffa483d0868" alt="Music Intervals cover"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="leading-8">Music intervals are an essential component of music theory and simply one of those things that every musician should know. This article is designed to give you a full understanding of this topic in a way that is logical and easy to follow.</p><br />

                    <p className="leading-8 italic"><span className="font-semibold">Note:</span> to get the most out of this article, you must have a solid understanding of major scales. If you are not familiar with this topic, it is strongly advisable that you read our article titled “How to Build a Major Scale” before proceeding.</p>
                </div>
            </section>

            <PostHeading heading="What is a music interval?" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Finterval.PNG?alt=media&token=553cc536-ef1a-4b0f-8189-fc764646ba23" alt="photo of Glenn Gould" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Glenn Gould</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>A <span className="font-bold">music interval</span> is simply the distance between any two notes (pitches). For example, the distance between “C” and “E” is an interval, and so is the distance between “G#” and “D” or “A♭” and “F#”. You get the idea! </p>
                    </div>
                </div>            
            </section>

            <PostDivider />

            <PostHeading heading="Harmonic vs. Melodic Intervals" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fharmonic_interval.png?alt=media&token=29e1a60c-d43b-4743-8e24-2a4db7432f7d" alt="harmonic interval example" style={{width: "220px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>A <span className="font-bold">harmonic interval</span> is when two notes or pitches occur simultaneously. The notes of the harmonic interval are written vertically on the music staff, one above the other.</p>
                    </div>
                </div>            
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fmelodic_interval.png?alt=media&token=ac4878f0-df24-46d6-a27a-705d888ffc8a" alt="harmonic interval example" style={{width: "220px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>A <span className="font-bold">melodic interval</span> is when two notes or pitches occur at different times. On the music staff, the notes of the melodic interval are written in sequence, one after the other.</p>
                    </div>
                </div>            
            </section>

            <PostDivider />
            
            <PostHeading heading="How are Music Intervals Named?" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>When naming a music interval, we say two things about it: its <span className="font-bold">quality</span> and its <span className="font-bold">size</span>. If we say that an interval is a “Perfect 5th”, for example, the “Perfect” refers to its quality and the “5th” refers to its size. Other examples might be “Major 2nd”, “Minor 7th”, etc.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fsize_and_quality.png?alt=media&token=b6277e11-900d-48f6-8a1f-55f2a627aa7b" alt="harmonic interval example" style={{width: "160px"}} className="rounded-md" />
                    </figure>
                </div>
                <p className="leading-8">Let’s look more carefully at what exactly “size” and “quality” mean and how they work.</p>
            </section>

            <PostSubheading subheading="Interval Size" bottom="mb-8" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="mt-8 leading-8 mb-14">
                    <p><span className="font-bold">Interval size</span> is a number that tells us how far two notes are from one another. When calculating interval size, we count from the lower to the higher note in alphabetical order. Accidentals (sharps, flats, natural signs, etc.) have no effect on interval size.</p><br />
                    <p>Let’s look at a few examples:</p>
                </div>
                <div className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 gap-3 mb-16 bg-gray-200">
                    <div className="mb-12 md:mb-0 md:p-5">
                        <div>
                            <p className="font-bold">Q: What is the interval size between the notes “C” and “E”?</p>
                            <figure className="py-8 flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fc_to_e.PNG?alt=media&token=a1655cde-251c-4b48-a883-7d5ea362edc6" alt="harmonic interval example" style={{width: "160px"}} className="rounded-md" />
                            </figure>
                            <p className="text-[0.85rem]"><span className="font-semibold">Explanation:</span><br /> Count how many letter names there are between C and E: C is 1, D is 2, E is 3. So, the interval size is “3”, or “3rd”.</p>
                        </div>
                    </div>
                    <div className="md:p-5">
                        <div>
                        <p className="font-bold">Q: What is the interval size between the notes “C” and “E”?</p>
                        </div>
                        <figure className="py-8 flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fd_to_b_flat.PNG?alt=media&token=e8843ab1-bbd9-486e-a4ae-d980babb565e" alt="harmonic interval example" style={{width: "160px"}} className="rounded-md" />
                        </figure>
                        <p className="text-[0.85rem]"><span className="font-semibold">Explanation:</span><br /> Count how many letter names there are between “D” and “B♭” (the flat on B has no effect on interval size): D is 1, E is 2, F is 3, G is 4, A is 5, B is 6. So, the interval size is “6”, or “6th”.</p>
                    </div>
                </div>
            </section>

            <PostSubheading subheading="Interval Quality" bottom="mb-8" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p><span className="font-bold">Interval quality</span> (or <span className="font-bold">type</span>) refers to the kind of sound that an interval produces. Here is a list of the types of intervals we can have:</p><br />
                <table className="mx-auto my-10 bg-gray-100 w-full md:w-[50%] blog-table">
                    <thead>
                        <tr>
                            <th>Interval Quality</th>
                            <th>Short Form</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Major</td>
                            <td>maj</td>
                        </tr>
                        <tr>
                            <td>Minor</td>
                            <td>min</td>
                        </tr>
                        <tr>
                            <td>Perfect</td>
                            <td>per</td>
                        </tr>
                        <tr>
                            <td>Diminished</td>
                            <td>dim</td>
                        </tr>
                        <tr>
                            <td>Augmented</td>
                            <td>aug</td>
                        </tr>
                    </tbody>
                </table>
                <p>Now, let's delve deeper into how we identify intervals in music.</p>
            </section>

            <PostDivider />

            <PostHeading heading="How to Identify Intervals in a Staff" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8">First, let’s look at how to identify intervals we can see visually on the music staff. The secret to doing this lies in the major scale. To demonstrate, we are going to use our favourite beginner-friendly scale – the “C Major”. Here it is for reference:</p>
                <figure className="py-8 flex-shrink-0 flex flex-col justify-center items-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fc_major_scale.png?alt=media&token=bd533e05-f8cd-4f01-aca3-567183587c83" alt="harmonic interval example" className="rounded-md md:w-[55%]" />
                </figure>
                <p className="leading-8">As you might already know, every major scale follows the same pattern of whole steps and half steps, which means that the distance relationship between the notes is the same across all major scales. Keeping this fact in mind, here are the names of intervals between notes of the major scale (using “C” as our reference point). Let’s do our best to memorize these:</p>
                <figure className="py-8 flex-shrink-0 flex flex-col justify-center items-center">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fmajor_intervals.jpg?alt=media&token=cb696cd8-c688-443d-a850-b829350d75d7" alt="harmonic interval example" className="rounded-md md:w-[45%]" />
                </figure>


                
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostHowMusicIntervalsWork
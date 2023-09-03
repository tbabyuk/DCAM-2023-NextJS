import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheading } from "@/app/components/PostSubheading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"

export const metadata = {
    title: "How Music Intervals Work | Da Capo Academy of Music",
    description: "Learn about major, minor, perfect, diminished and augmented music intervals, how they work, and how to identify them both on the music staff and by ear!",
    keywords: ["music theory", "music intervals", "identify music intervals"]
}

const PostMusicIntervalsExplained = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="How Music Intervals Work (with examples)" date="July 4, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fmusic_intervals_cover.jpg?alt=media&token=d7d4e709-2a3f-42df-8f1e-8ffa483d0868" alt="Music Intervals cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24">
                <div>
                    <p className="leading-8 mb-14">Music intervals are an essential part of music theory and simply one of those things that every musician should know. This article will give you a solid understanding of this topic with simple explanations and plenty of examples.</p>

                    <p className="leading-8 italic"><span className="font-semibold">Note:</span> To get the most out of this article, you should have a solid understanding of major scales. If you are not familiar with this topic, it is strongly advisable that you read our article titled <a className="dcam-link" href="https://dacapomusic.ca/build-a-major-scale/" target="_blank">"How to Build a Major Scale"</a> before proceeding.</p>
                </div>
            </section>

            <PostHeading heading="What Is a Music Interval?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Finterval.PNG?alt=media&token=553cc536-ef1a-4b0f-8189-fc764646ba23" alt="music interval example" style={{width: "220px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>A <span className="font-bold">music interval</span> is simply the distance between any two notes (pitches). For example, the distance between the notes "C" and "E" is an interval, and so is the distance between "G#" and "D" or "A♭" and "F#". You get the idea! </p>
                    </div>
                </div>            
            </section>

            <PostDivider />

            <PostHeading heading="Harmonic vs. Melodic Intervals" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-20">
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
            
            <PostHeading heading="How are Music Intervals Named?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col-reverse md:flex-row mb-10">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>When naming a music interval, we say two things about it: its <span className="font-bold">quality</span> and its <span className="font-bold">size</span>. If we say that an interval is a "Perfect 5th", for example, the "Perfect" refers to its quality and the "5th" refers to its size. Other examples might be "Major 2nd", "Minor 7th", etc.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fsize_and_quality.png?alt=media&token=b6277e11-900d-48f6-8a1f-55f2a627aa7b" alt="harmonic interval example" style={{width: "160px"}} className="rounded-md" />
                    </figure>
                </div>
                <p className="leading-8">Let's look more carefully at what exactly "size" and "quality" mean and how they work.</p>
            </section>

            <PostSubheading subheading="Interval Size" bottom="mb-10" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="mt-8 leading-8 mb-14">
                    <p><span className="font-bold">Interval size</span> is a number that tells us how far two notes are from each other. When calculating interval size, we count from the lower to the higher note in alphabetical order. Accidentals (sharps, flats, natural signs, etc.) have no effect on interval size.</p><br />
                    <p>Let's look at a few examples:</p>
                </div>
                <div className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 gap-3 mb-16 bg-gray-200">
                    <div className="mb-12 md:mb-0 md:p-5">
                        <div>
                            <p className="font-bold">Q: What is the interval size between the notes "C" and "E"?</p>
                            <figure className="py-8 flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fc_to_e.PNG?alt=media&token=a1655cde-251c-4b48-a883-7d5ea362edc6" alt="harmonic interval example" style={{width: "160px"}} className="rounded-md" />
                            </figure>
                            <p className="text-[0.85rem]"><span className="font-semibold">Explanation:</span><br /> Count how many letter names there are between "C" and "E": C is 1, D is 2, E is 3. So, the interval size is "3", or "3rd".</p>
                        </div>
                    </div>
                    <div className="md:p-5">
                        <div>
                        <p className="font-bold">Q: What is the interval size between the notes "D" and "B♭"?</p>
                        </div>
                        <figure className="py-8 flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fd_to_b_flat.PNG?alt=media&token=e8843ab1-bbd9-486e-a4ae-d980babb565e" alt="harmonic interval example" style={{width: "160px"}} className="rounded-md" />
                        </figure>
                        <p className="text-[0.85rem]"><span className="font-semibold">Explanation:</span><br /> Count how many letter names there are between "D" and "B♭" (the flat on B has no effect on interval size): D is 1, E is 2, F is 3, G is 4, A is 5, B is 6. So, the interval size is "6", or "6th".</p>
                    </div>
                </div>
            </section>

            <PostSubheading subheading="Interval Quality" bottom="mb-10" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="mb-10"><span className="font-bold">Interval quality</span> (or <span className="font-bold">type</span>) refers to the kind of sound that an interval produces. Here is a list of the types of intervals we can have:</p><br />
                <table className="mx-auto bg-gray-100 w-full md:w-[50%] blog-table mb-14">
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
                <p>Now, let's dive deeper into how we identify intervals in music.</p>
            </section>

            <PostDivider />

            <PostHeading heading="How to Identify Intervals on a Staff" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-10">First, let's look at how to identify intervals we can see visually on the music staff. The secret to doing this lies in the major scale. To demonstrate, we are going to use our favourite beginner-friendly scale - the "C Major". Here it is for reference:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fc_major_scale.png?alt=media&token=bd533e05-f8cd-4f01-aca3-567183587c83" alt="harmonic interval example" className="rounded-md md:w-[55%]" />
                </figure>
                <p className="leading-8 mb-10">As you might already know, every major scale follows the same pattern of whole steps and half steps, which means that the distance relationship between the notes is the same across all major scales. Keeping this fact in mind, here are the names of intervals between notes of the major scale (using "C" as our reference point). Let's do our best to memorize these:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fmajor_intervals.jpg?alt=media&token=cb696cd8-c688-443d-a850-b829350d75d7" alt="harmonic interval example" className="rounded-md md:w-[45%]" />
                </figure>
                <p className="leading-8 mb-10">Several important observations can be made from the above chart:</p>
                    <ol className="list-decimal list-inside mb-10 leading-8">
                        <li className="font-bold">The 1st, 4th, 5th and 8th intervals are all PERFECT</li><br />
                        <li className="font-bold">The 2nd, 3rd, 6th and 7th intervals are all MAJOR</li>
                    </ol>
                <p className="leading-8 mb-10">This pattern holds true for any major scale and is the key to naming intervals!</p>
                <p className="leading-8 mb-12">Okay, so we understand what "major" and "perfect" intervals are, but what about the others: "minor", "diminished" and "augmented"? The remaining three interval types can be thought of as deriving from the first two. The following table illustrates how we get "minor", "diminished" and "augmented" intervals from "major" and "perfect" intervals:</p>
                <table className="mx-auto bg-gray-100 w-full md:w-[50%] blog-table mb-12">
                    <thead>
                        <tr>
                            <th>Starting <br />Interval</th>
                            <th>Change</th>
                            <th>Becomes</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td rowSpan="3">Major</td>
                            <td>1 half step bigger</td>
                            <td>Augmented</td>
                        </tr>
                        <tr>
                            <td>1 half step smaller</td>
                            <td>Minor</td>
                        </tr>
                        <tr>
                            <td>2 half steps smaller</td>
                            <td>Diminished</td>
                        </tr>
                        <tr>
                            <td rowSpan="2">Perfect</td>
                            <td>1 half step bigger</td>
                            <td>Augmented</td>
                        </tr>
                        <tr>
                            <td>1 half step smaller</td>
                            <td>Diminished</td>
                        </tr>
                    </tbody>
                </table>
                <p className="leading-8 mb-10">And voila - you are now armed with all the tools you need to identify any interval!</p>
                <p className="leading-8">Next, let's work through a few exercises to check your understanding.</p>
            </section>

            <PostDivider />

            <PostHeading heading="Exercises" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-20">Let's put what we have learned into practice. We will look several intervals and then go through the logical steps to figure what kind of interval each one is.</p>
                {/* Exercise 1 */}
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-200">Exercise #1</h3>
                <p className="leading-8 mb-10">Identify the following interval:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fex_1.PNG?alt=media&token=d87ee138-6999-43d4-81be-e9a7a961f4c8" alt="interval exercise 1" className="rounded-md md:w-[20%]" />
                </figure>
                <p className="leading-8 mb-20"><span className="italic underline">Solution:</span><br />
                Counting up from the lower note (G) to the higher note (C) gives us 4, so our interval size is a "4th". Now, let's think about its quality. Because our lowest note is "G", we are going to assume that we are in the key of "G Major". Our knowledge of major scales tells us that "G Major" only has an "F#", which means the note "C" is natural in this scale (just as it is in our interval). From the table above, we know that in any major scale, the interval between the tonic note and the 4th note is called "perfect". Therefore, we can safely conclude that our interval is a <span className="font-bold">Perfect 4th</span>.</p>
                {/* Exercise 2 */}
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-200">Exercise #2</h3>
                <p className="leading-8 mb-10">Identify the following interval:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fex_2.PNG?alt=media&token=b89cd7d1-05ba-42d4-a7ff-17ee516ea4d2" alt="interval exercise 2" className="rounded-md md:w-[20%]" />
                </figure>
                <p className="leading-8 mb-20"><span className="italic underline">Solution:</span><br />
                Counting up from the lower note (D) to the higher note (A#) gives us 5, so our interval size is a "5th". Now, let's think about its quality. Because our lower note is "D", we assume that we are in the key of "D Major". "D Major" has 2 sharps: "F#" and "C#", with all the other notes being natural. So, if our "A" was natural, the interval would be a "Perfect 5th". But our "A" is in fact sharp, meaning it was moved up by 1 half step. From the table above, we know that when a "Perfect" interval is raised by 1 half step, it becomes "Augmented". Therefore, we can safely conclude that our interval is an <span className="font-bold">Augmented 5th</span>.</p>
                {/* Exercise 3 */}
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-200">Exercise #3</h3>
                <p className="leading-8 mb-10">Identify the following interval:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fex_3.PNG?alt=media&token=1a48ebaf-c31c-48e3-9199-ba560d1bfba1" alt="interval exercise 3" className="rounded-md md:w-[20%]" />
                </figure>
                <p className="leading-8 mb-20"><span className="italic underline">Solution:</span><br />
                This one looks a bit disorienting at first, as the first note is higher than the second. But we should not let that stop us - remember, we always start counting from the lower note, which in this case is "F". Counting up from "F" to "D" gives us a 6, so our interval size is a "6th". Now, let's think about the quality. The key of "F Major" only has a "B♭" in it, which means the "D" is natural. If our "D" was also natural, the interval would be a "Major 6th". However, our "D" has been lowered by 1 half step to "D♭". Remembering our interval table, we know that a major interval lowered by 1 half step becomes a minor interval. Therefore, we can safely conclude that our interval is a <span className="font-bold">Minor 6th</span>.</p>
                {/* Exercise 4 */}
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-200">Exercise #4</h3>
                <p className="leading-8 mb-10">Identify the following interval:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fex_4.PNG?alt=media&token=265f3c42-b7c8-4612-bb6f-28b7d08ff70a" alt="interval exercise 4" className="rounded-md md:w-[20%]" />
                </figure>
                <p className="leading-8 mb-20"><span className="italic underline">Solution:</span><br />
                Counting up from "A" to "G" gives us 7, so we know that our interval is some kind of 7th. Now for the quality. I chose this example on purpose because students often get stuck on this type of interval. The problem is, there isn't really an "A# Major" key in the standard list of major keys. So what are we supposed to do? The trick here is to temporarily imagine that "A" has no sharp and treat it as just an "A". From here, we know that "A Major" scale has 3 sharps: "F#", "C#", and "G#". So if our "G" was sharp, the interval would be a major 7th (assuming we are in "A major"). Because our "G" has no sharp, it means it is 1 half step smaller, meaning that our interval (so far) is in fact a "Minor 7th". But we are not finished yet. It's only a "Minor 7th" if our bottom note is "A", but it is actually an "A#". Referring back to Figure 2.0, we learn that a minor interval made 1 half step smaller becomes "diminished". Therefore, we can safely conclude that our interval is a <span className="font-bold">Diminished 7th</span>.</p>
                {/* Exercise 5 */}
                <h3 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-200">Exercise #5</h3>
                <p className="leading-8 mb-10">Identify the following interval:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fex_5.PNG?alt=media&token=194aec4c-96a1-48ea-8620-110bb5360582" alt="interval exercise 5" className="rounded-md md:w-[20%]" />
                </figure>
                <p className="leading-8 mb-20"><span className="italic underline">Solution:</span><br />
                Counting up from "E" to "B" gives us 5, so we know that our interval is some kind of 5th. Our bottom note is "E♭", so we will assume we are in the key of "E♭ Major". The key signature of "E♭ Major" is "B♭", "E♭" and "A♭". So, if our "B" was flat, then our interval would be a "Perfect 5th". Our B is, in fact, flat. Therefore, we can safely conclude that our interval is a <span className="font-bold">Perfect 5th</span>.</p>
            </section>

            <PostDivider />

            <PostHeading heading="How to Identify Intervals by Ear" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10 md:mb-0">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Flistening.png?alt=media&token=9aac01f3-5d9c-42c7-9bcf-7e74e0f69b4b" alt="photo of Glenn Gould" style={{width: "220px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>Identifying intervals on a music staff is nice and dandy, but what happens when we can only hear them? Can we learn to identify music intervals by sound alone? Yes we can! In fact, being able to identify intervals aurally is even more useful for musicians from a practical sense, such as when they want to play something that they heard on their instrument. Because most of us do not have the gift of "perfect pitch" (which would allow us to identify intervals quite easily and instantly), we are going to focus here on how to do it using what is called "relative pitch".</p>
                    </div>
                </div>      
                <p className="leading-8 mb-10"><span className="font-bold">Relative pitch</span> refers to the ability to identify a particular note (or interval) by using another note as a reference. In other words, we are identifying the second note "relative" to the first note.</p>
                <p className="leading-8 mb-14"><span className="italic">But how can I know what the first note is? Don't you need "perfect pitch" for that?</span> Actually, it is absolutely unnecessary to know what the first note is in order to identify an interval. All you need to be able to do is judge the distance between the two notes. To help us do that, we are going to use songs! That's right, songs that you very likely already know and can recall at will. For every interval, I am going to give you an example of a song that uses it. Once you learn to associate an interval to a specific song, you should be able to identify any interval like a pro!</p>
                <table className="mx-auto bg-gray-100 w-full md:w-[70%] blog-table text-[0.8rem] mb-14">
                    <thead>
                        <tr>
                            <th>Ascending (up)</th>
                            <th>Interval</th>
                            <th>Descending (down)</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>(same pitch, easy to hear)</td>
                            <td className="font-bold">per 1</td>
                            <td>(same pitch, easy to hear)</td>
                        </tr>
                        <tr>
                            <td>"Jaws" theme</td>
                            <td className="font-bold">min 2</td>
                            <td>"Fur Elise" by Beethoven</td>
                        </tr>
                        <tr>
                            <td>"Happy Birthday"</td>
                            <td className="font-bold">maj 2</td>
                            <td>"Marry Had a Little Lamb"</td>
                        </tr>
                        <tr>
                            <td>"Oh, Canada" Canadian anthem</td>
                            <td className="font-bold">min 3</td>
                            <td>"Star Spangled Banner" US anthem</td>
                        </tr>
                        <tr>
                            <td>"When the Saints Go Marching In"</td>
                            <td className="font-bold">maj 3</td>
                            <td>"Symphony No. 5" by Beethoven</td>
                        </tr>
                        <tr>
                            <td>"Here Comes the Bride"</td>
                            <td className="font-bold">per 4</td>
                            <td>"O Come, All Ye Faithful"</td>
                        </tr>
                        <tr>
                            <td>"The Simpsons" theme</td>
                            <td className="font-bold">aug 4/dim 5</td>
                            <td>"Even Flow" by Pearl Jam</td>
                        </tr>
                        <tr>
                            <td>"Twinkle, Twinkle, Little Star"</td>
                            <td className="font-bold">per 5</td>
                            <td>"The Flintstones" theme</td>
                        </tr>
                        <tr>
                            <td>"The Entertainer" by Scott Joplin</td>
                            <td className="font-bold">min 6</td>
                            <td>"Love Story" theme</td>
                        </tr>
                        <tr>
                            <td>"Dashing Through the Snow"</td>
                            <td className="font-bold">maj 6</td>
                            <td>"The Music of the Night" from "Phantom"</td>
                        </tr>
                        <tr>
                            <td>"Star Trek: The Original Series"</td>
                            <td className="font-bold">min 7</td>
                            <td>"Watermelon Man" by H. Hancock</td>
                        </tr>
                        <tr>
                            <td>"Take On Me" by "A-Ha"</td>
                            <td className="font-bold">maj 7</td>
                            <td>"I Love You" by Cole Porter</td>
                        </tr>
                        <tr>
                            <td>"Somewhere Over the Rainbow"</td>
                            <td className="font-bold">maj 7</td>
                            <td>"Willow, Weep for Me" by Etta James</td>
                        </tr>
                    </tbody>
                </table>
                <p className="leading-8">Admittedly, this list of songs is a bit biased towards the English-speaking part of the world. If you are not familiar with a lot of these, I encourage you to do some internet searching for songs in your own language that you could use to help with interval identification. Good luck!</p>
            </section>


            <PageBottomTrialButton />
        </main>

  )
}

export default PostMusicIntervalsExplained
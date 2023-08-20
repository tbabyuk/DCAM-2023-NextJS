
import { PostTitle } from "../../components/PostTitle"
import { PostSource } from "../../components/PostSource"
import { PostSectionHeading } from "../../components/PostSectionHeading"
import { PostHeading } from "../../components/PostHeading"
import { PostSubheading } from "../../components/PostSubheading"
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton"
import { PostDivider } from "../../components/PostDivider"
import PostImage from "../../components/PostImage"

export const metadata = {
    title: "Famous Actors Who Can Play the Piano | Da Capo Academy of Music",
    description: "Find out which well-known actors can play the piano",
    keywords: ["actors", "talented actors", "piano"]
}

const PostActorsWhoPlayPiano = () => {
  return (
            <main className="rcm-violin-exam-mark-guide-post text-gray-700 text-[0.9rem]">
            <PostTitle title="Famous Actors Who Can Play the Piano" date="June 18, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Factors-who-play-piano%2Factors_who_play_piano_cover.jpg?alt=media&token=c08d7994-a9c7-41b6-a30a-6b232edf2759" alt="Famous Canadian pianists featured image"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="mb-5 leading-8">You know them for their acting skills, but you probably didn’t know that these famous actors could also impress you on the piano! Here is our list of the top 5 actors who can play the piano! (ordered by age, not skill level)</p>
                </div>
            </section>

            <PostHeading heading="Sandra Bullock" />
            <section className="px-5 lg:px-36 xl:px-64 py-10">
                <div className="bio flex flex-col md:flex-row">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Factors-who-play-piano%2Fbullock.jpg?alt=media&token=10c73982-6b14-4903-b07e-d4f8742866d2" alt="photo of Sandra Bullock" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Sandra Bullock (Photo by Steve Granitz)</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-center">
                        <p>Born to a mother who was both an opera singer and a vocal
                        instructor, it is hardly surprising that Sandra Bullock began learning both singing and piano as a child. Although her parents hoped for their daughter to have a career in music – we are sure they aren’t disappointed with how she turned out! Bullock has shown off her piano skills in several TV shows and movies, like “The Net”.</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Hugh Laurie" />
            <section className="px-5 lg:px-36 xl:px-64 py-10">
                <div className="bio flex flex-col-reverse md:flex-row">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-center">
                        <p>“Dr. House”, aka Hugh Laurie, began piano lessons at the age of six. He is also quite a good singer and has displayed both of these talents in many of his productions as an actor, like the show “A Bit of Fry & Laurie”. And just to show you how serious Laurie is about music: he has actually released two of this own studio albums: “Let Them Talk” (2011) and “Didn’t It Rain” (2013). Impressive, Hugh!</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Factors-who-play-piano%2Flaurie.jpg?alt=media&token=037a56a2-34f5-4d5d-987c-2236318cdcb3" alt="photo of Hugh Laurie" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Hugh Laurie (Photo by Kathy Hutchins)</small></figcaption>
                    </figure>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Richard Gere" />
            <section className="px-5 lg:px-36 xl:px-64 py-10">
                <div className="bio flex flex-col md:flex-row">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Factors-who-play-piano%2Fgere.jpg?alt=media&token=a77cbb47-08c6-4aa1-9da8-a87694f387fb" alt="photo of Richard Gere" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Richard Gere</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-center">
                        <p>Turns out the star of “Pretty Woman” and “An Officer and a Gentleman” has quite a musical vein in him! Not only can he play the piano, but also the guitar and trumpet! In high school, Gere even used to write his own music for various stage productions. Interesting fact: in the piano scene from “Pretty Woman”, Gere is actually playing his own composition!</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Anthony Hopkins" />
            <section className="px-5 lg:px-36 xl:px-64 py-10">
                <div className="bio flex flex-col-reverse md:flex-row">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-center">
                        <p>We know Anthony Hopkins a talented actor, but his first passion was actually music. In fact, his dream as a child was to become a composer! Hopkins began piano lessons as a child, often preferring to play it instead of doing his school work. Today, Hopkins also does a bit of composing and often posts Instagram videos of himself playing the piano for his cat, Niblo.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Factors-who-play-piano%2Fhopkins.jpg?alt=media&token=c406dd0e-e034-486c-a378-e6ac7847a64f" alt="photo of Anthony Hopkins" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Anthony Hopkins</small></figcaption>
                    </figure>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Clint Eastwood" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24">
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Factors-who-play-piano%2Feastwood.jpg?alt=media&token=71973ed6-5865-4c4f-927a-4e95f92f29bc" alt="photo of Clint Eastwood" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Clint Eastwood</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-center">
                        <p>Like Anthony Hopkins – Clint Eastwood also originally envisioned a career in music for himself. He started learning the piano early on and has always been especially passionate about jazz, country, and western music. After he became established as an actor, he was able to return to his love for music by composing scores for films such as “Mystic River” and “Million Dollar Baby”, among others.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="italic self-start mb-3">Watch Clint Eastwood play some blues live on stage:</p>
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/X_UzzH4Xa-0"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>



            <PageBottomTrialButton />
        </main>

  )
}

export default PostActorsWhoPlayPiano
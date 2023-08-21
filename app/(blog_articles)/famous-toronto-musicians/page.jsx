
import { PostTitle } from "../../components/PostTitle"
import { PostSource } from "../../components/PostSource"
import { PostSectionHeading } from "../../components/PostSectionHeading"
import { PostHeading } from "../../components/PostHeading"
import { PostSubheading } from "../../components/PostSubheading"
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton"
import { PostDivider } from "../../components/PostDivider"
import PostImage from "../../components/PostImage"

export const metadata = {
    title: "Famous Musicians from Toronto | Da Capo Academy of Music",
    description: "You probably didn't know that these world-famous artists all call Toronto their home!",
    keywords: ["toronto artists", "toronto musicians", "toronto singers", "artists from toronto", "musicians from toronto", "singers from toronto"]
}

const PostFamousTorontoMusicians = () => {
  return (
            <main className="text-gray-700 text-[0.9rem]">
            <PostTitle title="Famous Musicians from Toronto" date="May 27, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-toronto-musicians%2Ffamous_toronto_musicians_cover.jpg?alt=media&token=4c94ba43-53ae-4eac-a29a-250e05b3b87b" alt="Famous Musicians from Toronto cover"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="mb-5 leading-8">Being the most populous city and metropolitan area in Canada, Toronto (and the GTA) is almost destined to produce all sorts of talented individuals. In this article we will take a look at some of this city’s most valuable musical exports – past and present. And just so it doesn’t look like we are playing favorites – we’ve organized our list from youngest to oldest. So let’s dive in and find out just who these famous Toronto musicians are!</p>
                </div>
            </section>

            <PostHeading heading="Shawn Mendes" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col-reverse md:flex-row mb-12">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                        <p>Singer, songwriter, and record producer – Shawn Peter Raul Mendes was born in Pickering, Ontario, on August 8, 1998. He started out by posting song covers to YouTube and Vine when he was 15, some of which became especially successful and won him many likes and followers. Eventually, he was noticed by an artist manager and, in 2014, signed to his first record label. Despite his young age, Mendes has produced a number of successful hits like “Treat You Better” and “In My Blood” among others. There is no doubt that this young man is just getting started in his musical career and we will certainly be hearing more hits from him in the years to come.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-toronto-musicians%2Fmendes.jpg?alt=media&token=7ceed1e2-0083-4db8-bf59-cbe7fdf0f807" alt="Sean Mendes photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Sean Mendes</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10 w-fit">Sean Mendes <a href="https://www.shawnmendesofficial.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Alessia Cara" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col-reverse md:flex-row mb-12">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                        <p>Born in Brampton, Ontario, on July 11, 1996, Alessia Cara (short for Caracciolo) is a singer, songwriter, and multi-instrumentalist. Cara showed early interest in music and, aged 13, started a YouTube channel where she posted cover songs of various artists. This exposure led to her signing a management deal with American record label EP Entertainment at age 18. In 2018, Cara was the first Canadian to be named Best New Artist at the Grammy Awards. Today she is most known for songs such as “Here” and “Scars to Your Beautiful” and her songs are regularly heard on the radio. She is the only female in our otherwise male-dominated list, but if you know any other female artists that should be included here – do let us know!</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-toronto-musicians%2Fcara.jpg?alt=media&token=9260445c-1724-4735-aedb-24b743d96a51" alt="Sean Mendes photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Alessia Cara</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10 w-fit">Alessia Cara <a href="http://www.alessiacara.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="The Weeknd (Abel Tesfaye)" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col-reverse md:flex-row mb-12">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                        <p>The artist behind hits such as “Starboy” and “Can’t Feel My Face” was born in Toronto on February 16, 1990 as Abel Makkonen Tesfaye. The Weeknd’s journey to fame started when he uploaded some of this first songs to YouTube in 2010. These got positive feedback from listeners, and subsequently received even more exposure when Drake (our other featured Torontonian) included them in a blog post. Encouraged, The Weeknd continued to release new material and soon began touring with Drake, often performing as his opening act. The rest, as they say, is history. Today, The Weeknd has managed to cultivate his own unique musical style as he keeps delighting fans with one hit after another.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-toronto-musicians%2Ftheweeknd.jpg?alt=media&token=2659717a-1c0b-418f-8a6a-fdc9143bf4bf" alt="Sean Mendes photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>The Weeknd</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10 w-fit">The Weeknd <a href="https://www.theweeknd.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Drake" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col-reverse md:flex-row mb-12">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                        <p>Aubrey Drake Graham, a.k.a. Drake, was born in Toronto on October 24, 1986. Drake started out as an actor in the teen drama series “Degrassi: The Next Generation”, but music was his real passion. He left the series in 2007 to devote more time to musical projects, which began to garner attention and led to his first record label deal in 2009. The albums that soon followed brought him a lot of critical success and catapulted his career into stardom. Today Drake is one of the best-selling artists in the world and is well-known for hits such as “God&apos;s Plan” and “Hotline Bling”. In addition to being one of the most famous of all Toronto musicians, Drake is also and entrepreneur and a global ambassador for the Toronto Raptors.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-toronto-musicians%2Fdrake.jpg?alt=media&token=63a2fd46-bce6-4b9b-8d07-03efa9296bf5" alt="Sean Mendes photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Drake</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10 w-fit">Drake <a href="https://drakerelated.com/rooms/el-chico-studios" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Glenn Gould" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col-reverse md:flex-row mb-12">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                        <p>Born in Toronto on September 25, 1932, Glenn Gould was one of the most-celebrated and respected classical pianists of the 20th century. A child prodigy at the piano, he passed his Royal Conservatory examinations at just 12 years old. Gould was especially known for his interpretations of the works of J. S. Bach, though his repertoire also included works by Beethoven, Mozart, Haydn, and Brahms. Aside from his musical genius, Gould was also known for his many eccentricities: he hummed while playing, hated being touched, hated the cold, was a hypochondriac, and disliked social functions, among others. Despite this, he remains one of Toronto’s most impressive musical talents.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-toronto-musicians%2Fgould.jpg?alt=media&token=b8cf9eb7-0359-4dd6-88a1-a0f006a12fc7" alt="Sean Mendes photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Glenn Gould</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10 w-fit">Glenn Gould <a href="https://glenngould.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>













            <PageBottomTrialButton />
        </main>

  )
}

export default PostFamousTorontoMusicians
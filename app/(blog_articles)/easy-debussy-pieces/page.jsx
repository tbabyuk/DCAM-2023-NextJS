import { PostTitle } from "../../components/PostTitle"
import { PostSource } from "../../components/PostSource"
import { PostSectionHeading } from "../../components/PostSectionHeading"
import { PostHeading } from "../../components/PostHeading"
import { PostSubheading } from "../../components/PostSubheading"
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton"
import { PostDivider } from "../../components/PostDivider"
import PostImage from "../../components/PostImage"

export const metadata = {
    title: "The 3 Easiest Debussy Piano Pieces | Da Capo Academy of Music",
    description: "Looking to learn a piece by Debussy that doesn't require advanced mastery of the piano? These 3 are a great place to start!",
    keywords: ["debussy pieces", "easy debussy pieces", "easy debussy piano pieces"]
}

const PostEasyDebussyPianoPieces = () => {
  return (
            <main className="text-gray-700 text-[0.9rem]">
            <PostTitle title="The 3 Easiest Debussy Piano Pieces" date="May 17, 2023" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-debussy-pieces%2Feasy_debussy_pieces_cover.jpg?alt=media&token=7fd595a7-7ffb-4b03-ad3e-c1258122b355" alt="Easy Debussy Pieces cover"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="leading-8">As is usually the case with my "easy" series, I try to put together a collection of pieces that are not just "easy" relative to the composer's other works, but also ones I consider to be the most beautiful. So perhaps a better title for this article would have been "The 3 Easiest and Most Beautiful Debussy Piano Pieces" - but that just sounds too long! Also, keep in mind that the "easiest" piece included here requires you to be at about a high-intermediate level on the piano.</p><br />

                    <p className="leading-8">When it comes to Debussy's piano repertoire, most musicians would probably classify many of the six pieces in his "Children's Corner" suite under the easy category. However, I decided not to include these here since I am not a big fan of these works (feel free to listen to them on YouTube and decide for yourself). Instead, I opted for the three pieces that you find below.</p><br />

                    <p className="leading-8">All three of the pieces chosen here are characterized by a flowing melody and dreamy atmosphere that are so integral to the impressionistic style that Debussy is known for. I hope you find them just as enjoyable as I do!</p>
                </div>
            </section>

            <PostHeading heading="#1. Page d'album​" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1915</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 2</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: F Major</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Moderately fast</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 8 - high intermediate/low advanced</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 4/5 (very nice!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/EpVdA6b01Gs?si=40_Oz_2XpvahSSTv"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key(s)</span>. The piece has only one flat, so (aside from a few accidentals) we are dealing mostly with white keys here.</li>
                            <li><span className="font-bold">The length</span>. At only 2 pages, this piece is pretty short compared to many of Debussy's other piano works.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">LH jumps</span>. The left hand often has to jump between a single note and a chord.</li>
                            <li><span className="font-bold">Multiple voicings</span>. Two melodic lines (especially in RH) might present a challenge for those not experienced with this texture.</li>
                        </ul>
                    </div>
                </section>

            <PostDivider />

            <PostHeading heading="#2. Arabesque no. 1​" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1888</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 5</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: E Major</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Andantino con moto</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 10 - advanced</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/0tsRu5_pmVo?si=vN2zov5vm_FWViF7"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The rhythm</span>. The piece consists mostly of eighth notes and has very few dotted notes, which makes it easier to deal with. Although polyrhythmic passages that often occur between the hands (for example eighth notes in LH with triplets in RH) will be trickier to handle.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key</span>. Unlike our first piece, this one has four sharps, so expect a lot more black keys here.</li>
                            <li><span className="font-bold">Multiple voicings</span>. This peace often has two distinct melodic lines in the RH as well as LH. Knowing which melodic line to bring out and when becomes important.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#3. Clair de lune​​" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1890</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 6</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: D Flat Major</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Andante tres expressif</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 10 - advanced</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/4fvo_iOuSck?si=027Lda4INA6vFH4a"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">The tempo</span>. Despite some animated sections, this is mostly a calm and slow piece, so the speed should be very comfortable even when playing sixteenth notes.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key</span>. With five flats, we are talking about even more black keys here!</li>
                            <li className="mb-4"><span className="font-bold">Rhythm and Polyrhythm</span>. The rhythm here is a lot more complicated than in our first piece in this series, with a lot of dotted notes, ties, and even sextuplets. Polyrhythm between the two hands is even trickier here!</li>
                            <li><span className="font-bold">Thirds</span>. There are quite a few instances of harmonic thirds that occur in RH in this peace, which as many musicians know can be tricky to play well. Hope you've been practicing your thirds!</li>
                        </ul>
                    </div>
            </section>
            <PageBottomTrialButton />
        </main>

  )
}

export default PostEasyDebussyPianoPieces
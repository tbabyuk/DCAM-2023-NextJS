import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"

export const metadata = {
    title: "The 3 Easiest Chopin Waltzes (piano) | Da Capo Academy of Music",
    description: "These three waltzes are not too technically demanding and are a great starting point for those looking to starting playing Chopin waltzes!",
    keywords: ["chopin waltzes", "easy chopin waltzes", "easy chopin pieces"]
}

const PostEasyChopinWaltzes = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="The 3 Easiest Chopin Waltzes (piano)" date="July 27, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-waltzes%2Feasy_chopin_waltzes_cover.jpg?alt=media&token=b08eb378-7fc7-440c-95ac-199b39f5f89f" alt="Easy Chopin Waltzes cover"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="leading-8">Although Chopin is known to have written a total of about 20 waltzes, most of them require a pre-advanced to advanced mastery of the piano to be able to perform comfortably. Luckily, there are 3 that are easier than the others in difficulty level, and should be very manageable for intermediate and high-intermediate level students (think at least 3 years of consistent piano playing). They are: “Waltz in A Minor, op. posth., B 150”, “Waltz in B minor, op. 69, no. 2”, and “Waltz in A flat Major, op. 69, no. 1 ("L'adieu')". Although less technically-demanding than his other waltzes, they are just as beautiful!</p><br />

                    <p className="leading-8">Let's look at each of these pieces in turn and get inspired to learn them!</p>
                </div>
            </section>

            <PostHeading heading="#1. Waltz in A Minor, op. posth., B 150" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: betw. 1843-1848 (betw. ages 33-38), posth.</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 2</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: A Minor</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Allegretto (fairly fast)</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 6 - intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/algM0c_u99k"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key(s)</span>. It's in A Minor, which means you will mostly be using white keys, though there are a few accidentals (especially in second half).</li>
                            <li><span className="font-bold">It's short</span>. There is really only about one page of material to learn. The rest is repetition.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">Ornaments</span>. There are quite a few grace notes and several mordents in this waltz. Make sure to play them quickly and lightly, while maintaining the main beat.</li>
                            <li className="mb-4"><span className="font-bold">Arpeggio run</span>. In one section of the piece, there is an E Major arpeggio that needs to be played quite fast (a triplet followed by a quintuplet). This might need a bit of practice.</li>
                            <li><span className="font-bold">LH jumps</span>. As is the case with a lot of Chopin's compositions, the left hand tends to jump quite a bit between a single note and a chord. Tip: practice the LH separately to get really comfortable with it before doing it HT (hands together).</li>
                        </ul>
                    </div>
                </section>

            <PostDivider />

            <PostHeading heading="#2. Waltz in B Minor, op. 69, no. 2 ('Deux Valses')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1829 (at 19), posth.</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 4 (just over)</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: B Minor (with one part in B Major)</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Moderato</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 8 - upper intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/cxG-kOTMgaA"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key(s)</span>. The majority of the waltz is in B Minor, which is not too difficult with only two sharps. Be warned, however, that it does change to B Major (5 sharps) briefly in the middle, before reverting back to B Minor again.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">Double notes</span>. The second section of the waltz (the one in B Major) uses quite a few double notes, which might take some practice to get good at - particularly the legato double thirds.</li>
                            <li className="mb-4"><span className="font-bold">The B Major section</span>. As mentioned earlier, this section of the waltz uses five sharps, which is bit of a change from just two. Luckily, the section doesn't last long.</li>
                            <li><span className="font-bold">LH jumps</span>. As is the case with a lot of Chopin's compositions, the left hand tends to jump quite a bit between a single note and a chord. Tip: practice the LH separately to get really comfortable with it before doing it HT (hands together).</li>
                        </ul>
                    </div>
                </section>

            <PostDivider />

            <PostHeading heading="#3. Waltz in A flat Major, op. 69, no. 1 ('L'adieu')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                    <div className="leading-8 mb-12">
                        <p>Our final sonata is very comparable in difficulty level to the second one. It is probably the least popular of the three featured here, but popular nevertheless. I give it a confident 4/5 rating.</p>
                    </div>
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1835 (at 25)</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 4-5</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: A Flat Major</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Tempo di Valse</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 8 - upper intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 4/5 (very nice!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/ARcuzt6g6Lw"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The tempo</span>. At “Tempo di Valse”, this piece is the slowest out of the three. Tempo di Valse is usually played somewhere between 90-120 bpm.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key</span>. With its four flats, A flat Major is by no means the hardest key to play in, but not the easiest either. So be prepared for four flats.</li>
                            <li className="mb-4"><span className="font-bold">The "tuplets"</span>. The piece contains several instances of quintuplets, sextuplets, and septuplets (groups of 5, 6 and 7 sixteenth notes played in time of one beat). This will require dexterity and finger agility.</li>
                            <li><span className="font-bold">LH jumps</span>. As is the case with a lot of Chopin's compositions, the left hand tends to jump quite a bit between a single note and a chord. Tip: practice the LH separately to get really comfortable with it before doing it HT (hands together).</li>
                        </ul>
                    </div>
                </section>
            <PageBottomTrialButton />
        </main>

  )
}

export default PostEasyChopinWaltzes
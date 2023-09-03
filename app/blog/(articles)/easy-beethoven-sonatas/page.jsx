import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"

export const metadata = {
    title: "The 3 Easiest Beethoven Sonatas (piano) | Da Capo Academy of Music",
    description: "Looking to learn a Beethoven sonata that doesn't require a very advanced mastery of the piano? These three are a great place to start!",
    keywords: ["beethoven sonatas", "easy beethoven sonatas", "easy beethoven pieces"]
}

const PostEasyBeethovenSonatas = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="The 3 Easiest Beethoven Sonatas (piano)" date="March 8, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-beethoven-sonatas%2Feasy_beethoven_sonatas_cover_photo.jpg?alt=media&token=d3359bf6-2880-4ad2-bcbe-e016809837ab" alt="Easy Beethoven Sonatas cover"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="leading-8">Let's get something straight - when we talk about “easy” Beethoven sonatas, we are of course talking about easy relative the rest of his sonatas, of which he is known to have written about 32. The first two sonatas you will see here are almost universally agreed to be his easiest, while the third one is not so obvious. There were definitely several contenders for the third place, so after the technical considerations, my choice in the end came down to my own personal taste, which I hope you will share and appreciate!</p><br />

                    <p className="leading-8">So if you can't wait to finally try your hand at a Beethoven sonata, here are some some great options for you to start with. Happy playing!</p>
                </div>
            </section>

            <PostHeading heading="#1. Sonata No.19 in G Minor, Op.49 No.1 ('Leichte Sonata')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="leading-8 mb-12">
                        <p>This is the first of two sonatas nicknamed “Leichte Sonaten”, which is German for “Easy Sonatas” (the second one will be covered next). Because of their relative ease, these sonatas are thought to have been written for Beethoven's students. Though composed around 1795-1796, they were not published until 1805, when Beethoven's brother Kaspar took them to the publishing house against Beethoven's wishes. Thank you, Kaspar!</p>
                    </div>
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1795-1796</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: G Minor</li>
                            <li className="font-light"><span className="font-semibold">Movements</span>: 2 (Andante, Rondo: Allegro)</li>
                            <li className="font-light"><span className="font-semibold">Duration</span>: ~ 8 minutes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 8 - high intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 4/5 (really like it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/yqnwJmzXkac"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key(s)</span>. G Minor with its two flats is a relatively easy key to manage.</li>
                            <li><span className="font-bold">1st Movement tempo</span>. The first movement is in “Andante” (at a walking pace) speed, which should be very comfortable even for an intermediate-level pianist.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">2nd Movement tempo</span>. Be prepared to move those fingers in the 2nd, “Allegro” movement, especially when you get to the sixteenth notes.</li>
                            <li className="mb-4"><span className="font-bold">Turns</span>. Yep, that's the musical ornament that tells you to play several quick notes inbetween two main notes. This will require some practicing to get it just right! You will encounter these in both 1st and 2nd movements.</li>
                            <li><span className="font-bold">Staccatissimos</span>. The 2nd Movement contains many staccatissimo notes (short staccatos), which adds another little challenge to the already fast tempo. You will need a very relaxed wrist here and do plenty of slow practice.</li>
                        </ul>
                    </div>
                </section>

            <PostDivider />

            <PostHeading heading="#2. Sonata No.20 in G Major, Op.49 No.2 ('Leichte Sonata')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="leading-8 mb-12">
                        <p>Here is the second of Beethoven's “Leichte Sonaten”, or “Easy Sonatas”. This one is written in G Major instead of Minor. I personally like this one a bit more than the first, but you decide for yourself!</p>
                    </div>
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1795-1796</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: G Major</li>
                            <li className="font-light"><span className="font-semibold">Movements</span>: 2 (Allegro ma non troppo, Tempo di menuetto)</li>
                            <li className="font-light"><span className="font-semibold">Duration</span>: ~ 8 minutes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 8 - high intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/W7WpjF2VILE"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key(s)</span>. G major with its one sharp should not pose much of a challenge.</li>
                            <li><span className="font-bold">2nd Movement tempo</span>. “Tempo di Menuetto” is quite similar to “Andante” and should be quite comfortable for most intermediate-level players.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">1st Movement tempo</span>. Although it's not very fast, “Allegro non troppo” might be a challenge for some people.</li>
                            <li><span className="font-bold">Scale runs</span>. The piece contains occasional scale runs that have to be done quickly and with precision. Hope you've been practicing your scales!</li>
                        </ul>
                    </div>
                </section>

            <PostDivider />

            <PostHeading heading="#3. Sonata No.1 in F Minor, Op.2 No.1" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                    <div className="leading-8 mb-12">
                        <p>Okay, let's be honest - this one is quite a jump from the first two sonatas. But hey, why not challenge yourself a bit? Think of this one as the easiest of the “hard sonatas”. By looking at the Quick Facts alone, you will see that it has 4 movements instead of just 2 of our previous sonatas, as well as a more demanding key. You will also notice that it's considered two RCM levels above the previous two sonatas (level 10 vs. level 8), which reflects its bigger technical demands. If it looks a bit intimidating to you, I definitely recommend starting with one of the first two. But if you're up to the challenge - then dive in!</p>
                    </div>
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1795</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: F Minor & F Major</li>
                            <li className="font-light"><span className="font-semibold">Movements</span>: 4 (Allegro, Adagio, Menuetto and Trio (Allegretto), Prestissimo)</li>
                            <li className="font-light"><span className="font-semibold">Duration</span>: ~ 15-18 minutes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 10 - advanced</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/o5dL-65mKe0"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">2nd Movement tempo</span>. The 2nd movement “Adagio” is quite a comfortable tempo, although the occasional thirty-second notes will keep you on your toes. The 3rd Movement “Allegretto” is also quite manageable.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">4th Movement tempo</span>. If you thought the “Allegro” of the 1st movement was fast, wait until you get the “Prestissimo” of the 4th movement. You'd better have some speed in those fingers!</li>
                            <li><span className="font-bold">The key(s)</span>. The sonata fluctuates between the keys of F Minor and F Major. While F Major is relatively simple, the F Minor with its four flats might be a bit of a challenge for some.</li>
                        </ul>
                    </div>
                </section>
            <PageBottomTrialButton />
        </main>

  )
}

export default PostEasyBeethovenSonatas
import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "The 3 Easiest Chopin Etudes (piano) | Da Capo Academy of Music",
    description: "Looking to learn a beautiful Chopin etude that doesn't require advanced mastery of the piano? These 3 are a great place to start!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "The 3 Easiest Chopin Etudes (piano) | Da Capo Academy of Music",
        description: "Looking to learn a beautiful Chopin etude that doesn't require advanced mastery of the piano? These 3 are a great place to start!",
        url: "https://dacapomusic.ca/blog/easy-chopin-etudes",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2021-04-14T02:17:19+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-etudes%2Feasy_chopin_etudes_cover.jpg?alt=media&token=041c33f1-835d-4b2e-bad3-414564570477",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostEasyChopinEtudes = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="The 3 Easiest Chopin Etudes (piano)" date="April 13, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-etudes%2Feasy_chopin_etudes_cover.jpg?alt=media&token=041c33f1-835d-4b2e-bad3-414564570477" alt="Easy Chopin Etudes cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="leading-8">Chopin is known to have written a total of 27 etudes, most of which are contained in Op. 25 and Op. 10 of his works. In this article, I chose 3 of these 27 that are generally considered the “easier” of the bunch. Remember though, that etudes are by their very nature technically demanding compositions, so even for the 3 etudes discussed here you will need to be an advanced student of the piano.</p><br />

                    <p className="leading-8">The three etudes featured in this list all happen to be from Opus 25, and they are: Etude Op. 25, No. 2 in F Minor (“The Bees”), Etude Op. 25, No. 1 in A flat Major (“Aeolian Etude”) and Etude Op. 25, No. 9 in G flat Major (“The Butterfly”).</p><br />

                    <p className="leading-8">Note: Chopin also has much slower etudes that some people might consider easier than the ones presented here, simply because of their speed. However, for the purposes of this article I chose to go with the easy “fast” etudes, as these are much more popular and, in my opinion, more interesting to play. If you do want to take a look at the easier “slower” etudes of Chopin, feel free to take a look at Etude Op. 10, No. 3 (“Tristesse”), Etude Op. 25, No. 7 (“Cello”), or Etude Op. 10, No. 6.</p>
                </div>
            </section>

            <SectionDivider />

            <PostHeading heading="#1. Etude in F Minor, op. 25 no. 2 ('The Bees')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1830s</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 5</li>
                            <li className="font-light"><span className="font-semibold">Technique focus</span>: light touch, polyrhythm</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: F Minor</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Presto (very fast)</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 10 - advanced</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/VCpf-2aVN38"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">RH notes</span>. The RH melody, although fast, is for the most part conjunct (i.e. the notes are spaced closely together), which makes it easier to play. </li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">Polyrhythmic structure</span>. The piece involves playing triplet eighth notes in RH with triplet quarter notes in LH. This requires a good mastery of hand independence and a good balance between the hands.</li>
                            <li><span className="font-bold">Speed</span>. This peace is meant to be played Presto (very fast), and it could take quite a bit of practice to get to this speed. As always, starting slow and gradually increasing the speed is the best approach here.</li>
                        </ul>
                    </div>
                </section>

            <PostDivider />

            <PostHeading heading="#2. Etude in A flat Major, op. 25, no. 1 ('Aeolian Harp')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1836</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 7</li>
                            <li className="font-light"><span className="font-semibold">Technique focus</span>: RH LH balance, voicing, arpeggios</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: A flat Major</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Allegro sostenuto</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: ARCT (high advanced)</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/1C1Dxf6X0aI"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">Rhythm</span>. Although the piece does have occasional polyrhythmic passages (see below), for the most part the hands are playing the same rhythm, i.e. sextuplets in both hands. This makes things a bit easier for us.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">Balance</span>. The balance and voicing of the melody between the hands is very important in this piece and might give you a big of a challenge. But then again this is the main purpose of the etude!</li>
                            <li><span className="font-bold">Occasional polyrhythm</span>. While for the most part RH and LH are both playing sextuplets, occasionally the LH switches to regular sixteenth notes.</li>
                        </ul>
                    </div>
                </section>

            <PostDivider />

            <PostHeading heading="#3. Etude in G flat Major, op. 25, no. 9 ('Butterfly')" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1830s</li>
                            <li className="font-light"><span className="font-semibold">Pages</span>: 2</li>
                            <li className="font-light"><span className="font-semibold">Technique focus</span>: fast and light octaves</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: G flat Major</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Allegro assai (very fast)</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: ARCT (high advanced)</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 4.5/5 (very nice)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/mifd7aKJ3VI"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">It's short</span>. In fact, this is the shortest of all Chopin's etudes. If played at the indicated tempo, it is just under a minute in duration.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">RH Octaves</span>. This should not be surprising since octave technique is the main focus of this particular etude. To play it well requires a very loose and relaxed wrist, which is constantly in motion here. If this is a bit of a challenge for your at first, make sure to spend plenty of time practicing at a slow to moderate tempo.</li>
                            <li><span className="font-bold">Tempo</span>. Allegro assai means “very fast”, which is how the piece is meant to be performed. Again, starting slow and working up to this speed is the key.</li>
                        </ul>
                    </div>
                </section>
            <PageBottomTrialButton />
        </main>

  )
}

export default PostEasyChopinEtudes
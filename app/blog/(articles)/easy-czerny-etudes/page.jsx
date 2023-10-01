import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "Easy Czerny Etudes (piano) | Da Capo Academy of Music",
    description: "Are you a beginning pianist looking to improve your piano technique? Here is a list of six of my favourite easy Czerny etudes for beginners!",
    keywords: ["czerny etudes", "easy czerny etudes", "easy czerny pieces"],
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Easy Czerny Etudes (piano) | Da Capo Academy of Music",
        description: "Are you a beginning pianist looking to improve your piano technique? Here is a list of six of my favourite easy Czerny etudes for beginners!",
        url: "https://dacapomusic.ca/blog/easy-czerny-etudes",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-09-12T02:09:00+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-czerny-etudes%2Feasy_czerny_etudes_cover_photo.jpg?alt=media&token=4eb69890-69e2-485a-9fa1-fb5f557d5bfc",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostEasyCzernyEtudes = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="Easy Czerny Etudes (piano)" date="September 11, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-czerny-etudes%2Feasy_czerny_etudes_cover_photo.jpg?alt=media&token=4eb69890-69e2-485a-9fa1-fb5f557d5bfc" alt="Easy Czerny Etudes cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="leading-8">Carl Czerny was an Austrian pianist, teacher, and composer of Czech origin who lived from 1791 to 1857. Over his lifetime, he wrote many works for the piano (over a 1000) and many of these are widely used today by students learning to play the piano. I myself played many of his compositions in the past and remember really enjoying them. Now as a teacher, I find teaching them to my students just as enjoyable, not to mention useful in developing their piano technique and helping them grow as pianists. In this article, I have gathered six of (what I think are) his best etudes for beginning piano students. All of these etudes are also featured in the RCM (Royal Conservatory) curriculum for piano students. Enjoy!</p><br />

                    <p className="leading-8">Let's look at each of these pieces in turn and get inspired to learn them!</p>
                </div>
            </section>

            <SectionDivider />

            <PostHeading heading="#1. Etude in C Major, op. 261, no. 3" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Key</span>: C Major</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 3/8</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Allegro (fast)</li>
                            <li className="font-light"><span className="font-semibold">Technical focus</span>: even touch and sustained bass notes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 2 - beginner</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/RmOJrb0QH-M"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The tempo</span>. Allegro is not an easy tempo for beginners and lots of slow practice is required to make the piece sound well at this tempo.</li>
                            <li><span className="font-bold">Sustained bass note</span>. The LH rhythm here requires us to hold a bass note with finger 5 while playing two other notes on top. Students should practice LH by itself plenty of times in order to get the hang of this rhythm.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#2. Etude in F Major, op. 777, no. 22" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Key</span>: F Major</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 3/4</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Allegro (fast)</li>
                            <li className="font-light"><span className="font-semibold">Technical focus</span>: grace notes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 3 - high beginner</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/pZr7gsJqtvQ"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The tempo</span>. Allegro is not an easy tempo for beginners and lots of slow practice is required to make the piece sound well at this tempo.</li>
                            <li><span className="font-bold">Grace notes</span>. For the majority of beginning students, this will likely be the first time they encounter grace notes in music. This is a great opportunity to learn what they are and practice playing them.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#3. Etude in D Minor, op. 261, no. 53" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Key</span>: D Minor</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 4/4</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Allegro (fast)</li>
                            <li className="font-light"><span className="font-semibold">Technical focus</span>: broken chords divided between hands</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 3 - high beginner</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 4/5 (very nice!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/KcFX62cqxSI"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The tempo</span>. Allegro is not an easy tempo for beginners and lots of slow practice is required to make the piece sound well at this tempo.</li>
                            <li><span className="font-bold">RH LH timing</span>. The trick here is to make each chord sound as if it's being played by one hand, even though in reality it's broken up between two hands. This will require good timing so that the hands can transition seamlessly from one to another.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#4. Etude in C Major, op. 261, no. 81" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Key</span>: C Minor</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 2/4</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Allegro (fast)</li>
                            <li className="font-light"><span className="font-semibold">Technical focus</span>: arpeggios divided between hands, hand crossing</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 3 - high beginner</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/BbRaAFKZQQw"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The tempo</span>. Allegro is not an easy tempo for beginners and lots of slow practice is required to make the piece sound well at this tempo.</li>
                            <li><span className="font-bold">Hand crossing</span>. For beginning piano students, this might their first introduction to the crossing of hands, which might be awkward at first. However, it's very important skill to develop for more advanced pieces in the future.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#5. Etude in E Major, op. 139, no. 66" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Key</span>: E Major</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 4/4</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Lento cantabile (slow, in a singing style)</li>
                            <li className="font-light"><span className="font-semibold">Technical focus</span>: LH broken chords with held notes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 4 - high beginner</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/dPy1m4jy4a8"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The key</span>. The four sharps in the key signature might be a bit of a challenge for beginning piano students.</li>
                            <li><span className="font-bold">LH rhythm</span>. The alberti bass-like rhythm in LH involves playing eighth notes over a sustained half note. This might be a bit tricky at first, as it requires fingers to work independently from one another. Practicing LH by itself is very advisable here.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#6. Etude in G Major, op. 823, no. 53" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Key</span>: G Major</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 3/8</li>
                            <li className="font-light"><span className="font-semibold">Tempo</span>: Vivace (lively)</li>
                            <li className="font-light"><span className="font-semibold">Technical focus</span>: LH broken chords & RH grace notes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 4 - high beginner</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/snyWlps4ubc"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">The tempo</span>. The indicated tempo of Vivace (156-176 bpm) will likely be the main challenge here, as students will require a lot of precision and good hand coordination to play the piece well at this speed. Make sure to emphasize slow practice and gradual speed increase.</li>
                            <li className="mb-4"><span className="font-bold">Grace notes</span>. For many beginning students, this may be the first time they encounter bass notes. Here is a good opportunity to practice their correct execution.</li>
                            <li><span className="font-bold">LH part</span>. The sixteenth-note alberti bass in LH, combined with the vivace tempo, has to be played evenly and with correct emphasis of the strong beat. Students might want to practice the LH alone for a while to get this rhythm just right.</li>
                        </ul>
                    </div>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostEasyCzernyEtudes
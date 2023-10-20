import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "What Is a Trill and How to Play It (piano) | Da Capo Academy of Music",
    description: "What is a trill and how to to play it correctly on the piano. Find out all this and more in this article!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "What Is a Trill and How to Play It (piano) | Da Capo Academy of Music",
        description: "What is a trill and how to to play it correctly on the piano. Find out all this and more in this article!",
        url: "https://dacapomusic.ca/blog/piano-trills-explained",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2021-04-20T19:55:49+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-play-a-trill-correctly-piano%2Ftrill_cover_photo.jpg?alt=media&token=ae7afeb7-5e1f-47e1-9f78-d0e723455de3",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostPianoTrillsExplained = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="Piano Trills Explained" date="April 20, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-play-a-trill-correctly-piano%2Ftrill_cover_photo.jpg?alt=media&token=ae7afeb7-5e1f-47e1-9f78-d0e723455de3" alt="Music Intervals cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction px-5 lg:px-36 xl:px-64 mb-24">
                <p className="leading-8 mb-14">A trill is one of the most common musical ornaments and can sound beautiful when done well. If you are not confident about your understanding of what a trill is or how to play it correctly, look no further. This is the only article you will need to become an expert on trills (well, in theory at least. You still have to do the practicing!).</p>
            </section>

            <SectionDivider />

            <PostHeading heading="What is a trill?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-16">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-play-a-trill-correctly-piano%2Ftrill.PNG?alt=media&token=49650485-36ad-4f13-8b8c-40067a3a9bca" alt="example of a trill in music" style={{width: "240px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p>A <span className="font-bold">trill</span> (old name: “shake“) is a popular musical ornament that involves a quick alternation between two adjacent notes. In most cases, the alternation happens between the note indicated by the trill and the next (higher) note of the scale.</p><br />
                        <p>Composers use trills to add rhythmic and melodic interest to a musical passage.</p>
                    </div>
                </div>            
            </section>

            <PostDivider />

            <PostHeading heading="How a trill is notated in music" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-play-a-trill-correctly-piano%2Ftrill_notation.png?alt=media&token=27a3b286-dcab-4cae-af28-b4ee781f5c55" alt="trill notation examples" style={{width: "220px"}} className="rounded-md" />
                    </figure>
                    <p>These are the two most popular ways to indicate a trill in modern music notation.</p>
            </section>

            <PostDivider />
            
            <PostHeading heading="Example of a trill" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-10">Here is a Impressionist-era piece that starts on a very prominent trill. In fact, it has quite a few of them! As you listen, think about the effect the trill gives to the piece and why the composer may have decided to use it.</p>
                <div className="mb-4">
                    <iframe
                        width="100%"
                        height="350"
                        src="https://www.youtube.com/embed/rlGFfjY_vrY?si=pW1loxPQMIuxc81W"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <p className="text-center leading-8 text-sm text-gray-500">Example of a trill in "L'isle Joyeuse" by Claude Debussy</p>
            </section>

            <PostDivider />

            <PostHeading heading="What note does a trill start on?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-10">This is a very common question and one many students and music enthusiasts get confused about. Here is the simple answer:</p>
                <p className="leading-8 mb-10"><span className="font-bold">Before the 1800s (Baroque & Classical Eras):</span><br /> The trill started on the note above the one indicated by the trill. So for example if the note "E" was marked by a trill, you would start the trill on note “F”.</p>
                <p className="leading-8 mb-10"><span className="font-bold">After the 1800s (Romantic Era up to present day):</span><br />
                The trill begins on the same note that is indicated by the trill. So if the note “E” is marked by a trill, you start the trill on “E” as well.</p>
            </section>

            <PostDivider />

            <PostHeading heading="Trill vs. Mordent" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-24">
                <p className="leading-8 mb-10">The main difference between trills and mordents is in in the number of alternations between the adjacent notes. With mordents, we alternate only once between the principal note (the note symbolized by the mordent) and either the upper note (in the case of a <span className="font-bold">mordent</span>) or lower note (in the case of an <span className="font-bold">inverted mordent</span>). With trills, the number of alternations is longer, though the exact number will depend on the rhythm as well as the musician's individual interpretation.</p>
                <p className="leading-8 mb-10">Also, trills by definition alternate with the higher note, while with mordents it can be either the higher or lower note (see diagram below).</p>
                <p className="leading-8 mb-10">A mordent is sometimes referred to as a short trill, which contributes to the occasional confusion between the two terms.</p>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 mb-20">
                        <h3 className="text-lg font-semibold text-center mb-5">Trills</h3>
                        <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-play-a-trill-correctly-piano%2Ftrills.png?alt=media&token=20c4cbf2-d569-41a0-bfc6-7aa030168816" alt="interval exercise 2" className="rounded-md md:w-[50%]" />
                        </figure>
                        <p className="leading-8">Two different symbols for trills. You may see any one of these symbols in modern music.</p>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-center mb-5">Mordents</h3>
                        <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-10">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-play-a-trill-correctly-piano%2Fmordents.png?alt=media&token=91fdbda9-6774-46b9-80ce-15174d7b4b29" alt="interval exercise 2" className="rounded-md md:w-[50%]" />
                        </figure>
                        <p className="leading-8">Two variations of mordents. The mordent (also known as <span className="font-bold">upper mordent</span>) alternates with the note above, while the inverted mordent (also known as <span className="font-bold">lower mordent</span>) alternates with the note below.</p>
                    </div>
                </div>
            </section>

            <SectionDivider />

            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8">If you are an active musician, you are sure to come across many trills in your playing. For this reason, we hope that this article helped you get a better grasp of this popular musical ornamentation. To make your trills sound nice a sharp, be sure to spend enough time practicing them. Tip: if possible, use your stronger fingers on the trills, as this will give you better dexterity and control over how they sound. Happy trilling!</p>
            </section>

            <PageBottomTrialButton />
        </main>
  )
}

export default PostPianoTrillsExplained
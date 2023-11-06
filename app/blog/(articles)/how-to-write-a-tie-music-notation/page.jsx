import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { PostHeading } from "@/app/components/PostHeading"
import { SectionDivider } from "@/app/components/SectionDivider"
import { PostSubheadingRed } from "@/app/components/PostSubheadingRed"


export const metadata = {
    title: "How to Write a Tie in Music (music notation) | Da Capo Academy of Music",
    description: "Ties are very common in music, but how do we write them correctly? Learn the most important rules about writing ties and see visual examples.",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "How to Write a Tie in Music (music notation) | Da Capo Academy of Music",
        description: "Ties are very common in music, but how do we write them correctly? Learn the most important rules about writing ties and see visual examples.",
        url: "https://dacapomusic.ca/blog/how-to-write-a-tie-music-notation",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-09-16T13:56:28+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Fhow_to_write_a_tie_cover.jpg?alt=media&token=8ac7c23b-b435-4918-97c7-2bfb82611a94&_gl=1*bm905l*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTM0NjguNjAuMC4w",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostHowToWriteATie = () => {
    
  return (
            <main className="text-gray-700">
            <PostTitle title="How to write a tie (music notation)" date="September 16, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Fhow_to_write_a_tie_cover.jpg?alt=media&token=8ac7c23b-b435-4918-97c7-2bfb82611a94&_gl=1*bm905l*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTM0NjguNjAuMC4w" alt="How to Write a Tie cover" />

            <PostSectionHeading heading="Introduction" />
            <section className="introduction leading-8 px-5 lg:px-36 xl:px-64">
                <p className="mb-6">This article assumes that you are already familiar with what a tie is and its function in music. The focus here will be to highlight the rules surrounding the correct way to write ties in music notation. This might be useful to those of you trying to write your own music or perhaps to teachers who want to be able to explain ties correctly to their students. So let&apos;s dive in!</p>
            </section>

            <SectionDivider />

            <PostHeading heading="A tie is written from note-head to note-head" bottom="mb-14" />
            <section className="leading-8 px-5 lg:px-36 xl:px-64 mb-20">
                <p className="mb-14">Unlike slurs, ties must be written from the note-head of one note to the note-head of another note, not quite touching the note-heads. Here is a basic example of a tie:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-16">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ftie_example_1.JPG?alt=media&token=3dcb7dc6-d167-4dd8-9f0a-b1eaa30ac04f&_gl=1*er8evs*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTQwNTMuMzQuMC4w" alt="a basic example of a tie" className="rounded-md" />
                </figure>
            </section>

            <PostDivider />

            <PostHeading heading="Does the tie go on top or on the bottom?" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading="1. Tied Single Notes" align="text-left" bottom="mb-10" />
                    <p className="mb-14">For single notes, the basic rule is that the tie goes in the opposite direction of the note stem. So, if the stem is pointing down, the tie goes on top, and if the stem is pointing up, the tie goes on the bottom. For whole notes, just imagine where the stem would go if there was one, and write the tie on the opposite side. This rule goes back to the idea that ties should connect notes from note-head to note-head.</p>
                    <figure className="flex-shrink-0 flex flex-col md:flex-row md:justify-between items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ftieabove.JPG?alt=media&token=755ec1e8-87d5-4c2d-a21f-9dad0fbbfba6&_gl=1*1yt20w7*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTQ0MzQuMTYuMC4w" alt="a tie over higher notes" className="rounded-md" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ftiebelow.JPG?alt=media&token=3506f460-9b85-4d7a-97cd-b2a0cde8ad66&_gl=1*c74xwe*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTQ1NTAuNjAuMC4w" alt="a tie over lower notes" className="rounded-md" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ftiemiddle.JPG?alt=media&token=45028922-4a85-4879-bcde-286d56c226b1&_gl=1*qt3n9q*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTQ1NzAuNDAuMC4w" alt="a tie over middle notes" className="rounded-md" />
                    </figure>
                </div>
                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading="2. Tied Double Notes" align="text-left" bottom="mb-10" />
                    <p className="mb-14">For double notes that are tied, one tie is written on top and the other on the bottom, thus creating a little oval shape.</p>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Fdouble_notes.JPG?alt=media&token=f77012d4-85f5-4b84-a4bf-c2b25af26866&_gl=1*563fv3*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTQ4NDQuNDIuMC4w" alt="tied double notes" className="rounded-md" />
                    </figure>
                </div>
                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading="3. Tied Three-Note Chords" align="text-left" bottom="mb-10" />
                    <p className="mb-14">For three-note chords that are tied, we still apply rule #2 (see above) for the top and bottom notes, while the middle notes can have the tie going either up or down, usually depending on what looks better visually. Here is one typical example:</p>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ftriple_notes.JPG?alt=media&token=420f9783-5edb-429c-a107-ec48480129e8&_gl=1*1xlu08l*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTQ5ODguNDYuMC4w" alt="tied triple notes" className="rounded-md" />
                    </figure>
                </div>
                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading="4. Multi-Note Chords" align="text-left" bottom="mb-10" />
                    <p className="mb-14">For chords with four or more notes, similar rules apply. The top-most notes will have the tie on top, the bottom-most notes will have it at the bottom, and the middle notes will have it on either top or bottom. Very often, notes that are closer together will have the tie going in the same direction, while those farther apart will use the opposite direction. Here are a few examples:</p>
                    <figure className="flex-shrink-0 flex flex-col md:flex-row md:justify-between items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ffour_notes_1.JPG?alt=media&token=1659b82c-6182-4998-b206-2e5dbb194374&_gl=1*1ppwur1*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTUxMzcuMTcuMC4w" alt="tied four-note chords" className="rounded-md" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ffour_notes_2.JPG?alt=media&token=6ac096a0-0c80-424a-953a-fb73779d162a&_gl=1*13lf2jr*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTUxNzYuNjAuMC4w" alt="tied four-note chords" className="rounded-md" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Ffour_notes_3.JPG?alt=media&token=4f77f2cd-14ba-4cb5-b637-6eb799d99ce9&_gl=1*o7tk1f*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTUxODguNDguMC4w" alt="tied four-note chords" className="rounded-md" />
                    </figure>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Writing ties across multiple measures" bottom="mb-14" />
            <section className="leading-8 px-5 lg:px-36 xl:px-64 mb-20">
                <p className="mb-14">Sometimes a tie must be held across more than just two measures. If that&apos;s the case, we must connect notes from one measure to the next. Here is what this looks like:</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-16">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-write-a-tie-music-notation%2Fmulti_measure_tie.JPG?alt=media&token=cb343257-8924-4af4-bac5-e2808bd13d25&_gl=1*u0wkuu*_ga*NzE2ODk4MDA0LjE2OTMyNzY3MzA.*_ga_CW55HF8NVT*MTY5NTk1MzI5OC41OS4xLjE2OTU5NTU0MjMuNDUuMC4w" alt="a tie across multiple measures" className="rounded-md" />
                </figure>
            </section>

            <SectionDivider />
            
            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 leading-8 lg:px-36 xl:px-64 mb-20">
                <p>The above examples all dealt with ties that extend from one measure to the next. Keep in mind that sometimes, ties can also be contained within the same measure. If that&apos;s the case, the same rules discussed here will apply.</p><br />
                <p>I hope you found this article useful. Now go ahead and create some awesome ties!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostHowToWriteATie
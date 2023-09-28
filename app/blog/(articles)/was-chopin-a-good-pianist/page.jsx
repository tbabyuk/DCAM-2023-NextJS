import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheading } from "@/app/components/PostSubheading"
import { SectionDivider } from "@/app/components/SectionDivider"
import { PostSubheadingRed } from "@/app/components/PostSubheadingRed"

export const metadata = {
    title: "6 Reasons to Take RCM Exams (Royal Conservatory of Music) | Da Capo Academy of Music",
    description: "Are RCM exams right for my child? Here are our top 6 reasons why it is beneficial to take RCM exams and why you should do it!",
    keywords: ["why take rcm exams", "benefits of rcm exams"]
}

const PostWasChopinAGoodPianist = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="Was Chopin a good pianist?" date="March 14, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwas-chopin-a-good-pianist%2Fwas_chopin_a_good_pianist_cover.jpg?alt=media&token=e2b8de2a-8898-4517-b10b-cccd53c9ea42" alt="Why Take RCM Exams cover" />

            <PostSectionHeading heading="Introduction" />
            <section className="introduction leading-8 px-5 lg:px-36 xl:px-64 mb-28">
                <p className="mb-6">Most people know of Chopin as the famous Romantic-era composer, but what about Chopin the pianist? Just how good was he at the piano and what were perhaps some peculiarities of his piano playing?</p>
                <p className="mb-6">Because there was no sound-recording technology in Chopin’s time, we cannot answer this question by just listening to him play. Instead, we are going to have to rely on three sources: his biography, his compositions, and statements of his contemporaries.</p>
            </section>

            <SectionDivider />

            <PostHeading heading="What his biography tells us" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="flex flex-col md:flex-row mb-6">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwas-chopin-a-good-pianist%2Fchild_at_piano.png?alt=media&token=efb170d1-9eb1-45cc-b1e9-0f012c3895f3" alt="child playing the piano" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8">All biographical accounts of Chopin&apos;s life tell us that he was a child prodigy at the piano. This means he must have displayed natural ability at the instrument from a very early age. By age five he is said to have absorbed everything his elder sister taught him at the piano and by seven he started playing before the public.</p>
                    </div>
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="What his compositions tell us" bottom="mb-14" />
            <section className="leading-8 px-5 lg:px-36 xl:px-64 mb-20">
                <div className="flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10">
                        <p className="leading-8">Chopin&apos;s musical output is a great indication of his mastery at the piano. Anyone who has played Chopin&apos;s repertoire (especially his more advanced works) will not fail to appreciate the complexity and technical demands of many of his musical compositions.</p><br />
                        <p className="leading-8">Take as an example this excerpt from his "Etude Op. 24, No. 6 in G# minor":</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwas-chopin-a-good-pianist%2Fcompositions.png?alt=media&token=bdfdb082-aff5-401e-b489-0a80b6ed7b19" alt="composing with a feather pen" style={{width: "140px"}} className="rounded-md" />
                    </figure>
                </div>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-16">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwas-chopin-a-good-pianist%2Fetude_op_25_no_6_in_G_sharp_min.JPG?alt=media&token=e5082083-63ed-4ee0-95ff-7230f28d09e3" alt="Chopin's Etude in G Sharp Minor" className="rounded-md" />
                </figure>
                <p>This is considered to be one of Chopin&apos;s hardest etudes to play, because of all the double thirds in the RH. But this speaks volumes to Chopin&apos;s prowess at the piano. We know that Chopin was able to play and played often his own compositions.</p>
            </section>

            <PostDivider />

            <PostHeading heading="What his contemporaries tell us" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <div className="flex flex-col md:flex-row mb-20">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwas-chopin-a-good-pianist%2Faudience.png?alt=media&token=70ff6569-8950-4fd3-ae60-6905de6fedf5" alt="child playing the piano" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p className="leading-8">Several recurring themes emerge when we look at the statements Chopin&apos;s contemporaries made about his playing. We get these statements mostly from letters that these people wrote to their friends or family members. Remember, these are people that actually saw and heard Chopin play in person!</p>
                    </div>
                </div>
                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading="1. He had a virtuosic mastery of the instrument" align="text-left" bottom="mb-10" />
                    <div className="flex flex-col md:flex-row mb-10">
                        <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwas-chopin-a-good-pianist%2Ffelix_mendelssohn.png?alt=media&token=1ceff84f-a2a9-4aa8-8a71-d361488ae108" alt="image of Felix Mendelssohn" style={{width: "150px"}} className="rounded-md" />
                        </figure>
                        <div className="mt-8 md:mt-0 md:ms-10">
                            <p><span className="font-bold">Felix Mendelssohn</span>, a Chopin contemporary and a composer/pianist in his own right, wrote to his sister after hearing Chopin perform several times: <span className="italic">“There is something entirely original in his piano playing and it is at the same time so masterly that he may be called a perfect virtuoso.”</span><br /> He is also quoted as saying that Chopin “produces new effects, like Paganini on his violin, and accomplishes things nobody could formerly have thought practicable”.</p>
                        </div>
                    </div>
                    <p>Composer <span className="font-bold">Stephen Heller</span>, when describing Chopin&apos;s playing, said that his hands, though slim, would <span className="italic">“suddenly expand and cover a third of the keyboard. It was like the opening of the mouth of a serpent about to swallow a rabbit whole.”</span></p>
                </div>

                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading="2. His playing was nuanced, sensitive, and expressive" align="text-left" bottom="mb-10" />
                    <div className="flex flex-col-reverse md:flex-row mb-10">
                        <div className="mt-8 md:mt-0 md:me-10">
                            <p>Many of Chopin&apos;s contemporaries reported being impressed with the degree of expressivity and nuance in his playing. Pianist and composer <span className="font-bold">Ignaz Moscheles</span> said that Chopin <span className="italic">“required no powerful forte to produce the required contrasts”</span>, which suggests that he could be very subtle in achieving the desired dynamic effects on the piano.</p>
                        </div>
                        <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fwas-chopin-a-good-pianist%2Fexpression.png?alt=media&token=82c6ba47-93b5-4277-81b5-a6d07f817878" alt="theater masks" style={{width: "120px"}} className="rounded-md" />
                        </figure>
                    </div>
                    <p><span className="font-bold">Charles Halle</span>, another pianist and temporary of Chopin, wrote after hearing Chopin play in 1836: <span className="italic">“You did not for a moment think of how perfect was his execution of this or that difficulty; you listened, as it were, to the improvisation of a poem.”</span></p>
                </div>

                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading='3. His way of playing "rubato" was not common at the time' align="text-left" bottom="mb-10" />
                    <p>Apparently, one distinctive feature of Chopin&apos;s playing was his rubato.</p><br />
                    <p>Chopin&apos;s friend and student <span className="font-bold">Wilhelm Von Lenz</span> said: <span className="italic">“A remarkable feature of his playing was the entire freedom with which he treated the rhythm, but which appeared so natural that for years it had never struck me. It must have been in 1845 or 1846 that I once ventured to observe to him that most of his mazurkas (those dainty jewels) when played by himself appeared to be written not in 3/4 but in 4/4 time, the result of his dwelling so much longer on the first note of the bar. He denied it strenuously, until I made him play one of them and counted audibly four in the bar, which fitted perfectly. Then he laughed and explained that it was the national character of the dance which created the oddity.”</span></p><br />
                    <p>On the same topic of rubato, <span className="font-bold">Salaman</span> wrote after hearing Chopin play in 1848: <span className="italic">“in spite of all I had heard of Chopin&apos;s tempo rubato, I still recollect noting how precise he was in the matter of time, accent and rhythm, even when playing most passionately, fancifully and rhapsodically.”</span></p>
                </div>

                <div className="leading-8 mb-20">
                    <PostSubheadingRed subheading='4. His playing often lacked "sonority" or "resonance"' align="text-left" bottom="mb-10" />
                    <p>One potential criticism of Chopin&apos;s playing was its lack of “sonority/resonance”. He was sometimes criticized for playing “too softly” or “too delicately” or so it seemed to audiences who were used to a more forceful way of playing. According to author Harold C. Schonberg, <span className="italic">“This lack of sonority was the single defect in Chopin&apos;s equipment - if it was a defect.”</span> Perhaps Chopin was aware of this and for this reason preferred to play in salons, where he was sure everybody would be able to hear him, rather than big concert halls.</p>
                </div>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostWasChopinAGoodPianist
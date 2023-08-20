
import { PostTitle } from "../../components/PostTitle"
import { PostSource } from "../../components/PostSource"
import { PostSectionHeading } from "../../components/PostSectionHeading"
import { PostHeading } from "../../components/PostHeading"
import { PostSubheading } from "../../components/PostSubheading"
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton"
import { PostDivider } from "../../components/PostDivider"
import PostImage from "../../components/PostImage"

export const metadata = {
    title: "Famous Canadian Pianists | Da Capo Academy of Music",
    description: "Learn about some of Canada's most well-known pianists",
    keywords: ["Canadian pianists", "Canadian music"]
}

const PostViolinExamMarkGuide = () => {
  return (
            <main className="rcm-violin-exam-mark-guide-post text-gray-700 text-[0.9rem]">
            <PostTitle title="Famous Canadian Pianists" date="May 9, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-canadian-pianists%2Ffamous_canadian_pianists_cover.jpg?alt=media&token=fea3b2a6-4ff1-4f2b-939f-e2fe12f27553" alt="Famous Canadian pianists featured image"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="mb-5 leading-8">Over the years, Canada has produced its own share of pianistic talent. While some of these pianists have managed to gain world-wide fame and leave a lasting legacy in the world of music, others are still relatively young and just in the midst of their musical careers. In this article, we will start with the past and work our way to some important contemporary names that you should definitely be keeping your eye on. So without further ado – let’s begin!</p>
                </div>
            </section>

            <PostHeading heading="Glenn Gould" />
            <PostSubheading subheading="(1932 – 1982)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24">
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>Born in Toronto on September 25, 1932, Glenn Gould was one of the most-celebrated and respected classical pianists of the 20th century. A child prodigy at the piano, he passed all of his <a href="https://www.rcmusic.com/" target="_blank" className="dcam-link">Royal Conservatory of Music</a> examinations at just 12 years of age. Gould was best known for his interpretations of the works of J. S. Bach, though his repertoire also included works by Beethoven, Mozart, Haydn, and Brahms. Aside from his musical genius, Gould was also known for his many eccentricities: he hummed while playing, hated being touched, didn’t like the cold, was a hypochondriac, and disliked social functions, among others. Despite this, Glenn Gould remains one of Canada’s most impressive musical talents.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-canadian-pianists%2Fgould.jpg?alt=media&token=eb392339-0f3c-44a5-81bb-6bd62f48db64" alt="mark breakdown for Preparatory Violin" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Glenn Gould</small></figcaption>
                    </figure>
                </div>
                <div className="flex flex-col items-center">
                    <p className="italic self-start mb-3">Watch Glenn Gould performing Bach’s Keyboard Concerto No. 1 in D Minor</p>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/9ZX_XCYokQo"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Oscar Peterson" />
            <PostSubheading subheading="(1925 – 2007)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24">
                <div className="bio flex flex-col-reverse md:flex-row mb-16">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>Oscar Peterson was a famous Canadian jazz pianist who is considered one of the great jazz pianists of all time. Born in Montreal, Quebec, in 1925, he enjoyed a long musical career spanning more than six decades. Peterson’s initial training was in classical piano, but he soon discovered his love for jazz and boogie-woogie and began shifting his focus to these. In his youth, he is said to have spent many hours a day at the piano, honing his technical skills as well his improvisation. In 1940, aged 14, Peterson won the national music competition organized by the Canadian Broadcasting Corporation. Gaining confidence in his ability, he ended up dropping out of high school to pursue a career in music, and never looked back. In additional to thousands of performances, Peterson also did numerous recordings and collaborations with the likes of Ella Fitzgerald, Count Basie, Louis Armstrong, Duke Ellington, and others.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-canadian-pianists%2Fpeterson.jpg?alt=media&token=2c8ae954-9d86-4da8-8f5c-e4dc411a098e" alt="mark breakdown for Preparatory Violin" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Oscar Peterson</small></figcaption>
                    </figure>
                </div>
                <div className="flex flex-col items-center">
                    <p className="italic self-start mb-3">Watch Oscar Peterson playing the Blues!</p>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/NTJhHn-TuDY"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Angela Hewitt" />
            <PostSubheading subheading="(b. 1958)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24">
                <div className="bio flex flex-col-reverse md:flex-row mb-10">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>Angela Hewitt is a Canadian classical pianist who, like Glenn Gould, is best known for her interpretations of the music of J. S. Bach. Born into a musical family in Ottawa, Ontario, in 1958, she began learning piano at age 3 with her mother. Between 1963 and 1973, she studied at the Royal Conservatory of Music in Toronto, and at 18 graduated with a Bachelor of Music in Performance from the University of Ottawa. Hewitt was a prizewinner at several piano competitions, but her career really took off after she won the 1985 Toronto International Bach Piano Competition. Angela’s long musical career has seen her produce numerous musical recordings and perform with orchestras all over the world. She continues to be active as a performer, educator, and organizer musical events and festivals.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-canadian-pianists%2Fhewitt.jpg?alt=media&token=cd0da092-0fa0-470c-9bb3-14d04d435684" alt="mark breakdown for Preparatory Violin" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Angela Hewitt</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10">Angela Heweitt's <a href="https://angelahewitt.com/" target="_blank" className="dcam-link">official website</a></p>
                <div className="flex flex-col items-center">
                    <p className="italic self-start mb-3">Watch Angela Hewitt perform an Aria from Bach’s Goldberg Variations.</p>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/MRB5_Gt98P4"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Charles Richard-Hamelin" />
            <PostSubheading subheading="(b. 1989)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24">
                <div className="bio flex flex-col-reverse md:flex-row mb-10">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>Born in Lanaudiere, Quebec, in 1989, Charles Richard-Hamelin began studying piano as a child with his father and hasn’t stopped playing since. He received his bachelor’s degree from McGill University in 2011 and master’s degree from Yale School of Music in 2013. In 2015, he won a silver medal at the prestigious International Chopin Piano Competition (17th) in Warsaw, also picking up the Krystian Zimerman prize for best performance of a Sonata at the same event. Charles has recorded several albums and performed with many ensembles and symphony orchestras as a soloist. He continues to be active as both a recording artist and performer.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-canadian-pianists%2Fhamelin.jpg?alt=media&token=6407da5b-ac9d-4ab8-8999-f090be85e8ec" alt="mark breakdown for Preparatory Violin" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Charles Richard-Hamelin</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10">Charles Richard-Hamelin's <a href="http://www.charlesrichardhamelin.com/" target="_blank" className="dcam-link">official website</a></p>
                <div className="flex flex-col items-center">
                    <p className="italic self-start mb-3">Watch Charles Richard Hamelin perform at the XVII International Chopin Piano Competition</p>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/ae8kWqWfEzY"
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </section>

            <PostDivider />

            <PostHeading heading="Jan Lisiecki" />
            <PostSubheading subheading="(b. 1995)" />
            <section className="px-5 lg:px-36 xl:px-64 py-10 mb-24">
                <div className="bio flex flex-col-reverse md:flex-row mb-10">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8">
                        <p>Jan Lisiecki is a contemporary Polish-Canadian classical pianist from Calgary, Alberta. Born in 1995, he is the youngest pianist on our list. Jan showed great talent from a young age and made his orchestral debut at the age of 9. At 13, he performed the Chopin Piano Concerto No. 2, Op. 21 at the 2008 “Chopin and his Europe” festival in Warsaw, which was a big success and earned him a return invite the following year. These performances were later released as recordings, which brought plenty of positive attention to the young pianist. At 15, he signed an exclusive contract with the German music label Deutsche Grammophon. Jan continues to produce recordings and has an active performance schedule all over the world.</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-canadian-pianists%2Flisiecki.jpg?alt=media&token=1b9deb5f-7129-4f03-a4a9-9dc390d4b7ff" alt="mark breakdown for Preparatory Violin" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Jan Lisiecki</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10">Jan Lisiecki's <a href="https://www.janlisiecki.com/" target="_blank" className="dcam-link">official website</a></p>
                <div className="flex flex-col items-center">
                    <p className="italic self-start mb-3">Watch Jan Lisiecki perform in a Beethoven Piano Concerto</p>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/MX5XENd0SeM"
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

export default PostViolinExamMarkGuide
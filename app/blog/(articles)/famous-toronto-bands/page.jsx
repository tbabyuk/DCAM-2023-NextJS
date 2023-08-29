import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import Link from "next/link"

export const metadata = {
    title: "Famous Bands from Toronto | Da Capo Academy of Music",
    description: "You probably didn't know that these world-famous bands all call Toronto their home!",
    keywords: ["toronto bands", "bands from toronto", "toronto musicians"]
}

const PostFamousBandsFromToronto = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="Famous Bands from Toronto" date="November 20, 2022" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Ffamous_bands_from_toronto_cover.jpg?alt=media&token=598d99c9-4fd5-4be1-80f4-ae7341e0a774" alt="Famous Bands from Toronto cover"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <p className="mb-5 leading-8">Toronto and the GTA (Greater Toronto Area) has produced a good number of bands that have managed to hit it big around the world. In this article, we will take a look at the most popular of these, and give you a bit of their story. To avoid playing favourites, we have organized our list based on the year the bands were formed, with the youngest bands at the top.</p>
                    <p className="mb-5 leading-8">Keep in mind that when we say “bands”, we use this word here in its strict sense, and do not include solo musicians such as Drake, The Weeknd, etc. For famous solo musicians from Toronto, you can see our article <Link href="/famous-toronto-musicians/" target="_blank" className="dcam-link">Famous Toronto Musicians.</Link></p>

                </div>
            </section>

            <PostHeading heading="Tokyo Police Club" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Ftokyo_police_club.jpg?alt=media&token=e7e47962-cd30-4228-a9d0-f5bfa00d060f" alt="Tokyo Police Club photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Tokyo Police Club</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Tokyo Police Club was formed in 2005  in Newmarket, a town located about 1-hour drive north of Toronto. They are an indie rock band made up of four guys who had all gone to school together. They began by playing small shows in the Toronto area, eventually signing with a Toronto label Paper Bag Records, and in 2007 with a Saddle Creek Records based in Obaha, Nebraska. Some of their popular songs include “Your English is Good”, “Nature of the Experiment”, and “Bambi”. The band continues to be active performing and releasing new music.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">TPC's <a href="https://tokyopoliceclub.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Broken Social Scene" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Fbroken_social_scene.jpg?alt=media&token=6d764d58-386e-47fb-ada5-e85cfc91a1c8" alt="Broken Social Scene photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Broken Social Scene</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Formed in Toronto in 1999, Broken Social Scene is more of a musical collective than a band. While it has around five core members, the group has had up to nineteen people at different times. The band is known to experiment quite a bit with different sounds and orchestration, and their music often spans the genres of indie rock, experimental rock, noise pop, and others. They have released 5 full-length albums and some of the band’s popular songs include “Lover’s Spit”, “Anthems For a Seventeen-Year-Old Girl” and “7/4 Shoreline”.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">BSC's <a href="https://brokensocialscene.ca/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Metric" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Fmetric.jpg?alt=media&token=abb2018f-d6a2-4145-8c01-4330eabff186" alt="Metric photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Metric</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Metric is a four-member band formed in Toronto in 1998. While they are mostly considered an indie rock band, their music also contains elements of new wave, synth-pop, and dance rock, among others.  As of 2022, the band has released eight albums and has won many awards for their music. They have toured extensively in North American, South America, and Europe, and continue to be active on the music scene. Some of their biggest hits include songs such as “Help I’m Alive”, “Gold Guns Girls” and “Breathing Under Water”.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">Metric's <a href="https://www.ilovemetric.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Billy Talent" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Fbilly_talent.jpg?alt=media&token=f1486914-5256-4c7e-b922-4f5554bf5554" alt="Billy Talent photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Billy Talent</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Billy Talent was formed in 1993 in Mississauga, a city just west of Toronto and part of the GTA. Their style is usually described as punk rock and alternative rock. They were relatively unknown until signing an agreement with Warner Music Canada in 2002, after which point they began finding mainstream success. They have played sold-out shows in Canada and the US, and have garnered a considerable fan base in Europe as well. As of 2022, they have released six studio albums, and some of their most popular singles include “Try Honesty”, “River Below”, and “Afraid of Heights”.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">BT's <a href="https://billytalent.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Our Lady Peace"  bottom="mb-14"/>
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Four_lady_peace.jpg?alt=media&token=731f321b-bce6-4a80-afe5-7a314f2ba9fe" alt="Our Lady Peace photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Our Lady Peace</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Named after a poem by American poet Mark Van Doren, Our Lady Peace is an alternative rock band formed in Toronto in 1992. They have had considerable success in Canada and to a lesser degree in the United States, enjoying a peak of No. 1 in Canada with their album “Clumsy” and a peak of No. 9 in the US with the album “Gravity”. Some of their most successful singles include the songs “Somewhere Out There”, “Innocent” and “Is Anybody Home?”. As of 2022, they have released a total of 10 albums and continue to perform and record.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">OLP's <a href="https://www.ourladypeace.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Barenaked Ladies" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Fbarenaked_ladies.jpg?alt=media&token=738007a3-d141-4c73-9d4b-f928ba5297a8" alt="Barenaked Ladies photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Barenaked Ladies</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Barenaked Ladies is a rock band formed in 1998 in the Toronto district of Scarborough. The band began with just two members, eventually arriving at its current number of four. After achieving mainstream success in Canada in the period of 1991-1992, their popularity began spilling over to the United States from 1998 onward. They have sold over 15 million albums and were inducted into the Canadian Music Hall of Fame in 2018. Some of the band’s biggest hits include songs such as “One Week”,  “If I Had $1000000”, “It’s All Been Done”.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">BL's <a href="https://www.facebook.com/barenakedladies/" target="_blank" className="dcam-link">facebook page</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="Rush" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Frush.jpg?alt=media&token=d2a18ae4-bf4f-408d-af4e-1f37a3f11803" alt="Rush photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Rush</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Formed in Toronto in 1968, Rush was a rock band active between 1968 and 2018. They enjoyed chart success in Canada, the US, and the UK, especially during 1980s and 1990s. The band was known for its complex compositions and unique lyrics that often drew on motifs from science fiction, fantasy, and philosophy. They are estimated to have sold about 42 million albums worldwide, won numerous awards for their music, and were inducted into the Canadian Music Hall of Fame in 1994 and the Rock and Roll Hall of Fame in 2013. Some of the band’s biggest hits include songs like “Tom Sawyer”, “Fly By Night”, “Closer to the Heart”.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">Rush's <a href="https://www.rush.com/" target="_blank" className="dcam-link">official website</a></p>
            </section>

            <PostDivider />

            <PostHeading heading="The Band" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Fthe_band.jpg?alt=media&token=dae528ce-ac29-4874-b798-894e0e3a0f25" alt="The Band photo" style={{width: "220px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>The Band</small></figcaption>
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>The Band was a five-member rock band formed in Toronto in 1967 and consisting of four Canadians and one American. Their musical style was a fusion of rock and roll and country music. Critic Bruce Eder described them as “one of the most popular and influential rock groups in the world”, and musician Roger Waters considered their album “Music from Big Pink” to be the second most influential record in the history of rock and roll. Their biggest hits include songs like “The Weight”, “Up on Cripple Creek”, “The Night They Drove Old Dixie Down”.</p>
                    </div>
                </div>
                <p className="mb-10 w-fit ms-auto">The Band's <a href="https://theband.hiof.no/" target="_blank" className="dcam-link">website</a></p>
            </section>








            <PageBottomTrialButton />
        </main>

  )
}

export default PostFamousBandsFromToronto
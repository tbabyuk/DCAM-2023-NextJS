import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { PostSubheadingRed } from "@/app/components/PostSubheadingRed"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "6 Signs Your Child is Musically Gifted | Da Capo Academy of Music",
    description: "Wondering if you child is musically gifted? These 6 reliable signs will give you an accurate idea of whether you might have the next Mozart on your hands!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "6 Signs Your Child is Musically Gifted | Da Capo Academy of Music",
        description: "Wondering if you child is musically gifted? These 6 reliable signs will give you an accurate idea of whether you might have the next Mozart on your hands!",
        url: "https://dacapomusic.ca/blog/signs-of-musical-talent",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-07-08T05:22:06+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fsigns-of-musical-talent%2Fsigns_of_musical_talent_cover.jpg?alt=media&token=a32e1e21-476e-49e8-89cb-7b9939a58137",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostSignsOfMusicalTalent = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="6 Signs Your Child is Musically Gifted" date="July 8, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fsigns-of-musical-talent%2Fsigns_of_musical_talent_cover.jpg?alt=media&token=a32e1e21-476e-49e8-89cb-7b9939a58137" alt="signs of musical talent cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="leading-8">
                    <p className="mb-10">If you are a parent wondering if your child is musically gifted, this is the article for you. We have put together six of the most important and reliable signs of innate musical talent in children. But keep in mind that music is not only for children who exhibit above-average musical potential. Everyone can benefit from the many advantages that music education can offer!</p>
                </div>            
            </section>

            <SectionDivider />

            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <PostSubheadingRed subheading="1. You often catch your child humming or singing a tune they heard before" bottom="mb-12" />
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fsigns-of-musical-talent%2Fchild_singing.png?alt=media&token=3b16326c-41d0-4794-a633-7a66b2291ca4" alt="child singing" style={{width: "160px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>Musically gifted children will often sing or hum a melody that they had heard somewhere earlier. Their brain seems to be especially good at absorbing and remembering musical information and they derive a lot of pleasure from recreating it for themselves at will. Famous contemporary piano virtuoso Evgeny Kissin used to hum to himself songs that he had heard his sister practice on the piano. This is one of the most powerful indicators of innate musical talent.</p>
                    </div>
                </div>            
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading="2. Your child appears to notice when an instrument is out of tune or a song is played in the wrong key" bottom="mb-12" />
                <p>Parents of talented musicians often recall this as being the first time they became aware of their child&apos;s aptitude for music. Something that sounds completely normal to your ears will sound very different to a musically gifted child. This is an example of heightened sensitivity to sound that only someone with above-average musical talent will display. Such children most likely have what musicians call <span className="font-bold">perfect pitch</span>, which is an ability to correctly identify a note immediately upon hearing it.</p>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading="3. Your child tends to spend extensive periods of time fiddling around on a musical instrument" bottom="mb-12" />
                <div className="bio flex flex-col-reverse md:flex-row mb-12">
                    <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                        <p>For musically gifted children, a musical instrument can be like a magnet. They seem to derive endless pleasure from trying out different notes and simply experimenting with sound, often spending hours on end on this task without losing interest. In many cases, they might even be able to accurately recreate a piece of music they had heard before on the instrument. This is a very strong sign of musical talent, so if it sounds like your child - start budgeting for those music lessons today!</p>
                    </div>
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fsigns-of-musical-talent%2Fchild_playing_keyboard.png?alt=media&token=5a7c68f4-e80e-4523-a078-b344acf569de" alt="child playing a keyboard" style={{width: "160px"}} className="rounded-md" />
                    </figure>
                </div>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading="4. Your child often talks about music or asks to listen to music" bottom="mb-12" />
                <p className="mb-10">If your child often bugs you to turn on the radio or to play their new favorite song on your phone, pay attention! Musically gifted children tend to get more stimulation from music than from any other activity available to them, which is a strong indication of musical talent. And while listening to music is not the same as creating it, you definitely want to give a child like this a chance to learn an instrument!</p>
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 leading-8">
                <PostSubheadingRed subheading="5. Your child can identify a song after hearing only a few notes" bottom="mb-12" />
                <div className="bio flex flex-col md:flex-row mb-12">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fsigns-of-musical-talent%2Fchild_in_car.png?alt=media&token=c746cdb3-aaa6-4ee5-9f73-7c27558bf9fa" alt="child in the car" style={{width: "120px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8 self-start">
                        <p>While this ability isn&apos;t that uncommon, it does indicate a degree of musical awareness that does not come automatically to everyone. Children with this ability alone might not necessarily fall under the category of musically gifted, but they definitely have strong musical potential. Being on the lookout for the other 5 signs in combination with this one might give you a more accurate picture of your child&apos;s musical potential.</p>
                    </div>
                </div>            
            </section>

            <PostDivider />

            <section className="px-5 lg:px-36 xl:px-64 leading-8 mb-20">
                <PostSubheadingRed subheading="6. Your child seems to have a natural and effortless understanding of rhythm" bottom="mb-12" />
                <p className="mb-10">Rhythm is an essential component of music and people who don&apos;t have it often complain of being very poor musicians and dancers. Children with a strong sense of rhythm will often move in time with music or be able to clap or tap their foot to the beat without thinking about it. As with number 5 on our list, rhythm alone might not predict unique musical talent, so look for additional signs to judge whether or not you have a musically gifted child.</p>
            </section>

            <SectionDivider />
            
            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 leading-8 lg:px-36 xl:px-64 mb-20">
                <p>We hope this list gives you a good idea of what to look out for when considering your child's musical ability. But remember, learning a music instrument is a fun challenge that will help develop your child's ear, coordination, and intellect. So even if you think you have not observed any of the signs mentioned above - consider giving your child a chance at musical education. They will thank you later!</p>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostSignsOfMusicalTalent
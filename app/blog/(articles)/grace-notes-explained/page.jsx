import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheading } from "@/app/components/PostSubheading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import PostImage from "@/app/components/PostImage"
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "What Is a Grace Note and How to Play It | Da Capo Academy of Music",
    description: "Learn about the different types of grace notes such as the acciaccatura and appoggiatura and how to play them correctly!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "What Is a Grace Note and How to Play It | Da Capo Academy of Music",
        description: "Learn about the different types of grace notes such as the acciaccatura and appoggiatura and how to play them correctly!",
        url: "https://dacapomusic.ca/blog/grace-notes-explained",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2021-08-25T04:19:19+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fgrace_notes_cover.jpg?alt=media&token=7090278a-b646-4d30-a4d2-45f742301034",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostGraceNotesExplained = () => {
  return (
            <main className="text-gray-700">
            <PostTitle title="Grace Notes Explained" date="August 25, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fgrace_notes_cover.jpg?alt=media&token=7090278a-b646-4d30-a4d2-45f742301034" alt="Grace Notes cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction px-5 lg:px-36 xl:px-64">
                <p className="leading-8 mb-14">Perhaps you've heard your teacher mention the term “grace note” during one of your lessons and even point one out to you in your sheet music, but you're still not quite sure what they are and how exactly they work. Well, one thing you should definitely know is that they are not notes that belong to a Grace! (bad joke, I know). But all joking aside, let us put on our music nerd hats and explore what these interesting-sounding notes are all about!</p>
            </section>

            <SectionDivider />

            <PostHeading heading="Grace Note Defined" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fgrace_note.png?alt=media&token=9b3673c1-3f99-4634-9fbc-0760b05339af" alt="example of a grace note" style={{width: "220px"}} className="rounded-md" />
                    </figure>
                    <p className="leading-8">A <span className="font-bold">grace note</span> is a note (or notes) used primarily for decorative purposes, such as adding interest to a musical passage. Because of this, it is usually considered non-essential (we will see an exception to this below) and omitting it does not affect the structural integrity of a musical composition. Grace notes are written smaller in size than regular notes (about 65%) and sometimes in a lighter font. A small slur often connects the grace note to the main note, but not always.</p>
            </section>

            <PostDivider />

            <PostHeading heading="How Grace Notes are Notated in Music" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64">
                <div className="flex">
                    <figure className="flex-1 flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fgrace2.JPG?alt=media&token=8ce9b895-0cb2-4c85-b86d-72b8464aab31" alt="trill notation examples" style={{width: "100px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Grace note written with a slur</small></figcaption>
                    </figure>
                    <figure className="flex-1 flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fgrace1.JPG?alt=media&token=d78b528b-fecb-441a-961f-94e7f002eaad" alt="trill notation examples" style={{width: "100px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Grace note written without a slur</small></figcaption>
                    </figure>
                </div>
                <p className="leading-8 mb-10">Grace notes can be written with or without a connecting slur, like in the above examples.</p>
                <p className="mb-10">Sometimes, you will see grace notes that look like this:</p>
                <div className="flex">
                    <figure className="flex-1 flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Facciaccatura.JPG?alt=media&token=1da6d5ab-eb31-4436-9d98-7133c20dea78" alt="trill notation examples" style={{width: "100px"}} className="rounded-md" />
                    </figure>
                    <figure className="flex-1 flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Facciaccatura2.JPG?alt=media&token=4e67407d-03c2-4c2f-bbbc-4f5baeecb00a" alt="trill notation examples" style={{width: "100px"}} className="rounded-md" />
                    </figure>
                </div>
                <p className="leading-8">But why is the grace note crossed out in the second example, but not in the first? Great question! This is because there are two varieties of grace notes, which is our next topic of discussion.</p>
            </section>

            <PostDivider />
            
            <PostHeading heading="Acciaccatura vs. Appoggiatura" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="The Acciaccatura (or 'crushed note')" bottom="mb-10" />
                <div className="flex flex-col md:flex-row mb-20">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Facciaccatura.JPG?alt=media&token=1da6d5ab-eb31-4436-9d98-7133c20dea78" alt="example of a trill in music" style={{width: "90px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p><span className="font-bold">Acciaccatura</span> is a grace note that is played before the strong beat. The strong beat therefore belongs to the main note, which makes the acciaccatura rhythmically and melodically unimportant. Acciaccaturas are most commonly written as eighths notes (quavers) with a diagonal line going through them and a little slur connecting them to the main note.</p>
                    </div>
                </div>              
                <PostSubheading subheading="The Appoggiatura (or 'leaning note')" bottom="mb-10" />
                <div className="flex flex-col md:flex-row">
                    <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fappoggiatura.JPG?alt=media&token=67f40b58-fbec-4fbd-ba52-242fd00e313d" alt="example of a trill in music" style={{width: "90px"}} className="rounded-md" />
                    </figure>
                    <div className="mt-8 md:mt-0 md:ms-10 leading-8">
                        <p><span className="font-bold">Appoggiatura</span> is a grace note that is played on the strong beat. Here, the emphasis is on the grace note as opposed to the main note, which makes the appoggiatura rhythmically and melodically important. Appoggiaturas are most often written as eighths notes (quavers) with a little slur connecting them to the main note. </p>
                    </div>
                </div>                      
            </section>

            <PostDivider />

            <PostHeading heading="How Long Do We Hold a Grace Note?" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8 mb-10">Since the <span className="font-bold">appoggiatura</span> grace note has to be given emphasis, musicians are often confused about how long it should be held. A good rule of thumb to go by is that it takes away about half the value of the main note. So in the example below, the grace note would be played as an (accented) eighth note, and the quarter note would be played as an eighth note as well.</p>
                <figure className="flex-shrink-0 flex flex-col justify-center items-center mb-16">
                    <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fplayed_as.png?alt=media&token=5f0da821-01f1-4730-8bd2-ac37238333da" alt="example of a grace note" style={{width: "320px"}} className="rounded-md" />
                </figure>
            </section>

            <PostDivider />

            <PostHeading heading="Multiple Grace Notes" bottom="mb-16" />
            <section className="px-5 lg:px-36 xl:px-64 mb-24">
                <p className="leading-8 mb-10">So far we have talked about grace notes consisting if just one note. And while this is quite common, grace notes can also come in twos, threes, fours, or even more notes (less common).</p>
                <p className="leading-8 mb-10">Two grace notes are usually written as sixteenth notes, while three and four grace notes are written as either sixteenth or thirty-second notes. Anything above four is usually shown as thirty-second notes.</p>
                <div className="flex">
                    <figure className="flex-1 flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fdouble.JPG?alt=media&token=88a2dcb8-678e-43af-93e5-c3e14e2177a5" alt="trill notation examples" style={{width: "85px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Two-note grace note</small></figcaption>
                    </figure>
                    <figure className="flex-1 flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Ftriple.JPG?alt=media&token=9752a9da-e16b-45da-ab40-ca190bb26bdf" alt="trill notation examples" style={{width: "85px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Three-note grace note</small></figcaption>
                    </figure>
                    <figure className="flex-1 flex-shrink-0 flex flex-col justify-center items-center mb-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fquadruple.JPG?alt=media&token=b712573f-bee5-49ce-bca3-69ee4ebcf806" alt="trill notation examples" style={{width: "85px"}} className="rounded-md" />
                        <figcaption className="text-gray-500"><small>Four-note grace note</small></figcaption>
                    </figure>
                </div>
                <p className="mb-10 font-semibold text-[0.9rem]">* Although multiple grace notes do not have a diagonal line going through them, you should play them the same way you would play the acciaccatura. In other words, they should be unaccented and should come before the main beat.</p>
                <p className="leading-8 mb-10">The two-note grace note is also known as a <span className="font-bold">double appoggiatura</span>, the three-note grace note as a <span className="font-bold">triple appoggiatura</span>, and so on. But this name can be misleading, since these are almost never played on the beat, like the regular appoggiatura is. Instead, they are played in a “crushed” manner, like the acciaccatura.</p>
            </section>

            <SectionDivider />

            <PostSectionHeading heading="Conclusion" />
            <section className="conclusion px-5 lg:px-36 xl:px-64 mb-20">
                <p className="leading-8">Grace notes are a neat musical ornament and learning how to execute them correctly and effectively will make your performance that much more beautiful. You will most likely come across grace notes in the music of the Baroque and Classical periods. As music continued to change and evolve after the classical period, their use became less prevalent.</p>
            </section>


            <PageBottomTrialButton />
        </main>

  )
}

export default PostGraceNotesExplained
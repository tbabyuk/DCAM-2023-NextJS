import { PageTitle } from "../components/PageTitle";
import { BlogCard } from "../components/BlogCard";

export const metadata = {
    title: "DCAM | Blog",
    description: "List of all our blog articles"
}

const BlogPage = () => {

    return ( 
        <main className="blog-page">
            <PageTitle title="Blog" />

            <div className="blog-list grid place-items-center md:grid-cols-2 xl:grid-cols-3 gap-y-8 px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">

                <BlogCard
                    title="ABRSM Exams: Your Complete Guide" 
                    date="June 11, 2023"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2023/06/abrsm_cover.jpg"
                    description="What is ABRSM? Types of ABRSM exams List of ABRSM exams How long are ABRSM exams? ABRSM exam dates ABRSM exam fees Can I get a refund for my ABRSM exam? How are ABRSM exams marked? When …"
                    blogLink="Read More"
                    category="ABRSM, Music Exams"
                />

                <BlogCard
                    title="The 3 Easiest Debussy Piano Pieces" 
                    date="May 17, 2023"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-debussy-pieces%2Feasy_debussy_pieces_cover.jpg?alt=media&token=7fd595a7-7ffb-4b03-ad3e-c1258122b355"
                    description="As is usually the case with my “easy” series, I try to put together a collection of pieces that are not just “easy” relative to the composer’s other works, but also ones I consider to be the most beautiful. …"
                    blogLink="/easy-debussy-pieces/"
                    category="Easy Pieces Series', Piano"
                />

                <BlogCard
                    title="How to Build a Chromatic Scale" 
                    date="November 28, 2022"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2022/11/chromatic_scale_cover_photo.jpg"
                    description="A chromatic scale is a scale made up of 12 different notes separated by half-steps (or semitones). The 13th note is a repetition of the 1st note, an octave apart. On the piano keyboard, if you start on any key …"
                    blogLink="Read More"
                    category="Music Theory"
                />

                <BlogCard
                    title="Famous Bands from Toronto" 
                    date="November 20, 2022"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-bands-from-toronto%2Ffamous_bands_from_toronto_cover.jpg?alt=media&token=598d99c9-4fd5-4be1-80f4-ae7341e0a774"
                    description="Toronto and the GTA (Greater Toronto Area) has produced a good number of bands that have managed to hit it big around the world. In this article, we will take a look at the most popular of these, and …"
                    blogLink="/famous-bands-from-toronto"
                    category="Canadian Music, Music General"
                />

                <BlogCard
                    title="How to Build a Melodic Minor Scale" 
                    date="November 17, 2022"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2022/11/melodic_min_scale_cover_photo.jpg"
                    description="The melodic minor scale is one of the three minor scales we have in music (the others being the natural minor and harmonic minor).  One way it is different from the two other minor scales is that it uses different …"
                    blogLink="Read More"
                    category="Music Theory"
                />

                <BlogCard
                    title="The 3 Easiest Clementi Sonatinas (piano)" 
                    date="October 30, 2022"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-clementi-sonatinas%2Feasy_clementi_sonatinas_cover.jpg?alt=media&token=ef9c5aaa-360c-474d-bc25-c12a0a0790cd"
                    description="Muzio Clementi (1752-1832) was an influential Italian pianist, composer, teacher, editor, and music publisher. His musical output had an important influence on many future generations of musicians and composers …"
                    blogLink="/easy-clementi-sonatinas/"
                    category="Easy Pieces Series"
                />

                <BlogCard
                    title="RCM Violin Repertoire – Full List of Pieces" 
                    date="October 25, 2022"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2022/10/rcm_violin_repertoire_cover.jpg"
                    description="The complete list of RCM Violin Repertoire pieces students can choose from to prepare for their RCM examinations. Source: RCM Celebration Series books, 2021 Edition (latest edition) Preparatory Violin …"
                    blogLink="Read More"
                    category="RCM"
                />

                <BlogCard
                    title="The 3 Easiest Chopin Nocturnes (piano)" 
                    date="October 22, 2022"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-nocturnes%2Feasy_chopin_nocturnes_cover.jpg?alt=media&token=0a02a5af-6cc0-4b2f-b304-6fcf75de2454"
                    description="Introduction Chopin is known to have written a total of 21 nocturnes, 18 of which were published during his lifetime and 3 posthumously. Today, his nocturnes are held in very high regard among musicians …"
                    blogLink="/easy-chopin-nocturnes"
                    category="Easy Pieces Series"
                />

                <BlogCard
                    title="Should we observe repeats in RCM pieces?" 
                    date="October 21, 2022"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2022/10/repeat_signs_blog_cover-1.jpg"
                    description="A common question asked by students preparing for their RCM exams is whether or not repeat signs or other similar markings should be observed or ignored. This is precisely the question we are going to answer …"
                    blogLink="Read More"
                    category="RCM"
                />

                <BlogCard
                    title="What is a grace note and how to play it"
                    date="August 25, 2021"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-grace-notes-work%2Fgrace_notes_cover.jpg?alt=media&token=7090278a-b646-4d30-a4d2-45f742301034"
                    description="Perhaps you’ve heard your teacher mention the term “grace note” during one of your lessons and even point one out to you in your sheet music, but you’re still not quite sure what they are and how exactly they …"
                    blogLink="/how-grace-notes-work/"
                    category="Music General, Music Theory, Piano"
                />

                <BlogCard
                    title="Placement of accidentals in chords" 
                    date="August 17, 2021"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2021/08/accidentals_cover_photo.jpg"
                    description="Introduction Most of us are quite comfortable writing accidentals next to a single note – you just place it to the left of the note, right? But what happens when we have not one but two, three, or more notes …"
                    blogLink="Read More"
                    category="Music General, Music Theory"
                />

                <BlogCard
                    title="How to raise a musical child" 
                    date="August 8, 2021"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2021/08/accidentals_cover_photo.jpg"
                    description="Having searched for this topic, you probably already know and appreciate the benefits that music education can offer, especially to young children with an actively-developing brain. Some examples of such benefits include …"
                    blogLink="Read More"
                    category="Music General"
                />

                <BlogCard
                    title="Easy sonatinas for piano students" 
                    date="July 30, 2021"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-piano-sonatinas%2Feasy_sonatinas_cover.jpg?alt=media&token=640a7125-50e0-4de1-92cc-2d835fcf8cb1"
                    description="the “Sonatina” A sonatina is a musical composition resembling a mini-sonata. Where a sonata is considered a sophisticated and relatively complex piece of music, a sonatina is a lot shorter, lighter in character, and less …"
                    blogLink="/easy-piano-sonatinas/"
                    category="Easy Pieces Series, Piano"
                />

                <BlogCard
                    title="RCM Guitar Exam Requirements (all grades)" 
                    date="July 28, 2021"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2021/07/rcm_guitar_requirements_cover.jpg"
                    description="Introduction Planning to do your RCM guitar exam but not sure what exactly you will be graded on and how? You’ve come to the right place! This guide will tell you what each section of the exam is worth to …"
                    blogLink="/rcm-guitar-exam-mark-guide/"
                    category="RCM, Guitar"
                />

                <BlogCard
                    title="Famous Canadian Pianists" 
                    date="May 9, 2021"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-canadian-pianists%2Ffamous_canadian_pianists_cover.jpg?alt=media&token=fea3b2a6-4ff1-4f2b-939f-e2fe12f27553"
                    description="Introduction Over the years, Canada has produced its own share of pianistic talent. While some of these pianists have managed to gain world-wide fame and leave a lasting legacy in the world of music, others are still …"
                    blogLink="/famous-canadian-pianists/"
                    category="Canadian Music, Music General"
                />

                <BlogCard
                    title="What is a trill and how to play it (piano)" 
                    date="April 20, 2021"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-to-play-a-trill-correctly-piano%2Ftrill_cover_photo.jpg?alt=media&token=ae7afeb7-5e1f-47e1-9f78-d0e723455de3"
                    description="Introduction A trill is one of the most common musical ornaments and can sound beautiful when done well. If you are not confident about your understanding of what a trill is or how to play it correctly, look no further. …"
                    blogLink="/how-to-play-a-trill-correctly-piano"
                    category="Music Theory, Piano"
                />

                <BlogCard
                    title="The 3 Easiest Chopin Etudes (piano)" 
                    date="April 13, 2021"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-etudes%2Feasy_chopin_etudes_cover.jpg?alt=media&token=041c33f1-835d-4b2e-bad3-414564570477"
                    description="Introduction Chopin is known to have written a total of 27 etudes, most of which are contained in Op. 25 and Op. 10 of his works. In this article, I chose 3 of these 27 that are generally considered the …"
                    blogLink="/easy-chopin-etudes/"
                    category="Easy Pieces Series, Piano"
                />

                <BlogCard
                    title="Was Chopin a good pianist?" 
                    date="March 14, 2021"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2021/04/easy_chopin_etudes_cover.jpg"
                    description="Most people know of Chopin as the famous Romantic-era composer, but what about Chopin the pianist? Just how good was he at the piano and what were perhaps some peculiarities of his piano playing? Because …"
                    blogLink="Read More"
                    category="Composers"
                />

                <BlogCard
                    title="The 3 Easiest Beethoven Sonatas (piano)" 
                    date="March 8, 2021"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-beethoven-sonatas%2Feasy_beethoven_sonatas_cover_photo.jpg?alt=media&token=d3359bf6-2880-4ad2-bcbe-e016809837ab"
                    description="Introduction Let’s get something straight – when we talk about “easy” Beethoven sonatas, we are of course talking about easy relative the rest of his sonatas, of which he is known to have written about 32. The …"
                    blogLink="/easy-beethoven-sonatas/"
                    category="Easy Pieces Series"
                />

                <BlogCard
                    title="6 Reasons to Take RCM Exams (Royal Conservatory)" 
                    date="November 26, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/11/six_reasons_to_take_rcm_exams.jpg"
                    description="Introduction Let’s get something straight – when we talk about “easy” Beethoven sonatas, we are of course talking about easy relative the rest of his sonatas, of …"
                    blogLink="Read More"
                    category="RCM"
                />

                <BlogCard
                    title="Can you skip RCM levels?" 
                    date="November 23, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/11/skip_rcm_levels_cover.jpg"
                    description="The short answer Yes, RCM allows students to skip level exams, but think carefully about your reason for wanting to do this. The fact is, there are no short-cuts for developing proper technique at your instrument and a proper understanding …"
                    blogLink="Read More"
                    category="RCM"
                />

                <BlogCard
                    title="Best Age to Start Music Lessons" 
                    date="November 9, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/11/best_age_to_start_music_lessons_featured_image.jpg"
                    description="Introduction This is a question that all parents who want to get their little ones involved in music ask themselves at one point or another. Being a music school, you can imagine that we have come across this question on …"
                    blogLink="Read More"
                    category="Music General"
                />

                <BlogCard
                    title="Scale Fingering for Piano" 
                    date="September 20, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/11/best_age_to_start_music_lessons_featured_image.jpg"
                    description="Introduction Scales and scale fingering can seem daunting to students starting out on the piano. But if we take a broad look at all piano scales, we discover that all scale fingering falls into one of only three patterns. Once …"
                    blogLink="Read More"
                    category="Music General, Piano"
                />

                <BlogCard
                    title="How to write a tie in music (music notation)" 
                    date="September 16, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/09/how_to_write_a_tie_featured_image.jpg"
                    description="Introduction This article assumes that you are already familiar with what a tie is and its function in music. The focus here will be to highlight the rules surrounding the correct way to write ties in music notation. This might …"
                    blogLink="Read More"
                    category="Music Theory"
                />

                <BlogCard
                    title="Easy Czerny Etudes (piano)" 
                    date="September 11, 2020"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-czerny-etudes%2Feasy_czerny_etudes_cover_photo.jpg?alt=media&token=4eb69890-69e2-485a-9fa1-fb5f557d5bfc"
                    description="Carl Czerny was an Austrian pianist, teacher, and composer of Czech origin who lived from 1791 to 1857. Over his lifetime, he wrote many works for the piano (over a 1000) and many of these are widely used …"
                    blogLink="/easy-czerny-etudes/"
                    category="Easy Pieces Series, Piano"
                />

                <BlogCard
                    title="The 3 Easiest Mozart Sonatas (piano)" 
                    date="September 9, 2020"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-mozart-sonatas%2Feasy_mozart_sonatas_featured_image.jpg?alt=media&token=08e9fc73-330c-4fbe-8911-1270cbf2be76"
                    description="Let’s begin with a disclaimer – there is no such thing as an easy Mozart sonata, or even an easy sonata for that matter, which are by their nature complex, multi-movement works. That being said, it doesn’t mean that …"
                    blogLink="/easy-mozart-sonatas/"
                    category="Easy Pieces Series, Piano"
                />

                <BlogCard
                    title="RCM Piano Etudes – Full List of Pieces" 
                    date="August 29, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/08/rcm_piano_etudes_all_pieces.jpg"
                    description="The complete list of RCM Piano Etudes pieces students can choose from to prepare for their RCM examinations. Source: RCM Celebration Series books, 2022 Edition (latest edition) IMPORTANT: While the names of …"
                    blogLink="Read More"
                    category="RCM, Piano"
                />

                <BlogCard
                    title="RCM Piano Repertoire – Full List of Pieces" 
                    date="August 4, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/08/rcm_piano_repertoire_all_pieces.jpg"
                    description="The complete list of RCM Piano Repertoire pieces students can choose from to prepare for their RCM examinations. Source: RCM Celebration Series books, 2022 Edition (latest edition) IMPORTANT: While the …"
                    blogLink="Read More"
                    category="RCM, Piano"
                />

                <BlogCard
                    title="What is a pickup measure in music (and how it works)" 
                    date="July 30, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/07/what_is_a_pickup_measure_featured_image.jpg"
                    description="If you’ve ever read sheet music, you’ve undoubtedly come across a pickup measure (aka anacrusis/upbeat/incomplete measure). And while you may have a general idea of what these are all about, perhaps …"
                    blogLink="Read More"
                    category="Music Theory"
                />

                <BlogCard
                    title="The 3 Easiest Chopin Waltzes (piano)" 
                    date="July 27, 2020"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-waltzes%2Feasy_chopin_waltzes_cover.jpg?alt=media&token=b08eb378-7fc7-440c-95ac-199b39f5f89f"
                    description="Introduction Although Chopin is known to have written a total of about 20 waltzes, most of them require a pre-advanced to advanced mastery of the piano to be able to perform comfortably. Luckily, there are 3 that are easier than …"
                    blogLink="/easy-chopin-waltzes/"
                    category="Easy Pieces Series, Piano"
                />

                <BlogCard
                    title="An Illustrated Guide to Child Guitar Sizes" 
                    date="July 19, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/07/child_guitar_sizes_featured_image.jpg"
                    description="Introduction If your child is about to start guitar lessons, you might wonder what the right guitar size for them is, given all the available options. This guide is designed to help you answer this question, with lots of other …"
                    blogLink="Read More"
                    category="Music General, Guitar"
                />

                <BlogCard
                    title="Online vs. In-Person Music Lessons" 
                    date="July 14, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/07/child_guitar_sizes_featured_image.jpg"
                    description="Like it or not, online learning is the new reality for millions of people around the world – and it’s here to stay! Music lessons have certainly not escaped this new trend, but the question many music teachers, students, …"
                    blogLink="Read More"
                    category="Music General"
                />

                <BlogCard
                    title="Tips for Adult Piano Students" 
                    date="July 9, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/07/child_guitar_sizes_featured_image.jpg"
                    description="Quick Navigation Menu 1. Introduction2. The myth3. Advantages to learning piano as an adult4. Five success tips for adult piano learners5. Recommended piano books for adult beginners Introduction Sure, starting to …"
                    blogLink="Read More"
                    category="Music General, Tips for Musicians"
                />

                <BlogCard
                    title="6 Signs Your Child is Musically Gifted" 
                    date="July 8, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/07/child_guitar_sizes_featured_image.jpg"
                    description="If you are a parent wondering if your child is musically gifted, this is the article for you. We have put together six of the most important and reliable signs of innate musical talent in children. But keep in …"
                    blogLink="Read More"
                    category="Music General"
                />

                <BlogCard
                    title="How Music Intervals Work (with examples)" 
                    date="July 4, 2020"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Fhow-music-intervals-work%2Fmusic_intervals_cover.jpg?alt=media&token=d7d4e709-2a3f-42df-8f1e-8ffa483d0868"
                    description="Music intervals are an essential component of music theory and simply one of those things that every musician should know. This article is designed to give you a full understanding of this topic in a way that is logical …"
                    blogLink="/how-music-intervals-work/"
                    category="Music Theory"
                />

                <BlogCard
                    title="RCM Violin Exam Requirements (all grades)" 
                    date="July 2, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/07/rcm_violin_exam_requirements_cover.jpg"
                    description="If you are a violin student planning to do your RCM practical exams and want to know precisely what you will be graded on – this is the page for you! This guide will tell you exactly what each …"
                    blogLink="/rcm-violin-exam-mark-guide/"
                    category="RCM"
                />

                <BlogCard
                    title="RCM Piano Exam Requirements (all grades)" 
                    date="June 22, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/06/rcm_piano_exam_requirements_cover.jpg"
                    description="Introduction If you are a piano student planning to do your RCM practical exams and want to know precisely what you will be graded on – you’ve come to the right place! This …"
                    blogLink="/rcm-piano-exam-mark-guide/"
                    category="RCM, Piano"
                />

                <BlogCard
                    title="Famous Actors Who Can Play the Piano" 
                    date="June 18, 2020"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Factors-who-play-piano%2Factors_who_play_piano_cover.jpg?alt=media&token=c08d7994-a9c7-41b6-a30a-6b232edf2759"
                    description="Overview You know them for their acting skills, but you probably didn’t know that these famous actors could also impress you on the piano! Here is our list of the top 5 actors who can play the piano! (ordered by …"
                    blogLink="/actors-who-play-piano/"
                    category="Music General"
                />

                <BlogCard
                    title="Famous Musicians from Toronto" 
                    date="May 27, 2020"
                    imageUrl="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Ffamous-toronto-musicians%2Ffamous_toronto_musicians_cover.jpg?alt=media&token=4c94ba43-53ae-4eac-a29a-250e05b3b87b"
                    description="Being the most populous city and metropolitan area in Canada, Toronto (and the GTA) is almost destined to produce all sorts of talented individuals. In this article we will take a look at some of this city’s most …"
                    blogLink="/famous-toronto-musicians/"
                    category="Music General, Canadian Music"
                />

                <BlogCard
                    title="How to Build a Harmonic Minor Scale" 
                    date="May 6, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/05/featured2.png"
                    description="The harmonic minor scale is arguably the most popular of the three minor scales (the others being the natural minor and melodic minor). It is pleasing to the ear but at the same time has a certain melancholic quality, as …"
                    blogLink="Read More"
                    category="Music Theory"
                />

                <BlogCard
                    title="How to Build a Natural Minor Scale" 
                    date="April 27, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/04/natural_minor_scale_featured_image.jpg"
                    description="The natural minor scale is one of three minor scales (the others being the harmonic minor and melodic minor). Although not as common as the other two, it is extremely useful to know, at the very least because it …"
                    blogLink="Read More"
                    category="Music Theory"
                />

                <BlogCard
                    title="How to Build a Major Scale" 
                    date="April 22, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/04/major_scale_featured_image-1.jpg"
                    description="The major scale is one the most widely-used scales in music and certainly one that every musician should know. Like other scales, it follows a particular pattern (i.e. formula) of whole steps and half steps, which is what gives …"
                    blogLink="Read More"
                    category="Music Theory"
                />

                <BlogCard
                    title="5 Best Practice Tips for Music Students" 
                    date="April 10, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/04/major_scale_featured_image-1.jpg"
                    description="As with most things in life, there are no shortcuts when it comes to learning a musical instrument. Practice is the only thing that will help you get better and ensure your continuous growth as a musician. But how …"
                    blogLink="Read More"
                    category="Music General, Tips for Musicians"
                />

                <BlogCard
                    title="RCM Exams: Your Complete Guide" 
                    date="April 8, 2020"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2020/04/rcm_exams_complete_guide_cover.jpg"
                    description="What are RCM exams? Types of RCM exams List of RCM exams How long are RCM exams? RCM exam dates RCM exam fees Can I get a refund for my RCM exam? How are RCM exams marked? …"
                    blogLink="Read More"
                    category="RCM"
                />

            </div>

        </main>
     );
}
 
export default BlogPage;
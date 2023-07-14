



import { PageTitle } from "../components/PageTitle";
import { BlogCard } from "../components/BlogCard";

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
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2023/05/debussy.jpg"
                    description="As is usually the case with my “easy” series, I try to put together a collection of pieces that are not just “easy” relative to the composer’s other works, but also ones I consider to be the most beautiful. …"
                    blogLink="Read More"
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
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2022/11/toronto_bands_cover_photo.jpg"
                    description="Toronto and the GTA (Greater Toronto Area) has produced a good number of bands that have managed to hit it big around the world. In this article, we will take a look at the most popular of these, and …"
                    blogLink="Read More"
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
                    title="Easy Clementi Sonatinas (piano)" 
                    date="October 30, 2022"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2022/10/easy_clementi_sonatinas_cover_image.jpg"
                    description="Muzio Clementi (1752-1832) was an influential Italian pianist, composer, teacher, editor, and music publisher. His musical output had an important influence on many future generations of musicians and composers …"
                    blogLink="Read More"
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
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2022/10/easy_chopin_nocturnes_cover.jpg"
                    description="Introduction Chopin is known to have written a total of 21 nocturnes, 18 of which were published during his lifetime and 3 posthumously. Today, his nocturnes are held in very high regard among musicians …"
                    blogLink="Read More"
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
                    title="What is a grace note and to play it" 
                    date="August 25, 2021"
                    imageUrl="https://dacapomusic.ca/wp-content/uploads/2021/08/grace_note_cover_photo.jpg"
                    description="Perhaps you’ve heard your teacher mention the term “grace note” during one of your lessons and even point one out to you in your sheet music, but you’re still not quite sure what they are and how exactly they …"
                    blogLink="Read More"
                    category="Music General, Music Theory, Piano"
                />

            </div>

        </main>
     );
}
 
export default BlogPage;
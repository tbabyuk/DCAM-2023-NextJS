import { PostTitle } from "@/app/components/PostTitle"
import { PostSectionHeading } from "@/app/components/PostSectionHeading"
import { PostHeading } from "@/app/components/PostHeading"
import { PostSubheading } from "@/app/components/PostSubheading"
import { PageBottomTrialButton } from "@/app/components/PageBottomTrialButton"
import { PostDivider } from "@/app/components/PostDivider"
import { PostSource } from "@/app/components/PostSource"
import Link from "next/link"
import PostImage from "@/app/components/PostImage"
import { PostNote } from "@/app/components/PostNote"
import { PostSubtitle } from "@/app/components/PostSubtitle"

export const metadata = {
    title: "RCM Piano Repertoire - Full List of Pieces | Da Capo Academy of Music",
    description: "A complete, quick-reference list of all RCM Piano Repertoire pieces, levels Prep A to 10, including name of piece, composer, and page number.",
    keywords: ["rcm piano repertoire songs", "rcm piano repertoire pieces", "rcm piano repertoire songs list"]
}

const PostRCMPianoRepertoireAllPieces = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="RCM Piano Repertoire – Full List of Pieces" date="August 4, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-exams-complete-guide%2Frcm_exams_complete_guide_cover.jpg?alt=media&token=f1afe2cc-5aa9-4d9c-b8dc-5e25f3e0f165" alt="RCM Exams Complete Guide cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <div>
                    <p className="leading-8 mb-5">The complete list of RCM Piano Repertoire pieces students can choose from to prepare for their RCM examinations.</p>
                    <PostSource source="RCM Celebration Series books, 2022 Edition (latest edition)" />
                    <PostNote text="While the names of all the pieces in this article are from the newest, 2022 Edition of RCM Piano Repertoire books, the video recordings have not yet all been updated to this latest edition. We are, however, in the process of re-recording the videos, so they will all gradually be updated. Please stay tuned and thank you for your understanding!" />

                </div>
            </section>


            {/* <PostSectionHeading heading="Table of Contents" />
            <section className="px-5 lg:px-36 xl:px-64 mb-32">
                <div>
                    <ul className="list-disc list-inside leading-8 bg-gray-100 w-fit mx-auto p-5 rounded">
                        <li><Link href="#what_is_rcm" className="dcam-link">What is RCM?</Link></li>
                        <li><Link href="#types_of_rcm_exams" className="dcam-link">Types of RCM Exams</Link></li>
                        <li><Link href="#list_of_rcm_exams" className="dcam-link">List of RCM Exams</Link></li>
                        <li><Link href="#instruments_offered" className="dcam-link">List of Instruments Offered</Link></li>
                        <li><Link href="#length_of_rcm_exams" className="dcam-link">How long are RCM Exams?</Link></li>
                        <li><Link href="#rcm_exam_dates" className="dcam-link">RCM Exam dates</Link></li>
                        <li><Link href="#rcm_exam_fees" className="dcam-link">RCM Exam fees</Link></li>
                        <li><Link href="#rcm_exam_grading" className="dcam-link">How are RCM Exams graded?</Link></li>
                        <li><Link href="#when_are_results_posted" className="dcam-link">When are RCM Exam results posted?</Link></li>
                        <li><Link href="#rcm_and_highschool_credits" className="dcam-link">RCM Exams and high school credits</Link></li>
                        <li><Link href="#rcm_contact" className="dcam-link">RCM contact information</Link></li>
                    </ul>
                </div>           
            </section> */}

            {/* <span id="what_is_rcm" /> */}
            <PostHeading heading="Prep A Piano Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-12">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64">
                <table className="blog-table mx-auto w-full md:w-[80%]">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Allegro in C Major, op. 1, no. 4</td>
                            <td>Alexander Reinagle</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Melody in G Major, op. 101, no. 39</td>
                            <td>Ferdinand Beyer</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>The Juggler</td>
                            <td>Nancy Faber and Randall Faber</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>On the Trampoline</td>
                            <td>Linda Niamath</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Bluebottle</td>
                            <td>Christopher Norton</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Giraffe</td>
                            <td>Teresa Richert</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Ladybug Waltz</td>
                            <td>Susan Ogilvy</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Owl in the Night*</td>
                            <td>Catherine Rollin</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Bumper Cars</td>
                            <td>Kevin Olson</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>The Haunted Mouse*</td>
                            <td>Nancy Faber and Randall Faber</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Criss Cross</td>
                            <td>Florence B. Price</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>A Skating Waltz*</td>
                            <td>Boris Berlin</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Sleigh Bells*</td>
                            <td>Christine Donkin</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>Barefoot on the Beach</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Panda Blues</td>
                            <td>Edward Han Jiang</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>The Haunted Harp*</td>
                            <td>Christine Donkin</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Rock Climbing</td>
                            <td>Sarah Konecsni</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>What’s That Noise?</td>
                            <td>Martha Mier</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Around a Roundabout</td>
                            <td>Tom Gerou</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Prickly Pear Rag</td>
                            <td>Dennis Alexander</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>The Wandering Ogre</td>
                            <td>Mark Mrozinski</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Sleepy Head</td>
                            <td>Martha Hill Duncan</td>
                            <td>29</td>
                        </tr>
                        <tr>
                            <td>Baby Kangaroo</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Curious Cat*</td>
                            <td>Teresa Richert</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Smooth and Crunchy*</td>
                            <td>Elissa Milne</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <PostDivider />

            {/* <span id="what_is_rcm" /> */}
            <PostHeading heading="Prep B Piano Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-12">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64">
                <table className="blog-table mx-auto w-full md:w-[80%]">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>The Calico Cat*</td>
                            <td>Helen Marlais</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>A Gorilla Named Chee</td>
                            <td>Dennis Alexander</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>The Sneaky Tiger</td>
                            <td>Kevin Costley</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Minuetto in C Major, op. 37, lesson 2*</td>
                            <td>James Hook</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Minuet in F Major</td>
                            <td>attr. Leopold Mozart</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>The Rising Sun*</td>
                            <td>Nancy Telfer</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Starfish at Night*</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Raptors</td>
                            <td>Kevin Olson</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Oranges and Lemons*</td>
                            <td>English folk song, arr. Boris Berlin</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Pumpkin Boogie</td>
                            <td>Nancy Faber and Randall Faber</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Boat of Tai Lake</td>
                            <td>Chinese folk song, arr. Emilie Lin</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>The Thirsty Frog</td>
                            <td>Colleen Athparia</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Swoop, Peck and Fly</td>
                            <td>Alison Mathews</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>Sneaky Sam*</td>
                            <td>Melody Bober</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Carillon</td>
                            <td>David L. McIntyre</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>New Shoes*</td>
                            <td>Linda Niamath</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Shadow Puppets</td>
                            <td>Edward Han Jiang</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Paswewe (It Echoes)</td>
                            <td>Barbara Assiginaak</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Looking-Glass River</td>
                            <td>Nancy Faber and Randall Faber</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Leaping the Waves with Dolphins</td>
                            <td>Barbara Arens</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>Roda</td>
                            <td>Oscar Lorenzo Fernandez</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Playing, op. 39, no. 5</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Bouncing Ball*</td>
                            <td>Teresa Richert</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Steampunk</td>
                            <td>Diane Hidy</td>
                            <td>32</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <PostDivider />

            {/* <span id="what_is_rcm" /> */}
            <PostHeading heading="Level 1 Piano Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Baroque and Classical Repertoire" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Minuet in C Major, op. 38, no. 4</td>
                            <td>Johann Wilhelm Hassler</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Bourree in D Minor</td>
                            <td>Christoph Graupner</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Burlesque in G Major*</td>
                            <td>Anonymous</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Andante in G Minor*</td>
                            <td>Georg Philipp Telemann</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>German Dance in D Major, Hob. IX:22, no. 2*</td>
                            <td>Franz Joseph Haydn</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Gavotte in G Major</td>
                            <td>Thomas F. Dunhill</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Minuet in D Major</td>
                            <td>Leopold Mozart</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Minuet in D Minor</td>
                            <td>Anonymous</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>High Spirits</td>
                            <td>Daniel Gottlob Turk</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Ukrainian Folk Song, op. 107, no. 3</td>
                            <td>Ludwig van Beethoven</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>A Simple Waltz</td>
                            <td>John Burge</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Amber Moon</td>
                            <td>Kevin Olson</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Waltz, op. 39, no. 13*</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Romantic, 20th, and 21st Century Repertoire" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Early One Morning*</td>
                            <td>Traditional English song, arr. Frederick Silvester</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>The Swiss Cuckoo</td>
                            <td>Traditional, arr. Boris Berlin</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Sweet Jasmine</td>
                            <td>Dennis Alexander</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Niimi Aandeg (Crow Dances)</td>
                            <td>Barbara Assiginaak</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>This Guy’s Disguised</td>
                            <td>Bradley Sowash</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Lunar Eclipse</td>
                            <td>Nancy Faber and Randall Faber</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>March of the Terrible Trolls</td>
                            <td>Linda Niamath</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Mist*</td>
                            <td>Clifford Poole</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Clear Mountain Sky</td>
                            <td>Mike Springer</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Angelfish*</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>A Simple Waltz</td>
                            <td>John Burge</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Amber Moon</td>
                            <td>Kevin Olson</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Waltz, op. 39, no. 13*</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Song of the Dark Woods*</td>
                            <td>Elie Siegmeister</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>Reminiscence</td>
                            <td>Edwin McLean</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Uptown News</td>
                            <td>Tom Gerou</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Inventions" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Cranky Cat*</td>
                            <td>Teresa Richert</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Mary Had a Little Lamb</td>
                            <td>English nursery rhyme, arr. Dianne Goolkasian Rahbee</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>Young Ludwig Exploring*</td>
                            <td>Forrest Kinney</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>The Playful Parrot</td>
                            <td>Gary K. Thomas</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>The Snake*</td>
                            <td>Renee Christopher</td>
                            <td>41</td>
                        </tr>
                        <tr>
                            <td>Invention on a Latvian Folk Tune</td>
                            <td>George Juris Kenins</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Conversation No. 3</td>
                            <td>Bela Bartok</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Teapot Invention*</td>
                            <td>Andrew Markow</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>Follow My Leader</td>
                            <td>Andre Felix Swinstead</td>
                            <td>44</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 1 Pieces Performed!" align="text-center" bottom="mb-10" />

                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/BaFrazxxvhc?si=7IQPtKOU6FvF9Pl4"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
                <p className="italic text-gray-500 text-center">To see performance of the old, 2015 edition of RCM Level 1 Piano Repertoire, click <a href="https://youtu.be/40wZP3bqOcE?si=pLKduHIZYLiD4laD" target="_blank" className="dcam-link">here</a>.</p>
            </section>

            <PostDivider />

            {/* <span id="what_is_rcm" /> */}
            <PostHeading heading="Level 2 Piano Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Baroque and Classical Repertoire" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                    <tr>
                        <td>Entree in A Minor</td>
                        <td>Anonymous</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Menuet en rondeau (Minuet in Rondo Form)*</td>
                        <td>Jean-Philippe Rameau</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Minuet in G Major</td>
                        <td>Johann Sebastian Bach</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Impertinence, HWV 494*</td>
                        <td>George Frideric Handel</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Minuet in A Minor, Z 649</td>
                        <td>Henry Purcell</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>A Cheerful Spirit</td>
                        <td>Daniel Gottlob Turk</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td>Minuet in G Major, K 1e</td>
                        <td>Wolfgang Amadeus Mozart</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>German Dance in G Major, Hob. IX:12, no. 1</td>
                        <td>Franz Joseph Haydn</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>Allegretto in C Major*</td>
                        <td>Christian Gottlob Neefe</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Ecossaise in G Major, WoO 23*</td>
                        <td>Ludwig van Beethoven</td>
                        <td>13</td>
                    </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Romantic, 20th, and 21st Century Repertoire" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                    <tr>
                        <td>Soldier’s March, op. 68, no. 2*</td>
                        <td>Robert Schumann</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>Prelude V</td>
                        <td>Barbara Arens</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Theme and Variations, op. 300, no. 39</td>
                        <td>Christian Louis Henrich Kohler</td>
                        <td>16</td>
                    </tr>
                    <tr>
                        <td>Slovakian Folk Tune in E Minor</td>
                        <td>Bela Bartok</td>
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>Crocodile Tears</td>
                        <td>Christine Donkin</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Crocodile Teeth</td>
                        <td>Nancy Telfer</td>
                        <td>19</td>
                    </tr>
                    <tr>
                        <td>I Spy*</td>
                        <td>Melody Bober</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Atacama Desert*</td>
                        <td>Wynn-Anne Rossi</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>The Merry-Go-Round</td>
                        <td>Boris Berlin</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>The Waltz That Floated Away*</td>
                        <td>David L. McIntyre</td>
                        <td>26</td>
                    </tr>
                    <tr>
                        <td>Make Believe</td>
                        <td>Ulysses Kay</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>The Skating Carnival</td>
                        <td>Clifford Poole</td>
                        <td>28</td>
                    </tr>
                    <tr>
                        <td>4th Street Rag</td>
                        <td>Dennis Alexander</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Nightingale</td>
                        <td>Diane Hidy</td>
                        <td>32</td>
                    </tr>
                    <tr>
                        <td>Rhyme Time</td>
                        <td>Elissa Milne</td>
                        <td>34</td>
                    </tr>
                    <tr>
                        <td>Dreams of a Mermaid</td>
                        <td>Barbara Arens</td>
                        <td>36</td>
                    </tr>
                    <tr>
                        <td>Periwinkle Twinkle*</td>
                        <td>Anne Crosby Gaudet</td>
                        <td>38</td>
                    </tr>
                    <tr>
                        <td>Shadow Waltz</td>
                        <td>Maria Case</td>
                        <td>39</td>
                    </tr>
                    <tr>
                        <td>Presto in 5/8</td>
                        <td>Edwin McLean</td>
                        <td>40</td>
                    </tr>
                    <tr>
                        <td>Farewell, op. 98, no. 4</td>
                        <td>Aleksandr Grechaninov</td>
                        <td>42</td>
                    </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Inventions" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Invention in C Major*</td>
                            <td>Renee Christopher</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>Canon in A Minor*</td>
                            <td>Cornelius Gurlitt</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>A Ditty of Yimeng Mountain</td>
                            <td>Chinese folk song, arr. Edward Han Jiang</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>Breezy</td>
                            <td>Christopher Norton</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Courageous Cat*</td>
                            <td>Teresa Richert</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Monkey See, Monkey Do</td>
                            <td>Vincent Ho</td>
                            <td>47</td>
                        </tr>
                        <tr>
                            <td>In a Canoe</td>
                            <td>Pierre Gallant</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Little Dance in Canon Form</td>
                            <td>Bela Bartok</td>
                            <td>40</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 2 Pieces Performed!" align="text-center" bottom="mb-10" />

                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/m3JJXXyPsWw?si=NuGb6Q6LY6ZFu5_e"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
                <p className="italic text-gray-500 text-center">To see performance of the old, 2015 edition of RCM Level 2 Piano Repertoire, click <a href="https://youtu.be/ti__cWspo_Q?si=7PSdeXmJFUwVshav" target="_blank" className="dcam-link">here</a>.</p>
            </section>

            <PostDivider />

            {/* <span id="what_is_rcm" /> */}
            <PostHeading heading="Level 3 Piano Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Baroque Repertoire" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Bouree in A Minor</td>
                            <td>Johann Krieger</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Harlequinade*</td>
                            <td>Johann Ludwig Krebs</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Minuet in G Major, BWV Anh. 114</td>
                            <td>Christian Petzold</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Minuet in G Minor, BWV Anh. 115</td>
                            <td>Christian Petzold</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Musette in D Major, BWV Anh. 126*</td>
                            <td>attr. Johann Sebastian Bach</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Polonaise in G Minor, BWV Anh. 119*</td>
                            <td>attr. Johann Sebastian Bach</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Gavot in C Major</td>
                            <td>John Blow</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>A New Irish Tune</td>
                            <td>Henry Purcell</td>
                            <td>11</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Classical and Classical-Style Repertoire" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>Viennese Sonatina in B Flat Major<br /> 1st Movement</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major, Anh. 5, no. 1<br /> 1st Movement</td>
                            <td>attr. Ludwig van Beethoven</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major, Anh. 5, no. 1<br /> 2nd Movement: Romanze</td>
                            <td>attr. Ludwig van Beethoven</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Sonatina in C Major, op. 36, no. 1<br /> 1st Movement*</td>
                            <td>Muzio Clementi</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Sonatina in A Minor, op. 94, no. 4<br /> 1st Movement*</td>
                            <td>Albert Biehl</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Sonatina in F Major, op. 257, no. 2<br /> 4th Movement: Finale*</td>
                            <td>Theodore Lack</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Andantino in A Major, op. 38, no. 31</td>
                            <td>Johann Wilhelm Hassler</td>
                            <td>22</td>
                        </tr>                       
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Romantic, 20th, and 21st Century Repertoire" align="text-center" bottom="mb-10" />
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>At Night on the River, op. 27, no. 4</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Play</td>
                            <td>Bela Bartok</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Tender Thought</td>
                            <td>Ulysses Kay</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Variations on a Russian Folk Song*</td>
                            <td>Isaak Berkovich</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>The Stormy Sea</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>The Elegant Toreador</td>
                            <td>Seymour Bernstein</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Gentle Breezes</td>
                            <td>Dennis Alexander</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Tarantelle</td>
                            <td>Clifford Poole</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Twilight Prelude</td>
                            <td>Mike Springer</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Lemon Sherbet Rag</td>
                            <td>Barbara Arens</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Walk the Talk</td>
                            <td>Bradley Sowash</td>
                            <td>39</td>
                        </tr>
                        <tr>
                            <td>Icicles</td>
                            <td>Martha Hill Duncan</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Arctic Voices*</td>
                            <td>Susan Griesdale</td>
                            <td>41</td>
                        </tr>
                        <tr>
                            <td>Ragtime Cha-Cha</td>
                            <td>Melody Bober</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Danse</td>
                            <td>Jeannine Vanier</td>
                            <td>44</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 3 Pieces Performed!" align="text-center" bottom="mb-10" />

                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/MviEMU_0DI0?si=iMAIP-53KA_RurE9"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
                <p className="italic text-gray-500 text-center">To see performance of the old, 2015 edition of RCM Level 3 Piano Repertoire, click <a href="https://youtu.be/trqK0BqFAyM?si=fcwAsM0aomvU8Dkp" target="_blank" className="dcam-link">here</a>.</p>
            </section>



            <PageBottomTrialButton />
        </main>

  )
}

export default PostRCMPianoRepertoireAllPieces
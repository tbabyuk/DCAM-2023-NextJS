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

export const metadata = {
    title: "RCM Piano Repertoire - Full List of Pieces | Da Capo Academy of Music",
    description: "A complete, quick-reference list of all RCM Piano Repertoire pieces, levels Prep A to 10, including name of piece, composer, and page number.",
    keywords: ["rcm piano repertoire songs", "rcm piano repertoire pieces", "rcm piano repertoire songs list"]
}

const PostRCMPianoRepertoireAllPieces = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="RCM Piano Repertoire - Full List of Pieces" date="August 4, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm-piano-repertoire-all-pieces%2Frcm_piano_repertoire_all_pieces_cover.jpg?alt=media&token=0f198dda-54df-4463-852c-348dd2cffbd0" alt="RCM Piano Repertoire All Pieces cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <div>
                    <p className="leading-8 mb-5">The complete list of RCM Piano Repertoire pieces students can choose from to prepare for their RCM examinations.</p>
                    <PostNote text="While the names of all the pieces in this article are from the newest, 2022 Edition of RCM Piano Repertoire books, the video recordings have not yet all been updated to this latest edition. We are, however, in the process of re-recording the videos, so they will all gradually be updated. Please stay tuned and thank you for your understanding!" />
                    <PostSource source="RCM Celebration Series books, 2022 Edition (latest edition)" />
                </div>
            </section>


            <PostSectionHeading heading="Table of Contents" />
            <section className="px-5 lg:px-36 xl:px-64 mb-32">
                <div>
                    <ul className="list-disc list-inside leading-8 bg-gray-100 w-fit mx-auto p-5 rounded">
                        <li><Link href="#prep_a" className="dcam-link">Prep A Piano Repertoire</Link></li>
                        <li><Link href="#prep_b" className="dcam-link">Prep B Piano Repertoire</Link></li>
                        <li><Link href="#level_1" className="dcam-link">Level 1 Piano Repertoire</Link></li>
                        <li><Link href="#level_2" className="dcam-link">Level 2 Piano Repertoire</Link></li>
                        <li><Link href="#level_3" className="dcam-link">Level 3 Piano Repertoire</Link></li>
                        <li><Link href="#level_4" className="dcam-link">Level 4 Piano Repertoire</Link></li>
                        <li><Link href="#level_5" className="dcam-link">Level 5 Piano Repertoire</Link></li>
                        <li><Link href="#level_6" className="dcam-link">Level 6 Piano Repertoire</Link></li>
                        <li><Link href="#level_7" className="dcam-link">Level 7 Piano Repertoire</Link></li>
                        <li><Link href="#level_8" className="dcam-link">Level 8 Piano Repertoire</Link></li>
                        <li><Link href="#level_9" className="dcam-link">Level 9 Piano Repertoire</Link></li>
                        <li><Link href="#level_10" className="dcam-link">Level 10 Piano Repertoire</Link></li>
                    </ul>
                </div>           
            </section>

            <span id="prep_a" />
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
                            <td>What's That Noise?</td>
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

            <span id="prep_b" />
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

            <span id="level_1" />
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
                            <td>This Guy's Disguised</td>
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

            <span id="level_2" />
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
                        <td>Soldier's March, op. 68, no. 2*</td>
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

            <span id="level_3" />
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

            <PostDivider />

            <span id="level_4" />
            <PostHeading heading="Level 4 Piano Repertoire" bottom="mb-6" />
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
                            <td>Minuet in D Minor, BWV Anh. 132</td>
                            <td>attr. Johann Sebastian Bach</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Air in B flat Major, HWV 471*</td>
                            <td>George Frideric Handel</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>March in D Major, BWV Anh. 122*</td>
                            <td>Carl Philipp Emanuel Bach</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Sonata in C Minor, K 40</td>
                            <td>Domenico Scarlatti</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Gavotte in F Major</td>
                            <td>Christoph Graupner</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Allegretto in E Minor, op. 38, no. 24</td>
                            <td>Johann Wilhelm Hassler</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Rigadoon in A Minor*</td>
                            <td>William Babell</td>
                            <td>10</td>
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
                            <td>Sonatina in C Major, op. 4, no. 1</td>
                            <td>Samuel Wesley</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Sonata in D Minor, C 17</td>
                            <td>Domenico Cimarosa</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sonatina in F Major, op. 168, no. 1 1st Movement*</td>
                            <td>Anton Diabelli</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major, op. 66, no. 3 1st Movement</td>
                            <td>Heinrich Lichner</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Sonatina in B flat Major, op. 29 1st Movement</td>
                            <td>Jacob Schmitt</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major, op. 36, no. 2 3rd Movement*</td>
                            <td>Muzio Clementi</td>
                            <td>20</td>
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
                            <td>The Happy Farmer, op. 68, no. 10*</td>
                            <td>Robert Schumann</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Dreamcatcher*</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Waltz</td>
                            <td>Bela Bartok</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Barcarolle, op. 123, no. 8</td>
                            <td>Cecile Chaminade</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Cool Cat Waltz</td>
                            <td>Katya Pine</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Window Shopping</td>
                            <td>Barbara Arens</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Eagle Rays</td>
                            <td>Teresa Richert</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>The Little Wanderer (Der kleine, rustige Wandersmann), op. 81, no. 2</td>
                            <td>Theodor Kullak</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Happy Grasshopper</td>
                            <td>Peter Rudzik</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Nighttime in the City</td>
                            <td>Mike Springer</td>
                            <td>37</td>
                        </tr>
                        <tr>
                            <td>Yaya sonhando (Yaya Dreaming)</td>
                            <td>Oscar Lorenzo Fernandez</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Squirrels at Play*</td>
                            <td>Boris Berlin</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Sunset at the Beach</td>
                            <td>Kevin Olson</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Flowing Stream Beneath a Little Bridge</td>
                            <td>Edward Han Jiang</td>
                            <td>44</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 4 Pieces Performed!" align="text-center" bottom="mb-10" />
                <p className="italic text-center mb-6">(Old, 2015 edition)</p>
                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/ii2sBA2PwY8?si=FoKOtZPQwpwUlYxo"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
            </section>

            <PostDivider />

            <span id="level_5" />
            <PostHeading heading="Level 5 Piano Repertoire" bottom="mb-6" />
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
                            <td>Little Prelude in C Major, BWV 939</td>
                            <td>Johann Sebastian Bach</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Fantasia in E flat Major, TWV 33:35 2nd Section</td>
                            <td>Georg Philipp Telemann</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Deux rigaudons</td>
                            <td>Jean-Philippe Rameau</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Angloise in D Major</td>
                            <td>Johann Christoph Friedrich Bach</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Sonata in D Minor, K 34*</td>
                            <td>Domenico Scarlatti</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Allegro in C Minor</td>
                            <td>Jose Antonio Carlos de Seixas</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Fuga (Sonatina) in G Major, HWV 582</td>
                            <td>George Frideric Handel</td>
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
                            <td>Allegro moderato in F Major</td>
                            <td>Leopold Mozart</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major, op. 168, no. 2 1st Movement</td>
                            <td>Anton Diabelli</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Sonatina in F Major, Anh. 5, no. 2 1st Movement*</td>
                            <td>attr. Ludwig van Beethoven</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Minuet in C Major, Hob. IX:8, no. 1</td>
                            <td>Franz Joseph Haydn</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Sonatina in C Major, op. 36, no. 3 3rd Movement*</td>
                            <td>Muzio Clementi</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major 3rd Movement*</td>
                            <td>Jean Theodore Latour</td>
                            <td>23</td>
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
                            <td>Harvest Song (Ernteliedchen), op. 68, no. 24</td>
                            <td>Robert Schumann</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Polka, op. 39, no. 10</td>
                            <td>Pyotr Il'yitch Tchaikovsky</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>Pierrot and Pierrette, op. 25, no. 4</td>
                            <td>Amy Beach</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Dusk</td>
                            <td>Nkeiru Okoye</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Lyric Piece, op. 27, no. 16</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Petite piece pour piano no. 2</td>
                            <td>Nadia Boulanger</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Quietude</td>
                            <td>Dennis Alexander</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Sidewalk Chalk</td>
                            <td>Christine Donkin</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>The Spice of Life</td>
                            <td>Tom Gerou</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Little Sparrows</td>
                            <td>Alexina Louie</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Melancholy Reflections*</td>
                            <td>Mike Schoenmehl</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>Winter Rose</td>
                            <td>Ailbhe McDonagh</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Sunset in Rio*</td>
                            <td>Mike Springer</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Little March</td>
                            <td>Talivaldis Kenins</td>
                            <td>48</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 5 Pieces Performed!" align="text-center" bottom="mb-10" />
                <p className="italic text-center mb-6">(Old, 2015 edition)</p>
                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/7FJ_Dx86xWA?si=Loai3Mszwu9I9MRO"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
            </section>

            <PostDivider />

            <span id="level_6" />
            <PostHeading heading="Level 6 Piano Repertoire" bottom="mb-6" />
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
                            <td>Little Prelude in D Minor, BWV 926</td>
                            <td>Johann Sebastian Bach</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>L'indifferente</td>
                            <td>Jean-Philippe Rameau</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Giga in G Major</td>
                            <td>Elisabetta de Gambarini</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Polonaise in B flat Major</td>
                            <td>Johann Christian Bach</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Aria in G Major*</td>
                            <td>Georg Philipp Telemann</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Sarabande in D Minor*</td>
                            <td>George Frideric Handel</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sonata in B flat Major, K 440</td>
                            <td>Domenico Scarlatti</td>
                            <td>14</td>
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
                            <td>Viennese Sonatina in C Major 4th Movement: Finale</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Sonatina in E flat Major, op. 4, no. 7</td>
                            <td>Samuel Wesley</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major, op. 19/20, no. 1 1st Movement*</td>
                            <td>Jan Ladislav Dussek</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Sonata in F Major, Wq. 55/5 3rd Movement</td>
                            <td>Carl Philipp Emanuel Bach</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Sonatina in A Minor*</td>
                            <td>Georg Anton Benda</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Sonata in G Major, Hob. XVI:G1 1st Movement</td>
                            <td>Franz Joseph Haydn</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>As Swift as a Deer*</td>
                            <td>Daniel Gottlob Turk</td>
                            <td>31</td>
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
                            <td>Waltz in A Minor, op. posth., B 150</td>
                            <td>Frederic Chopin</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Spanish, op. 55, no. 5*</td>
                            <td>Agathe Backer Grondahl</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Of Foreign Lands and Peoples (Von fremden Landern und Menschen), op. 15, no. 1</td>
                            <td>Robert Schumann</td>
                            <td>37</td>
                        </tr>
                        <tr>
                            <td>Fairy Tale, op. 27, no. 20</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Dance of the Tiger Cubs</td>
                            <td>Vincent Ho</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Running for the Bus</td>
                            <td>Alexina Louie</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Air de ballet, op. 123, no. 11</td>
                            <td>Cecile Chaminade</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>Miimii (Mourning Dove)</td>
                            <td>Barbara Assiginaak</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Jasmine Flower</td>
                            <td>Chinese folk song, arr. Edward Han Jiang</td>
                            <td>47</td>
                        </tr>
                        <tr>
                            <td>Sweet Mister Jelly Roll</td>
                            <td>Valerie Capers</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Gentle Breeze*</td>
                            <td>Joanne Bender</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Happy Time Jazz*</td>
                            <td>Martha Mier</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>Whirlwind</td>
                            <td>Dennis Alexander</td>
                            <td>54</td>
                        </tr>
                        <tr>
                            <td>Little Nocturne</td>
                            <td>Jakub Metelka</td>
                            <td>56</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 6 Pieces Performed!" align="text-center" bottom="mb-10" />
                <p className="italic text-center mb-6">(Old, 2015 edition)</p>
                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/4zIc3-b4OaA?si=8w_EcYmGFLsKWnLS"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
            </section>

            <PostDivider />

            <span id="level_7" />
            <PostHeading heading="Level 7 Piano Repertoire" bottom="mb-6" />
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
                            <td>Invention No. 8 in F Major, BWV 779*</td>
                            <td>Johann Sebastian Bach</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Rondeau</td>
                            <td>Elisabeth Jacquet de la Guerre</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Allegro in E Minor</td>
                            <td>Jose Antonio Carlos de Seixas</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Bouree in F Major*</td>
                            <td>Georg Philip Telemann</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>La joyeuse</td>
                            <td>Jean-Philippe Rameau</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Allemande in E flat Major</td>
                            <td>Johann Sebastian Bach</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Sonata in A Major, K 208</td>
                            <td>Domenico Scarlatti</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Gigue in G Minor</td>
                            <td>George Frideric Handel</td>
                            <td>18</td>
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
                            <td>Sonata in G Minor, op. 2, no. 1<br /> 1st Movement</td>
                            <td>Anna Bon</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>Sonata in C Major, Hob. XVI:1<br /> 1st Movement</td>
                            <td>Franz Joseph Haydn</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Fur Elise, WoO 59*</td>
                            <td>Ludwig van Beethoven</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Sonata in C Minor, op. 17, no. 2<br /> 3rd Movement</td>
                            <td>Johann Christian Bach</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Scherzo in A Major</td>
                            <td>Johann Nepomuk Hummel</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Sonata in D Major, op. 4, no. 1<br /> 1st Movement</td>
                            <td>Muzio Clementi</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Sonatina in A Minor, op. 88, no. 3<br /> 1st Movement</td>
                            <td>Friedrich Kuhlau</td>
                            <td>40</td>
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
                            <td>Rondo-Toccata, op. 60, no. 4*</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>Mazurka in A flat Major, op. 24, no. 3</td>
                            <td>Frederic Chopin</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>March, op. 65, no. 10</td>
                            <td>Sergei Prokofiev</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Album Leaf, op. 12, no. 7</td>
                            <td>Edvard Grieg</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Consolation, op. 30, no. 3</td>
                            <td>Felix Mendelssohn</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>Allegro</td>
                            <td>Bela Bartok</td>
                            <td>54</td>
                        </tr>
                        <tr>
                            <td>Waltz in B Minor, op. 18, D 145, no. 6</td>
                            <td>Franz Schubert</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>Biidaaban (First Light of Dawn)</td>
                            <td>Barbara Assiginaak</td>
                            <td>57</td>
                        </tr>
                        <tr>
                            <td>Streams of Yang River</td>
                            <td>An-Lun Huang</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <td>Canoeing, op. 119, no. 3</td>
                            <td>Amy Beach</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Fantasy Bossa*</td>
                            <td>Christopher Norton</td>
                            <td>62</td>
                        </tr>
                        <tr>
                            <td>The Ringtone Waltz</td>
                            <td>Marc-Andre Hamelin</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>Banana Sorbet</td>
                            <td>Gary K. Thomas</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td>Peace Country Hoedown*</td>
                            <td>Christine Donkin</td>
                            <td>68</td>
                        </tr>
                        <tr>
                            <td>Ticklin' Toes</td>
                            <td>Florence B. Price</td>
                            <td>70</td>
                        </tr>                        
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_8" />
            <PostHeading heading="Level 8 Piano Repertoire" bottom="mb-6" />
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
                            <td>Invention No. 14 in B flat Major, BWV 785</td>
                            <td>Johann Sebastian Bach</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Little Prelude in E Major, BWV 937*</td>
                            <td>Johann Sebastian Bach</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Fantasia in D Minor, TWV 33:2</td>
                            <td>Georg Philipp Telemann</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Courante in G Major</td>
                            <td>attr. George Frideric Handel</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Sonata in F Minor, K 185</td>
                            <td>Domenico Scarlatti</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Solfeggio in C Minor, Wq 117/2, H 220*</td>
                            <td>Carl Philipp Emanuel Bach</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Gigue en rondeau</td>
                            <td>Jean-Philippe Rameau</td>
                            <td>18</td>
                        </tr>                       
                        <tr>
                            <td colSpan="3" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Classical Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Sonata in D Major, Hob. XVI:4<br /> 1st Movement</td>
                            <td>Franz Joseph Haydn</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Sonatina in G Major, op. 55, no. 2<br /> 3rd Movement</td>
                            <td>Friedrich Kuhlau</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Sonata in C Major, K 545<br /> 1st Movement</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Sonata in G Minor, op. 49, no. 1<br /> 1st Movement</td>
                            <td>Ludwig van Beethoven</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Sonata in B flat Major, C 27</td>
                            <td>Domenico Cimarosa</td>
                            <td>36</td>
                        </tr>                                           
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Romantic Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Melodie, op. 4, no. 2</td>
                            <td>Fanny Hensel</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Song without Words, op. 38, no. 4</td>
                            <td>Felix Mendelssohn</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Polonaise in C Major, op. 1, no. 2</td>
                            <td>Clara Schumann</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>Waltz in B Minor, op. posth, 69, no. 2</td>
                            <td>Frederic Chopin</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Prelude in E flat Major, op. 31, no. 1</td>
                            <td>Reinhold Gliere</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Knecht Ruprecht, op. 68, no. 12</td>
                            <td>Robert Schumann</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>Arabeske</td>
                            <td>Josephine Lang</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <td>Nocturne in B flat Major, H 37</td>
                            <td>John Field</td>
                            <td>58</td>
                        </tr>                                         
                    </tbody>
                </table>

                <PostSubheading subheading="List D: Post-Romantic, 20th, and 21st Century Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>The Spruce, op. 75, no. 5</td>
                            <td>Jean Sibelius</td>
                            <td>61</td>
                        </tr>
                        <tr>
                            <td>The Little Shepherd</td>
                            <td>Claude Debussy</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>Seven Good-humored Variations on a<br /> Ukrainian Folk Song, op. 51, no. 4</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td>Through Moanin' Pines</td>
                            <td>Harry T. Burleigh</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>Prelude No. 3</td>
                            <td>Michael Valenti</td>
                            <td>72</td>
                        </tr>
                        <tr>
                            <td>Incognito (Jazz Nocturne)</td>
                            <td>Jason Sifford</td>
                            <td>74</td>
                        </tr>
                        <tr>
                            <td>Mysterious Summer's Night</td>
                            <td>Larysa Kuzmenko</td>
                            <td>77</td>
                        </tr>
                        <tr>
                            <td>Blue Angel</td>
                            <td>Stephan Chatman</td>
                            <td>78</td>
                        </tr>
                        <tr>
                            <td>Catching Butterflies</td>
                            <td>Shande Ding</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Tango callejero</td>
                            <td>Mike Springer</td>
                            <td>82</td>
                        </tr>
                        <tr>
                            <td>Prelude (Twilight), op. 69</td>
                            <td>Dianne Goolkasian Rahbee</td>
                            <td>84</td>
                        </tr>
                        <tr>
                            <td>Sunshower</td>
                            <td>Martha Hill Duncan</td>
                            <td>86</td>
                        </tr>                                           
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_9" />
            <PostHeading heading="Level 9 Piano Repertoire" bottom="mb-6" />
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
                            <td>Sinfonia No. 4 in D Minor, BWV 790</td>
                            <td>Johann Sebastian Bach</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Sinfonia No. 10 in G Major, BWV 796</td>
                            <td>Johann Sebastian Bach</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>L'Egyptienne</td>
                            <td>Jean-Philippe Rameau</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Allemande in E Minor</td>
                            <td>George Frideric Handel</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Sonata in E Major, K 380</td>
                            <td>Domenico Scarlatti</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Sonata in A Major, K 209</td>
                            <td>Domenico Scarlatti</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Prelude and Fugue in C Minor, BWV 847</td>
                            <td>Johann Sebastian Bach</td>
                            <td>23</td>
                        </tr>                                         
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Classical Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Sonata in B Minor, Wq 62/22, H 132<br /> 1st Movement</td>
                            <td>Carl Philipp Emanuel Bach</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Sonata in A Major, Hob. XVI: 12<br /> 1st Movement</td>
                            <td>Franz Joseph Haydn</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Sonata in A Major, Hob. XVI: 12<br /> 2nd Movement: Minuet and Trio</td>
                            <td>Franz Joseph Haydn</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Sonata in A Major, Hob. XVI: 12<br /> 3rd Movement: Finale</td>
                            <td>Franz Joseph Haydn</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Sonata in G Major, K 283 (189h)<br /> 1st Movement</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Sonata in G Major, K 283 (189h)<br /> 2nd Movement</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Sonata in G Major, K 283 (189h)<br /> 3rd Movement</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Six Easy Variations on an Original Theme, WoO 77</td>
                            <td>Ludwig van Beethoven</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>Sonata in C Major, WoO 51<br /> 1st Movement</td>
                            <td>Ludwig van Beethoven</td>
                            <td>58</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Romantic Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Waltz in A flat Major, op. 64, no. 3</td>
                            <td>Frederic Chopin</td>
                            <td>63</td>
                        </tr>
                        <tr>
                            <td>Butterfly, op. 43, no. 1</td>
                            <td>Edvard Grieg</td>
                            <td>68</td>
                        </tr>
                        <tr>
                            <td>October (Autumn Song), op. 37b, no. 10</td>
                            <td>Pyotr Il'yich Tchaikovsky</td>
                            <td>72</td>
                        </tr>
                        <tr>
                            <td>Variations on a Russian Folk Song (Among the Gentle Valleys)</td>
                            <td>Mikhail Glinka</td>
                            <td>76</td>
                        </tr>
                        <tr>
                            <td>Nocturne in G Minor, op. 37, no. 1</td>
                            <td>Frederic Chopin</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Scotch Poem, op. 31, no. 2</td>
                            <td>Edward MacDowell</td>
                            <td>84</td>
                        </tr>
                        <tr>
                            <td>Song without Words, op. 30, no. 1</td>
                            <td>Felix Mendelssohn</td>
                            <td>87</td>
                        </tr>
                        <tr>
                            <td>Moment musical, op. 94, no. 3</td>
                            <td>Franz Schubert</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Toccatina in B flat Major</td>
                            <td>Bedrich Smetana</td>
                            <td>92</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List D: Post-Romantic, 20th, and 21st Century Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Salta, salta (Hobby-horse)</td>
                            <td>Octavio Pinto</td>
                            <td>96</td>
                        </tr>
                        <tr>
                            <td>Deserted Plantation</td>
                            <td>William Gillock</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Decadent Sentimental Song</td>
                            <td>Miguel Manzano</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Ocean Vista</td>
                            <td>Ruth Watson Henderson</td>
                            <td>103</td>
                        </tr>
                        <tr>
                            <td>Golliwogg's Cake-walk</td>
                            <td>Claude Debussy</td>
                            <td>106</td>
                        </tr>
                        <tr>
                            <td>Changes</td>
                            <td>Alexina Louie</td>
                            <td>111</td>
                        </tr>
                        <tr>
                            <td>O Polichinela (Punch)</td>
                            <td>Heitor Villa-Lobos</td>
                            <td>114</td>
                        </tr>
                        <tr>
                            <td>Reverie in F Minor</td>
                            <td>Dennis Alexander</td>
                            <td>118</td>
                        </tr>
                        <tr>
                            <td>El viaje (The Journey)</td>
                            <td>Astor Piazzolla</td>
                            <td>121</td>
                        </tr>
                        <tr>
                            <td>Over the Rainbow</td>
                            <td>Harold Arlen, arr. George Shearing</td>
                            <td>124</td>
                        </tr>
                        <tr>
                            <td>Monarchs</td>
                            <td>Martha Hill Duncan</td>
                            <td>126</td>
                        </tr>
                        <tr>
                            <td>Carnivalse</td>
                            <td>Chilly Gonzales</td>
                            <td>130</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_10" />
            <PostHeading heading="Level 10 Piano Repertoire" bottom="mb-6" />
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
                            <td>Prelude and Fugue in B flat Major, BWV 866</td>
                            <td>Johann Sebastian Bach</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Prelude and Fugue in D Minor, BWV 851</td>
                            <td>Johann Sebastian Bach</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>French Suite No. 6 in E Major, BWV 817 - 1st Movement: Allemande</td>
                            <td>Johann Sebastian Bach</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>French Suite No. 6 in E Major, BWV 817 - 8th Movement: Gigue</td>
                            <td>Johann Sebastian Bach</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Fantasia in C Minor</td>
                            <td>Johann Sebastian Bach</td>
                            <td>16</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Classical Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Sonata in G Minor, Hob. XVI:44 (complete)</td>
                            <td>Franz Joseph Haydn</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Sonata in F Minor, op. 2, no. 1 (complete)</td>
                            <td>Ludwig van Beethoven</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Rondo in D Major, K 485</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            <td>48</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Romantic Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Impromptu in A flat Major, op. 90, D 899, no. 4</td>
                            <td>Franz Schubert</td>
                            <td>55</td>
                        </tr>
                        <tr>
                            <td>Vogel als Prophet, op. 82, no. 7</td>
                            <td>Robert Schumann</td>
                            <td>62</td>
                        </tr>
                        <tr>
                            <td>Intermezzo in B flat Minor, op. 117, no. 2</td>
                            <td>Johannes Brahms</td>
                            <td>65</td>
                        </tr>
                        <tr>
                            <td>Nocturne in E Minor, op. posth. 72, no. 1</td>
                            <td>Frederic Chopin</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>Polonaise in A Major, op. 40, no. 1</td>
                            <td>Frederic Chopin</td>
                            <td>74</td>
                        </tr>
                        <tr>
                            <td>Spinning Song, op. 67, no. 4</td>
                            <td>Felix Mendelssohn</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Consolation No. 3</td>
                            <td>Franz Liszt</td>
                            <td>86</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List D: Post-Romantic, Impressionist, & Early 20th Century Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Twenty-four Preludes, op. 11<br />Prelude No. 4<br />Prelude No. 6</td>
                            <td>Alexander Scriabin</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Doctor Gradus ad Parnassum</td>
                            <td>Claude Debussy</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Barcarolle No. 4 in A flat Major, op. 44</td>
                            <td>Gabriel Faure</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>Cordoba, op. 232, no. 4</td>
                            <td>Isaac Albeniz</td>
                            <td>105</td>
                        </tr>
                        <tr>
                            <td>The Sea, op. 17, no. 12</td>
                            <td>Selim Palmgren</td>
                            <td>112</td>
                        </tr>
                        <tr>
                            <td>Prelude in G flat Major, op. 23, no. 10</td>
                            <td>Sergei Rachmaninoff</td>
                            <td>116</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List E: 20th and 21st Century Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Prelude in C Major, op. 12, no. 7</td>
                            <td>Sergei Prokofiev</td>
                            <td>119</td>
                        </tr>
                        <tr>
                            <td>Romanian Folk Dances, Sz. 56 (complete)</td>
                            <td>Bela Bartok</td>
                            <td>124</td>
                        </tr>
                        <tr>
                            <td>Six Variations on “Land of the Silver Birch”</td>
                            <td>Pierre Gallant</td>
                            <td>132</td>
                        </tr>
                        <tr>
                            <td>Old Adam (Two-Step)</td>
                            <td>William Bolcom</td>
                            <td>138</td>
                        </tr>
                        <tr>
                            <td>The River</td>
                            <td>Martha Hill Duncan</td>
                            <td>142</td>
                        </tr>
                        <tr>
                            <td>“V” (Valse chromatique)</td>
                            <td>Sophie-Carmen Eckhardt-Gramatte</td>
                            <td>145</td>
                        </tr>
                        <tr>
                            <td>Cassandra's Dream</td>
                            <td>James Domine</td>
                            <td>150</td>
                        </tr>
                        <tr>
                            <td>Cancion y danza VI</td>
                            <td>Federico Mompou</td>
                            <td>153</td>
                        </tr>
                        <tr>
                            <td>Mist</td>
                            <td>Court Stone</td>
                            <td>156</td>
                        </tr>
                        <tr>
                            <td>Dance (Juba)</td>
                            <td>R. Nathaniel Dett</td>
                            <td>160</td>
                        </tr>
                        <tr>
                            <td>Nocturne</td>
                            <td>Stephen Chatman</td>
                            <td>164</td>
                        </tr>
                        <tr>
                            <td>Toccata</td>
                            <td>David L. McIntyre</td>
                            <td>166</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>



            <PageBottomTrialButton />
        </main>

  )
}

export default PostRCMPianoRepertoireAllPieces
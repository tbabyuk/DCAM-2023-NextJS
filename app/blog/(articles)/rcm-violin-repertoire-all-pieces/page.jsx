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
    title: "RCM Violin Repertoire - Full List of Pieces | Da Capo Academy of Music",
    description: "A complete, quick-reference list of all RCM Violin Repertoire pieces, levels 1 to 8. Name of piece, composer, and page number.",
    keywords: ["rcm violin repertoire songs", "rcm violin repertoire pieces", "rcm violin repertoire songs list"]
}

const PostRCMViolinRepertoireAllPieces = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="RCM Violin Repertoire - Full List of Pieces" date="October 25, 2022" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm_violin_repertoire_all_pieces%2Frcm_violin_repertoire_cover.jpg?alt=media&token=a16fb064-f32c-4183-bd4c-77ebaa953e75" alt="RCM Violin Repertoire All Pieces cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-20 pb-10">
                <div>
                    <p className="leading-8 mb-5">The complete list of RCM Violin Repertoire pieces students can choose from to prepare for their RCM examinations.</p>
                    <PostSource source="RCM Celebration Series books, 2021 Edition (latest edition)" />
                </div>
            </section>


            <PostSectionHeading heading="Table of Contents" />
            <section className="px-5 lg:px-36 xl:px-64 mb-32">
                <div>
                    <ul className="list-disc list-inside leading-8 bg-gray-100 w-fit mx-auto p-5 rounded">
                        <li><Link href="#prep" className="dcam-link">Prep Violin Repertoire</Link></li>
                        <li><Link href="#level_1" className="dcam-link">Level 1 Violin Repertoire</Link></li>
                        <li><Link href="#level_2" className="dcam-link">Level 2 Violin Repertoire</Link></li>
                        <li><Link href="#level_3" className="dcam-link">Level 3 Violin Repertoire</Link></li>
                        <li><Link href="#level_4" className="dcam-link">Level 4 Violin Repertoire</Link></li>
                        <li><Link href="#level_5" className="dcam-link">Level 5 Violin Repertoire</Link></li>
                        <li><Link href="#level_6" className="dcam-link">Level 6 Violin Repertoire</Link></li>
                        <li><Link href="#level_7" className="dcam-link">Level 7 Violin Repertoire</Link></li>
                        <li><Link href="#level_8" className="dcam-link">Level 8 Violin Repertoire</Link></li>
                    </ul>
                </div>           
            </section>

            <span id="prep" />
            <PostHeading heading="Preparatory Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: PIECES IN A SLOWER TEMPO" align="text-center" bottom="mb-10" />
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
                            <td>Ode to Joy</td>
                            <td>Beethoven, arr. Parkins-Lindstrom and Donkin</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>In Ancient Times</td>
                            <td>Harold Birston</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Berceuse</td>
                            <td>Frank Blachford</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>The Climb Up Mount Royal</td>
                            <td>Jean Coulthard</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>All Alone</td>
                            <td>David G. Duke</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Pit-a-Pat Rain</td>
                            <td>Traditional German, arr. Sassmannshaus and Lusk</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Sine Bahn (Fair Jean)</td>
                            <td>Johnston, arr. Birston</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Poeme</td>
                            <td>Paul de Keyser</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>The Bells of St. Basil’s</td>
                            <td>Paul de Keyser</td>
                            <td>13</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List B: PIECES IN A FASTER TEMPO" align="text-center" bottom="mb-10" />
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
                            <td>Machu Picchu Mountain</td>
                            <td>Joanne Martin</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>That Sounds So Glorious</td>
                            <td>Mozart, arr. Donkin</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>Waltz</td>
                            <td>Violet Archer</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Spine-chiller</td>
                            <td>Edward H. Jones</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>The Old Woman and the Peddler</td>
                            <td>English folk song, arr. Kinney</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>Opening Doors</td>
                            <td>Mary A. Rich</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>The Subway Train</td>
                            <td>Jean Ethridge</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Pony Trot</td>
                            <td>Krasev, arr. Keyser and Waterman</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Konope (The Old City)</td>
                            <td>Moravian folk song, arr. Janacek, transc. Faltus</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Homage to Bartok</td>
                            <td>Jean Ethridge</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Pepperoni Pizza Pie</td>
                            <td>A. Hewitt-Jones and C. Lumsden</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Happy-Go-Lucky</td>
                            <td>Joanne Martin</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Wagon Wheels</td>
                            <td>Christine Donkin</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Jumping Beans</td>
                            <td>C. Sassmannshaus and M. Lusk</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Folk Song</td>
                            <td>Traditional French song, arr. McLean</td>
                            <td>32</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_1" />
            <PostHeading heading="Level 1 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="LIST A: PIECES IN A SLOWER TEMPO" align="text-center" bottom="mb-10" />
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
                            <td>From My Homeland</td>
                            <td>Cui, arr. Keyser and Waterman</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Un Canadien errant</td>
                            <td>French Canadian folk song, arr. Duke</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>The Plucky Snake</td>
                            <td>P. Popp, arr. C. Gale</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>March of the Elephants</td>
                            <td>Harold Birston</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>A Song, op. 80, no. 6</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Lift Every Voice and Sing</td>
                            <td>J. R. Johnson, arr. M. Mrozinski</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Air from Rinaldo</td>
                            <td>G. F. Handel, arr. K. Wood</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Garden Piece</td>
                            <td>Christopher Norton</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>On Eagle’s Wings</td>
                            <td>M. Joncas, arr. H. Birston</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Kavatine</td>
                            <td>Alec Rowley</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Old Melodie</td>
                            <td>Anonymous, arr. W. Mould</td>
                            <td>20</td>
                        </tr>                                        
                    </tbody>
                </table>

                <PostSubheading subheading="LIST B: PIECES IN A FASTER TEMPO" align="text-center" bottom="mb-10" />
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
                            <td>Frolic</td>
                            <td>Terence Greaves</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Mountain Creek</td>
                            <td>Mary A. Rich</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>Romanian Dance</td>
                            <td>Ricky Hyslop</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Scotty Lad</td>
                            <td>Robert Fleming</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Hevenu Shalom Aleichem</td>
                            <td>Traditional Israeli melody, arr. Donkin</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Rainy Daze</td>
                            <td>Hannah B. Groening</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Dizzy Lizzy Lightweight</td>
                            <td>C. Lumsden and B. Attwood</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Dance</td>
                            <td>B. Bartok, arr. E. Zathureczky</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Caterpillar! Caterpillar!</td>
                            <td>Russian folk song, arr. Kinney</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>Soldier’s March, op. 68, no. 2</td>
                            <td>Robert Schumann</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>La Puertorriquena: Reverie</td>
                            <td>Sister Gotay, arr. Pine</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Cha-Cha</td>
                            <td>Neil Mackay</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>The Cowboy</td>
                            <td>Christine Donkin</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Two Little Donkeys</td>
                            <td>A. Cofalik and R. Twardowski</td>
                            <td>40</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <span id="level_2" />
            <PostHeading heading="Level 2 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="LIST A: PIECES IN A SLOWER TEMPO" align="text-center" bottom="mb-10" />
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
                            <td>Farewell, (Abschied), op. 52, no. 5</td>
                            <td>Beethoven, arr. Moffat</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>The Lark</td>
                            <td>Mikhail I. Glinka</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Melodie antique francaise</td>
                            <td>Pyotr I. Tchaikovsky</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Andantino in G Major, op. 22, no. 4</td>
                            <td>Edward Elgar</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Early One Morning</td>
                            <td>English folk song, arr. Kinney</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>Andantino in F Major</td>
                            <td>N. Laoureux, arr. C. Donkin</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Melodie</td>
                            <td>J. Halvorsen, arr. W. Mould</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Dreamers, op. 80, no. 19</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Solemn Moments</td>
                            <td>Violet Archer</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>A Little Sorrow</td>
                            <td>Jean Coulthard</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>Tall Ships</td>
                            <td>B. McDougall, arr. J. McIvor</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Sweet Memories (Dolci ricordi)</td>
                            <td>Harold Birston</td>
                            <td>22</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="LIST B: PIECES IN A FASTER TEMPO" align="text-center" bottom="mb-10" />
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
                            <td>Minuet</td>
                            <td>J. Clarke, arr. C. Donkin</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Flash of Light’ning</td>
                            <td>C. Lumsden and B. Attwood</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>Minuet and Trio, K 585, no. 8</td>
                            <td>Mozart, arr. Noble</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Waltz in D Major, D 420, no. 1</td>
                            <td>F. Schubert, arr. K. Wood</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>A Pirate Bold</td>
                            <td>George Coutts</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Skipping and Hopping, op. 80, no. 8</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>Hurdy-Gurdy</td>
                            <td>D. Shostakovich, arr. K. Fortunatov</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Hungarian Dance</td>
                            <td>Pal Jardanyi</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Vive la Canadienne!</td>
                            <td>French Canadian folk song, arr. McLean</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>The Beavers</td>
                            <td>A. Cofalik and R. Twardowski</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Tango</td>
                            <td>N. Mackay</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Banana Skin</td>
                            <td>Edward H. Jones</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>The Fortune Teller</td>
                            <td>Christine Donkin</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Motorcycles</td>
                            <td>David G. Duke</td>
                            <td>48</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_3" />
            <PostHeading heading="Level 3 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Baroque and Classical-Style Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Musette in D Major, BWV Anh. 126</td>
                            <td>attr. J. S. Bach, arr. K. Wood</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Tambourin</td>
                            <td>J.-P. Rameau, arr. K. Donkin</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>Sonatina in F Major, TWV 41:F1: 3rd Movement</td>
                            <td>G. P. Telemann, arr. K. Wood</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Mouvement d’une serenade</td>
                            <td>G. Sammartini, arr. A. Moffat</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Polonaise</td>
                            <td>W. A. Mozart, arr. H. Birston</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Concertino in G Major, op. 11: 1st Movement</td>
                            <td>F. Kuchler</td>
                            <td>13</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Traditional and Romantic-Style Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>March (from The Nutcracker)</td>
                            <td>P. I. Tchaikovsky, arr. J. Noble</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Nouvelle agreable! (Good News!)</td>
                            <td>18th-century French carol, arr. C. Donkin</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>Wedding Tune, op. 17, no. 24</td>
                            <td>E. Grieg, arr. K. Wood</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>Minor Mode</td>
                            <td>F. Blachford</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>The Birthday Party Waltz</td>
                            <td>H. Weston, arr. R. Barton Pine and D. Bontemps</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Skye Boat Song</td>
                            <td>arr. H. J. McLean</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Mazurka</td>
                            <td>Natalya Baklanova</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Arirang</td>
                            <td>Trad. Korean folk song, arr. C. Kim</td>
                            <td>32</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: 20th and 21st Century Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>A Sad Waltz (For Missy, Our Kitten)</td>
                            <td>Jean Coulthard</td>
                            <td>33</td>
                        </tr>
                        <tr>
                            <td>The Farmers’ Market</td>
                            <td>Christine Donkin</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Songs My Mother Taught Me, op. 55, no. 4</td>
                            <td>A. Dvorak, arr. J. Noble</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Capriccio No. 160 (Polka)</td>
                            <td>S. Leonardi, arr. L. Maus</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Donkey Doodle</td>
                            <td>William Kroll</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Dill Pickles</td>
                            <td>C. Johnson, arr. Z. RT and C. Donkin</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>Wallaby’s Lullaby, op. 5</td>
                            <td>George Fiala</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Joyous</td>
                            <td>Violet Archer</td>
                            <td>49</td>
                        </tr>
                        <tr>
                            <td>Budapesto</td>
                            <td>Carey Cheney</td>
                            <td>50</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_4" />
            <PostHeading heading="Level 4 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Concertos, Airs Varies, and Fantasias" align="text-center" bottom="mb-10" />
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
                            <td>Theme and Variations</td>
                            <td>Franz J. Haydn</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>The Infant Paganini</td>
                            <td>Eduard Mollenhauer</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>Concerto in F Major: 3rd Movement: Farmers’ Dance</td>
                            <td>Arnoldo Sartorio</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>Concertino in the Style of Antonio Vivaldi, op. 15: 1st Movement</td>
                            <td>Ferdinand Kuchler</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Concertante</td>
                            <td>Charlotte Ruegger</td>
                            <td>20</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Baroque and Classical-Style Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Two Airs</td>
                            <td>Henry Purcell</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Sonata in F Major, op. 5, no. 10: 4th Movement: Gavotta</td>
                            <td>A. Corelli, arr. K. Wood</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Giguetta</td>
                            <td>J. S. Bach, arr. C. Seely-Brown</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Sarabande</td>
                            <td>G. F. Handel, arr. C. Gale</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Andante grazioso, op. 38, no. 4</td>
                            <td>J. F. Mazas, arr. C. Donkin</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Gavotte and Musette</td>
                            <td>J. Lully, arr. A. Moffat</td>
                            <td>34</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Concert Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Knecht Ruprecht, op. 68, no. 12</td>
                            <td>Robert Schumann</td>
                            <td>37</td>
                        </tr>
                        <tr>
                            <td>Le faun (The Faun)</td>
                            <td>Ethel Barns</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Summer Song, op. 80, no. 16</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Danse napolitaine (Neapolitan Dance)</td>
                            <td>Pyotr I. Tchaikovsky</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>Fast Dance</td>
                            <td>Natalya Baklanova</td>
                            <td>47</td>
                        </tr>
                        <tr>
                            <td>Bohemian Dance</td>
                            <td>Gerry Thornton</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Hello Violin</td>
                            <td>Joachim Johow</td>
                            <td>53</td>
                        </tr>
                        <tr>
                            <td>Hen and Rooster</td>
                            <td>Zdenek Konicek</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>Wrist Watch</td>
                            <td>Harold Birston</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <td>The Song of Twilight</td>
                            <td>Yoshinao Nakada</td>
                            <td>60</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_5" />
            <PostHeading heading="Level 5 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Concertos, Airs Varies, and Fantasias" align="text-center" bottom="mb-10" />
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
                            <td>Air varie on a Theme by Pacini, op. 89, no. 1</td>
                            <td>Charles Dancla</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Student Concertino No. 2, op. 6: I</td>
                            <td>Adolf Huber</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>Concerto in G Major, TWV 51:G8: I</td>
                            <td>G. P. Telemann, arr. F. Schroeder</td>
                            <td>13</td>
                        </tr>                  
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Sonatas and Sonatinas" align="text-center" bottom="mb-10" />
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
                            <td>Rondeau</td>
                            <td>W. A. Mozart, arr. D. Blackwell</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>Sonata in E Minor, op. 5, no. 8:<br />
                                1st Movement: Preludio<br />
                                2nd Movement: Allemanda
                            </td>
                            <td>A. Corelli, arr. J. Noble</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Sonata, op. 10b, no. 2:<br />
                                3rd Movement: Air polonais
                            </td>
                            <td>Carl Maria von Weber</td>
                            <td>24</td>
                        </tr>                 
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Concert Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>El pano moruno</td>
                            <td>M. de Falla, arr. P. Kochanski</td>
                            <td>29</td>
                        </tr>
                        <tr>
                            <td>Ukrainian Folk Song</td>
                            <td>Trad. Ukrainian melody, arr. Baker</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>Mazurka</td>
                            <td>Frank Blachford</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Dance</td>
                            <td>D. Shostakovich, arr. K. Fortunatov</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Prelude and Berceuse</td>
                            <td>Shinichi Suzuki</td>
                            <td>40</td>
                        </tr>
                        <tr>
                            <td>Barn Dance</td>
                            <td>Christine Donkin</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Two Rigaudons</td>
                            <td>J.-P. Rameau</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Toy Soldiers’ March</td>
                            <td>Fritz Kreisler</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Music Camp Boogie</td>
                            <td>Harold Birston</td>
                            <td>51</td>
                        </tr>
                        <tr>
                            <td>Allegro vivace</td>
                            <td>Ralph Vaughan Williams</td>
                            <td>54</td>
                        </tr>
                        <tr>
                            <td>Shenandoah</td>
                            <td>American folk song, arr. Mrozinski</td>
                            <td>57</td>
                        </tr>
                        <tr>
                            <td>Scherzo</td>
                            <td>D. Kabalevsky, arr. K. Sorokin</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Galop</td>
                            <td>Carl Bohm</td>
                            <td>61</td>
                        </tr>                   
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_6" />
            <PostHeading heading="Level 6 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Concertos, Airs Varies, and Fantasias" align="text-center" bottom="mb-10" />
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
                            <td>Air varie on a Theme by Bellini, op. 89, no. 3</td>
                            <td>Charles Dancla</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Concerto in G Major, op. 3, no. 3, RV 310:<br /> 1st Movement</td>
                            <td>A. Vivaldi, arr. K. Wood</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>The Boy Paganini</td>
                            <td>Eduard Mollenhauer</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Concertino No. 2 in C Major, op. 54:<br /> 3rd Movement</td>
                            <td>Ernst Schmidt</td>
                            <td>22</td>
                        </tr>                 
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Sonatas and Sonatinas" align="text-center" bottom="mb-10" />
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
                            <td>Sonatina in C Minor, WoO 43a</td>
                            <td>L. van Beethoven</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>Sonatina:<br /> 2nd Movement</td>
                            <td>Bohuslav Martinu</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>Sonata No. 2:<br /> 2nd Movement</td>
                            <td>Healey Willan</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>Sonata in A Minor, TWV 41:a3:<br />
                                1st Movement: Siciliana<br />
                                2nd Movement
                            </td>
                            <td>G. P. Telemann, arr. K. Wood</td>
                            <td>34</td>
                        </tr>                  
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Concert Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Adoration</td>
                            <td>Felix Borowski</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Coraggio</td>
                            <td>Harold Birston</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>Hornpipe</td>
                            <td>George Coutts</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Catch Me if You Can!</td>
                            <td>Christine Donkin</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Youngsters' Dance</td>
                            <td>Istvan Szelenyi</td>
                            <td>54</td>
                        </tr>
                        <tr>
                            <td>Romance, WoO II/10</td>
                            <td>Max Reger</td>
                            <td>58</td>
                        </tr>
                        <tr>
                            <td>Dance Caprice (Mazurka)</td>
                            <td>A. Melecci, arr. F. Radcliffe</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Andantino in the Style of Martini</td>
                            <td>Fritz Kreisler</td>
                            <td>63</td>
                        </tr>
                        <tr>
                            <td>I'm Not Myself, but a Stranger</td>
                            <td>James Rolfe</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td>The Easy Winners</td>
                            <td>S. Joplin, arr. W. Birtel</td>
                            <td>68</td>
                        </tr>
                        <tr>
                            <td>Bamboo Stem and Jasmine Flower</td>
                            <td>Trad. Chinese melodies, arr. J. Stock</td>
                            <td>Part: 34</td>
                        </tr>
                        <tr>
                            <td>Hymn to Freedom</td>
                            <td>O. Peterson, arr. C. J. Stewart</td>
                            <td>Part: 36</td>
                        </tr>                   
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_7" />
            <PostHeading heading="Level 7 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Concertos, Airs Varies, and Fantasias" align="text-center" bottom="mb-10" />
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
                            <td>Concerto in D Major: 1st Movement</td>
                            <td>B. Marcello, arr. T. Nachez</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Concerto in E Minor: 1st Movement</td>
                            <td>P. Nardini, arr. E. Pente</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>Concerto No. 3 in G Minor, op. 12: 1st Movement</td>
                            <td>Friedrich Seitz</td>
                            <td>19</td>
                        </tr>                  
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Sonatas and Sonatinas" align="text-center" bottom="mb-10" />
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
                            <td>Sonata in D Minor:<br /> 2nd Movement: Fugato</td>
                            <td>Anonymous, arr. K. Wood</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>Sonata in F Major, op. 2, no. 4, RV 20:<br /> 1st Movement</td>
                            <td>Antonio Vivaldi</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>Sonata in D Major, op. posth. 137, no. 1, D 384:<br /> 1st Movement</td>
                            <td>Franz Schubert</td>
                            <td>35</td>
                        </tr>
                        <tr>
                            <td>Sonata in C Minor:<br /> 3rd Movement: Siciliana</td>
                            <td>F. Geminiani, arr. F. David</td>
                            <td>43</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Concert Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Introduction and Polonaise</td>
                            <td>Carl Bohm</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Air de ballet</td>
                            <td>Paul Wachs</td>
                            <td>51</td>
                        </tr>
                        <tr>
                            <td>Souvenir de Sarasate</td>
                            <td>William Potstock</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>Scherzetto, op. 50, no. 22</td>
                            <td>Cesar Cui</td>
                            <td>61</td>
                        </tr>
                        <tr>
                            <td>Chanson de matin, op. 15, no. 2</td>
                            <td>Edward Elgar</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td>Scotch Lullaby</td>
                            <td>Luigi von Kunits</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>Polish Dance</td>
                            <td>Edmund Severn</td>
                            <td>72</td>
                        </tr>
                        <tr>
                            <td>Minuet in the Style of Porpora</td>
                            <td>Fritz Kreisler</td>
                            <td>78</td>
                        </tr>
                        <tr>
                            <td>Spanischer Tanz, op. 12, no. 1</td>
                            <td>M. Moszkowski, arr. Scharwenka</td>
                            <td>84</td>
                        </tr>
                        <tr>
                            <td>Valse bluette (Air de ballet)</td>
                            <td>R. Drigo, arr. H. Birston</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>Larghetto</td>
                            <td>G. F. Handel, arr. J. Hubay</td>
                            <td>93</td>
                        </tr>                    
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_8" />
            <PostHeading heading="Level 8 Violin Repertoire" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">2021 Edition</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <PostSubheading subheading="List A: Concertos, Airs Varies, and Fantasias" align="text-center" bottom="mb-10" />
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
                            <td>Concerto in G Major, Hob. VIIa:4:<br /> 1st Movement</td>
                            <td>F. J. Haydn, ed. S. Zorzor, cadenza by F. Kuchler</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Concerto No. 1 in E Minor:<br /> 1st Movement</td>
                            <td>A. Komarowski</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>Concerto in G Major, op. 4, no. 12, RV 298:<br /> 1st Movement</td>
                            <td>A. Vivaldi, arr. K. Wood</td>
                            <td>25</td>
                        </tr>                 
                    </tbody>
                </table>

                <PostSubheading subheading="List B: Sonatas and Sonatinas" align="text-center" bottom="mb-10" />
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
                            <td>Sonatina in G Major, op. 100:<br /> 1st Movement</td>
                            <td>Antonin Dvorak</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>Sonata in A Major, HWV 372:<br /> 
                                1st Movement<br />
                                2nd Movement
                            </td>
                            <td>G. F. Handel, ed. S. Sadie</td>
                            <td>38</td>
                        </tr>
                        <tr>
                            <td>Sonatina:<br /> 
                                1st Movement: Bagpipers
                                2nd Movement: Bear Dance
                            </td>
                            <td>B. Bartok, transc. A. Gertler</td>
                            <td>41</td>
                        </tr>
                        <tr>
                            <td>Sonatine Baroque:<br /> 2nd Movement</td>
                            <td>Murray Adaskin</td>
                            <td>Part: 20</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List C: Concert Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Romance</td>
                            <td>Shostakovich, transc. Fortunatov</td>
                            <td>45</td>
                        </tr>
                        <tr>
                            <td>Salut d’amour, op. 12</td>
                            <td>Edward Elgar</td>
                            <td>48</td>
                        </tr>
                        <tr>
                            <td>Schon Rosmarin</td>
                            <td>Fritz Kreisler</td>
                            <td>52</td>
                        </tr>
                        <tr>
                            <td>Les polichinelles</td>
                            <td>J.-B. Senaille, arr. A. Moffat</td>
                            <td>56</td>
                        </tr>
                        <tr>
                            <td>Die Biene, op. 13, no. 9</td>
                            <td>Francois Schubert</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td>Hopak</td>
                            <td>M. Mussorgsky, arr. Rachmaninoff</td>
                            <td>64</td>
                        </tr>
                        <tr>
                            <td>Obertass, op. 19, no. 1</td>
                            <td>Henryk Wieniawski</td>
                            <td>70</td>
                        </tr>
                        <tr>
                            <td>Playera, op. 23, no. 1</td>
                            <td>Pablo de Sarasate</td>
                            <td>75</td>
                        </tr>
                        <tr>
                            <td>Meditation (from Thais)</td>
                            <td>J. Massenet, transc. M. P. Marsick</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Cortege</td>
                            <td>Lili Boulanger</td>
                            <td>84</td>
                        </tr>
                        <tr>
                            <td>Dance</td>
                            <td>Gary Kulesha</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>A Perfect Day</td>
                            <td>C. Jacobs-Bond, arr. C. Donkin</td>
                            <td>94</td>
                        </tr>                    
                    </tbody>
                </table>

                <PostSubheading subheading="List D: Unaccompanied Repertoire" align="text-center" bottom="mb-10" />
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
                            <td>Fantasia No. 1 in B flat Major, TWV 40:14:<br /> 1st Movement</td>
                            <td>G. P. Telemann</td>
                            <td>43</td>
                        </tr>
                        <tr>
                            <td>Partita No. 2 in D Minor, BWV 1004: Gigue</td>
                            <td>J. S. Bach</td>
                            <td>44</td>
                        </tr>
                        <tr>
                            <td>Partita No. 3 in E Major, BWV 1006: Bourree or Gigue</td>
                            <td>J. S. Bach</td>
                            <td>46</td>
                        </tr>
                        <tr>
                            <td>Fantasia No. 7 in E flat Major, TWV 40:20:<br /> 2nd Movement</td>
                            <td>G. P. Telemann</td>
                            <td>48</td>
                        </tr>           
                    </tbody>
                </table>
            </section>

            <PageBottomTrialButton />
        </main>

  )
}

export default PostRCMViolinRepertoireAllPieces
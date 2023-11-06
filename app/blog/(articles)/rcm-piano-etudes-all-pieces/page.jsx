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
import { SectionDivider } from "@/app/components/SectionDivider"


export const metadata = {
    title: "RCM Piano Etudes - Full List of Pieces | Da Capo Academy of Music",
    description: "A complete, quick-reference list of all RCM Piano Etudes pieces, levels 1 to 10. Name of piece, composer, and page number.",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "RCM Piano Etudes - Full List of Pieces | Da Capo Academy of Music",
        description: "A complete, quick-reference list of all RCM Piano Etudes pieces, levels 1 to 10. Name of piece, composer, and page number.",
        url: "https://dacapomusic.ca/blog/rcm-piano-etudes-all-pieces",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        publishedTime: "2020-08-29T23:23:18+00:00",
        images: [    
            {
                url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm_piano_etudes_all_pieces%2Frcm_piano_etudes_all_pieces_cover.jpg?alt=media&token=91d114e3-b4d2-4682-8a83-8a90d477ad6a",
                width: 1200,
                height: 628,
                type: "image/jpeg"
            }
        ],
    },
}


const PostRCMPianoEtudesAllPieces = () => {
  return (
            <main className="text-gray-700">
            <PostTitle title="RCM Piano Etudes - Full List of Pieces" date="August 29, 2020" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Frcm_piano_etudes_all_pieces%2Frcm_piano_etudes_all_pieces_cover.jpg?alt=media&token=91d114e3-b4d2-4682-8a83-8a90d477ad6a" alt="RCM Piano Etudes All Pieces cover"/>

            <PostSectionHeading heading="Introduction" />
            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64">
                <div>
                    <p className="leading-8 mb-5">The complete list of RCM Piano Etudes pieces students can choose from to prepare for their RCM examinations.</p>
                    <PostNote text="While the names of all the pieces in this article are from the newest, 2022 Edition of RCM Piano Repertoire books, the video recordings have not yet all been updated to this latest edition. We are, however, in the process of re-recording the videos, so they will all gradually be updated. Please stay tuned and thank you for your understanding!" />
                    <PostSource source="RCM Celebration Series books, 2022 Edition (latest edition)" />
                </div>
            </section>

            <SectionDivider />

            <PostSectionHeading heading="Table of Contents" />
            <section className="px-5 lg:px-36 xl:px-64 mb-32">
                <div>
                    <ul className="list-disc list-inside leading-8 bg-gray-100 w-fit mx-auto p-5 rounded">
                        <li><Link href="#level_1" className="dcam-link">Level 1 Piano Etudes</Link></li>
                        <li><Link href="#level_2" className="dcam-link">Level 2 Piano Etudes</Link></li>
                        <li><Link href="#level_3" className="dcam-link">Level 3 Piano Etudes</Link></li>
                        <li><Link href="#level_4" className="dcam-link">Level 4 Piano Etudes</Link></li>
                        <li><Link href="#level_5" className="dcam-link">Level 5 Piano Etudes</Link></li>
                        <li><Link href="#level_6" className="dcam-link">Level 6 Piano Etudes</Link></li>
                        <li><Link href="#level_7" className="dcam-link">Level 7 Piano Etudes</Link></li>
                        <li><Link href="#level_8" className="dcam-link">Level 8 Piano Etudes</Link></li>
                        <li><Link href="#level_9" className="dcam-link">Level 9 Piano Etudes</Link></li>
                        <li><Link href="#level_10" className="dcam-link">Level 10 Piano Etudes</Link></li>
                    </ul>
                </div>           
            </section>

            <span id="level_1" />
            <PostHeading heading="Level 1 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Celebration*</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Etude in C Major, op. 125, no. 3*</td>
                            <td>Anton Diabelli</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Heavenly Blue</td>
                            <td>Tom Gerou</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Clockwork</td>
                            <td>David L. McIntyre</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Beaver Boogie</td>
                            <td>Stephen Chatman</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Morning Greeting, op. 117, no. 13*</td>
                            <td>Cornelius Gurlitt</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Morning Fanfare (Wake Up)</td>
                            <td>Oscar Lorenzo Fernandez</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Etude in C Major</td>
                            <td>Felix Le Couppey</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Both Ways</td>
                            <td>Alexandre Tansman</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Tricky Traffic</td>
                            <td>Louise Garrow</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Speedy Comet</td>
                            <td>Alison Mathews</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Far Away*</td>
                            <td>Teresa Richert</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Answering*</td>
                            <td>Emma Lou Diemer</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Jump Pop Hop</td>
                            <td>Timothy Brown</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Melodie in F Major, op. 218, no. 36</td>
                            <td>Christian L. H. Kohler</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Into the Waves</td>
                            <td>Linda Niamath</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Detectives*</td>
                            <td>Christine Donkin</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Scherzo, op. 39, no. 12</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Four-Wheel Drive</td>
                            <td>Christopher Norton</td>
                            <td>24</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 1 Etudes Performed!" align="text-center" bottom="mb-10" />

                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/KYQjODi04mI?si=gTjAnup_AAUNSGQQ"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
                <p className="italic text-gray-500 text-center">To see performance of the old, 2015 edition of RCM Level 1 Piano Etudes, click <a href="https://youtu.be/KYQjODi04mI?si=6GkofaidZoMgConr" target="_blank" className="dcam-link">here</a>.</p>
            </section>

            <PostDivider />

            <span id="level_2" />
            <PostHeading heading="Level 2 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Etude in F Major, op. 190, no. 27*</td>
                            <td>Christian L. H. Kohler</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Allegro in C Major, op. 38, no. 8</td>
                            <td>Johann Wilhelm Hassler</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Etude in D Major, op. 139, no. 33</td>
                            <td>Carl Czerny</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Etude in D Minor, op. 82, no. 65*</td>
                            <td>Cornelius Gurlitt</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Pierrot Skipping (Pierrot sautille)</td>
                            <td>Hedwige Chretien</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>The Little Juggler, op. 89, no. 21</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Bird in the Bebop</td>
                            <td>Wynn-Anne Rossi</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Arcade Game</td>
                            <td>Janet Gieck</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Crazy Comics*</td>
                            <td>Christine Donkin</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Trumpet Blues</td>
                            <td>Christopher Norton</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>The Wind*</td>
                            <td>Chee-Hwa Tan</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Autumn Leaves</td>
                            <td>Linda Niamath</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Rustic Dance</td>
                            <td>Kerstin Strecke</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>The Lonely Shepherd</td>
                            <td>Dennis Alexander</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Razzle Dazzle</td>
                            <td>Aibhe McDonagh</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Playing</td>
                            <td>Emily Doolittle</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Etude in G Major, op. 166, no. 6</td>
                            <td>Henri Bertini</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Peking Opera on Black Keys</td>
                            <td>Edward Han Jiang</td>
                            <td>24</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 2 Etudes Performed!" align="text-center" bottom="mb-10" />

                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/2yaUIr8qabA?si=kDgHmy_t4NWuQ83m"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
                <p className="italic text-gray-500 text-center">To see performance of the old, 2015 edition of RCM Level 2 Piano Etudes, click <a href="https://youtu.be/ovjVwJQtTC4?si=Ub4JbZ7rKuTrt8on" target="_blank" className="dcam-link">here</a>.</p>
            </section>

            <PostDivider />

            <span id="level_3" />
            <PostHeading heading="Level 3 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Etude in D Major, op. 37, no. 17*</td>
                            <td>Henry Lemoine</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Etude in G Major, op. 108, no. 19</td>
                            <td>Ludvig Schytte</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Arabesque, op. 100, no. 2*</td>
                            <td>Johann F. Burgmuller</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Left Alone*</td>
                            <td>Joyce Grill</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Wild Rose</td>
                            <td>Teresa Richert</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Dance in Bulgarian Rhythm</td>
                            <td>attr. Fritz Emonts</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Trumpet March, op. 36, no. 53</td>
                            <td>Aleksandr Gedike</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Prelude No. 4 in F Major</td>
                            <td>Elvina Pearce</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Witches and Wizards*</td>
                            <td>Christine Donkin</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Ripple Effect</td>
                            <td>Joanne Bender</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Zigzag</td>
                            <td>Lee Evans</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Wasps</td>
                            <td>Jason Noble</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Playful Snakelets</td>
                            <td>Vincent Ho</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Prelude VII</td>
                            <td>Barbara Arens</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>On Horseback, op. 98, no. 5</td>
                            <td>Aleksandr Grechaninov</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Mouse Dance</td>
                            <td>Jakub Metelka</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Clockwork Chimes</td>
                            <td>Evelyn Glennie</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Computer Chatter</td>
                            <td>Christine Donkin</td>
                            <td>24</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 3 Etudes Performed!" align="text-center" bottom="mb-10" />

                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/sMpx7zjSKbg?si=vsopzGymKqsz-z66"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
                <p className="italic text-gray-500 text-center">To see performance of the old, 2015 edition of RCM Level 3 Piano Etudes, click <a href="https://youtu.be/CMNaw0BdxC0?si=2aWK2AwftUX54fnU" target="_blank" className="dcam-link">here</a>.</p>
            </section>

            <PostDivider />

            <span id="level_4" />
            <PostHeading heading="Level 4 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Etude in E Minor, op. 65, no. 42</td>
                            <td>Carl Albert Loeschhorn</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Chastushka, op. 89, no. 25</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Masquerade*</td>
                            <td>Linda Niamath</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>The Lonely Traveller</td>
                            <td>Evelyn Glennie</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Etude in C Major, op. 65, no. 5</td>
                            <td>Theodor Kirchner</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>A Frightening Experience, op. 98, no. 11</td>
                            <td>Aleksandr Grechaninov</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Dewdrops, op. 33, no. 12</td>
                            <td>Samuel Maykapar</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>The Somersault King*</td>
                            <td>Mike Schoenmehl</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Parade of the Penguins</td>
                            <td>Andre Previn</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Ballade, op. 100, no. 15</td>
                            <td>Johann F. Burgmuller</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Cloud Dance</td>
                            <td>Maria Case</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Solitude*</td>
                            <td>Joyce Grill</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>The Avalanche, op. 45, no. 2*</td>
                            <td>Stephen Heller</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>The Spies</td>
                            <td>Jean Coulthard</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Firecrackers</td>
                            <td>Kevin Olson</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>When the Planets Are Aligned</td>
                            <td>Nancy Telfer</td>
                            <td>24</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 4 Etudes Performed!" align="text-center" bottom="mb-10" />
                <p className="italic text-center mb-6">(Old, 2015 edition)</p>
                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/xRXwknJ7dFk?si=qUAFfaOuVEsb-UMW"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
            </section>

            <PostDivider />

            <span id="level_5" />
            <PostHeading heading="Level 5 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Prelude, op. 39, no. 19*</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Little Piece No. 13</td>
                            <td>Marko Tajcevic</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Etude in C Major, op. 718, no. 7</td>
                            <td>Carl Czerny</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dance of the Dragonflies, op. 76, no. 7*</td>
                            <td>Eduard Rohde</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Dragonfly Scherzo*</td>
                            <td>Anne Crosby Gaudet</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Harmony of the Angels, op. 100, no. 21</td>
                            <td>Johann F. Burgmuller</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Joyous Etude</td>
                            <td>Melody Bober</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Little Dragon</td>
                            <td>Vincent Ho</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Etude on a Pentatonic Scale</td>
                            <td>Edward Han Jiang</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Elves</td>
                            <td>Ernest Bloch</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Staccatoville!</td>
                            <td>Dennis Alexander</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>A Summer Day</td>
                            <td>Christopher Norton</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Chromatic Monochrome</td>
                            <td>Naoko Ikeda</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>The Black Pony*</td>
                            <td>Lajos Papp</td>
                            <td>24</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>

                <PostSubheading subheading="See all RCM Level 5 Etudes Performed!" align="text-center" bottom="mb-10" />
                <p className="italic text-center mb-6">(Old, 2015 edition)</p>
                <div className="mx-auto md:w-[80%] mb-10">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/i1Tb9kS9lXg?si=ezuDqBZxWHcGVesm"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                </div>
            </section>

            <PostDivider />

            <span id="level_6" />
            <PostHeading heading="Level 6 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Etude in A flat Major, op. 139, no. 51*</td>
                            <td>Carl Czerny</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Solfeggio in D Major*</td>
                            <td>J. C. F. Bach</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>The Goblin and the Mosquito</td>
                            <td>Florence B. Price</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>River City Blues*</td>
                            <td>Martha Mier</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Heartache, op. 32, no. 2</td>
                            <td>Robert Fuchs</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Miniature, op. 62, no. 6</td>
                            <td>Theodor Kirchner</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Moto perpetuo</td>
                            <td>Tom Gerou</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Moonbeams</td>
                            <td>Alexina Louie</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Dancing Scales*</td>
                            <td>John Burge</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Courting Counting</td>
                            <td>Evelyn Glennie</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Etude in F Major, op. 88, no. 18</td>
                            <td>Hermann Berens</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Math Whiz</td>
                            <td>Bradley Sowash</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Jazz Piece No. 2</td>
                            <td>Oscar Peterson</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Etude in E Minor, op. 29, no. 14</td>
                            <td>Henri Bertini</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>Malfunction! Malfunction!</td>
                            <td>Nancy Telfer</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>Game of Patience, op. 25, no. 2</td>
                            <td>Genari Karganov</td>
                            <td>28</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_7" />
            <PostHeading heading="Level 7 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Toccatina, op. 8, no. 1</td>
                            <td>Samuel Maykapar</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Tambourin, op. 2, no. 7</td>
                            <td>Elisabetta de Gambarini</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Halley's Comet*</td>
                            <td>Nancy Telfer</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Etude in G Minor, op. 24, no. 15*</td>
                            <td>Giuseppe Concone</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Leafy Sea Dragon</td>
                            <td>Ina Dykstra</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Etude in C sharp Minor, op. 125, no. 19</td>
                            <td>Stephen Heller</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Chickadees</td>
                            <td>Teresa Richert</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Dancing Barefoot in the Rain</td>
                            <td>Nkeiru Okoye</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Running Around, op. 105, no. 4</td>
                            <td>Dianne G. Rahbee</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Lullaby, op. 109, no. 7</td>
                            <td>Johann F. Burgmuller</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>White Noon</td>
                            <td>Naoko Ikeda</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Mischievous Mouse</td>
                            <td>Vincent Ho</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>White Sands, Blue Seas</td>
                            <td>Gary K. Thomas</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>Zephyr</td>
                            <td>Christine Donkin</td>
                            <td>28</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_8" />
            <PostHeading heading="Level 8 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>The Storm, op. 109, no. 13*</td>
                            <td>Johann F. Burgmuller</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Village Joke</td>
                            <td>Bela Bartok</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Romanza, op. 57, no. 4</td>
                            <td>Niels Gade</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Open</td>
                            <td>Grieg Janet Gieck</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Murmures du ruisseau</td>
                            <td>Marie Jaell</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Sieste caniculaire (Berceuse), op. 82, no. 3</td>
                            <td>Rachel Laurin</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Bolero, op. 35, no. 4</td>
                            <td>Alfredo Casella</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Flip Flops</td>
                            <td>Gary K. Thomas</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>The Woodpecker</td>
                            <td>Maggie Lu</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Etude in C Major (The Wild Surf), op. 46, no. 24</td>
                            <td>Stephen Heller</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Etude in A Major, op. 27, no. 26</td>
                            <td>Dmitri Kabalevsky</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Etude in C Major, op. 299, no. 3</td>
                            <td>Carl Czerny</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Dance of the Elves, op. 21, no. 3*</td>
                            <td>Genari Karganov</td>
                            <td>30</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_9" />
            <PostHeading heading="Level 9 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Etude in C Major, op. 32, no. 34</td>
                            <td>Henri Bertini</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Prelude in G Major, op. 17, no. 3</td>
                            <td>Felix Blumenfeld</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Etude in B flat Major, op. 30, no. 37</td>
                            <td>Johann B. Cramer</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Barcarole, op. 19, no. 5*</td>
                            <td>Niels Gade</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Etude in C Major</td>
                            <td>H. Leslie Adams</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Atraente</td>
                            <td>Francisca Gonzaga</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Prelude for the Left Hand, op. 9, no. 1</td>
                            <td>Alexander Scriabin</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Etude in A Major, op. 636, no. 6</td>
                            <td>Carl Czerny</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Idylle, op. 24, no. 6</td>
                            <td>Agathe B. Grondahl</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Prelude No. 10 in C sharp Minor</td>
                            <td>John Burge</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Traumerei, op. 9, no. 4</td>
                            <td>Richard Strauss</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Syncopated Etude No. 6</td>
                            <td>Erwin Schulhoff</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>Vivace in F Major, op. 72, no. 6</td>
                            <td>Felix Mendelssohn</td>
                            <td>30</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>
            </section>

            <PostDivider />

            <span id="level_10" />
            <PostHeading heading="Level 10 Piano Etudes" bottom="mb-6" />
            <h3 className="text-center font-semibold mb-10">Sixth Edition (2022)</h3>
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                <table className="blog-table mx-auto w-full md:w-[80%] mb-20">
                    <thead>
                        <tr>
                            <th>ETUDE #</th>
                            <th>PIECE</th>
                            <th>COMPOSER</th>
                            <th>PAGE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>1</td>
                            <td>Spring Celebration*</td>
                            <td>Stephen Chatman</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Periwinkle*</td>
                            <td>Charles Gounod</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Etude in E flat Major, S 136, no. 7</td>
                            <td>Franz Liszt</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Hungarian, op. 39, no. 12</td>
                            <td>Edward MacDowell</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Prelude No. 18 in E Major</td>
                            <td>Maria Szymanowska</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Toccata-Etude</td>
                            <td>Josef Dichler</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Toccatina No. 3</td>
                            <td>Vincent Persichetti</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Prelude No. 1 in C Major</td>
                            <td>John Burge</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Nouvelle etude no. 1</td>
                            <td>Frederic Chopin</td>
                            <td>28</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Postludium, op. 13, no. 10*</td>
                            <td>Erno Dohnanyi</td>
                            <td>31</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Alla reminiscenza, op. 38, no. 8</td>
                            <td>Nikolai Medtner</td>
                            <td>34</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>A Little Whimsy</td>
                            <td>Dorothy Rudd Moore</td>
                            <td>36</td>
                        </tr>                        
                        <tr>
                            <td colSpan="4" className="italic bg-gray-200 text-[0.9rem]">* pieces that were kept from the previous, 2015 edition</td>
                        </tr>                   
                    </tbody>
                </table>
            </section>




            <PageBottomTrialButton />
        </main>

  )
}

export default PostRCMPianoEtudesAllPieces
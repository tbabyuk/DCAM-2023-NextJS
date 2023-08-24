import { PostTitle } from "../../components/PostTitle"
import { PostSource } from "../../components/PostSource"
import { PostSectionHeading } from "../../components/PostSectionHeading"
import { PostHeading } from "../../components/PostHeading"
import { PostSubheading } from "../../components/PostSubheading"
import { PageBottomTrialButton } from "../../components/PageBottomTrialButton"
import { PostDivider } from "../../components/PostDivider"
import PostImage from "../../components/PostImage"

export const metadata = {
    title: "Easy Sonatinas for Piano Students | Da Capo Academy of Music",
    description: "Playing sonatinas is a great way to ease your way into more complex piano repertoire. Here are some easy sonatinas to get started with!",
    keywords: ["easy sonatinas", "beginner sonatinas", "easy sonatinas for piano students"]
}

const PostEasyPianoSonatinas = () => {
  return (
            <main className="text-gray-700 text-[0.95rem]">
            <PostTitle title="Easy Sonatinas for Piano Students" date="July 30, 2021" />
            <PostImage url="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-piano-sonatinas%2Feasy_sonatinas_cover.jpg?alt=media&token=640a7125-50e0-4de1-92cc-2d835fcf8cb1" alt="Easy Piano Sonatinas cover"/>

            <section className="introduction flex flex-col items-center sm:block px-5 lg:px-36 xl:px-64 mb-24 pb-10">
                <PostSectionHeading heading="Introduction" />
                <div>
                    <h2 className="text-xl font-semibold mb-3">The Sonatina</h2>
                    <p className="leading-8 mb-5">A sonatina is a musical composition resembling a mini-sonata. Where a sonata is considered a sophisticated and relatively complex piece of music, a sonatina is a lot shorter, lighter in character, and less technically-demanding. In fact, composers generally wrote sonatinas precisely for this purpose – as teaching material for their students. For this reason, most piano teachers will have their students learn several sonatinas before jumping into actual sonatas. That way, students will be much more prepared to handle a sonata (and other more complicated musical works) both technically and intellectually.</p><br />
                    <h2 className="text-lg font-semibold mb-3">Note to teacher/student:</h2>
                    <p className="leading-8">There are of course quite a few sonatinas to choose from. In this article, my purpose is to help you make this choice easier by introducing you to three sonatinas that are considered on the easier side and which I have enjoyed playing and teaching to my students over the years. It’s important to keep in mind that sonatinas would not be appropriate for complete beginners. A student must be at least a high beginner/low intermediate level to begin to tackle a sonatina. Also, although sonatinas normally contain 3 (and sometimes 2) movements, it is rare for a student to actually learn all the movements. Most often, only one movement is learned. Music exams at the low intermediate level also generally specify that only one movement is to be performed.</p><br />
                </div>
            </section>

            <PostHeading heading="#1. Sonatina in C Major, Op. 36, No. 1 by Muzio Clementi" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="bio flex flex-col-reverse md:flex-row mb-12">
                        <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                            <p><span className="font-semibold">Muzio Clementi</span> (1752-1832) was an Italian-born English pianist, composer, teacher, and conductor among many other things. Out of his considerable compositional output, his sonatinas in particular have enjoyed considerable success and are widely used even to this day in piano teaching.</p><br />
                            <p>The sonatina featured here is the first and the easiest of the six contained in his Op. 36. For this reason, this is usually one of the very first sonatinas I have my students learn (usually just the 1st movement).</p><br />
                            <p><span className="italic">Interesting fact</span>: In 1781, Clementi participated in a musical contest with Mozart in Vienna, where they took turns performing and improvising at the harpsichord for the Holy Roman Emperor Joseph II. The emperor declared it a tie!</p>
                        </div>
                        <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-piano-sonatinas%2Fclementi.jpg?alt=media&token=d07a64fd-5115-478b-8867-6f82595d15bf" alt="Tokyo Police Club photo" style={{width: "220px"}} className="rounded-md" />
                            <figcaption className="text-gray-500"><small>Muzio Clementi</small></figcaption>
                        </figure>
                    </div>

                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: 1790s</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: C Major / F Major</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 2/2, 3/4, 3/8</li>
                            <li className="font-light"><span className="font-semibold">Movements</span>: 3 (Allegro/Spiritoso, Andante, Vivace)</li>
                            <li className="font-light"><span className="font-semibold">Duration</span>: ~ 4 minutes (Allegro/Spiritoso, Andante, Vivace)</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 3 - Low Intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/0_Ksi2qmW0A?si=LeuFBHpfW7wqn6Y8"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">The key(s)</span>. C Major as well as the F of the 2nd movement are both easy keys to play in. You won’t find many black keys here.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">1st and 3rd movement tempo</span>. Bringing out the correct articulation at the fast tempos will take a bit of practice, especially for the 3rd, vivace movement.</li>
                            <li><span className="font-bold">Trills</span>. Although there aren’t many of them, the trills in the 2nd movement might be a bit of a challenge for low intermediate students, but only if you decide to learn the 2nd movement.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#2. Sonatina in G Major, Kinsky-Halm Anh. 5, No. 1 attr. Ludwig van Beethoven" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64">
                    <div className="bio flex flex-col-reverse md:flex-row mb-12">
                        <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                            <p><span className="font-semibold">Ludwig van Beethoven</span> (1770-1827) was a German pianist and composer who has had profound influence on almost every musical genre. Though he is mainly known for his larger and more complex works like symphonies and sonatas, there several sonatinas that are also attributed to him (we cannot know for sure that he was their actual composer). The one featured here is probably the most famous one in that regard – Sonatina in G Major.</p><br />

                            <p><span className="italic">Interesting fact</span>: Beethoven began losing his hearing in his late 20s and it continued to deteriorate for the rest of his life.</p>
                        </div>
                        <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-piano-sonatinas%2Fbeethoven.jpg?alt=media&token=9aef29d6-8bc5-4ac5-9ac5-d9f0f54a1401" alt="Tokyo Police Club photo" style={{width: "220px"}} className="rounded-md" />
                            <figcaption className="text-gray-500"><small>Ludwig van Beethoven</small></figcaption>
                        </figure>
                    </div>

                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: n/a</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: G Major</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 4/4, 6/8</li>
                            <li className="font-light"><span className="font-semibold">Movements</span>: 2 (Moderato, Romanza)</li>
                            <li className="font-light"><span className="font-semibold">Duration</span>: ~ 4 minutes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 3 - Low Intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/J8-PCAyNrNc?si=24KeApBGvGms-wMS"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">It's short</span>. With only 2 movements instead of the usual 3, and with many repetitions, this sonatina is a bit easier to learn should you decide to do that.</li>
                            <li><span className="font-bold">The tempo</span>. Moderato and romanza are both comfortable tempos that should not pose much of a challenge to low-intermediate students.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li>Nothing here should present much difficulty to a low-intermediate piano student, aside from the proper articulation and character you will need to make this piece sound its best.</li>
                        </ul>
                    </div>
            </section>

            <PostDivider />

            <PostHeading heading="#3. Sonatina in F Major, Op. 168, No. 1 by Anton Diabelli" bottom="mb-14" />
            <section className="px-5 lg:px-36 xl:px-64 mb-20">
                    <div className="bio flex flex-col-reverse md:flex-row mb-12">
                        <div className="mt-8 md:mt-0 md:me-10 leading-8 self-start">
                            <p><span className="font-semibold">Anton Diabelli</span> (1781-1858) was an Austrian composer, music editor and music publisher. He composed works for piano as well as for guitar, and several of his compositions have enjoyed a level of popularity even to this day. This particular sonatina is one such example.</p><br />

                            <p><span className="italic">Interesting fact</span>: As a young man, Diabelli studied to be a priest, and actually lived in a monastery for several years, until 1803.</p>
                        </div>
                        <figure className="flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-piano-sonatinas%2Fdiabelli.jpg?alt=media&token=a8cb6758-5555-420d-8091-f98b65bdf403" alt="Tokyo Police Club photo" style={{width: "200px"}} className="rounded-md" />
                            <figcaption className="text-gray-500"><small>Anton Diabelli</small></figcaption>
                        </figure>
                    </div>

                    <div className="info-table p-5 mt-8 mb-12 md:mt-0 bg-regRed text-gray-50 w-fit max-w-[100%] mx-auto rounded">
                        <h3 className="text-2xl text-center mb-3 bg-lightRed rounded">Quick Facts</h3>
                        <ul className="list-disc list-inside leading-6">
                            <li className="font-light"><span className="font-semibold">Composed</span>: n/a</li>
                            <li className="font-light"><span className="font-semibold">Key</span>: F Major / B♭ Major</li>
                            <li className="font-light"><span className="font-semibold">Time</span>: 4/4, 3/4, 6/8</li>
                            <li className="font-light"><span className="font-semibold">Movements</span>: 3 (Moderato cantabile, Andante cantabile, Rondo: Allegretto)</li>
                            <li className="font-light"><span className="font-semibold">Duration</span>: ~ 5 minutes</li>
                            <li className="font-light"><span className="font-semibold">Ability Level</span>: RCM Level 4 - Low Intermediate</li>
                            <li className="font-light"><span className="font-semibold">My personal rating</span>: 5/5 (love it!)</li>
                        </ul>
                    </div>
                    <div className="mb-14">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/_sLbHit2ows?si=PkdqfSo43aLe_0xt"
                            title="YouTube Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="leading-8 mb-10 ">
                        <h3 className="text-xl underline mb-4">WHAT'S EASY ABOUT IT:</h3>
                        <ul className="list-disc list-inside">
                            <li><span className="font-bold">The tempo</span>. The first two movements are in relatively slow and comfortable tempos that shouldn’t pose much of a challenge to low intermediate students.</li>
                        </ul>
                    </div>
                    <div className="leading-8">
                        <h3 className="text-xl underline mb-4">WHAT YOU MIGHT FIND DIFFICULT:</h3>
                        <ul className="list-disc list-inside">
                            <li className="mb-4"><span className="font-bold">3rd Movement</span>. In addition to being in the tempo of Allegretto, the 3rd movement also has a lot of quick staccato notes in both right and left hands. This requires a very light touch and might take some practicing to get just right.</li>
                            <li><span className="font-bold">Duration</span>. With 3 movements and around 5 minutes of complete playing time, this one is a might take a bit longer to learn should you decide to do the whole composition.</li>
                        </ul>
                    </div>
            </section>
            <PageBottomTrialButton />
        </main>

  )
}

export default PostEasyPianoSonatinas
import { PageTitle } from "../../components/PageTitle";
import TeacherProfile from "../../components/TeacherProfile";
import Link from "next/link";


export const metadata = {
    title: "Teachers | Da Capo Academy of Music",
    description: "Our teachers",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Teachers | Da Capo Academy of Music",
        description: "Our teachers",
        url: "https://dacapomusic.ca/teachers",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
}


const Teachers = () => {

    return ( 
        <main className="teachers-page">
            <PageTitle title="Teachers" />

            <section className="raul px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/raul.jpg"
                    name="Raul Pineda"
                    instrument="DRUMS" 
                    bio="Originally from Havana, Cuba, Raul started his musical career at the age of eight. Dazzled by the sound of drums and percussion, he took lessons with several private teachers, who encouraged him to pursue music as a profession. After finishing his studies in Cuba, he immigrated to Canada in 2005 and continued his studies at Humber College, where he finished his Degree in “Contemporary Music” in 2010. During his time at Humber, he was awarded the Millennium Scholarship and, as a member of the Humber Studio Jazz Ensemble, gained valuable experience working with world class artists such as Mike Stern, Randy Brecker, Dave Douglas, Labarbera Brothers, Chris Potter and others. Today, he teaches and continues performing and recording professionally in the city of Toronto." 
                />
            </section>

            <section className="taisiya px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/taisiya.jpg"
                    name="Taisiya Sarkisova"
                    instrument="VOICE, PIANO" 
                    bio="Taisiya is a jazz vocal performance student at the University of Toronto. She was raised in Russia in a musical family and grew up in a family vocal ensemble. Prior to her musical education at the University of Toronto, Taisiya studied jazz at the Jazz Academy in Moscow and got to perform in numerous jazz vocal ensembles, sing in a band, and perform with an orchestra. She graduated from Earl Haig Secondary School in 2021 with a musical degree as a piano major from Claude Watson Music Program. There she started learning about composition and modern music. Taisiya also has experience in musical theatre and has been a part of the Mainstage Theatre crew until recently. She has experience in working with kids and knows how to make classes both professional and fun!" 
                />
            </section>

            <section className="jonathan px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/giancarlo.jpg"
                    name="Giancarlo Gianneo"
                    instrument="GUITAR" 
                    bio="Giancarlo is a guitarist who recently graduated from the 'Music Industry Arts and Performance Program' at Centennial College. His primary focus lies in playing the guitar, which has led to his performing at multiple venues across Toronto. He started his musical journey at the age of 12 by learning classical guitar and immersing himself in a wide range of musical genres such as blues, rock, bluegrass and improvising. Following his high-school graduation, he finished a pre-university program at the Barranquilla School of Fine Arts and then continued his studies at Centennial College in Toronto. Giancarlo has practical experience in recording techniques and studio recording utilizing digital audio workstations, and providing his expertise as a session musician to others. He is filled with enthusiasm for music and is committed to sharing it with his students as he helps them to develop as musicians." 
                />
            </section>

            <section className="chloe px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/chloe.jpg"
                    name="Chloe Dionne"
                    instrument="VOICE"
                    bio="Chloé is currently a vocal performance master's student at the University of Toronto. She is passionate about singing in many genres such as opera, pop, jazz,
                    and musical theater. Chloe has performed around Nova Scotia in many events, independently, and at the Fountain School of Performing Arts where she received her Bachelors of Music degree. With the Fountain School, she was in several operas, was a prize winner in their 2023 Concerto Night, and a performer in their 2022 reopening gala performing in the same concert as artists such as Jeremy Dutcher and Kiefer Sutherland. She is also a songwriter and composer. She was recently selected to participate in a music production workshop with Nova Scotian artist and producer Erin Costelo. As a teacher, she strives to give students the confidence to expand their musical world while giving them a solid technical foundation." 
                />
            </section>

            <section className="tiago px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/tiago.jpg"
                    name="Tiago Cardoso"
                    instrument="GUITAR" 
                    bio="A recent graduate from the music program at York University, Tiago has spent the last four years refining his playing through extensive jazz studies. He has studied with Canadian jazz legends such as Lorne Lofsky, Sundar Viswanathan, Roy Patterson, Anthony Michelli, and many others. It was during his studies that Tiago, alongside performing, had also discovered a love for teaching. He enjoys all kinds of music and feels as though the ultimate way to express himself is through improvisation. Tiago's passion for music has led him to play in various venues around Toronto such as The Jazz Bistro, The Emmet Ray, Hirut Café, The Royal Botanical Gardens, and Tail of the Junction." 
                />
            </section>

            <section className="senya px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/senya.jpg"
                    name="Senya Wickramasinghe"
                    instrument="PIANO"
                    bio="Senya has been studying classical piano since she was 4 and teaching classical piano since she was 14. She has completed her RCM Piano Level 8 Certificate by age 14 and RCM 10 Practical by age 16. In high school, Senya was active in the music department as a violinist, and co-president of the music council. With this involvement she gained experience in stage band, chamber string orchestra, competed in the Kiwanis music festival, and took on the role of a piano accompanist for classical violinists. Her current music goals include diversifying her performance repertoire and expanding her knowledge of music history. In the classroom, her goal is to help students build the necessary skills for success while having fun creating music." 
                />
            </section>

            <section className="aaron px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/aaron.jpg"
                    name="Aaron Dawang"
                    instrument="PIANO"
                    bio="From the young age, Aaron knew that music was his passion. At three and a half years old, he began studying piano at the Ontario Conservatory of Music, which he did for 10 years. As a student, he participated in many recitals, concerts and competitions, like the Canadian Music League (CML) and became an award-winning, recognized pianist in his community. Piano has helped open the doors for his other passions related to music, including singing and dancing. Aaron is a prime example that passion and hard work will lead to progress and success." 
                />
            </section>

            <section className="jonathan px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/jonathan.jpg"
                    name="Jonathan Stuchbery*"
                    instrument="GUITAR, LUTE, MUSIC THEORY (online only)" 
                    bio="Jonathan Stuchbery is a classical guitarist and a specialist in lutes and historical guitars. As an educator, he encourages students to explore their musical interests while laying strong technical foundations and helping students approach their instruments and music with ease. Jonathan is experienced as a guitar (all styles) and lute teacher, as well as a repertoire coach for vocalists and instrumentalists working on baroque and renaissance music. He is busy as a performer at home and abroad where he is active with multiple ensembles and festivals. Jonathan holds a Master's in Historical Performance from the Escola Superior de Música de Catalunya in Barcelona. He was also recognized for outstanding achievement in lute at McGill's Schulich School of Music, receiving his B.Mus. in guitar and lute under teachers Jérôme Ducharme and Sylvain Bergeron." 
                />
            </section>

            <section className="oksana px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/oksana.jpg"
                    name="Oksana Skira*"
                    title="Co-Founder"
                    instrument="PIANO (online only)"
                    bio="Oksana Skira is a professional pianist, accompanist, performer, teacher, and a recording artist. She began her music education at Barvinsky State Music College of Drohobych (Drohobych, Ukraine), going on to receive a Masters in Piano Performance from Mykola Lysenko Lviv National Music Academy (Lviv, Ukraine). While studying in Drohobych, she won 2nd place in the Western Ukraine Musical Competition. Oksana has recorded and released three independent CDs and continues to be active as a performer, accompanist, and teacher in Toronto and the GTA. At DCAM, Oksana teaches beginner to advanced piano." 
                />
            </section>

            <section className="terry px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/images/teachers/terry.jpg"
                    name="Taras (Terry) Babyuk"
                    title="Co-Founder, Managing Director"
                    instrument="PIANO, MUSIC THEORY"
                    bio="Taras (Terry) Babyuk started his musical journey with accordion lessons at the age of seven. In his teens, he began piano lessons and soon decided to dedicate himself fully to this instrument. Terry holds Level 9 RCM Certificate in piano and has taught beginner to intermediate piano and beginner to advanced music theory for many years (a self-described music theory nerd!). In addition to his fondness for Classical and Romantic-era music, he also loves film music and enjoys composing original piano music in his spare time. Aside from his teaching duties at DCAM, he is also its co-founder and Managing Director." 
                />
            </section>



            <div className="px-5 lg:px-36 xl:px-52 py-20">
                <p className="italic"><span className="font-bold">*</span> Lessons with these teachers are subject to our <Link href="/rates" target="_blank" className="dcam-link">premium rates</Link></p>
            </div>        
        </main>
     );
}
 
export default Teachers;
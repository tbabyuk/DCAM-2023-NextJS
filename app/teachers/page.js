

import { PageTitle } from "../components/PageTitle";
import TeacherProfile from "../components/TeacherProfile";

const Teachers = () => {
    return ( 
        <main className="teachers-page">
            <PageTitle title="Teachers" />
            <section className="raul px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">            
                <TeacherProfile 
                    photo="/teachers/raul.jpg"
                    name="Raul Pineda"
                    instrument="DRUMS" 
                    bio="Originally from Havana, Cuba, Raul started his musical career at the age of eight. Dazzled by the sound of drums and percussion, he took lessons with several private teachers, who encouraged him to pursue music as a profession. After finishing his studies in Cuba, he immigrated to Canada in 2005 and continued his studies at Humber College, where he finished his Degree in “Contemporary Music” in 2010. During his time at Humber, he was awarded the Millennium Scholarship and, as a member of the Humber Studio Jazz Ensemble, gained valuable experience working with world class artists such as Mike Stern, Randy Brecker, Dave Douglas, Labarbera Brothers, Chris Potter and others. Today, he teaches and continues performing and recording professionally in the city of Toronto." 
                />
            </section>

            <section className="taisiya px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/teachers/taisiya.jpg"
                    name="Taisiya Sarkisova"
                    instrument="VOICE, PIANO" 
                    bio="Taisiya is a jazz vocal performance student at the University of Toronto. She was raised in Russia in a musical family and grew up in a family vocal ensemble. Prior to her musical education at the University of Toronto, Taisiya studied jazz at the Jazz Academy in Moscow and got to perform in numerous jazz vocal ensembles, sing in a band, and perform with an orchestra. She graduated from Earl Haig Secondary School in 2021 with a musical degree as a piano major from Claude Watson Music Program. There she started learning about composition and modern music. Taisiya also has experience in musical theatre and has been a part of the Mainstage Theatre crew until recently. She has experience in working with kids and knows how to make classes both professional and fun!" 
                />
            </section>

            <section className="jonathan px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/teachers/jonathan.jpg"
                    name="Jonathan Stuchbery"
                    instrument="GUITAR, LUTE, MUSIC THEORY" 
                    bio="Jonathan Stuchbery is a classical guitarist and a specialist in lutes and historical guitars. As an educator, he encourages students to explore their musical interests while laying strong technical foundations and helping students approach their instruments and music with ease. Jonathan is experienced as a guitar (all styles) and lute teacher, as well as a repertoire coach for vocalists and instrumentalists working on baroque and renaissance music. He is busy as a performer at home and abroad where he is active with multiple ensembles and festivals. Jonathan holds a Master’s in Historical Performance from the Escola Superior de Música de Catalunya in Barcelona. He was also recognized for outstanding achievement in lute at McGill’s Schulich School of Music, receiving his B.Mus. in guitar and lute under teachers Jérôme Ducharme and Sylvain Bergeron." 
                />
            </section>

            <section className="rachel px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/teachers/rachel.jpg"
                    name="Rachel Stewart"
                    instrument="VOICE"
                    bio="Rachel is a classically trained Soprano with advanced degrees in Voice from both the University of British Columbia and the Manhattan School of Music. Notable roles she has performed include Elle (La Voix Humaine), Cenerentola (La Cenerentola), Dona Elvira (Don Giovanni), and Kate (Kiss me, Kate!). She premiered the role of Amy in Stephen Chatman’s Choir Practice in 2015. In smaller roles, she has been involved with over 25 different operatic and musical theatre productions. Before her higher education, Rachel was heavily involved in the choral scene. She has apprenticed under Elaine Quilichini as an assistant Choral Conductor. As a teacher, she is dedicated to introducing students to diverse music from a variety of cultures, time periods and genders while having fun along the way." 
                />
            </section>

            <section className="tiago px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/teachers/tiago.jpg"
                    name="Tiago Cardoso"
                    instrument="GUITAR" 
                    bio="A recent graduate from the music program at York University, Tiago has spent the last four years refining his playing through extensive jazz studies. He has studied with Canadian jazz legends such as Lorne Lofsky, Sundar Viswanathan, Roy Patterson, Anthony Michelli, and many others. It was during his studies that Tiago, alongside performing, had also discovered a love for teaching. He enjoys all kinds of music and feels as though the ultimate way to express himself is through improvisation. Tiago’s passion for music has led him to play in various venues around Toronto such as The Jazz Bistro, The Emmet Ray, Hirut Café, The Royal Botanical Gardens, and Tail of the Junction." 
                />
            </section>

            <section className="senya px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/teachers/senya.jpg"
                    name="Senya Wickramasinghe"
                    instrument="PIANO"
                    bio="Senya has been studying classical piano since she was 4 and teaching classical piano since she was 14. She has completed her RCM Piano Level 8 Certificate by age 14 and RCM 10 Practical by age 16. In high school, Senya was active in the music department as a violinist, and co-president of the music council. With this involvement she gained experience in stage band, chamber string orchestra, competed in the Kiwanis music festival, and took on the role of a piano accompanist for classical violinists. Her current music goals include diversifying her performance repertoire and expanding her knowledge of music history. In the classroom, her goal is to help students build the necessary skills for success while having fun creating music." 
                />
            </section>

            <section className="terry px-5 lg:px-36 xl:px-52 bg-gray-100 py-20">            
                <TeacherProfile 
                    photo="/teachers/terry.jpg"
                    name="Taras (Terry) Babyuk"
                    title="Co-Founder, Managing Director"
                    instrument="PIANO, MUSIC THEORY"
                    bio="Taras (Terry) Babyuk started his musical journey with accordion lessons at the age of seven. In his teens, he began piano lessons and soon decided to dedicate himself fully to this instrument. Terry holds Level 9 RCM Certificate in piano and has taught beginner to intermediate piano and beginner to advanced music theory for many years (a self-described music theory nerd!). In addition to his fondness for Classical and Romantic-era music, he also loves film music and enjoys composing original piano music in his spare time. Aside from his teaching duties at DCAM, he is also its co-founder and Managing Director." 
                />
            </section>

            <section className="oksana px-5 lg:px-36 xl:px-52 py-20">            
                <TeacherProfile 
                    photo="/teachers/oksana.jpg"
                    name="Oksana Skira"
                    title="Co-Founder"
                    instrument="PIANO"
                    bio="Oksana Skira is a professional pianist, accompanist, performer, teacher, and a recording artist. She began her music education at Barvinsky State Music College of Drohobych (Drohobych, Ukraine), going on to receive a Masters in Piano Performance from Mykola Lysenko Lviv National Music Academy (Lviv, Ukraine). While studying in Drohobych, she won 2nd place in the Western Ukraine Musical Competition. Oksana has recorded and released three independent CDs and continues to be active as a performer, accompanist, and teacher in Toronto and the GTA. At DCAM, Oksana teaches beginner to advanced piano." 
                />
            </section>
        </main>
     );
}
 
export default Teachers;
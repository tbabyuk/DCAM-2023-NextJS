


import { PageTitle } from "../components/PageTitle";

const PianoLessonsPage = () => {
    return ( 
        <main className="piano-page px-5 md:px-20 xl:px-60">
            <PageTitle title={"Piano Lessons in Etobicoke"} />

            <h2 className="font-ovo text-regRed text-2xl text-center mb-8">Overview</h2>
            <div className="flex flex-col items-center sm:block">
                <img src="/lessons/piano_lessons.jpg" className="float-left me-5 mb-5 rounded-md" style={{width: "250px"}} />
                <p>Piano is the most popular instrument in the world – and for many good reasons. It’s very visual, expressive, and, unlike many other instruments, allows us to play a large number of notes at the same time. It’s sort of like having a whole orchestra at your fingertips! But as a wise man once said (and as many experienced pianists will tell you): “It’s easy to play the piano, but it’s hard to play it well”.<br /><br />

                At DCAM, we believe technique can make or break your piano playing, which is why we do our best to make sure our students (especially young children) learn correct technique from the very beginning – before it becomes a habit. Having good technique is an absolutely essential foundation to the student’s proper development and growth as a musician.<br /><br />

                We also realize that our students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student’s individual skill level and musical taste.

                We cordially invite you to start your musical journey with us and see for yourself why we have the best piano lessons in Etobicoke!
                </p>
            </div>

            <h2 className="font-ovo text-regRed text-2xl text-center mt-20 mb-8">What is a good age to start piano lessons?</h2>
            <p>Five is the age at which most children have enough mental focus, self-awareness, and finger strength to start piano lessons. At this age, 30-minute lessons are the recommended option.<br /><br />
            If your child is younger than 5 and you think they are ready to start lessons – sign them up for a free trial lesson and we will be happy to give you our recommendation!</p>

            <h2 className="font-ovo text-regRed text-2xl text-center mt-20 mb-8">Lesson Format</h2>
            <p><strong>Private lessons</strong>: these are one-on-one lessons with student and teacher. Private lessons are a great option for students looking for highly-focused and individualized music instruction. The teacher is able to give their full attention to one student and students normally progress faster in this environment.<br /><br />

            <strong>Semi-private lessons</strong>: these lessons consist of two students per teacher. Semi-private lessons can be a budget-friendly option for parents with two children or two friends wanting to learn the same instrument together. The one obvious drawback is that students don’t receive as much focused and individualized attention from the teacher as they do with private lessons.</p>

            <h2 className="font-ovo text-regRed text-2xl text-center mt-20 mb-8">Lesson Duration</h2>
            <p>At DCAM, students can choose between 30-minute, 45-minute, or 1-hour lessons. Small children generally start with 30-minute lessons and increase lesson duration as they get older and/or with the recommendation from their teacher. For teenagers and adults, a minimum lesson time of 45 minutes is strongly recommended.</p>

            <h2 className="font-ovo text-regRed text-2xl text-center mt-20 mb-8">Materials</h2>
            <div className="flex flex-col items-center sm:flex-row sm:items-start">
                <img src="/lessons/abc_books.jpg" className="float-left me-5 mb-5 rounded-md" style={{width: "250px"}} />
                <p>For complete beginners, we like to use “The ABC of Piano Playing” series by Boris Berlin, which contains Books 1, 2, and 3. These books are a great introduction to the keyboard and music notation and contain many simple and catchy tunes. After finishing all three of these books, students have several options. Those following the Royal Conservatory path will be able to start either the “Preparatory A Piano Repertoire” or jump straight into the “Level 1 Piano Repertoire”. For students who do not wish to do the Royal Conservatory exams, books will be chosen based on their individual musical preferences.
                </p>
            </div>

        </main>
     );
}
 
export default PianoLessonsPage;
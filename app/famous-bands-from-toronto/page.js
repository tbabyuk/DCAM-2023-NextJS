
import styles from "./style.module.css"

// async function fetchPost() {
//     const res = await fetch('https://dacapomusic.ca/wp-json/wp/v2/posts/8608')
//     const postData = await res.json()
//     return postData
// }

const TorontoBandsPost = async () => {
    const post = await fetchPost()



  return (
    <main className="guitar-page">
        <PageTitle title="Guitar Lessons in Etobicoke" />

        <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
            <PageSubtitle subtitle="Overview" />
            <div className="md:flex md:items-center">
                <p>Whether you want to be in a band, impress your friends at a party, or just play for yourself – the possibilities are endless when it comes to the  guitar! No wonder it’s one of the most popular instruments today!

                At Da Capo Academy of Music, you learn guitar through a fun and gradual process that combines proper technique with music that you actually want to play! Just like guitars, we realize that students come in many different “shapes and sizes”, which is why our teachers do their best to tailor lessons to each student’s individual skill level and musical taste.

                Ready to start learning? Book your free trial lesson today!
                </p>
                <img src="/lessons/guitar_lessons.jpg" className="mx-auto md:ms-5 mt-5 md:mt-0 md:h-52 rounded-md" />

            </div>
        </section>

        <PageBottomTrialButton />
    </main>
)
}

export default TorontoBandsPost
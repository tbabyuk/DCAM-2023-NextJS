
import { PageSubtitle } from "./PageSubtitle"
import Link from "next/link"


export const LessonTeachersSection = ({background}) => {

  return (
        <section className={`teachers leading-8 px-5 lg:px-36 xl:px-52 py-20 ${background ? background : ""}`}>
            <PageSubtitle subtitle="Teachers" />
            <p>Our teachers are all qualified professionals and passionate musicians. We do our best to match a student with a teacher that we think would best fit their musical goals as well as their personalities. We understand that while some students prefer a relaxed teaching approach, there are always those for whom a more strict approach is more effective. Students also have the option to request to change their teacher if they wish to do so. Learn more about our teachers on our <Link href="/teachers" className="dcam-link">Teachers Section</Link>.</p>
        </section>
    )
}
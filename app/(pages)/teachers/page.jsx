import Link from "next/link";
import { TeacherProfile } from "@/app/components/TeacherProfile";
import { teachersPageTeachersArray } from "@/app/data/teachers";


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
        <main className="teachers-page pb-36">
            <h1 className="font-ovo text-white text-4xl px-5 py-14 lg:px-36 xl:px-52 bg-[url('/images/page-headers/teachers-page.jpg')] bg-center bg-cover">Teachers</h1>

            <div className="teachers">
                {teachersPageTeachersArray.map((teacher, index) => (
                    <TeacherProfile 
                        key={index}
                        name={teacher.name}
                        title={teacher.title}
                        instrument={teacher.instrument}
                        photo={teacher.photo}
                        bio={teacher.bio}
                    />
                ))}
            </div>

            <div className="px-5 lg:px-36 xl:px-52 py-20">
                <p className="italic"><span className="font-bold">*</span> Lessons with these teachers are subject to our <Link href="/rates" target="_blank" className="dcam-link">premium rates</Link></p>
            </div>
        </main>
     );
}
 
export default Teachers;
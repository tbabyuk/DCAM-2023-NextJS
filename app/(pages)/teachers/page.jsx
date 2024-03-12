import Link from "next/link";
import { TeacherProfile } from "@/app/components/TeacherProfile";
import { teachersPageTeachersArray } from "@/app/data/teachers";
import { PageTitle } from "../components/PageTitle";


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
            <div className="h-[150px] bg-[url('/images/page-headers/teachers-page.jpg')] bg-cover bg-center flex items-center justify-between px-5 lg:px-36 xl:px-52 relative">
                <h1 className="font-ovo text-gray-500 font-bold text-4xl z-10 py-2 px-4 bg-gray-100 -skew-x-6 rounded">Teachers Page</h1>
                <img src="/images/illustrations/teachers-page-illustration.png" title="original artwork by the one and only - Heather Alison Rose" className="max-h-[100%] absolute right-5 lg:right-36 xl:right-52" />
            </div>

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
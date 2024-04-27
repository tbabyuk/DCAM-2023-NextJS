import Link from "next/link";
import { TeacherProfile } from "@/app/components/TeacherProfile";
import { teachersPageTeachersArray } from "@/app/data/teachers";
import { PageTitle } from "@/app/components/PageTitle";


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
        type: "article",
        images: [
            {
              url: "https://dcam-assets.static.domains/teachers-page-illustration.png",
              width: 542,
              height: 1024,
            }
          ],
    },
}


const Teachers = () => {

    return ( 
        <main className="teachers-page pb-36">
            <PageTitle title="Teachers" heatherImage="/images/illustrations/teachers-page-illustration.png" alt="teachers page illustration" />

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
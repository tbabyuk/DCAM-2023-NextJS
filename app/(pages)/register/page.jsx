import { DownloadButton } from "../../components/DownloadButton";
import { PageDivider } from "../../components/PageDivider";
import { PageTitle } from "../../components/PageTitle";
import { RegisterForm } from "./RegisterForm";


export const metadata = {
    title: "Register | Da Capo Academy of Music",
    description: "Register for regular lessons today!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Register | Da Capo Academy of Music",
        description: "Register for regular lessons today!",
        url: "https://dacapomusic.ca/register",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
}


const Register = () => {
    
    return (
        <>
            <main className="rates-page">
                <PageTitle title="Register" />
                <section className="register-page px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mb-24">
                    <RegisterForm />
                </section>
            </main>
        </>
     );
}
 
export default Register;
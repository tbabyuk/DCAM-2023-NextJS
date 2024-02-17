import { RegisterForm } from "./RegisterForm";
import { PageTitle } from "../components/PageTitle";


export const metadata = {
    title: "Register | Da Capo Academy of Music...",
    description: "Register for regular lessons today!",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Register | Da Capo Academy of Music...",
        description: "Register for regular lessons today!",
        url: "https://dacapomusic.ca/register",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article",
        images: [
            {
                url: "https://i.postimg.cc/26ZMQ4Q0/Untitled-design-3.jpg",
                width: 1200,
                height: 630
            }
        ]
    },
}



const Register = () => {
    
    return (
            <main className="register-page">
                <PageTitle title="Register" image="/images/page-headers/register-page.jpg" />
                <p className="leading-8 px-5 lg:px-36 xl:px-52 py-12 bg-gray-100">Register for lessons today! Just fill out the registration form below and we will be in touch with you within 1-2 business days about starting your lessons!</p>
                <section className="register-page px-5 lg:px-36 xl:px-52 py-20 mb-24">
                    <RegisterForm />
                </section>
            </main>
    );
}
 
export default Register;
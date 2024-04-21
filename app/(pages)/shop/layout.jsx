import { PageTitle } from "@/app/components/PageTitle"
import { Breadcrumbs } from "./components/Breadcrumbs"

// export const metadata = {
//     title: "Shop | Da Capo Academy of Music",
//     description: "Shop at our online store for music books, gift certificates, and other amazing music merchandise! New products are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
//     robots: { index: true, follow: true},
//     authors: [{name: "Taras (Terry) Babyuk"}],
//     openGraph: {
//         title: "Shop | Da Capo Academy of Music",
//         description: "Shop at our online store for music books, gift certificates, and other amazing music merchandise! New products are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
//         url: "https://dacapomusic.ca/shop",
//         siteName: "Da Capo Academy of Music",
//         locale: "en_US",
//         type: "article"
//     },
//   }

const ShopLayout = ({children}) => {

    return (
        <main className="shop-page">
            <PageTitle title="Shop" image="/images/illustrations/shop-page-illustration.png" alt="shop page illustration" />
            <Breadcrumbs />
            {children}
        </main>
    )
}

export default ShopLayout
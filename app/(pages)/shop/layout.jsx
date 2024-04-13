import { PageTitle } from "@/app/components/PageTitle"
import { Breadcrumbs } from "./components/Breadcrumbs"

export const metadata = {
    title: "Shop | Da Capo Academy of Music",
    description: "Shop for music books and gift certificates",
    robots: { index: true, follow: true},
    authors: [{name: "Taras (Terry) Babyuk"}],
    openGraph: {
        title: "Shop | Da Capo Academy of Music",
        description: "Shop for music books and gift certificates",
        url: "https://dacapomusic.ca/shop",
        siteName: "Da Capo Academy of Music",
        locale: "en_US",
        type: "article"
    },
  }

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
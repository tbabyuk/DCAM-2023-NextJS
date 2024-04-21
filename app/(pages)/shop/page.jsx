import { shopProductCategoriesArray } from "./shopData"
import { ShopProductCategoryCard } from "@/app/(pages)/shop/components/ShopProductCategoryCard"


export const metadata = {
  title: "Shop | Da Capo Academy of Music",
  description: "Shop at our online store for music books, sheet music, gift certificates, and other amazing music merchandise! New products are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop | Da Capo Academy of Music",
      description: "Shop at our online store for music books, gift certificates, and other amazing music merchandise! New products are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
      url: "https://dacapomusic.ca/shop",
      siteName: "Da Capo Academy of Music",
      locale: "en_US",
      type: "article"
  },
}



const Shop = () => {

  return (
        <>
            <p className="leading-8 px-5 lg:px-36 xl:px-52 py-12 bg-gray-100">Welcome to our online music store! Here you can find music books, gift certificates, and other amazing music merchandise! New products are constantly being added. Fast local delivery (1-2 business days) is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!<br /><span className="italic">Note that we currently ship to Canada-based customers only.</span>
            </p>
            <div className="leading-7 px-5 lg:px-36 xl:px-52 py-20">
                <div className="flex flex-wrap gap-10 justify-center">
                  {shopProductCategoriesArray.map((product, index) => (
                    <ShopProductCategoryCard key={index} product={product} />
                  ))}
                </div>
            </div>
        </>
    )
}

export default Shop
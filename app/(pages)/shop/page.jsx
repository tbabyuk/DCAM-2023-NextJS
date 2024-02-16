import { shopProductCategoriesArray } from "./shopData"
import { ShopProductCategoryCard } from "@/app/(pages)/shop/components/ShopProductCategoryCard"


// export const metadata = {
//   title: "Shop | Da Capo Academy of Music",
//   description: "Shop for music books and gift certificates",
//   robots: { index: true, follow: true},
//   authors: [{name: "Taras (Terry) Babyuk"}],
//   openGraph: {
//       title: "Shop | Da Capo Academy of Music",
//       description: "Shop for music books and gift certificates",
//       url: "https://dacapomusic.ca/shop",
//       siteName: "Da Capo Academy of Music",
//       locale: "en_US",
//       type: "article"
//   },
// }


const Shop = () => {

  return (
          <>
              <p className="leading-8 px-5 lg:px-36 xl:px-52 py-12 bg-gray-100">Welcome to our online shop! While our book inventory currently consists of mostly RCM books, we are constantly adding new books, so keep checking in. After purchasing your books from our online shop, you can choose to either pick them up in person at our school or have them shipped to you! <span className="italic">Note that we currently ship only to Canada-based customers</span>.
              </p>
              <div className="content leading-7 px-5 lg:px-36 xl:px-52 py-20">

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
import { ShopProductCategoryCard } from "../components/ShopProductCategoryCard"
import { shopBookCategoriesArray } from "../shopData"


export const metadata = {
  title: "Shop - Music Books & Sheet Music | Da Capo Academy of Music",
  description: "Shop for music books and sheet music at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop | Da Capo Academy of Music",
      description: "Shop for music books and sheet music at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
      url: "https://dacapomusic.ca/shop",
      siteName: "Da Capo Academy of Music",
      locale: "en_US",
      type: "article"
  },
}


const ShopBooksPage = () => {

  return (
      <>
          <p className="leading-8 px-5 lg:px-36 xl:px-52 py-12 bg-gray-100">Shop for music books and sheet music (coming soon!) New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!</p>
          <div className="leading-8 px-5 lg:px-36 xl:px-52 py-20">
            <div className="flex flex-wrap gap-10 justify-center">
                {shopBookCategoriesArray.map((product, index) => (
                  <ShopProductCategoryCard key={index} product={product}  />
                ))}            
            </div>
          </div>
      </>  
    )
}

export default ShopBooksPage

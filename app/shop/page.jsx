import { shopProductCategoriesArray } from "./shopData"
import { ShopProductCategoryCard } from "../components/ShopProductCategoryCard"


const Shop = () => {

  return (
        <div>
            <p className="leading-8 px-5 lg:px-36 xl:px-52 py-12 bg-gray-100">Welcome to our online shop! Most of the books you will find here are books we use at our school with our own students, but we are constantly adding new books that we find useful for music students and music enthusiasts! After purchasing your books from our online shop, you can choose to either pick them up in person at our school or have them shipped to you! <span className="underline">Note that we currently ship only to Canada-based customers</span>.
            </p>
            <div className="content leading-7 px-5 lg:px-36 xl:px-52 py-20">

                <div className="flex flex-wrap gap-10 justify-center">
                  {shopProductCategoriesArray.map((product, index) => (
                    <ShopProductCategoryCard key={index} product={product} />
                  ))}
                </div>
                
            </div>
        </div>
    )
}

export default Shop
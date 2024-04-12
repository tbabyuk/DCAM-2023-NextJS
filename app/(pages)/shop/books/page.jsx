"use client"

import { ShopProductCategoryCard } from "../components/ShopProductCategoryCard"
import { shopBookCategoriesArray } from "../shopData"

const ShopBooksPage = () => {

  return (
      <>
          <div className="leading-8 px-5 lg:px-36 xl:px-52 py-40 bg-gray-100">
            <div className="flex flex-wrap gap-10 justify-center">
                {shopBookCategoriesArray.map((product, index) => (
                  <ShopProductCategoryCard key={index} product={product} />
                ))}            
            </div>
          </div>
      </>  
    )
}

export default ShopBooksPage

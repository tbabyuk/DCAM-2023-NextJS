"use client"

import { shopProductCategoriesArray } from "./shopData"
import { ShopProductCategoryCard } from "../components/ShopProductCategoryCard"


const Shop = () => {
  return (
    <main className="shop px-5 lg:px-36 xl:px-52 py-20">
        <p className="mb-20 leading-8">Welcome to our online shop! Most of the books you will find here are books we use at our school with our own students, but we are constantly adding new books that we find useful for music students and music enthusiasts! After purchasing your book from our online shop, you can choose to either pick it up in person at our school or have them shipped to you! <span className="underline">Note that we currently ship only to Canada-based customers</span>.
        </p>
        <div className="shop-container flex flex-wrap gap-10 justify-center">

          {shopProductCategoriesArray.map((product, index) => (
            <ShopProductCategoryCard key={index} product={product} />
          ))}
        </div>
    </main>
  )
}

export default Shop
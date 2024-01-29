"use client"

import { booksList } from "../shopItems"
import { ShopProductCard } from "../ShopProductCard"


const ShopBooksPage = () => {
    
  return (
    <main>
        <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 bg-gray-100 py-20">
            {booksList.map((product) => (
                <ShopProductCard key={product.id} product={product} productType="book" />
            ))}
        </div>
    </main>  
  )
}

export default ShopBooksPage

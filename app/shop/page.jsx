"use client"

import { booksList } from "./shopItems"
import { PageTitle } from "../components/PageTitle"
import { ShopProductCard } from "./ShopProductCard"


const Shop = () => {
  return (
    <main className="shop-page">
        <PageTitle title="Shop" />

        <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 bg-gray-100 py-20">
            {booksList.map((book) => (
                <ShopProductCard key={book.id} book={book} />
            ))}
        </div>
    </main>
  )
}


export default Shop
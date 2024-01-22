"use client"

import { booksList } from "./shopItems"
import { PageTitle } from "../components/PageTitle"
import { ShopProductCard } from "./ShopProductCard"


const Shop = () => {
  return (
    <main className="shop-page">
        <h1 className="font-ovo text-white text-4xl px-5 py-14 lg:px-36 xl:px-52 bg-[url('/images/page-headers/shop-page.jpg')] bg-center bg-cover">Shop</h1>

        <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 bg-gray-100 py-20">
            {booksList.map((book) => (
                <ShopProductCard key={book.id} book={book} />
            ))}
        </div>
    </main>
  )
}


export default Shop
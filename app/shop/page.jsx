"use client"

import { booksList } from "./shopItems"
import { PageTitle } from "../components/PageTitle"
import { ProductCard } from "./productCard"


const Shop = () => {
  return (
    <main className="shot-page">
        <PageTitle title="Shop" />

        <div className="books-list grid gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 bg-gray-100 py-20 mt-24">
            {booksList.map((book) => (
                <ProductCard key={book.id} book={book} />
            ))}
        </div>
    </main>
  )
}


export default Shop
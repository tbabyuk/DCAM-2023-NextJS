"use client"


import { sightReadingBooksList } from "../../sightReadingBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { SightReadingBooksFilter } from "../../components/SightReadingBooksFilter"
import { useState } from "react"



const SightReadingBooksClientPage = () => {

  const [filterValue, setFilterValue] = useState("sight-reading-all")

    
  return (
      <>
          <SightReadingBooksFilter setFilterValue={setFilterValue} />
          <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 py-20">
          {filterValue === "sight-reading-all" && (
              sightReadingBooksList
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {filterValue === "sight-reading-rcm" && (
              sightReadingBooksList
                .filter((book) => book.category.includes("rcm"))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {filterValue === "sight-reading-non-rcm" && (
              sightReadingBooksList
                .filter((book) => book.category.includes("non-rcm"))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          </div>
      </>  
    )
}

export default SightReadingBooksClientPage

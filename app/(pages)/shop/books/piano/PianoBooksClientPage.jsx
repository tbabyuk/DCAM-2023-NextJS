"use client"


import { pianoBooksList } from "../../pianoBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { PianoBooksFilter } from "../../components/PianoBooksFilter"
import { useState } from "react"


const PianoBooksClientPage = () => {

  const [filterValue, setFilterValue] = useState("piano-all")

    
  return (
      <>
          <PianoBooksFilter setFilterValue={setFilterValue} />
          <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 py-20">
          {filterValue === "piano-all" && (
              pianoBooksList
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {filterValue === "piano-rcm" && (
              pianoBooksList
                .filter((book) => book.category.includes("rcm"))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {filterValue === "piano-non-rcm" && (
              pianoBooksList
                .filter((book) => !book.category.includes("rcm"))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          </div>
      </>  
    )
}

export default PianoBooksClientPage

"use client"


import { theoryBooksList } from "../../theoryBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { TheoryBooksFilter } from "../../components/TheoryBooksFilter"
import { useState } from "react"


const TheoryBooksPage = () => {

  const [filterValue, setFilterValue] = useState("theory-all")

    
  return (
      <>
          <TheoryBooksFilter setFilterValue={setFilterValue} />
          <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 py-20">
          {filterValue === "theory-all" && (
              theoryBooksList
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {filterValue === "theory-rcm" && (
              theoryBooksList
                .filter((book) => book.category.includes("rcm"))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )
          }
          {filterValue === "theory-non-rcm" && (
              theoryBooksList
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

export default TheoryBooksPage

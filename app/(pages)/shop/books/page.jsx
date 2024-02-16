"use client"

import { booksList } from "../shopData"
import { ShopProductCard } from "../components/ShopProductCard"
import { BooksFilter } from "../BooksFilter"
import { useState } from "react"


const ShopBooksPage = () => {

  const [instrumentValue, setInstrumentValue] = useState("piano")
  const [scopeValue, setScopeValue] = useState("all")

  const handleInstrumentValue = (value) => {
    setInstrumentValue(value)
  }

  const handleScopeValue = (value) => {
    setScopeValue(value)
  }

  console.log("instrument:", instrumentValue, "scope:", scopeValue)

    
  return (
      <>
          <div className="px-5 lg:px-36">
            <BooksFilter handleInstrumentValue={handleInstrumentValue} handleScopeValue={handleScopeValue} />
          </div>
          <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 py-20">
          {scopeValue === "all" ? (
              booksList
                .filter((book) => book.category.includes(instrumentValue))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            ) : (
              booksList
                .filter((book) => book.category.includes(instrumentValue) && book.category.includes(scopeValue))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )}
          </div>
      </>  
    )
}

export default ShopBooksPage

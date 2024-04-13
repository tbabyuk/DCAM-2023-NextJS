"use client"

import { guitarBooksList } from "../../guitarBooksData"
import { ShopProductCard } from "../../components/ShopProductCard"
import { GuitarBooksFilter } from "../../components/GuitarBooksFilter"
import { useState } from "react"


const GuitarBooksPage = () => {

  const [instrumentValue, setInstrumentValue] = useState("guitar")
  const [scopeValue, setScopeValue] = useState("all")


  console.log("Logging scope value from Guitar Books Page:", scopeValue)

  const handleInstrumentValue = (value) => {
    setInstrumentValue(value)
  }

  const handleScopeValue = (value) => {
    setScopeValue(value)
  }

  console.log("instrument:", instrumentValue, "scope:", scopeValue)

    
  return (
      <>
          <GuitarBooksFilter handleInstrumentValue={handleInstrumentValue} handleScopeValue={handleScopeValue} />
          <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-5 lg:px-36 py-20">
          {scopeValue === "all" ? (
              guitarBooksList
                .filter((book) => book.category.includes(instrumentValue))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            ) : (
              guitarBooksList
                .filter((book) => book.category.includes(scopeValue))
                .map((product) => (
                  <ShopProductCard key={product.id} product={product} productType="book" />
                ))
            )}
          </div>
      </>  
    )
}

export default GuitarBooksPage

"use client"

import { AddToCartButton } from "./AddToCartButton"
import Link from "next/link"
import { usePathname } from "next/navigation"


export const ShopProductCard = ({product, productType}) => {

  const path = usePathname()


  console.log("logging current path:", path)


  // PRODUCT CARD JSX IS DIFFERENT DEPENDING ON PRODUCT TYPE

  if(productType === "book") { 

  return (
        <div className="product-card mx-auto text-center flex flex-col" style={{width: "250px", height: "380px"}}>
            <Link className="h-[35%]" href={`${path}/${product.slug}`}>
                <img className="mx-auto h-full" src={product.source} alt={product.title} />
            </Link>
            <div className="h-[65%] px-5 product-description flex flex-col justify-evenly">
                <h3 className="text-sm font-semibold">{product.title}</h3>
                {product.author && <small>Author: {product.author}</small>}
                {product.publisher && <small>Publisher: {product.publisher}</small>}
                {product.edition && <small>Edition: {product.edition}</small> }
                <small>${product.price}</small>
                <AddToCartButton item={product} id={product.id} origin="shop" />
            </div>
        </div>  
  )
}


  if(productType === "giftCertificate") { 

  return (
    <div className="product-card mx-auto text-center flex flex-col" style={{width: "250px", height: "380px"}}>
        <div className="h-[35%]">
            <img className="mx-auto h-full" src={product.source} alt={product.title} />
        </div>
        <div className="h-[65%] px-5 product-description flex flex-col justify-evenly">
            <h3 className="text-sm font-semibold">{product.title}</h3>
            <small>Number of lessons: {product.numOfLessons}</small>
            <small>Lesson duration: {product.lessonDuration}</small>
            <small>${product.price}</small>
            <AddToCartButton item={product} id={product.id} origin="shop" />
        </div>
    </div>  
  )
}
}
"use client"


export const ProductCard = ({book}) => {
  return (
    <div className="mx-auto text-center shadow-lg" style={{width: "250px"}}>
        <div className="flex">
            <img className="self-center" style={{width: "100%"}} src={book.imageUrl} />
        </div>
        <div className="product-description py-2 flex flex-col">
            <h3 className="py-1 text-sm font-semibold">{book.title}</h3>
            <small className="py-1">Author: {book.author}</small>
            <small className="py-1">Publisher: {book.author}</small>
            <small className="py-1">{book.price}</small>
            <button className="bg-green-700">Add to Cart</button>
        </div>
    </div>  
  )
}
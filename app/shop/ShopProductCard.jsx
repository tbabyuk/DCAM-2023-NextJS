import { AddToCartButton } from "./AddToCartButton"

export const ShopProductCard = ({book}) => {
  return (
    <div className="product-card mx-auto text-center flex flex-col" style={{width: "250px", height: "380px"}}>
        <div className="h-[35%]">
            <img className="mx-auto h-full" src={book.imageUrl} alt={book.title} />
        </div>
        <div className="h-[65%] px-5 product-description flex flex-col justify-evenly">
            <h3 className="text-sm font-semibold">{book.title}</h3>
            <small>Author: {book.author}</small>
            <small>Publisher: {book.author}</small>
            <small>${book.price}</small>
            <AddToCartButton item={book} id={book.id} origin="shop" />
        </div>
    </div>  
  )
}
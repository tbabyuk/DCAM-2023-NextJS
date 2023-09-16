


export const CartProductCard = ({item}) => {
  return (
    <div className="product-card grid grid-cols-5 shadow-lg h-[200px]">
        <div>
            <img className="h-full" src={item.imageUrl} alt={item.title} />
        </div>
        <div className="px-5 product-description flex flex-col justify-center">
            <h3 className="py-1 text-sm font-semibold">{item.title}</h3>
            <small className="py-1">Author: {item.author}</small>
            <small className="py-1">Publisher: {item.author}</small>
            <small className="py-1">${item.price}</small>
            {/* <AddToCartButton itemName={item.title} itemId={item.id} /> */}
        </div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>
        <div></div>
        <div>2</div>
    </div>  
  )
}


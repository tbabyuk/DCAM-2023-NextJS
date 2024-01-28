

export const ShopProductCategoryCard = ({product}) => {
  return (
    
    <a className="w-[250px] h-auto rounded-lg shadow-md overflow-hidden cursor-pointer hover:rotate-2" href={product.productPage}>
        <div className="text-gray-100 text-center font-semibold bg-regRed py-2">{product.category}</div>
        <div className="w-full h-auto">
            <img
                src={product.source}
                alt="Photo of teacher Matthew"
                className="h-full w-full object-cover"
            />
        </div>
    </a>
  )
}

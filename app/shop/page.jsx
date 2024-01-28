
import { shopProductsCategoriesArray } from "../data"
import { ShopProductCategoryCard } from "../components/ShopProductCategoryCard"


const Shop = () => {
  return (
    <main className="shop px-5 lg:px-36 xl:px-52 py-20">
      <div className="teachers-container flex flex-wrap gap-10 justify-center">
          {shopProductsCategoriesArray.map((product, index) => (
            <ShopProductCategoryCard key={index} product={product} />
          ))}
      </div>
    </main>
  )
}

export default Shop
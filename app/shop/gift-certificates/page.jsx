import { booksList } from "../shopItems"
import { ShopProductCard } from "../ShopProductCard"
import { giftCertificatesList } from "../shopItems"

const ShopGiftCertificatesPage = () => {
    
  return (
    <main className="books-page">
        <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 px-5 lg:px-36 bg-gray-100 py-20">
            {giftCertificatesList.map((product) => (
                <ShopProductCard key={product.id} product={product} productType="giftCertificate" />
            ))}
        </div>
    </main>
  )
}

export default ShopGiftCertificatesPage
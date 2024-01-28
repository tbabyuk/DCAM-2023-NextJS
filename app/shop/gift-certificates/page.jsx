import { booksList } from "../shopItems"
import { GiftCertificateProductCard } from "../GiftCertificateProductCard"
import { giftCertificatesList } from "../shopItems"

const ShopGiftCertificatesPage = () => {
    
  return (
    <main className="books-page">
        <div className="books-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 px-5 lg:px-36 bg-gray-100 py-20">
            {giftCertificatesList.map((certificate, index) => (
                <GiftCertificateProductCard key={index} certificate={certificate} />
            ))}
        </div>
    </main>
  )
}

export default ShopGiftCertificatesPage

"use client"

import { ShopProductCard } from "../components/ShopProductCard"
import { giftCertificatesList } from "../shopData"

const ShopGiftCertificatesPage = () => {
    
  return (
      <div className="certificates-list grid gap-y-28 sm:grid-cols-2 md:grid-cols-3 px-5 lg:px-36 py-20">
          {giftCertificatesList.map((product) => (
              <ShopProductCard key={product.id} product={product} productType="giftCertificate" />
          ))}
      </div>
  )
}

export default ShopGiftCertificatesPage
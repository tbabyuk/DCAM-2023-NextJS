import Link from "next/link"


export const ShopOverlay = () => {

  return (
        <Link href="/shop" className="absolute hidden md:block top-0 left-0 -rotate-12 w-[300px] z-[2] cursor-pointer">
            <img src="/images/shop/shop-overlay-image.png" />
        </Link>  
    )
}
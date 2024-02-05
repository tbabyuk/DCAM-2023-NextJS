


const ShopLayout = ({ children }) => {
  return (
      <main className="shop-page pb-36">
          <h1 className="font-ovo text-white text-4xl px-5 py-14 lg:px-36 xl:px-52 bg-[url('/images/page-headers/shop-page.jpg')] bg-center bg-cover">Shop</h1>
          {children}
      </main>
    )
}

export default ShopLayout
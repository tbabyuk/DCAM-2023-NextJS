import SightReadingBooksClientPage from "./SightReadingBooksClientPage"


export const metadata = {
  title: "Shop - Sight Reading and Ear Training Books | Da Capo Academy of Music",
  description: "Shop for sight reading and ear training books at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop - Sight Reading and Ear Training Books | Da Capo Academy of Music",
      description: "Shop for sight reading and ear training books at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
      url: "https://dacapomusic.ca/shop/books/sight-reading",
      siteName: "Da Capo Academy of Music",
      locale: "en_US",
      type: "article"
  }
}


const SightReadingBooksPage = () => {

  return (
      <SightReadingBooksClientPage />
    )
}

export default SightReadingBooksPage

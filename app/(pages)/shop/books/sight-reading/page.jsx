import SightReadingBooksClientPage from "./SightReadingBooksClientPage"


export const metadata = {
  title: "Shop for Sight Reading and Ear Training Books | Da Capo Academy of Music",
  description: "Shop for sight reading and ear training books",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop for Sight Reading and Ear Training Books | Da Capo Academy of Music",
      description: "Shop for sight reading and ear training books",
      url: "https://dacapomusic.ca/shop/books/piano",
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

import TheoryBooksClientPage from "./TheoryBooksClientPage"


export const metadata = {
  title: "Shop - Music Theory Books | Da Capo Academy of Music",
  description: "Shop for music theory books at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop - Music Theory Books | Da Capo Academy of Music",
      description: "Shop for music theory books at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
      url: "https://dacapomusic.ca/shop/books/theory",
      siteName: "Da Capo Academy of Music",
      locale: "en_US",
      type: "article"
  }
}


const TheoryBooksPage = () => {

  return (
      <TheoryBooksClientPage />
    )
}

export default TheoryBooksPage

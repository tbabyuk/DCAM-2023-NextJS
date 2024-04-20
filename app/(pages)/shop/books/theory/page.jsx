import TheoryBooksClientPage from "./TheoryBooksClientPage"


export const metadata = {
  title: "Shop for Music Theory Books | Da Capo Academy of Music",
  description: "Shop for music theory books",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop for Music Theory Books | Da Capo Academy of Music",
      description: "Shop for music theory books",
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

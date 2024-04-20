import PianoBooksClientPage from "./PianoBooksClientPage"


export const metadata = {
  title: "Shop for Piano Books | Da Capo Academy of Music",
  description: "Shop for piano books",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop for Piano Books | Da Capo Academy of Music",
      description: "Shop for piano books",
      url: "https://dacapomusic.ca/shop/books/piano",
      siteName: "Da Capo Academy of Music",
      locale: "en_US",
      type: "article"
  }
}


const PianoBooksPage = () => {


  return (
      <PianoBooksClientPage />
    )
}

export default PianoBooksPage

import PianoBooksClientPage from "./PianoBooksClientPage"


export const metadata = {
  title: "Shop - Piano Books | Da Capo Academy of Music",
  description: "Shop for piano books at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Shop - Piano Books | Da Capo Academy of Music",
      description: "Shop for piano books at our online store! New items are constantly being added. Fast local delivery is available for Etobicoke, Toronto and the Greater Toronto Area, but we ship all across Canada!",
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

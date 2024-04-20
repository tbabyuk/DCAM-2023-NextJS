import { pianoBooksList } from "../../../pianoBooksData"
import { AddToCartButton } from "../../../components/AddToCartButton"
import { BookSpecsDropdown } from "../../../components/BookSpecsDropdown"


export async function generateStaticParams() {
  return pianoBooksList.map((book) => ({
      slug: book.slug
  }))
}

export async function generateMetadata({params}) {

  const targetBook = pianoBooksList.find((book) => book.slug == params.slug)

  return {
    title: `${targetBook.title} | Da Capo Academy of Music Shop`,
    description: targetBook.description
  }
}


const SingleBookPage = ({params}) => {

  const targetBook = pianoBooksList.find((book) => book.slug == params.slug)


  console.log("logging target book:", targetBook)

  return (
    <div className="px-5 lg:px-36 xl:px-52 py-12 bg-gray-100">
        <div className="bg-white p-5 flex flex-col sm:flex-row gap-5">
            <div className="flex-1 mb-8 sm:mb-0">
              <img className="mx-auto w-[73%]" src={targetBook.source} alt={targetBook.title} />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-2xl mb-6">{targetBook.title}</h1>
              <p className="mb-6">Price: <span className="text-green-500 font-semibold">${targetBook.price}</span></p>
              <p className="mb-6">Stock Status: {targetBook.stock ? <span className="text-green-500 font-semibold">{targetBook.stock}</span> : <span className="text-red-500 font-semibold">out of stock</span>}</p>
              <p className="mb-6">Quantity: <span className="text-sm font-semibold">you will be able to change the quantity inside the cart</span></p>
              <p className="border-2 border-gray-200 p-3 mb-6 leading-6">{targetBook.description}</p>
              <AddToCartButton item={targetBook} id={targetBook.id} origin="shop"/>
              {/* add a dropdown menu with specs */}
              <BookSpecsDropdown className="mt-6" item={targetBook} />
            </div>
        </div>
    </div>
  )
}

export default SingleBookPage
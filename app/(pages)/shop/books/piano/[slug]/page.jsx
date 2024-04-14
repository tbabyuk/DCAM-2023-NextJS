

import { pianoBooksList } from "../../../pianoBooksData"
import { AddToCartButton } from "../../../components/AddToCartButton"


const SingleBookPage = ({params}) => {

  const targetBook = pianoBooksList.find((book) => book.slug == params.slug)


  console.log("logging target book:", targetBook)

  return (
    <div className="px-5 lg:px-36 xl:px-52 py-12 bg-gray-100">
        <div className="bg-white p-5 flex flex-col sm:flex-row">
            <div className="flex-1 mb-8 sm:mb-0">
              <img className="mx-auto h-full" src={targetBook.source} alt={targetBook.title} />
            </div>
            <div className="flex-1">
              <h1 className="font-bold text-2xl mb-6">{targetBook.title}</h1>
              <p className="mb-6">Price: ${targetBook.price}</p>
              {/* <p>Stock Status:</p> */}
              <p className="mb-6">Quantity: <span className="text-sm font-semibold">you will be able to change the quantity inside the cart</span></p>
              <p className="border-2 border-gray-200 p-3 mb-6 leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique fugit, pariatur aperiam adipisci facere cumque mollitia, earum, a rem suscipit vero! Doloribus incidunt temporibus mollitia nobis magni pariatur, totam omnis?</p>
              <AddToCartButton item={targetBook} id={targetBook.id} origin="shop"/>
              {/* add a dropdown menu with specs */}
            </div>
        </div>
    </div>
  )
}

export default SingleBookPage
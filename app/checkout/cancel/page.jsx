import Link from "next/link"



const Cancel = () => {
    return (
      <>
        <div className="text-center text-red-500 text-[1.5rem] mt-28">Ooops, something went wrong! Try again later!</div>
        <div className="text-center mt-4 text-[1.5rem]"><Link href="/shop" className="dcam-link">Back to Shop</Link></div>
      </>
    )
  }
  
  export default Cancel
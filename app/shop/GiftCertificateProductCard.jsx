
import { AddToCartButton } from "./AddToCartButton"

export const GiftCertificateProductCard = ({certificate}) => {
  return (
    <div className="product-card mx-auto text-center flex flex-col" style={{width: "250px", height: "380px"}}>
        <div className="h-[35%]">
            <img className="mx-auto h-full" src={certificate.source} alt={certificate.title} />
        </div>
        <div className="h-[65%] px-5 product-description flex flex-col justify-evenly">
            <h3 className="text-sm font-semibold">{certificate.title}</h3>
            <small>Number of lessons: {certificate.numOfLessons}</small>
            <small>Lesson duration: {certificate.lessonDuration}</small>
            <small>${certificate.price}</small>
            <AddToCartButton item={certificate} id={certificate.id} origin="shop" />
        </div>
    </div>  
  )
}
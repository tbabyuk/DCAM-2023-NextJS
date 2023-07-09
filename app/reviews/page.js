
import ReviewCard from "../components/ReviewCard";
import Link from "next/link";
import { PageTitle } from "../components/PageTitle";


const fetchReviews = async () => {
     const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJxzCGYLs3K4gR0hG4dhYU8mk&key=${process.env.API_KEY}&fields=reviews&maxheight=10`)

    const data = await res.json()
    return (
        data.result.reviews
    )
} 


const Reviews = async () => {
    const reviews = await fetchReviews()


    return ( 
        <main className="reviews-page px-5 md:px-20 lg:px-40 xl:px-80">
            <PageTitle title={"Reviews"} />

            {reviews && 
                reviews.map((review) => <ReviewCard review={review} />
            )}
            
            <div className="text-center mt-10"><Link href="https://search.google.com/local/reviews?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk" target="_blank" className="hover:text-lightRed">See All Reviews...</Link></div>
        </main>
     );
}
 
export default Reviews;
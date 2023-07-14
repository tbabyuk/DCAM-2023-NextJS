
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
        <main className="reviews-page">
            <PageTitle title="Reviews" />

            <section className="overview flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-20 mt-24">
                {reviews && 
                    reviews.map((review) => <ReviewCard review={review} />
                )}
                
                <div className="text-center mt-10"><a href="https://search.google.com/local/reviews?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk" target="_blank" className="hover:text-lightRed">See All Reviews...</a></div>
            </section>
        </main>
     );
}
 
export default Reviews;
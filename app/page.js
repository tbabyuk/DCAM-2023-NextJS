
import Link from "next/link"
import 'material-symbols';
import { PageTitle } from "./components/PageTitle";
import ReviewCard from "./components/ReviewCard";
import {BsPeopleFill, BsFillCalendar2DayFill} from "react-icons/bs"


const fetchReviews = async () => {
  const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJxzCGYLs3K4gR0hG4dhYU8mk&key=${process.env.API_KEY}&fields=reviews&maxheight=10`)

  const data = await res.json()
  
  return (
     data.result.reviews
 )
} 

async function Home() {
  const reviews = await fetchReviews()

  return (
    <main>
          <div className="px-5 pb-28">
            <h1 className="text-5xl font-ovo text-regRed mb-4 block text-center">Music Lessons in Etobicoke</h1>
            <h2 className="text-3xl font-ovo font-semibold mb-4 text-center text-gray-600">Humbertown Shopping Centre</h2>
            <h3 className="text-xl font-ovo font-semibold text-center text-gray-600">270 The Kingsway, Etobicoke, ON M9A 3T7</h3>
          </div>
             
          <section className="intro flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-28">
            <div className="md:flex md:items-center">
                <img src="/lessons/piano_lessons.jpg" className="mx-auto md:me-5 mb-5 md:h-80 rounded-md" />
                <p>Located in the beautiful Etobicoke neighbourhood of Humber Valley Village since 2018, Da Capo Academy of Music (DCAM) offers music lessons to students of all ages and skill levels. Our amazing team of teachers are passionate musicians who love to share their passion with their students. Have an instrument you are keen on learning? Great! Fill out our "Free Trial Lesson" form and come in for a free, no-obligation trial lesson! <br /><br />
                Please explore our website to learn more about us. If you have a question, call us during our business hours or send us an email at <a href = "mailto: info@dacapomusic.ca" className="dcam-link">info@dacapomusic.ca</a> and we will get back to you as possible!
                </p>
            </div>
          </section>

          <section className="offers px-5 lg:px-36 xl:px-52 py-28">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-4 border-b font-ovo">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
                <div className="flex">
                    <span className="material-symbols-outlined" style={{fontSize: "50px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>group</span>
                    <div className="ps-6">
                      <h4 className="text-2xl font-ovo font-semibold text-regRed">ALL AGES & LEVELS</h4>
                      <p>Lessons for children, adults and even toddlers!</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined" style={{fontSize: "50px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>school</span>
                    <div className="ps-6">
                      <h4 className="text-2xl font-ovo font-semibold text-regRed">EXAM PREP</h4>
                      <p>We prepare students for RCM and other music exams</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined" style={{fontSize: "50px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>calendar_month</span>
                    <div className="ps-6">
                      <h4 className="text-2xl font-ovo font-semibold text-regRed">FLEXIBILITY</h4>
                      <p>Choose 30-minute, 45-minute, or 1-hour lessons</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined" style={{fontSize: "50px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>store</span>
                    <div className="ps-6">
                      <h4 className="text-2xl font-ovo font-semibold text-regRed">GREAT VENUE</h4>
                      <p>Individual music rooms, recital area and a lounge</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined" style={{fontSize: "50px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>pin_drop</span>
                    <div className="ps-6">
                        <h4 className="text-2xl font-ovo font-semibold text-regRed">GOOD LOCATION</h4>
                        <p>Humbertown Plaza: free parking, shops and cafés</p>
                    </div>        
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined" style={{fontSize: "50px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>account_balance_wallet</span>
                    <div className="ps-6">
                        <h4 className="text-2xl font-ovo font-semibold text-regRed">AWESOME DEALS</h4>
                        <p>Referral incentives and family member discounts!</p>
                    </div> 
                </div>
            </div>
          </section>

          <section className="reviews px-5 lg:px-36 xl:px-52 py-28">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-4 border-b font-ovo">What Our Customers Say</h2>
            {reviews && 
              reviews.map((review) => (
                <ReviewCard review={review} />
              )
            )}
            <div className="text-center mt-10"><a href="https://search.google.com/local/reviews?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk" target="_blank" className="hover:text-lightRed">See All Reviews...</a></div>
          </section>
    </main>
  )
}

export default Home;

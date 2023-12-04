import 'material-symbols';
import { ReviewCard } from "./components/ReviewCard";
import { InstrumentsSlider } from './components/InstrumentsSlider';


export const metadata = {
  title: "Home | Da Capo Academy of Music",
  description: "Music lessons in Etobicoke",
  robots: { index: true, follow: true},
  authors: [{name: "Taras (Terry) Babyuk"}],
  openGraph: {
      title: "Home | Da Capo Academy of Music",
      description: "Music lessons in Etobicoke",
      url: "https://dacapomusic.ca/",
      siteName: "Da Capo Academy of Music",
      locale: "en_US",
      type: "website",
      // publishedTime: "2020-07-27T22:12:00+00:00",
      // images: [    
      //     {
      //         url: "https://firebasestorage.googleapis.com/v0/b/dcam-website.appspot.com/o/blog_images%2Feasy-chopin-waltzes%2Feasy_chopin_waltzes_cover.jpg?alt=media&token=b08eb378-7fc7-440c-95ac-199b39f5f89f",
      //         width: 1200,
      //         height: 628,
      //         type: "image/jpeg"
      //     }
      // ],
  },
}


const fetchReviews = async () => {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJxzCGYLs3K4gR0hG4dhYU8mk&key=${process.env.API_KEY}&fields=reviews&maxheight=10`, {
      next: {
          revalidate: 604800
      }
    })
  const data = await res.json()
  return data.result.reviews
}


const Home = async () => {
  const reviews = await fetchReviews()

  return (
    <main>
          <div className="px-5 pb-28">
            <h1 className="text-5xl font-ovo text-regRed mb-4 block text-center">Music Lessons in Etobicoke</h1>
            <h2 className="text-3xl font-ovo font-semibold mb-4 text-center text-gray-600">Humbertown Shopping Centre</h2>
            <h3 className="text-xl font-ovo font-semibold text-center text-gray-600">270 The Kingsway, Etobicoke, ON M9A 3T7</h3>
          </div>
             
          <section className="intro leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 bg-gray-100 py-28">
              <div className="flex flex-col md:flex-row">
                  <figure className="flex-shrink-0 md:me-10 mb-10 md:mb-0 mx-auto">
                        <img src="/lessons/piano_lessons.jpg" className="rounded-xl shadow-lg" style={{width: "220px"}} alt="lesson in progress" />
                  </figure>
                  <div className="hyphens-auto">
                        <p>Located in the beautiful Etobicoke neighbourhood of Humber Valley Village since 2018, Da Capo Academy of Music (DCAM) offers music lessons to students of all ages and skill levels. Our amazing team of teachers are passionate musicians who love to share their passion with their students. Have an instrument you are keen on learning? Great! Fill out our "Free Trial Lesson" form and come in for a free, no-obligation trial lesson!</p><br />
                        <p>Please explore our website to learn more about us. If you have a question, call us during our business hours or send us an email at <a href = "mailto: info@dacapomusic.ca" className="dcam-link">info@dacapomusic.ca</a> and we will get back to you as possible!</p>
                  </div>
              </div>

          </section>

          <section className="instruments xl:px-28 py-28">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-4 font-ovo">INSTRUMENTS</h2>
            <InstrumentsSlider />
          </section>

          <section className="offers px-5 lg:px-36 xl:px-52 py-28 bg-gray-100">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-4 font-ovo">WHAT WE OFFER</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>group</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h2 className="text-xl font-ovo font-semibold text-regRed">ALL AGES & LEVELS</h2>
                      <p>Lessons for children, adults and even toddlers!</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>school</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h4 className="text-xl font-ovo font-semibold text-regRed">EXAM PREP</h4>
                      <p>We prepare students for RCM and other music exams</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>calendar_month</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h4 className="text-xl font-ovo font-semibold text-regRed">FLEXIBILITY</h4>
                      <p>Choose 30-minute, 45-minute, or 1-hour lessons</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>store</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h4 className="text-xl font-ovo font-semibold text-regRed">NICE VENUE</h4>
                      <p>Individual music rooms, recital area and a lounge</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>pin_drop</span>
                    <div className="ps-6 flex flex-col justify-center">
                        <h4 className="text-xl font-ovo font-semibold text-regRed">GREAT LOCATION</h4>
                        <p>Humbertown Plaza: free parking, shops and cafés</p>
                    </div>        
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>account_balance_wallet</span>
                    <div className="ps-6 flex flex-col justify-center">
                        <h4 className="text-xl font-ovo font-semibold text-regRed">AWESOME DEALS</h4>
                        <p>Referral incentives and family member discounts!</p>
                    </div> 
                </div>
            </div>
          </section>

          <section className="reviews px-5 lg:px-36 xl:px-52 py-28">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-4 font-ovo">WHAT OUR CUSTOMERS SAY</h2>
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

import 'material-symbols';
import { ReviewCard } from "../components/ReviewCard";
import { InstrumentsSlider } from '../components/InstrumentsSlider';
import { TopPopup } from '../components/TopPopup';
import { TeacherCard } from '../components/TeacherCard';
import { ShopProductCategoryCard } from '../(pages)/shop/components/ShopProductCategoryCard';
import { shopProductCategoriesArray } from '../(pages)/shop/shopData';
import { VisitPageButton } from '../components/VisitPageButton';
import Image from 'next/image';
import { homePageTeachersArray } from '../data/teachers';


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
    <main className="mb-36">
          <div className="px-5 py-20 relative">
            {/* <img src="/images/decorative/spiral-dark-blue.png" className="absolute h-[100px]" /> */}
            <h1 className="text-5xl font-ovo text-regRed mb-4 block text-center">Music Lessons in Etobicoke</h1>
            <h2 className="text-3xl font-ovo font-semibold mb-4 text-center text-gray-600 roboto">Humbertown Shopping Centre</h2>
            <h3 className="text-xl font-ovo font-semibold text-center text-gray-600 roboto">270 The Kingsway, Etobicoke, ON M9A 3T7</h3>
          </div>
             
          <section className="intro leading-8 flex flex-col items-center sm:block px-5 lg:px-36 xl:px-52 text-white bg-dcam-blue-400 py-20 relative">
              <img src="/notes-light.svg" className="absolute left-6 top-6 w-[110px]" />
              <img src="/notes-light.svg" className="absolute right-8 bottom-8 w-[110px]" />
              <div className="flex flex-col md:flex-row">
                  <figure className="flex-shrink-0 mb-8 sm:me-8 float-left">
                      <Image src="/lessons/piano_lesson.png" className="mx-auto" width="230" height="230" alt="lesson in progress" unoptimized />
                  </figure>
                  <p className="hyphens-auto">Located in the beautiful Etobicoke neighbourhood of Humber Valley Village since 2018, Da Capo Academy of Music (DCAM) offers music lessons to students of all ages and skill levels. Our amazing team of teachers are passionate musicians who love to share their passion with their students. Have an instrument you are keen on learning? Great! Fill out our "Free Trial Lesson" form and come in for a free, no-obligation trial lesson!<br /><br />
                  Please explore our website to learn more about us. If you have a question, call us during our business hours or send us an email at <a href = "mailto: info@dacapomusic.ca" className="dcam-link">info@dacapomusic.ca</a> and we will get back to you as possible!</p>
              </div>
          </section>

          {/* INSTRUMENTS SECTION */}
          <section className="instruments xl:px-28 py-20">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-2 font-ovo">INSTRUMENTS</h2>
            <InstrumentsSlider />
          </section>

          {/* OFFERS SECTION */}
          <section className="offers px-5 lg:px-36 xl:px-52 py-20 text-white bg-dcam-blue-400 relative">
            <img src="/notes-light.svg" className="absolute left-3 top-3 w-[110px]" />
            <img src="/notes-light.svg" className="absolute right-2 bottom-2 w-[110px]" />
            <h2 className="mb-20 text-center text-3xl font-semibold pb-2 font-ovo">WHAT WE OFFER</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10">
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#F3F4F6", border: "4px solid #F3F4F6", borderRadius: "50%", padding: "15px"}}>group</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h2 className="text-xl font-ovo font-semibold">ALL AGES & LEVELS</h2>
                      <p>Lessons for children, adults and even toddlers!</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#F3F4F6", border: "4px solid #F3F4F6", borderRadius: "50%", padding: "15px"}}>school</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h4 className="text-xl font-ovo font-semibold">EXAM PREP</h4>
                      <p>We prepare students for RCM and other music exams</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#F3F4F6", border: "4px solid #F3F4F6", borderRadius: "50%", padding: "15px"}}>calendar_month</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h4 className="text-xl font-ovo font-semibold">FLEXIBILITY</h4>
                      <p>Choose 30-minute, 45-minute, or 1-hour lessons</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#F3F4F6", border: "4px solid #F3F4F6", borderRadius: "50%", padding: "15px"}}>store</span>
                    <div className="ps-6 flex flex-col justify-center">
                      <h4 className="text-xl font-ovo font-semibold">WONDERFUL VENUE</h4>
                      <p>Individual music rooms, recital area and a lounge</p>
                    </div>
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#F3F4F6", border: "4px solid #F3F4F6", borderRadius: "50%", padding: "15px"}}>pin_drop</span>
                    <div className="ps-6 flex flex-col justify-center">
                        <h4 className="text-xl font-ovo font-semibold">GREAT LOCATION</h4>
                        <p>Humbertown Plaza: free parking, shops and cafés</p>
                    </div>        
                </div>
                <div className="flex">
                    <span className="material-symbols-outlined flex-shrink-0" style={{fontSize: "45px", color: "#F3F4F6", border: "4px solid #F3F4F6", borderRadius: "50%", padding: "15px"}}>account_balance_wallet</span>
                    <div className="ps-6 flex flex-col justify-center">
                        <h4 className="text-xl font-ovo font-semibold">AWESOME DEALS</h4>
                        <p>Referral incentives and family member discounts!</p>
                    </div> 
                </div>
            </div>
          </section>

          {/* TEACHERS SECTION */}
          <section className="teachers px-5 lg:px-36 py-20">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-2 font-ovo">OUR TEACHERS</h2>
            <div className="teachers-container flex flex-wrap gap-7 justify-center">
              {homePageTeachersArray.map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} />
              ))}
            </div>
            <VisitPageButton text="Visit Teachers Page" link="/teachers" />
          </section>


          {/* SHOP SECTION */}
          <section className="shop px-5 lg:px-36 xl:px-52 py-20 bg-dcam-blue-400 relative">
            <img src="/notes-light.svg" className="absolute left-2 top-4 w-[110px]" />
            <img src="/notes-light.svg" className="absolute right-2 bottom-4 w-[110px]" />
            <h2 className="mb-10 text-center text-3xl text-gray-100 font-semibold pb-2 font-ovo">SHOP</h2>
            <p className="mb-16 text-gray-100">Shop local! Visit our online shop for your music book needs! Pick up your order either in person at our school or have it shipped to your address! We currently ship to Canadian residents only.</p>
              <div className="teachers-container flex flex-wrap gap-10 justify-center mb-20">
                {shopProductCategoriesArray.map((product, index) => (
                  <ShopProductCategoryCard key={index} product={product} />
                ))}
              </div>
            <VisitPageButton text="Visit Shop" link="/shop" />
          </section>


          {/* REVIEWS SECTION */}
          <section className="reviews px-5 lg:px-36 xl:px-52 py-20">
            <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-4 font-ovo">WHAT OUR CUSTOMERS SAY</h2>
            {reviews && 
              reviews.map((review) => (
                <ReviewCard review={review} />
              )
            )}
            <a href="https://search.google.com/local/reviews?placeid=ChIJxzCGYLs3K4gR0hG4dhYU8mk" target="_blank">
              <button className="visit-page-button block mx-auto">See All Reviews</button>
            </a>
          </section>
          {/* TOGGLE POPUP BELOW */}
          {/* <TopPopup /> */}
    </main>
  )
}

export default Home;

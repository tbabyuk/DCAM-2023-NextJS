
import Link from "next/link"
import 'material-symbols';


import {BsPeopleFill, BsFillCalendar2DayFill} from "react-icons/bs"


export default function Home() {
  return (
    <main>
        <section className="offers px-5 lg:px-40">
          <h2 className="mb-20 text-center text-3xl text-regRed font-semibold pb-2 border-b font-ovo">What We Offer</h2>

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
                    <p>We prepare students for all types of music exams</p>
                  </div>
              </div>
              <div className="flex">
                  <span className="material-symbols-outlined" style={{fontSize: "50px", color: "#5BC0EB", border: "4px solid #5BC0EB", borderRadius: "50%", padding: "15px"}}>calendar_month</span>
                  <div className="ps-6">
                    <h4 className="text-2xl font-ovo font-semibold text-regRed">FLEXIBILITY</h4>
                    <p>Choose 1-hour, 45-minute, or 30-minute lessons</p>
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
    </main>
  )
}

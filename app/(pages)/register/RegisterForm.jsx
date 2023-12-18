"use client"


import { useState } from "react"


export const RegisterForm = () => {

  const [studentName, setStudentName] = useState("")
  const [parentName, setParentName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [instrument, setInstrument] = useState("choose instrument")
  const [lessonType, setLessonType] = useState("private")
  const [lessonDuration, setLessonDuration] = useState("30")
  const [lessonFrequency, setLessonFrequency] = useState("once-a-week")
  const [lessonDays, setLessonDays] = useState({
    "monday": false,
    "tuesday": false,
    "wednesday": false,
    "thursday": false,
    "saturday": false
  })
  const [source, setSource] = useState("choose option")
  const [comments, setComments] = useState("")


  const handleLessonDays = (day) => {
    setLessonDays({...lessonDays, [day]: !lessonDays[day]})
  }


  const [submitting, setSubmitting] = useState(false)
  const [showSuccessResponse, setShowSuccessResponse] = useState(false)
  const [showErrorResponse, setShowErrorResponse] = useState(false)
  


  const handleSubmit = async (e) => {

    e.preventDefault()

    setSubmitting(true)
    const response = await fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            student: studentName.trim(),
            parent: parentName.trim(),
            phone: phone.trim(),
            email: email.trim(),
            instrument,
            lessonType,
            lessonDuration,
            lessonFrequency,
            lessonDays,
            source,
            comments: comments.trim()
        })
    })


    if(response.status === 200) {
        console.log("status is:", response.status)
        const responseData = await response.json()
        console.log("responseData from ok:", responseData.message)
        setSubmitting(false)
        setShowSuccessResponse(true)
    } else {
        console.log("status is:", response.status)
        const responseData = await response.json()
        console.log("responseData from error:", responseData.error)
        setSubmitting(false)
        setShowErrorResponse(true)
    }


    // console.log(
    //     "student name:", studentName, 
    //     "parent name:", parentName, 
    //     "phone:", phone, 
    //     "email:", email,
    //     "instrument", instrument,
    //     "lesson type", lessonType,
    //     "lesson duration", lessonDuration,
    //     "lesson frequency:", lessonFrequency,
    //     "preferred days:", lessonDays,
    //     "source:", source,
    //     "comments:", comments
    // )
  }

  return (
        <>


            {showSuccessResponse ? (
                        <div className="h-full text-green-600 px-5 self-center flex flex-col text-center">           
                                <p className="mb-6">Your form was successfully submitted - thank you!</p>
                                <p className="mb-6">Please expect to hear back from us within 1-2 business days!</p><br />
                        </div>
            ) : (

                <form className="w-full sm:w-[80%] md:w-[500px] flex flex-col mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-center font-bold text-xl text-regGreen">REGISTRATION FORM</h2>
                <p className="text-xs text-center mb-10">Start your musical journey with DCAM today!</p>

                <label className="mb-6">
                    <span className="block text-sm">Student Name:</span>
                    <input 
                        type="text" 
                        className="w-full h-8 border-2 border-gray-300 ps-2 text-sm" 
                        autoFocus
                        required
                        onChange={(e) => setStudentName(e.target.value)}
                        value={studentName}
                    />
                </label>
                <label className="mb-6">
                    <span className="block text-sm">Parent/Guardian Name:</span>
                    <input 
                        type="text" 
                        className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                        required
                        onChange={(e) => setParentName(e.target.value)}
                        value={parentName}
                    />
                </label>
                <label className="mb-4">
                    <span className="block text-sm">Phone:</span>
                    <input 
                        type="tel"
                        className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </label>
                <label className="mb-4">
                    <span className="block text-sm">Email:</span>
                    <input 
                        type="email"
                        className="w-full h-8 border-2 border-gray-300 ps-2 text-sm"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label className="mb-6">
                    <span className="block text-sm">Desired Instrument:</span>
                    <select className="w-full h-8 border-2 border-gray-300 text-sm" value={instrument} onChange={(e) => {setInstrument(e.target.value)}} required>
                        <option value="choose instrument" disabled>choose instrument</option>
                        <option value="piano">piano</option>
                        <option value="guitar">guitar</option>
                        <option value="ukulele">ukulele</option>
                        <option value="drums">drums</option>
                        <option value="voice">voice</option>
                        <option value="theory">music theory</option>
                        <option value="theory">music for toddlers</option>
                        <option value="theory">intro to music</option>
                    </select>
                </label>
                {/* LESSON TYPE: PRIVATE OR SEMI-PRIVATE */}
                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm mb-4">LESSON TYPE:</span>
                    <div className="flex mb-4 text-[0.9rem]">
                        <label className="flex items-center me-10">
                            <input type="radio" name="type" value="private" checked={lessonType === "private"} onChange={e => setLessonType(e.target.value)} className="me-1" />private
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="type" value="semi-private" checked={lessonType === "semi-private"} onChange={e => setLessonType(e.target.value)} className="me-1" />semi-private
                        </label>
                    </div>
                    <span className="text-[0.8rem] font-semibold">*Note that semi-private lessons require two students to register</span>
                </div>

                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm mb-4">LESSON DURATION:</span>
                    <div className="flex mb-4 text-[0.9rem]">
                        <label className="flex items-center me-10">
                            <input type="radio" name="duration" value="30" checked={lessonDuration === "30"} onChange={e => setLessonDuration(e.target.value)} className="me-1" />30 mins
                        </label>
                        <label className="flex items-center me-10">
                            <input type="radio" name="duration" value="45" checked={lessonDuration === "45"} onChange={e => setLessonDuration(e.target.value)} className="me-1" />45 mins
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="duration" value="60" checked={lessonDuration === "60"} onChange={e => setLessonDuration(e.target.value)} className="me-1" />60 mins
                        </label>
                    </div>
                    <span className="text-[0.8rem] font-semibold">*Minimum duration of 45 mins is recommended for students 12+ or students working on Royal Conservatory Level 1 and above</span>
                </div>

                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm mb-4">LESSON FREQUENCY:</span>
                    <div className="flex text-[0.9rem]">
                        <label className="flex items-center me-10">
                            <input type="radio" name="frequency" value="once-a-week" checked={lessonFrequency === "once-a-week"} onChange={e => setLessonFrequency(e.target.value)} className="me-1" />once a week
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="frequency" value="twice-a-week" checked={lessonFrequency === "twice-a-week"} onChange={e => setLessonFrequency(e.target.value)} className="me-1" />twice a week
                        </label>
                    </div>
                </div>
                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm">PREFERRED DAY(S):</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">Please choose as many options as possible</span>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="monday" value="monday" checked={lessonDays.monday} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Monday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="tuesday" value="tuesday" checked={lessonDays.tuesday} onChange={(e) => handleLessonDays(e.target.value)}className="me-1" />Tuesday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="wednesday" value="wednesday" checked={lessonDays.wednesday} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Wednesday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="thursday" value="thursday" checked={lessonDays.thursday} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Thursday
                    </label>
                    <label className="flex items-center text-[0.9rem]">
                        <input type="checkbox" id="saturday" value="saturday" checked={lessonDays.saturday} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Saturday
                    </label>
                </div>
                <label className="mb-4">
                    <span className="block text-sm">How did you hear about us?</span>
                    <select className="w-full h-8 border-2 border-gray-300 text-sm" value={source} onChange={e => setSource(e.target.value)} required>
                        <option value="choose option" disabled>choose option</option>
                        <option value="google">google search</option>
                        <option value="humbertown">humbertown sign</option>
                        <option value="friend/relative">friend/relative</option>
                        <option value="social">social media (FB/IG)</option>
                        <option value="flyer">print flyer</option>
                        <option value="blog">blog article</option>
                        <option value="other">other</option>
                    </select>
                </label>
                <label className="mb-4">
                    <span className="block text-sm">Additional Information/Comments:</span>
                    <textarea className="w-full h-20 p-2" value={comments} onChange={e => setComments(e.target.value)} />
                </label>
                <button className="dcam-button w-full mt-3 h-10" disabled={submitting}>{submitting ? "Submitting...Please wait..." : "Submit"}</button>
            </form>

            ) 
        }

            {showErrorResponse && (
                <div className="h-full text-red-600 px-5 self-center flex flex-col text-center">           
                        <p className="mb-6">Sorry, there was a problem submitting your form. Please refresh and try again or send us a direct email at <span className="font-bold">info@dacapomusic.ca</span></p>
                </div>
            )}

        </>
    )
}

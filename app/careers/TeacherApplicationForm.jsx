
"use client"


import { useState } from "react"


export const TeacherApplicationForm = () => {

  const [teacherName, setTeacherName] = useState("")
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
                                <p className="mb-6">Your form was successfully submitted and will be in our records - thank you!</p>
                        </div>
            ) : (

                <form className="w-full sm:w-[80%] md:w-[500px] flex flex-col mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-center font-bold text-xl text-regGreen">TEACHER APPLICATION FORM</h2>
                <p className="text-xs text-center mb-10">Start your teaching career with DCAM today!</p>

                <label className="mb-6">
                    <span className="block text-sm">Name:</span>
                    <input 
                        type="text" 
                        className="w-full h-8 border-2 border-gray-300 ps-2 text-sm" 
                        autoFocus
                        required
                        onChange={(e) => setTeacherName(e.target.value)}
                        value={teacherName}
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

                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm">INSTRUMENT:</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">What instrument(s) do you specialize in that you would like to teach?</span>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="piano" value="piano" checked={lessonDays.piano} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Piano
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="guitar" value="guitar" checked={lessonDays.guitar} onChange={(e) => handleLessonDays(e.target.value)}className="me-1" />Guitar
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="drums" value="drums" checked={lessonDays.drums} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Drums
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="vocals" value="vocals" checked={lessonDays.vocals} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Vocals
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="toddlers" value="toddlers" checked={lessonDays.toddlers} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Music for Toddlers
                    </label>
                </div>

                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm">TYPE OF WORK:</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">What kind of teaching position are you interested in at the moment?</span>

                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="vocals" value="vocals" checked={lessonDays.vocals} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Permanent (regular weekly lessons)
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="toddlers" value="toddlers" checked={lessonDays.toddlers} onChange={(e) => handleLessonDays(e.target.value)} className="me-1" />Substitute (we call you when we need you)
                    </label>
                </div>

                <label className="mb-6">
                    <span className="block text-sm">How many years of teaching experience do you have:</span>
                    <select className="w-full h-8 border-2 border-gray-300 text-sm" value={instrument} onChange={(e) => {setInstrument(e.target.value)}} required>
                        <option value="choose instrument" disabled>&lt; 1 year</option>
                        <option value="choose instrument">1 - 2 years</option>
                        <option value="choose instrument">2 - 3 years</option>
                        <option value="choose instrument">&gt; 3 years</option>
                    </select>
                </label>

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
                        <option value="blog">indeed.com</option>
                        <option value="other">other</option>
                    </select>
                </label>

                <label className="mb-4">
                    <span className="block text-sm">Additional Information/Comments:</span>
                    <textarea className="w-full h-20 p-2 bg-gray-100" value={comments} onChange={e => setComments(e.target.value)} />
                </label>

                <label className="mb-4">
                    <span className="block text-sm mb-4">Upload your resume:</span>
                    <input type="file" id="myFile" name="filename" />
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

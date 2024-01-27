"use client"


import { useState, useEffect } from "react"


export const RegisterForm = () => {

  const [firstPageLoad, setFirstPageLoad] = useState(false)
  const [studentName, setStudentName] = useState("")
  const [studentNameError, setStudentNameError] = useState(null)
  const [studentNameValid, setStudentNameValid] = useState(false)

  const [parentName, setParentName] = useState("")
  const [parentNameError, setParentNameError] = useState(null)
  const [parentNameValid, setParentNameValid] = useState(false)

  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState(null)
  const [phoneValid, setPhoneValid] = useState(false)

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(null)
  const [emailValid, setEmailValid] = useState(false)

  const [instrument, setInstrument] = useState("choose instrument")
  const [instrumentError, setInstrumentError] = useState(null)
  const [instrumentValid, setInstrumentValid] = useState(false)

  const [lessonType, setLessonType] = useState("private")

  const [lessonDuration, setLessonDuration] = useState("30")
  const [lessonFrequency, setLessonFrequency] = useState("once-a-week")

  const [preferredDays, setPreferredDays] = useState({
    "monday": false,
    "tuesday": false,
    "wednesday": false,
    "thursday": false,
    "saturday": false
  })
  const [preferredDaysError, setPreferredDaysError] = useState(null)
  const [preferredDaysValid, setPreferredDaysValid] = useState(false)

  const [source, setSource] = useState("choose option")
  const [sourceError, setSourceError] = useState(null)
  const [sourceValid, setSourceValid] = useState(false)

  const [comments, setComments] = useState("")

  const [submitting, setSubmitting] = useState(false)
  const [showSuccessResponse, setShowSuccessResponse] = useState(false)
  const [showErrorResponse, setShowErrorResponse] = useState(false)

  

  const handleStudentName = (input) => {

    setStudentName(input)
    const studentNameRegex = /^[a-zA-Z ]{3,40}$/
    const studentNamePass = studentNameRegex.test(input)
    if(!studentNamePass) {
        setStudentNameError("Student name must be at least 3 characters long")
        setStudentNameValid(false)
    } else {
        setStudentNameError(null)
        setStudentNameValid(true)
    }
  }

  const handleParentName = (input) => {

    setParentName(input)
    const parentNameRegex = /^[a-zA-Z ]{3,40}$/
    const parentNamePass = parentNameRegex.test(input)
    if(!parentNamePass) {
        setParentNameError("Parent name must be at least 3 characters long")
        setParentNameValid(false)
    } else {
        setParentNameError(null)
        setParentNameValid(true)
    }
  }

  const handlePhone = (input) => {
    // update state with phone input
    setPhone(input)
    // validate phone input
    const phoneRegex = /^[\d\s()-]{10,20}$/
    const phonePass = phoneRegex.test(input)
    if(!phonePass) {
        setPhoneError("Phone number can only contain numbers, '()' or '-' and be at least 10 characters long")
        setPhoneValid(false)
    } else {
        setPhoneError(null)
        setPhoneValid(true)
    }
  }

  const handleEmail = (input) => {
    // update state with email input
    setEmail(input)
    // validate email input
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const emailPass = emailRegex.test(input)   
    if(!emailPass) {
        setEmailError("Please enter a valid email")
        setEmailValid(false)
    } else {
        setEmailError(null)
        setEmailValid(true)
    }
  }

  const handleInstrument = (instrument) => {
    setInstrument(instrument)
    setInstrumentError(null)
    setInstrumentValid(true)
  }

  const handlePreferredDays = (day) => {
      setPreferredDays((prevDays) => ({
          ...prevDays,
          [day]: !prevDays[day]
      }))
  }

  const handleSource = (source) => {
    setSource(source)
    setSourceError(null)
    setSourceValid(true)
  }

  const handleComments = (comments) => {
    setComments(comments)
}


  const handleSubmit = async (e) => {

    e.preventDefault()

    if(!studentName) {
        setStudentNameError("Please enter student name")
    }
    if(!parentName) {
        setParentNameError("Please enter parent name")
    }
    if(!phone) {
        setPhoneError("Please enter your phone number")
    }
    if(!email) {
        setEmailError("Please enter your email address")
    }
    if(!instrumentValid) {
        setInstrumentError("Please indicate what instrument you would like to learn")
    }

    const preferredDaysValues = Object.values(preferredDays)
    if(!preferredDaysValues.includes(true)) {
        setPreferredDaysError("Please indicate day(s) you would prefer for your lessons")
        setPreferredDaysValid(false)
    } else {
        setPreferredDaysError(null)
        setPreferredDaysValid(true)
    }

    if(!sourceValid) {
        setSourceError("Please indicate how you heard about us")
    }


    if(studentNameValid && parentNameValid && phoneValid && emailValid && instrumentValid && preferredDaysValid && sourceValid) {

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
            preferredDays,
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

        // FOR TESTING
        
        // console.log(
        //     "student name:", studentName,
        //     "parent name:", parentName,
        //     "phone:", phone,
        //     "email:", email,
        //     "instrument:", instrument,
        //     "lesson type:", lessonType,
        //     "lesson duration:", lessonDuration,
        //     "lesson frequency:", lessonFrequency,
        //     "preferred day(s):", preferredDays,
        //     "source:", source,
        //     "comments:", comments
        // )
    }
  }


  useEffect(() => {
    setFirstPageLoad(true)
  }, [])

  useEffect(() => {
    if(!firstPageLoad) {
        return
    }
    const preferredDaysValues = Object.values(preferredDays)
    if(!preferredDaysValues.includes(true)) {
        setPreferredDaysError("Please indicate day(s) you would prefer for your lessons")
        setPreferredDaysValid(false)
    } else {
        setPreferredDaysError(null)
        setPreferredDaysValid(true)
    }
  }, [preferredDays])

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

                <label className="mb-1">
                    <span className="block text-sm">Student Name:</span>
                    <input 
                        type="text" 
                        className={`w-full h-8 border-2 ${studentNameValid && "border-green-500"} ${studentNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`} 
                        onChange={(e) => handleStudentName(e.target.value)}
                        value={studentName}
                        autoFocus
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{studentNameError && studentNameError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Parent/Guardian Name:</span>
                    <input 
                        type="text"
                        className={`w-full h-8 border-2 ${parentNameValid && "border-green-500"} ${parentNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`} 
                        onChange={(e) => handleParentName(e.target.value)}
                        value={parentName}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{parentNameError && parentNameError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Phone:</span>
                    <input 
                        type="tel"
                        className={`w-full h-8 border-2 ${phoneValid && "border-green-500"} ${phoneError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handlePhone(e.target.value)}
                        value={phone}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{phoneError && phoneError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Email:</span>
                    <input 
                        type="email"
                        className={`w-full h-8 border-2 ${emailValid && "border-green-500"} ${emailError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handleEmail(e.target.value)}
                        value={email}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{emailError && emailError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Desired Instrument:</span>
                    <select className={`w-full h-8 border-2 ${instrumentValid && "border-green-500 outline-green-500"} ${instrumentError ? "border-red-500" : "border-gray-300"} text-sm`} value={instrument} onChange={(e) => {handleInstrument(e.target.value)}} required>
                        <option value="choose instrument" disabled>choose instrument</option>
                        <option value="piano">piano</option>
                        <option value="guitar">guitar</option>
                        <option value="bass guitar">bass guitar</option>
                        <option value="ukulele">ukulele</option>
                        <option value="drums">drums</option>
                        <option value="voice">voice</option>
                        <option value="theory">music theory</option>
                        <option value="theory">music for toddlers</option>
                        {/* <option value="theory">intro to music</option> */}
                    </select>
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{instrumentError && instrumentError}</span>
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
                {/* <div className="mb-6 border-2 border-gray-300 p-4"> */}
                <div className={`mb-6 border-2 ${preferredDaysValid && "border-green-500"} ${preferredDaysError ? "border-red-500" : "border-gray-200"} p-4`}>
                    <span className="block text-sm">PREFERRED DAY(S):</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">Please choose as many options as possible</span>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="monday" value="monday" checked={preferredDays.monday} onChange={(e) => handlePreferredDays(e.target.value)} className="me-1" />Monday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="tuesday" value="tuesday" checked={preferredDays.tuesday} onChange={(e) => handlePreferredDays(e.target.value)} className="me-1" />Tuesday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="wednesday" value="wednesday" checked={preferredDays.wednesday} onChange={(e) => handlePreferredDays(e.target.value)} className="me-1" />Wednesday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="thursday" value="thursday" checked={preferredDays.thursday} onChange={(e) => handlePreferredDays(e.target.value)} className="me-1" />Thursday
                    </label>
                    <label className="flex items-center text-[0.9rem]">
                        <input type="checkbox" id="saturday" value="saturday" checked={preferredDays.saturday} onChange={(e) => handlePreferredDays(e.target.value)} className="me-1" />Saturday
                    </label>
                </div>
                <label className="mb-1">
                    <span className="block text-sm">How did you hear about us?</span>
                    {/* <select className="w-full h-8 border-2 border-gray-300 text-sm" value={source} onChange={e => setSource(e.target.value)} required> */}
                    <select className={`w-full h-8 border-2 ${sourceValid && "border-green-500 outline-green-500"} ${sourceError ? "border-red-500" : "border-gray-300"} text-sm`} value={source} onChange={e => handleSource(e.target.value)} required>
                        <option value="choose option" disabled>choose option</option>
                        <option value="google">google search</option>
                        <option value="humbertown">humbertown sign</option>
                        <option value="friend/relative">friend/relative</option>
                        <option value="social">social media (FB/IG)</option>
                        <option value="flyer">print flyer</option>
                        <option value="blog">blog article</option>
                        <option value="other">other</option>
                    </select>
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{sourceError && sourceError}</span>
                </label>
                <label className="mb-4">
                    <span className="block text-sm">Additional Information/Comments (optional):</span>
                    {/* <textarea className="w-full h-20 p-2" value={comments} onChange={e => setComments(e.target.value)} /> */}
                    <textarea className={`w-full h-20 border-2 p-2 bg-gray-100 ${comments ? "border-green-500 outline-green-500" : "border-gray-300"}`} value={comments} onChange={e => handleComments(e.target.value)} />
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

"use client"

import { useState, useEffect } from "react"
import { useValidateFormInputs } from "../../useValidateFormInputs"
import { useValidateFormInputs } from "../../useValidateFormInputs"


export const RegisterForm = () => {

  const {studentNameIsValid, parentNameIsValid, phoneIsValid, emailIsValid, preferredDaysValid} = useValidateFormInputs()

  const [firstPageLoad, setFirstPageLoad] = useState(false)
  const [studentNameError, setStudentNameError] = useState("")
  const [parentNameError, setParentNameError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [instrumentError, setInstrumentError] = useState("")
  const [preferredDaysError, setPreferredDaysError] = useState("")
  const [sourceError, setSourceError] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [showSuccessResponse, setShowSuccessResponse] = useState(false)
  const [showErrorResponse, setShowErrorResponse] = useState(false)

  const [registerFormState, setRegisterFormState] = useState({
    student_name: "",
    parent_name: "",
    phone: "",
    email: "",
    instrument: "choose instrument",
    lesson_type: "private",
    lesson_duration: "30",
    lesson_frequency: "once-a-week",
    preferred_days: {
        "monday": false,
        "tuesday": false,
        "wednesday": false,
        "thursday": false,
        "saturday": false
    },
    source: "choose option",
    comments: ""
  })


  // FORM INPUT HANDLERS
  const handleStudentName = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        student_name: value
    }))
    if(!studentNameIsValid(value)) {
        setStudentNameError("Student name must be between 3 and 40 characters long")
    } else {
        setStudentNameError("")
    }
  }

  const handleParentName = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        parent_name: value
    }))
    if(!parentNameIsValid(value)) {
        setParentNameError("Parent name must be between 3 and 40 characters long")
    } else {
        setParentNameError("")
    }
  }

  const handlePhone = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        phone: value
    }))
    if(!phoneIsValid(value)) {
        setPhoneError("Phone number can only contain numbers, '()' or '-' and be between 10 and 20 characters")
    } else {
        setPhoneError("")
    }
  }

  const handleEmail = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        email: value
    }))
    if(!emailIsValid(value)) {
        setEmailError("Please enter a valid email address")
    } else {
        setEmailError("")
    }
  }

  const handleInstrument = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        instrument: value
    }))
    setInstrumentError("")
  }

  const handleLessonType = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        lesson_type: value
    }))
  }

  const handleLessonDuration = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        lesson_duration: value
    }))
  }

  const handleLessonFrequency = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        lesson_frequency: value
    }))
  }

  const handlePreferredDays = (value) => {
    setRegisterFormState((prevState) => ({
        ...prevState,
        preferred_days: {
            ...prevState.preferred_days,
            [value]: !prevState.preferred_days[value]
        }
    }))
  }

  const handleSource = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        source: value
    }))
    setSourceError("")
  }

  const handleComments = (value) => {
    setRegisterFormState((prev) => ({
        ...prev,
        comments: value
    }))
  }


  // FORM SUBMISSION LOGIC
  const handleSubmit = async (e) => {

    e.preventDefault()

    let hasError = false;

    if(!registerFormState.student_name || !studentNameIsValid(registerFormState.student_name)) {
        setStudentNameError("Please enter student name")
        hasError = true;
    }
    if(!registerFormState.parent_name || !parentNameIsValid(registerFormState.parent_name)) {
        setParentNameError("Please enter parent name")
        hasError = true;
    }
    if(!registerFormState.phone || !phoneIsValid(registerFormState.phone)) {
        setPhoneError("Please enter your phone number")
        hasError = true;
    }
    if(!registerFormState.email || !emailIsValid(registerFormState.email)) {
        setEmailError("Please enter your email address")
        hasError = true;
    }
    if(registerFormState.instrument === "choose instrument") {
        setInstrumentError("Please indicate what instrument you would like to learn")
        hasError = true;
    }
    if(!preferredDaysValid(registerFormState.preferred_days)) {
        setPreferredDaysError("You must select at least one day")
    } else {
        setPreferredDaysError("")
    }
    if(registerFormState.source === "choose option") {
        setSourceError("Please indicate how you heard about us")
        hasError = true;
    }

    if (hasError) {
        return
    }

    setSubmitting(true)
    const response = await fetch("/api/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(registerFormState)
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
}


  useEffect(() => {
    setFirstPageLoad(true)
  }, [])

  useEffect(() => {
    if(!firstPageLoad) {
        return
    }
    
    if(!preferredDaysValid(registerFormState.preferred_days)) {
        setPreferredDaysError("Please indicate day(s) you would prefer for your lessons")
    } else {
        setPreferredDaysError(null)
    }
  }, [registerFormState.preferred_days])


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
                        className={`w-full h-8 border-2 ${studentNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handleStudentName(e.target.value)}
                        name="student_name"
                        value={registerFormState.student_name}
                        autoFocus
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{studentNameError && studentNameError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Parent/Guardian Name:</span>
                    <input 
                        type="text"
                        className={`w-full h-8 border-2 ${parentNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handleParentName(e.target.value)}
                        name="parent_name"
                        value={registerFormState.parent_name}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{parentNameError && parentNameError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Phone:</span>
                    <input 
                        type="tel"
                        className={`w-full h-8 border-2 ${phoneError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handlePhone(e.target.value)}
                        name="phone"
                        value={registerFormState.phone}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{phoneError && phoneError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Email:</span>
                    <input 
                        type="email"
                        className={`w-full h-8 border-2 ${emailError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handleEmail(e.target.value)}
                        name="email"
                        value={registerFormState.email}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{emailError && emailError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Desired Instrument:</span>
                    <select 
                        className={`w-full h-8 border-2 ${instrumentError ? "border-red-500" : "border-gray-300"} text-sm`}
                        name="instrument"
                        value={registerFormState.instrument} 
                        onChange={(e) => {handleInstrument(e.target.value)}}
                        >
                            <option value="choose instrument" disabled>choose instrument</option>
                            <option value="piano">piano</option>
                            <option value="guitar">guitar</option>
                            <option value="bass guitar">bass guitar</option>
                            <option value="ukulele">ukulele</option>
                            <option value="drums">drums</option>
                            <option value="voice">voice</option>
                            <option value="theory">music theory</option>
                            <option value="toddlers">music for toddlers</option>
                        {/* <option value="theory">intro to music</option> */}
                    </select>
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{instrumentError && instrumentError}</span>
                </label>
                {/* LESSON TYPE: PRIVATE OR SEMI-PRIVATE */}
                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm mb-4">LESSON TYPE:</span>
                    <div className="flex mb-4 text-[0.9rem]">
                        <label className="flex items-center me-10">
                            <input 
                                type="radio" 
                                name="lesson_type" 
                                value="private" 
                                checked={registerFormState.lesson_type === "private"} 
                                onChange={e => handleLessonType(e.target.value)} 
                                className="me-1" />private
                        </label>
                        <label className="flex items-center">
                            <input 
                                type="radio" 
                                name="lesson_type" 
                                value="semi-private" 
                                checked={registerFormState.lesson_type === "semi-private"} 
                                onChange={e => handleLessonType(e.target.value)} 
                                className="me-1" />semi-private
                        </label>
                    </div>
                    <span className="text-[0.8rem] font-semibold">*Note that semi-private lessons require two students to register</span>
                </div>

                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm mb-4">LESSON DURATION:</span>
                    <div className="flex mb-4 text-[0.9rem]">
                        <label className="flex items-center me-10">
                            <input 
                                type="radio" 
                                name="lesson_duration" 
                                value="30" 
                                checked={registerFormState.lesson_duration === "30"} 
                                onChange={e => handleLessonDuration(e.target.value)} 
                                className="me-1" />30 mins
                        </label>
                        <label className="flex items-center me-10">
                            <input 
                                type="radio" 
                                name="lesson_duration" 
                                value="45" 
                                checked={registerFormState.lesson_duration === "45"} 
                                onChange={e => handleLessonDuration(e.target.value)} 
                                className="me-1" />45 mins
                        </label>
                        <label className="flex items-center">
                            <input 
                                type="radio" 
                                name="lesson_duration" 
                                value="60" 
                                checked={registerFormState.lesson_duration === "60"} 
                                onChange={e => handleLessonDuration(e.target.value)} 
                                className="me-1" />60 mins
                        </label>
                    </div>
                    <span className="text-[0.8rem] font-semibold">*Minimum duration of 45 mins is recommended for students 12+ or students working on Royal Conservatory Level 1 and above</span>
                </div>

                <div className="mb-6 border-2 border-gray-300 p-4">
                    <span className="block text-sm mb-4">LESSON FREQUENCY:</span>
                    <div className="flex text-[0.9rem]">
                        <label className="flex items-center me-10">
                            <input 
                                type="radio" 
                                name="lesson_frequency" 
                                value="once-a-week" 
                                checked={registerFormState.lesson_frequency === "once-a-week"} 
                                onChange={e => handleLessonFrequency(e.target.value)} 
                                className="me-1" />once a week
                        </label>
                        <label className="flex items-center">
                            <input 
                                type="radio" 
                                name="lesson_frequency" 
                                value="twice-a-week" 
                                checked={registerFormState.lesson_frequency === "twice-a-week"} 
                                onChange={e => handleLessonFrequency(e.target.value)} 
                                className="me-1" />twice a week
                        </label>
                    </div>
                </div>
                <div className={`mb-1 border-2 ${preferredDaysError ? "border-red-500" : "border-gray-200"} p-4`}>
                    <span className="block text-sm">PREFERRED DAY(S):</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">Please choose as many options as possible</span>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="monday"
                            name="preferred_days"
                            value="monday" 
                            checked={registerFormState.preferred_days.monday} 
                            onChange={(e) => handlePreferredDays(e.target.value)} 
                            className="me-1" />Monday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="tuesday"
                            name="preferred_days"
                            value="tuesday" 
                            checked={registerFormState.preferred_days.tuesday} 
                            onChange={(e) => handlePreferredDays(e.target.value)} 
                            className="me-1" />Tuesday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="wednesday"
                            name="preferred_days" 
                            value="wednesday" 
                            checked={registerFormState.preferred_days.wednesday} 
                            onChange={(e) => handlePreferredDays(e.target.value)} 
                            className="me-1" />Wednesday
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="thursday"
                            name="preferred_days" 
                            value="thursday" 
                            checked={registerFormState.preferred_days.thursday}
                            onChange={(e) => handlePreferredDays(e.target.value)} 
                            className="me-1" />Thursday
                    </label>
                    <label className="flex items-center text-[0.9rem]">
                        <input 
                            type="checkbox" 
                            id="saturday"
                            name="preferred_days" 
                            value="saturday" 
                            checked={registerFormState.preferred_days.saturday} 
                            onChange={(e) => handlePreferredDays(e.target.value)} 
                            className="me-1" />Saturday
                    </label>
                </div>
                <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{preferredDaysError && preferredDaysError}</span>

                <label className="mb-1">
                    <span className="block text-sm">How did you hear about us?</span>
                    <select 
                        className={`w-full h-8 border-2 ${sourceError ? "border-red-500" : "border-gray-300"} text-sm`} 
                        name="source"
                        value={registerFormState.source}
                        onChange={e => handleSource(e.target.value)} 
                        >
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
                    <textarea 
                        className={`w-full h-20 border-2 p-2 bg-gray-100 ${registerFormState.comments ? "border-green-500 outline-green-500" : "border-gray-300"}`}
                        name="comments"
                        value={registerFormState.comments} 
                        onChange={e => handleComments(e.target.value)}
                    />
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

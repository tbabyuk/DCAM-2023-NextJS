
"use client"


import { useState } from "react"
import { storage } from "../firebase/config"
import { ref, uploadBytes } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid';


export const TeacherApplicationForm = () => {

  const [fullName, setFullName] = useState("")
  const [fullNameValid, setFullNameValid] = useState(false)
  const [phone, setPhone] = useState("")
  const [phoneValid, setPhoneValid] = useState(false)
  const [email, setEmail] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [instruments, setInstruments] = useState({
    "piano": false,
    "guitar": false,
    "drums": false,
    "vocals": false,
    "toddlers": false
  })
  const [typeOfWork, setTypeOfWork] = useState({
    "permanent": false,
    "substitute": false
  })
  const [teachingExperience, setTeachingExperience] = useState("choose option")
  const [source, setSource] = useState("choose option")
  const [comments, setComments] = useState("")
  const [resume, setResume] = useState(null)
  const [success, setSuccess] = useState(null)
  const [fullNameError, setFullNameError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [instrumentsError, setInstrumentsError] = useState(null)
  const [typeOfWorkError, setTypeOfWorkError] = useState(null)
  const [teachingExperienceError, setTeachingExperienceError] = useState(null)
  const [sourceError, setSourceError] = useState(null)
  const [resumeError, setResumeError] = useState(null)
  const [error, setError] = useState(null)
  const [uploadError, setUploadError] = useState(null)


  console.log("storage:", storage)


  const handleInstruments = (instrument) => {
    setInstruments({...instruments, [instrument]: !instruments[instrument]})
  }

  const handleTypeOfWork = (type) => {
    setTypeOfWork({...typeOfWork, [type]: !typeOfWork[type]})
  }


//   const [submitting, setSubmitting] = useState(false)
  const [showSuccessResponse, setShowSuccessResponse] = useState(false)
//   const [showErrorResponse, setShowErrorResponse] = useState(false)



  const handleResumeUpload = (e) => {
    const allowedTypes = ["application/msword", "application/pdf"]
    const file = e.target.files[0]
    
    if(file && allowedTypes.includes(file.type)) {
        setResume(file)
        setUploadError(null)
    } else {
        setResume(null)
        console.log("that file type is not allowed")
        setUploadError("You can only upload Microsoft Word or PDF files")
    }
  }


const handleFullName = (input) => {
    // update state with user entry
    setFullName(input)
    // validate full name
    const fullNameRegex = /^[a-zA-Z ]{6,40}$/
    const fullNamePass = fullNameRegex.test(input)
    if(!fullNamePass) {
        setFullNameError("Please enter a valid full name")
        setFullNameValid(false)
    } else {
        setFullNameError(null)
        setFullNameValid(true)
    }
}

const handlePhone = (input) => {
    // update state with user entry
    setPhone(input)
    // validate phone
    const phoneRegex = /^[\d\s()-]{10,20}$/
    const phonePass = phoneRegex.test(input)
    if(!phonePass) {
        setPhoneError("Please enter a valid phone number")
        setPhoneValid(false)
    } else {
        setPhoneError(null)
        setPhoneValid(true)
    }
}

const handleEmail = (input) => {
    // update state with user entry
    setEmail(input)
    // validate phone
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



  const validateFields = () => {


    // const instrumentsValues = Object.values(instruments)
    // if(!instrumentsValues.includes(true)) {
    //     setInstrumentsError("You must select at least one instrument that you can teach")
    // } else {
    //     setInstrumentsError(null)
    // }

    // const typeOfWorkValues = Object.values(typeOfWork)
    // if(!typeOfWorkValues.includes(true)) {
    //     setTypeOfWorkError("You must select at least one type of work you are interested in")
    // } else {
    //     setTypeOfWorkError(null)
    // }

    // if(teachingExperience === "choose option") {
    //     setTeachingExperienceError("Please indicate how much teaching experience you have")
    // } else {
    //     setTeachingExperienceError(null)
    // }

    // if(source === "choose option") {
    //     setSourceError("Please indicate how you heard about our school")
    // } else {
    //     setSourceError(null)
    // }

    // if(!resume) {
    //     setResumeError("You must upload your resume in order to complete the application")
    // } else {
    //     setResumeError(null)
    // }


  }
  


  const handleSubmit = async (e) => {

    e.preventDefault()

    if(fullNameValid && emailValid && phoneValid) {
        console.log("submission successful")
    } else {
        console.log("oops, unable to submit")
    }



    // upload resume to storage

    // const resumeRef = ref(storage, `resumes/${uuidv4()}___${resume.name}`);

    // try {
    //     uploadBytes(resumeRef, resume)
    //     setSuccess("Image uploaded successfully!")
    // } catch {
    //     setError("Oops, something went wrong with the upload!")
    // }


    // console.log(name, phone, email, instruments, typeOfWork, teachingExperience, source, comments)











    // setSubmitting(true)
    // const response = await fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({
    //         student: studentName.trim(),
    //         parent: parentName.trim(),
    //         phone: phone.trim(),
    //         email: email.trim(),
    //         instrument,
    //         lessonType,
    //         lessonDuration,
    //         lessonFrequency,
    //         lessonDays,
    //         source,
    //         comments: comments.trim()
    //     })
    // })


    // if(response.status === 200) {
    //     console.log("status is:", response.status)
    //     const responseData = await response.json()
    //     console.log("responseData from ok:", responseData.message)
    //     setSubmitting(false)
    //     setShowSuccessResponse(true)
    // } else {
    //     console.log("status is:", response.status)
    //     const responseData = await response.json()
    //     console.log("responseData from error:", responseData.error)
    //     setSubmitting(false)
    //     setShowErrorResponse(true)
    // }












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

                <label className="mb-1">
                    <span className="block text-sm">Full Name:</span>
                    <input 
                        type="text" 
                        className={`w-full h-8 border-2 ${fullNameValid && "border-green-500"} ${!fullName ? "outline-gray-500" : fullNameError ? "outline-red-500" : "outline-green-500"} ps-2 text-sm focus:border-orange-505 focus:border-2`} 
                        // className="border-none focus:outline-none"
                        onChange={(e) => handleFullName(e.target.value)}
                        value={fullName}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{fullNameError && fullNameError}</span>
                </label>

                <label className="mb-1">
                    <span className="block text-sm">Phone:</span>
                    <input 
                        type="tel"
                        className={`w-full h-8 border-2 ${phoneValid && "border-green-500"} ${!phone ? "outline-gray-500" : phoneError ? "outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handlePhone(e.target.value)}
                        value={phone}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{phoneError && phoneError}</span>
                </label>
                <label className="mb-1">
                    <span className="block text-sm">Email:</span>
                    <input 
                        type="email"
                        className={`w-full h-8 border-2 ${emailValid ? "border-green-500" : "border-red-500"} ${!email ? "outline-gray-500" : emailError ? "outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handleEmail(e.target.value)}
                        value={email}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{emailError && emailError}</span>

                </label>

                <div className={`mb-6 border-2 ${instrumentsError ? "border-red-600" : "border-gray-300"}  p-4`}>
                    <span className="block text-sm">INSTRUMENT:</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">What instrument(s) do you specialize in that you would like to teach?</span>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="piano" value="piano" checked={instruments.piano} onChange={(e) => handleInstruments(e.target.value)} className="me-1" />Piano
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="guitar" value="guitar" checked={instruments.guitar} onChange={(e) => handleInstruments(e.target.value)}className="me-1" />Guitar
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="drums" value="drums" checked={instruments.drums} onChange={(e) => handleInstruments(e.target.value)} className="me-1" />Drums
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="vocals" value="vocals" checked={instruments.vocals} onChange={(e) => handleInstruments(e.target.value)} className="me-1" />Vocals
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="toddlers" value="toddlers" checked={instruments.toddlers} onChange={(e) => handleInstruments(e.target.value)} className="me-1" />Music for Toddlers
                    </label>
                </div>

                <div className={`mb-6 border-2 ${typeOfWorkError ? "border-red-600" : "border-gray-300" } p-4`}>
                    <span className="block text-sm">TYPE OF WORK:</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">What kind of teaching position are you interested in at the moment?</span>

                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="permanent" value="permanent" checked={typeOfWork.permanent} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Permanent (regular weekly lessons)
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="substitute" value="substitute" checked={typeOfWork.substitute} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Substitute (we call you when we need you)
                    </label>
                </div>

                <label className="mb-6">
                    <span className="block text-sm">How many years of teaching experience do you have:</span>
                    <select className={`w-full h-8 border-2 ${teachingExperienceError ? "border-red-600" : "border-gray-300"} text-sm`} value={teachingExperience} onChange={(e) => {setTeachingExperience(e.target.value)}} required>
                        <option value="choose option" disabled>choose option</option>
                        <option value="less than 1 year">&lt; 1 year</option>
                        <option value="1 to 2 years">1 - 2 years</option>
                        <option value="2 to 3 years">2 - 3 years</option>
                        <option value="more than 3 years">&gt; 3 years</option>
                    </select>
                </label>

                <label className="mb-4">
                    <span className="block text-sm">How did you hear about us?</span>
                    <select className={`w-full h-8 border-2 ${sourceError ? "border-red-600" : "border-gray-300"} text-sm`} value={source} onChange={e => setSource(e.target.value)} required>
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
                        <input type="file" id="myFile" name="filename" className={`${resumeError ? "border-2 border-red-600" : ""}`} onChange={handleResumeUpload} />
                    {uploadError && <p className="text-red-600 text-sm">{uploadError}</p>}
                </label>

                {/* <button className="dcam-button w-full mt-3 h-10" disabled={submitting}>{submitting ? "Submitting...Please wait..." : "Submit"}</button> */}
                <button className="dcam-button w-full mt-3 h-10">Submit</button>
                {success && <p className="text-green-600">{success}</p>}
                {error && <p className="text-red-600">{error}</p>}
                {instrumentsError && <p className="text-red-600">{instrumentsError}</p>}
                {typeOfWorkError && <p className="text-red-600">{typeOfWorkError}</p>}
                {teachingExperienceError && <p className="text-red-600">{teachingExperienceError}</p>}
                {sourceError && <p className="text-red-600">{sourceError}</p>}
                {resumeError && <p className="text-red-600">{resumeError}</p>}
            </form>

            ) 
        }

            {/* {showErrorResponse && (
                <div className="h-full text-red-600 px-5 self-center flex flex-col text-center">           
                        <p className="mb-6">Sorry, there was a problem submitting your form. Please refresh and try again or send us a direct email at <span className="font-bold">info@dacapomusic.ca</span></p>
                </div>
            )} */}

        </>
    )
}

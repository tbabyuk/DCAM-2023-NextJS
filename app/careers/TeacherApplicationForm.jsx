"use client"

import { useEffect, useState } from "react"
import { storage } from "../firebase/config"
import { ref, uploadBytes } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid';


export const TeacherApplicationForm = () => {

  const [firstPageLoad, setFirstPageLoad] = useState(false)
  const [fullName, setFullName] = useState("")
  const [fullNameError, setFullNameError] = useState(null)
  const [fullNameValid, setFullNameValid] = useState(false)
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState(null)
  const [phoneValid, setPhoneValid] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState(null)
  const [emailValid, setEmailValid] = useState(false)
  const [instruments, setInstruments] = useState({
    "piano": false,
    "guitar": false,
    "drums": false,
    "vocals": false,
    "toddlers": false
  })
  const [instrumentsError, setInstrumentsError] = useState(null)
  const [instrumentsValid, setInstrumentsValid] = useState(false)
  const [typeOfWork, setTypeOfWork] = useState({
    "permanent": false,
    "substitute": false
})
  const [typeOfWorkError, setTypeOfWorkError] = useState(null)
  const [typeOfWorkValid, setTypeOfWorkValid] = useState(false)
  const [teachingExperience, setTeachingExperience] = useState("choose option")
  const [teachingExperienceError, setTeachingExperienceError] = useState(null)
  const [teachingExperienceValid, setTeachingExperienceValid] = useState(false)
  const [source, setSource] = useState("choose option")
  const [sourceError, setSourceError] = useState(null)
  const [sourceValid, setSourceValid] = useState(false)
  const [comments, setComments] = useState("")
  const [resume, setResume] = useState(null)
  const [resumeError, setResumeError] = useState(null)
//   const [success, setSuccess] = useState(null)
//   const [error, setError] = useState(null)
  const [uploadError, setUploadError] = useState(null)


  console.log("storage:", storage)




//   const [submitting, setSubmitting] = useState(false)
  const [showSuccessResponse, setShowSuccessResponse] = useState(false)
//   const [showErrorResponse, setShowErrorResponse] = useState(false)



  const handleResumeUpload = (e) => {
    const allowedTypes = ["application/msword", "application/pdf"]
    const file = e.target.files[0]
    
    if(file && allowedTypes.includes(file.type)) {
        setResume(file)
        setUploadError(null)
        setResumeError(null)
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
        setFullNameError("Full name must be at least 6 characters long")
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
        setPhoneError("Phone number must be at least 10 characters long")
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

const handleInstruments = (instrument) => {
    setInstruments((prevInstruments) => ({
        ...prevInstruments,
        [instrument]: !prevInstruments[instrument],
    }));
    // setInstrumentsStarted(true)
}


const handleTypeOfWork = (type) => {
    setTypeOfWork((prevType) => ({
        ...prevType, 
        [type]: !prevType[type]
    }));
}

const handleTeachingExperience = (experience) => {
    setTeachingExperience(experience)
    setTeachingExperienceError(null)
    setTeachingExperienceValid(true)
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



    if(!fullName) {
        setFullNameError("Please enter your full name")
    }

    if(!phone) {
        setPhoneError("Please enter your phone number")
        setPhoneValid(false)
    }

    if(!email) {
        setEmailError("Please enter your email address")
    }

    const instrumentsValues = Object.values(instruments)
    if(!instrumentsValues.includes(true)) {
        setInstrumentsError("Please indicate what instrument(s) you can teach")
        setInstrumentsValid(false)
    } else {
        setInstrumentsError(null)
        setInstrumentsValid(true)
    }

    const typeOfWorkValues = Object.values(typeOfWork)
    if(!typeOfWorkValues.includes(true)) {
        setTypeOfWorkError("Please indicate what type of work you are interested in")
        setTypeOfWorkValid(false)
    } else {
        setTypeOfWorkError(null)
        setTypeOfWorkValid(true)
    }

    if(!teachingExperienceValid) {
        setTeachingExperienceError("Please indicate how much teaching experience you have")
    }

    if(!sourceValid) {
        setSourceError("Please indicate how you heard about us")
    }

    if(!resume) {
        setResumeError("Please attach your resume")
    }


    if(fullNameValid && phoneValid && emailValid && instrumentsValid && typeOfWorkValid && teachingExperienceValid && sourceValid && resume ) {
        console.log("wohoo! everything is valid!")
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


  useEffect(() => {
    setFirstPageLoad(true)
  }, [])

  useEffect(() => {
    if(!firstPageLoad) {
        return
    }
    const instrumentsValues = Object.values(instruments)
    if(!instrumentsValues.includes(true)) {
        setInstrumentsError("You must select at least one instrument that you can teach")
        setInstrumentsValid(false)
    } else {
        setInstrumentsError(null)
        setInstrumentsValid(true)
    }
  }, [instruments])

  useEffect(() => {
    if(!firstPageLoad) {
        return
    }
    const typeOfWorkValues = Object.values(typeOfWork)
    if(!typeOfWorkValues.includes(true)) {
        setTypeOfWorkError("You must select at least one type of work")
        setTypeOfWorkValid(false)
    } else {
        setTypeOfWorkError(null)
        setTypeOfWorkValid(true)
    }
  }, [typeOfWork])




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
                        className={`w-full h-8 border-2 ${fullNameValid && "border-green-500"} ${fullNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`} 
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
                        className={`w-full h-8 border-2 ${phoneValid && "border-green-500"} ${phoneError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handlePhone(e.target.value)}
                        value={phone}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{phoneError && phoneError}</span>
                </label>
                <label className="mb-4">
                    <span className="block text-sm">Email:</span>
                    <input 
                        type="email"
                        className={`w-full h-8 border-2 ${emailValid && "border-green-500"} ${emailError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handleEmail(e.target.value)}
                        value={email}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{emailError && emailError}</span>
                </label>

                <div className={`mb-1 border-2 ${instrumentsValid && "border-green-500"} ${instrumentsError ? "border-red-500" : "border-gray-200"} p-4`}>
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
                <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{instrumentsError && instrumentsError}</span>

                <div className={`mb-1 border-2 ${typeOfWorkValid && "border-green-500"} ${typeOfWorkError ? "border-red-600" : "border-gray-300"} p-4`}>
                    <span className="block text-sm">TYPE OF WORK:</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">What kind of teaching position are you interested in at the moment?</span>

                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="permanent" value="permanent" checked={typeOfWork.permanent} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Permanent (regular weekly lessons)
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="substitute" value="substitute" checked={typeOfWork.substitute} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Substitute (we call you when we need you)
                    </label>
                </div>
                <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{typeOfWorkError && typeOfWorkError}</span>

                <label className="mb-1">
                    <span className="block text-sm">How many years of teaching experience do you have:</span>
                    <select className={`w-full h-8 border-2 ${teachingExperienceValid && "border-green-500 outline-green-500"} ${teachingExperienceError ? "border-red-500" : "border-gray-300"} text-sm`} value={teachingExperience} onChange={(e) => {handleTeachingExperience(e.target.value)}} required>
                        <option value="choose option" disabled>choose option</option>
                        <option value="less than 1 year">&lt; 1 year</option>
                        <option value="1 to 2 years">1 - 2 years</option>
                        <option value="2 to 3 years">2 - 3 years</option>
                        <option value="more than 3 years">&gt; 3 years</option>
                    </select>
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{teachingExperienceError && teachingExperienceError}</span>
                </label>

                <label className="mb-1">
                    <span className="block text-sm">How did you hear about us?</span>
                    <select className={`w-full h-8 border-2 ${sourceValid && "border-green-500 outline-green-500"} ${sourceError ? "border-red-500" : "border-gray-300"} text-sm`} value={source} onChange={e => handleSource(e.target.value)} required>
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
                    <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{sourceError && sourceError}</span>
                </label>

                <label className="mb-4">
                    <span className="block text-sm">Additional Information/Comments (optional):</span>
                    <textarea className={`w-full h-20 border-2 p-2 bg-gray-100 ${comments ? "border-green-500 outline-green-500" : "border-gray-300"}`} value={comments} onChange={e => handleComments(e.target.value)} />
                </label>

                <label className="mb-4">
                    <span className="block text-sm mb-4">Upload your resume:</span>
                        <input type="file" id="myFile" name="filename" className={`${resumeError ? "border-2 border-red-500" : ""} w-full`} onChange={handleResumeUpload} />
                    {/* {uploadError && <p className="text-red-600 text-sm">{uploadError}</p>} */}
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{resumeError && resumeError}{uploadError && uploadError}</span>
                </label>

                {/* <button className="dcam-button w-full mt-3 h-10" disabled={submitting}>{submitting ? "Submitting...Please wait..." : "Submit"}</button> */}
                <button className="dcam-button w-full mt-3 h-10">Submit</button>
                {/* {success && <p className="text-green-600">{success}</p>}
                {error && <p className="text-red-600">{error}</p>} */}
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

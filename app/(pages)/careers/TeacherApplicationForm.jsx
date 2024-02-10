"use client"

import { useEffect, useState } from "react"
import { storage } from "../../firebase/config"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuidv4 } from 'uuid';
import { useValidateFormInputs } from "@/app/useValidateFormInputs";


export const TeacherApplicationForm = () => {

  const {fullNameIsValid, phoneIsValid, emailIsValid, instrumentsAreValid, typeOfWorkIsValid} = useValidateFormInputs()

  const [firstPageLoad, setFirstPageLoad] = useState(false)

  const [applicationFormData, setApplicationFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    instruments: {
        "piano": false,
        "guitar": false,
        "bass": false,
        "drums": false,
        "vocals": false,
        "toddlers": false
    },
    type_of_work: {
        "permanent": false,
        "substitute": false
    },
    teaching_experience: "choose option",
    source: "choose option",
    comments: "",
    resume: null,
    resume_name: "",
    resume_url: ""
  })


  const [fullNameError, setFullNameError] = useState("")
  const [phoneError, setPhoneError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [instrumentsError, setInstrumentsError] = useState(null)
  const [typeOfWorkError, setTypeOfWorkError] = useState(null)
  const [teachingExperienceError, setTeachingExperienceError] = useState("")
  const [sourceError, setSourceError] = useState(null)
  const [resumeError, setResumeError] = useState(null)
  const [uploadError, setUploadError] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [showSuccessResponse, setShowSuccessResponse] = useState(false)
  const [showErrorResponse, setShowErrorResponse] = useState(false)
//   const [resume, setResume] = useState(null)


  console.log("logging state:", applicationFormData)


  // FORM INPUT HANDLERS
  const handleFullName = (value) => {
    setApplicationFormData((prev) => ({
        ...prev,
        full_name: value
    }))
    if(!fullNameIsValid(value)) {
        setFullNameError("Full name must be between 6 and 40 characters long")
    } else {
        setFullNameError("")
    }
  }

  const handlePhone = (value) => {
    setApplicationFormData((prev) => ({
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
    setApplicationFormData((prev) => ({
        ...prev,
        email: value
    }))    
    if(!emailIsValid(value)) {
        setEmailError("Please enter a valid email address")
    } else {
        setEmailError("")
    }
  }

  const handleInstruments = (value) => {
    setApplicationFormData((prevState) => ({
        ...prevState,
        instruments: {
            ...prevState.instruments,
            [value]: !prevState.instruments[value]
        }
    }))
  }

  const handleTypeOfWork = (value) => {
    setApplicationFormData((prevState) => ({
        ...prevState,
        type_of_work: {
            ...prevState.type_of_work,
            [value]: !prevState.type_of_work[value]
        }
    }))
  }

  const handleTeachingExperience = (value) => {
    setApplicationFormData((prev) => ({
        ...prev,
        teaching_experience: value
    }))
    setTeachingExperienceError("")
  }

  const handleSource = (value) => {
    setApplicationFormData((prev) => ({
        ...prev,
        source: value
    }))
    setSourceError("")    
  }

  const handleComments = (value) => {
    setApplicationFormData((prev) => ({
        ...prev,
        comments: value
    }))
  }

const handleResumeUpload = (e) => {
    const allowedTypes = ["application/msword", "application/pdf"]
    const file = e.target.files[0]
    
    if(file && allowedTypes.includes(file.type)) {
        setApplicationFormData((prev) => ({
            ...prev,
            resume: file
        }))
        setUploadError(null)
        setResumeError(null)
    } else {
        setResumeError(null)
        setApplicationFormData.resume(null)
        console.log("that file type is not allowed")
        setUploadError("You can only upload Microsoft Word or PDF files")
    }
  }

const handleSubmit = async (e) => {

    e.preventDefault()

    let hasError = false;

    if(!applicationFormData.full_name || !fullNameIsValid(applicationFormData.full_name)) {
        setFullNameError("Please enter your full name")
        hasError = true;
    }
    if(!applicationFormData.phone || !phoneIsValid(applicationFormData.phone)) {
        setPhoneError("Please enter your phone number")
        hasError = true;
    }
    if(!applicationFormData.email || !emailIsValid(applicationFormData.email)) {
        setEmailError("Please enter your email address")
        hasError = true;
    }
    if(!instrumentsAreValid(applicationFormData.instruments)) {
        setInstrumentsError("Please select which instrument(s) you can teach")
        hasError = true;
    } else {
        setInstrumentsError("")
    }
    if(!typeOfWorkIsValid(applicationFormData.type_of_work)) {
        setTypeOfWorkError("Please indicate what type of work you are interested in")
        hasError = true;
    } else {
        setTypeOfWorkError("")
    }
    if(applicationFormData.teaching_experience === "choose option") {
        setTeachingExperienceError("Please indicate how much teaching experience you have")
        hasError = true;
    }
    if(applicationFormData.source === "choose option") {
        setSourceError("Please indicate how you heard about us")
        hasError = true;
    }
    if(!applicationFormData.resume) {
        setUploadError("")
        setResumeError("Please attach your resume")
        hasError = true;
    }

    if (hasError) {
        return
    }

    setSubmitting(true)


    const prepareServerContent = async () => {

        // setSubmitting(true)
        const response = 
        
        await fetch("/api/application", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                
                applicationFormData
                
            //     {
            //     full_name: applicationFormData.full_name,
            //     phone: applicationFormData.phone,
            //     email: applicationFormData.email,
            //     // instruments,
            //     // typeOfWork,
            //     // teachingExperience,
            //     // source,
            //     // comments,
            //     // resumeName,
            //     // resumeURL
            // }
            
            )
            // body: JSON.stringify({
            //     applicationFormData,
            
            
            // })    
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

 
    // upload resume to firebase storage
    const resumeRef = ref(storage, `resumes/${uuidv4()}___${applicationFormData.resume.name}`)

    try {
        const reference = await uploadBytes(resumeRef, applicationFormData.resume)
        const resumeName = reference.metadata.name;
        console.log("resumeName=====================:", resumeName)          
        const resumeURL = await getDownloadURL(resumeRef)
        console.log("resumeURL======================:", resumeURL)
        prepareServerContent()
    } catch (error) {
        console.log("oops, resume failed to upload", error)
    }
}

    useEffect(() => {
        setFirstPageLoad(true)
    }, [])

    useEffect(() => {
        if(!firstPageLoad) {
            return
        }
        const instrumentsValues = Object.values(applicationFormData.instruments)
        if(!instrumentsValues.includes(true)) {
            setInstrumentsError("You must select at least one instrument that you can teach")
        } else {
            setInstrumentsError("")
        }
    }, [applicationFormData.instruments])

    useEffect(() => {
        if(!firstPageLoad) {
            return
        }
        const typeOfWorkValues = Object.values(applicationFormData.type_of_work)
        if(!typeOfWorkValues.includes(true)) {
            setTypeOfWorkError("You must select at least one type of work")
        } else {
            setTypeOfWorkError(null)
        }
    }, [applicationFormData.type_of_work])



  return (
        <>

            {showSuccessResponse ? (
                        <div className="h-full text-green-600 px-5 self-center flex flex-col text-center">           
                                <p className="mb-6">Your application was successfully submitted and will be in our records - thank you!</p>
                        </div>
            ) : (

            <form className="w-full sm:w-[80%] md:w-[500px] flex flex-col mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-center font-bold text-xl text-regGreen">TEACHER APPLICATION FORM</h2>
                <p className="text-xs text-center mb-10">Start your teaching career with DCAM today!</p>

                <label className="mb-1">
                    <span className="block text-sm">Full Name:</span>
                    <input 
                        type="text" 
                        className={`w-full h-8 border-2 ${fullNameError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`} 
                        onChange={(e) => handleFullName(e.target.value)}
                        value={applicationFormData.full_name}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{fullNameError && fullNameError}</span>
                </label>

                <label className="mb-1">
                    <span className="block text-sm">Phone:</span>
                    <input 
                        type="tel"
                        className={`w-full h-8 border-2 ${phoneError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handlePhone(e.target.value)}
                        value={applicationFormData.phone}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{phoneError && phoneError}</span>
                </label>
                <label className="mb-4">
                    <span className="block text-sm">Email:</span>
                    <input 
                        type="email"
                        className={`w-full h-8 border-2 ${emailError ? "border-red-500 outline-red-500" : "outline-green-500"} ps-2 text-sm`}
                        onChange={(e) => handleEmail(e.target.value)}
                        value={applicationFormData.email}
                    />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{emailError && emailError}</span>
                </label>

                <div className={`mb-1 border-2 ${instrumentsError ? "border-red-500" : "border-gray-200"} p-4`}>
                    <span className="block text-sm">INSTRUMENT:</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">What instrument(s) do you specialize in that you would like to teach?</span>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="piano" 
                            value="piano" 
                            checked={applicationFormData.instruments.piano} 
                            onChange={(e) => handleInstruments(e.target.value)} 
                            className="me-1" />Piano
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="guitar" 
                            value="guitar" 
                            checked={applicationFormData.instruments.guitar} 
                            onChange={(e) => handleInstruments(e.target.value)} 
                            className="me-1" />Guitar
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="bass" 
                            value="bass" 
                            checked={applicationFormData.instruments.bass} 
                            onChange={(e) => handleInstruments(e.target.value)} 
                            className="me-1" />Bass Guitar
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="drums" 
                            value="drums" 
                            checked={applicationFormData.instruments.drums} 
                            onChange={(e) => handleInstruments(e.target.value)} 
                            className="me-1" />Drums
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="vocals" 
                            value="vocals" 
                            checked={applicationFormData.instruments.vocals} 
                            onChange={(e) => handleInstruments(e.target.value)} 
                            className="me-1" />Vocals
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input 
                            type="checkbox" 
                            id="toddlers" 
                            value="toddlers" 
                            checked={applicationFormData.instruments.toddlers} 
                            onChange={(e) => handleInstruments(e.target.value)} 
                            className="me-1" />Music for Toddlers
                    </label>
                </div>
                <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{instrumentsError && instrumentsError}</span>

                <div className={`mb-1 border-2 ${typeOfWorkError ? "border-red-600" : "border-gray-300"} p-4`}>
                    <span className="block text-sm">TYPE OF WORK:</span>
                    <span className="text-[0.8rem] font-semibold block mb-4">What kind of teaching position are you interested in at the moment?</span>

                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="permanent" value="permanent" checked={applicationFormData.type_of_work.permanent} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Permanent (regular weekly lessons)
                    </label>
                    <label className="flex items-center text-[0.9rem] mb-4">
                        <input type="checkbox" id="substitute" value="substitute" checked={applicationFormData.type_of_work.substitute} onChange={(e) => handleTypeOfWork(e.target.value)} className="me-1" />Substitute (we call you when we need you)
                    </label>
                </div>
                <span className={`mb-4 text-[0.8rem] text-right text-red-500 h-[20px] block`}>{typeOfWorkError && typeOfWorkError}</span>

                <label className="mb-1">
                    <span className="block text-sm">How many years of teaching experience do you have:</span>
                    <select 
                        className={`w-full h-8 border-2 ${teachingExperienceError ? "border-red-500" : "border-gray-300"} text-sm`} 
                        value={applicationFormData.teaching_experience} 
                        onChange={(e) => {handleTeachingExperience(e.target.value)}}>
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
                    <select className={`w-full h-8 border-2 ${sourceError ? "border-red-500" : "border-gray-300"} text-sm`} value={applicationFormData.source} onChange={e => handleSource(e.target.value)} required>
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
                    <textarea className={`w-full h-20 border-2 p-2 bg-gray-100 ${applicationFormData.comments ? "border-green-500 outline-green-500" : "border-gray-300"}`} value={applicationFormData.comments} onChange={e => handleComments(e.target.value)} />
                </label>

                <label className="mb-4">
                    <span className="block text-sm mb-4">Upload your resume:</span>
                    <input 
                        type="file" 
                        id="myFile" 
                        name="filename" 
                        className={`${applicationFormData.resume && "border-2 border-green-500"} ${resumeError || uploadError ? "border-2 border-red-500" : ""} w-full`} 
                        onChange={handleResumeUpload} />
                    <span className={`text-[0.8rem] text-right text-red-500 h-[20px] block`}>{resumeError && resumeError}{uploadError && uploadError}</span>
                </label>

                <button className="dcam-button w-full mt-3 h-10" /*disabled={submitting}*/>{submitting ? "Submitting...This may take up to a minute, please wait..." : "Submit"}</button>

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

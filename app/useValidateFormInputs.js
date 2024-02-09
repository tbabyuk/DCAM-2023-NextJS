

export const useValidateFormInputs = () => {

    console.log("useValidateForm hook fired")

    const studentNameIsValid = (value) => {
      const studentNameRegex = /^[a-zA-Z ]{3,40}$/
      return studentNameRegex.test(value)
    }

    const fullNameIsValid = (value) => {
      const fullNameRegex = /^[a-zA-Z ]{6,40}$/
      return fullNameRegex.test(value)
    }
  
    const parentNameIsValid = (value) => {
      const parentNameRegex = /^[a-zA-Z ]{3,40}$/
      return parentNameRegex.test(value)
    }
  
    const phoneIsValid = (value) => {
      const phoneRegex = /^[\d\s()-]{10,20}$/
      return phoneRegex.test(value)
    }
  
    const emailIsValid = (value) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      return emailRegex.test(value)
    }

    const preferredDaysValid = (value) => {
      const preferredDaysValues = Object.values(value)
      return preferredDaysValues.includes(true)
    }

    const instrumentsAreValid = (value) => {
      const instrumentsValues = Object.values(value)
      return instrumentsValues.includes(true)
    }

    const typeOfWorkIsValid = (value) => {
      const typeOfWorkValues = Object.values(value)
      return typeOfWorkValues.includes(true)
    }




    return {
      studentNameIsValid,
      fullNameIsValid,
      parentNameIsValid,
      phoneIsValid,
      emailIsValid,
      preferredDaysValid,
      instrumentsAreValid,
      typeOfWorkIsValid
    } 
}
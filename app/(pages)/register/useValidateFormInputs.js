

export const useValidateFormInputs = () => {

    console.log("useValidateFOrm hook fired")

    const studentNameIsValid = (value) => {
        const studentNameRegex = /^[a-zA-Z ]{3,40}$/
        return studentNameRegex.test(value)
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

    return {
      studentNameIsValid,
      parentNameIsValid,
      phoneIsValid,
      emailIsValid,
      preferredDaysValid
    } 
}
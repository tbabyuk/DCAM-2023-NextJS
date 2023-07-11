
import { TrialButton } from "./TrialButton"

export const PageBottomTrialButton = () => {
  return (
    <div className="flex flex-col border-t-2 border-t-gray-200 pt-10 my-10">
        <div className="flex justify-center">
            <TrialButton />
        </div>
        <p className="text-xs text-center md:px-30 lg:px-40 mt-5">Just fill out our quick trial lesson form and wait to hear from us within 1-2 business days. If you like your trial lesson, you can sign up for regular lessons with us! Our lessons are available online (Zoom or Skype) as well as in-person if you live close to our location. Start learning your favorite instrument with one of our amazing teachers today!</p>  
    </div>
    )
}
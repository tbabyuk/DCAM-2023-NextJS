
import Link from "next/link"


const SuccessPage = () => {
  return (
    <div className="text-center text-green-600">
        <p>Your form was successfully submitted - thank you!</p>
        <p>Please expect to hear back from us within 1-2 business days!</p>
        <br />
        <p className="text-gray-600">Return to <Link href="/"><span className="font-semibold dcam-link">Home Page</span></Link></p>
    </div>
  )
}

export default SuccessPage

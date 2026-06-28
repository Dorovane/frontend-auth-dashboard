import { CircleQuestionMark, ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"



function LoginHeader() {
  return (
    <>
      <div className="flex justify-between mx-32 mt-10 mb-4">
        <h2 className="flex gap-2 text-2xl font-bold"> <ShieldCheck className="mt-1"/> Fortress Auth</h2>
        <p className="flex gap-2" ><Link to="/support">Support</Link> <CircleQuestionMark /></p>
      </div> 
    </>
  )
  
}

export default LoginHeader
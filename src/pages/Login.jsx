import { AtSign, LockKeyhole, Eye, EyeClosed } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
  const [isTrue, setIsTrue] = useState(true)
  return (
    <>


      <div className="w-1/3 mx-auto bg-surface-container p-6 text-center rounded-lg shadow-lg gap-10 flex flex-col gap-5" style={{ height: "700px"}}>
        <h1 className="text-4xl font-semibold">Ravi de vous revoir</h1>
        <p>Veuillez entrez vos identifiants pour vous connecter</p>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-left ">EMAIL</label>
            <div className="flex gap-5">
              <AtSign className="mt-4 absolute ms-4" /> <input id="email" type="email" className="w-full bg-surface-container-lowest px-16 py-4 rounded-md" placeholder="nom@entreprise.com" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="flex justify-between"><span>MOT DE PASSE</span> <Link to="/f">Mot de passe oublié ?</Link></label>
            <div className="flex gap-5 relative">
              <LockKeyhole className="mt-4 absolute ms-4" /> <input id="password" type={isTrue ? "password" : "text" }className="w-full bg-surface-container-lowest px-16 py-4 rounded-md" placeholder="******************" /> {isTrue ? <EyeClosed className="absolute right-2 mt-4 lg:hover:cursor-pointer" onClick={()=>setIsTrue(false)}/> : <Eye className="absolute right-2 mt-4 lg:hover:cursor-pointer" onClick={()=>setIsTrue(true)}/>}
            </div>
          </div>

          <div className="text-left">
            <input type="checkbox" id="remember" className="surface-container-lowest lg:hover:cursor-pointer" /> <label htmlFor="remember">Rester connecté</label>
          </div>

          <button className="border-2 border-surface-variant rounded-md px-6 py-2 lg:hover:cursor-pointer bg-primary-container py-4" >Se connecter</button>
        </form>
        <h2>OU</h2>
        <p>Nouveau ici ? <Link> Creér un compte</Link></p>
      </div>
    </>
  )
}

export default Login
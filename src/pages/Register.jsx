import { AtSign, LockKeyhole, Eye, EyeClosed, ShieldCheck } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Register() {
  const [isTrue, setIsTrue] = useState(true)
  return (
    <>
      <div className="w-1/3 mx-auto bg-surface-container p-6 text-center rounded-lg shadow-lg gap-10 flex flex-col gap-5" style={{ height: "900px" }}>
        <h1 className="text-4xl font-semibold">Créer un compte</h1>
        <p>Sécurisez votre identité numérique dès maintenant.</p>

        <form className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-left ">EMAIL</label>
            <div className="flex gap-5">
              <AtSign className="mt-4 absolute ms-4" /> <input id="email" type="email" className="w-full bg-surface-container-lowest px-16 py-4 rounded-md" placeholder="nom@entreprise.com" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="flex justify-between">MOT DE PASSE</label>
            <div className="flex gap-5 relative">
              <LockKeyhole className="mt-4 absolute ms-4" /> <input id="password" type={isTrue ? "password" : "text"} className="w-full bg-surface-container-lowest px-16 py-4 rounded-md" placeholder="******************" /> {isTrue ? <EyeClosed className="absolute right-2 mt-4 lg:hover:cursor-pointer" onClick={() => setIsTrue(false)} /> : <Eye className="absolute right-2 mt-4 lg:hover:cursor-pointer" onClick={() => setIsTrue(true)} />}
            </div>
            <div className="w-full flex justify-between gap-2">
              <span className="w-1/4 border rounded bg-surface" style={{ height: "5px" }}></span>
              <span className="w-1/4 border rounded bg-surface" style={{ height: "5px" }}></span>
              <span className="w-1/4 border rounded bg-surface" style={{ height: "5px" }}></span>
              <span className="w-1/4 border rounded bg-surface" style={{ height: "5px" }}></span>
              <span className="w-1/4 border rounded bg-surface" style={{ height: "5px" }}></span>
            </div>
            <p className="text-on-surface-variant">Votre mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule,une ponctuation et un chiffre</p>
          </div>



          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="flex justify-between">CONFIRMER LE MOT DE PASSE</label>
            <div className="flex gap-5 relative">
              <ShieldCheck className="mt-4 absolute ms-4" /> <input id="password" type={isTrue ? "password" : "text"} className="w-full bg-surface-container-lowest px-16 py-4 rounded-md" placeholder="******************" /> {isTrue ? <EyeClosed className="absolute right-2 mt-4 lg:hover:cursor-pointer" onClick={() => setIsTrue(false)} /> : <Eye className="absolute right-2 mt-4 lg:hover:cursor-pointer" onClick={() => setIsTrue(true)} />}
            </div>
          </div>


          <button className="border-2 border-surface-variant rounded-md px-6 py-2 lg:hover:cursor-pointer bg-primary-container py-4" >Se connecter</button>
        </form>
        <hr className="border-white/10" />
        <p>Vous avez déjà un compte ? <Link to="/login" className="text-primary">Se connecter</Link></p>
      </div>
    </>
  )
}

export default Register
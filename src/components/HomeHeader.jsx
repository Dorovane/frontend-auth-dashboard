import { ShieldCheck } from "lucide-react"
import { Link } from "react-router-dom"

function HomeHeader() {
  return (
    <>
      <div className="flex justify-between mx-32 mt-10 mb-4">
        <h2 className="flex gap-2 text-2xl font-bold"> <ShieldCheck className="mt-1" /> Fortress Auth</h2>
        <div className="flex gap-8 mt-2 text-lg">
          <p>Accueil</p>
          <p>Fonctionnalités</p>
          <p>Solutions</p>
          <p>Documentations</p>
        </div>
        <div className="flex gap-8 text-lg font-semibold">
          <Link className="mt-2">Connexion</Link>
          <Link className="lg:hover:cursor-pointer border-2 rounded-2xl py-2 px-4 bg-primary-container text-on-primary-container">S'inscrire</Link>
        </div>
      </div>
    </>
  )
}
export default HomeHeader
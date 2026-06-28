import { Link } from "react-router-dom"
import { ShieldCheck } from "lucide-react"

function Footer() {



  return (
    <>
      <div className="flex justify-between mx-20 py-8">
        <h2 className="flex gap-2 text-2xl font-bold"> <ShieldCheck className="mt-1" /> Fortress Secure</h2>
        <Link className="text-lg font-medium">Politique de confidentialité</Link>
        <Link className="text-lg font-medium">Conditions d'utilisation</Link>
        <Link className="text-lg font-medium">Audit de sécurité</Link>
        <h3>&copy; 2024 Fortress Secure. Tous droits réservés.</h3>
      </div>
    </>
  )
}

export default Footer
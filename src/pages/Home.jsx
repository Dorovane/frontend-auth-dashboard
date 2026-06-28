import { Link } from "react-router-dom";
import { CirclePlay, FingerprintPattern, Rss, SquareTerminal, ShieldCheck, MoveRight, CircleCheck } from "lucide-react"

function Home() {
  return (
    <>
      <div className="w-1/3 mx-auto text-center gap-10 flex flex-col">
        <div className=" rounded-full bg-surface-container-low text-green-800"><span className="bg-green-500 border mx-4 w-[10px] h-[10px] rounded-full inline-block animate-pulse"></span><span>PROTECTION D'IDENTITE NOUVELLE GENERATION</span></div>
        <h2 className="text-5xl font-bold">Sécurisez chaque point d'accès avec une intelligence fortifiée</h2>
        <p >Fortress Secure offre une authentification de classe entreprise qui s'adapte à votre ambition. Déployez une sécurité basée sur la biométrie et des protocoles zero-trust en quelques minutes, pas des mois.</p>
        <div className="flex justify-between">
          <Link className="flex gap-2 bg-primary text-inverse-on-surface px-6 py-4 rounded-full">Commencez l'essai gratuit</Link>
          <Link className="flex gap-2 bg-surface-container-low px-6 py-4 rounded-full"><CirclePlay /><span>Voir demo</span></Link>
        </div>
      </div>
      <hr className="border-outline-variant my-4" />

      <div className="grid grid-cols-10 mx-20 gap-2 h-[600px]">
        <div className="col-span-7  border-outline bg-surface-container-low rounded-2xl p-4 gap-10 flex flex-col">
          <FingerprintPattern />

          <h2 className="text-5xl font-bold">Identité Biométrique</h2>
          <p>Remplacez les mots de passe vulnérables par des jetons biométriques signés cryptographiquement. Le support pour FaceID, TouchID et Windows Hello est inclus par défaut. </p>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwpXnGI_BptWkEDC0VopkZqaD-PVHi7Woi7R1XxWUh7sCmEuFGlkIrZH0Aodiax9JKYNbdayAFuIZv-l39rqYPmclJYPUqxiKz-ANgphDJoXW4SDj2iIfVo8aXwN_XoIyDNLlFFhNbGvGwH0hcAsktfgT7wXLJNuB8LLrbhEGjBTjTt3-3TI_sftNsJTGulhJBDdj_IOz9MzITdp7tXU5s1hZHDAlNFoiSKvVsSTNqAq4nq8dsAAERYXY3sMcQTDI6YmrpXGBguR8" className=" rounded-xl ms-4w-[750px] h-[300px] mt-4" alt="" />
        </div>
        <div className="col-span-3  border-outline bg-surface-container-low rounded-2xl p-4 gap-10 flex flex-col">
          <Rss />


          <h2 className="text-5xl font-bold mt-4">Latence Ultra-Faible</h2>
          <p>Des nœuds d'authentification calculés en périphérie (Edge) dans le monde entier garantissent des temps de vérification moins de 50ms pour chaque utilisateur, quel que soit son emplacement.  </p>
          <div>
            <hr className="border-outline-variant" />
            <div className="flex justify-between mt-[200px]">
              <p>Disponibilité globale</p>
              <p className="text-green-400">99.999%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mt-24 mx-20 gap-2">
        <div className=" border-outline bg-surface-container-low rounded-2xl p-4 gap-4 flex flex-col">
          <SquareTerminal />
          <h2 className="text-xl font-bold ">Adapté aux Développeurs</h2>
          <p>Des SDK propres pour React, Vue, Node et Python. L'implémentation ne nécessite que 3 lignes de code.</p>
        </div>
        <div className=" border-outline bg-surface-container-low rounded-2xl p-4 gap-4 flex flex-col">
          <ShieldCheck />
          <h2 className="text-xl font-bold ">Prêt pour le Zero-Trust</h2>
          <p>Évaluation continue des risques pour chaque session. Déclenchez automatiquement une authentification renforcée en cas d'anomalies détectées.</p>
        </div>
        <div className=" border-outline bg-surface-container-low rounded-2xl p-4 justify-between flex flex-col my-2">
          <h2 className="text-xl font-bold ">Explorer l'API de Sécurité</h2>
          <p className=" ms-6 lg:hover:cursor-pointer lg:hover:-translate-y-2 duration-300 flex gap-2"><span className="text-lg font-semibold">Voir la documentation</span> <MoveRight className="mt-1" /></p>
        </div>
      </div>

      <div className="mx-20 grid grid-cols-2 gap-4 mt-16">
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl font-bold ">Tableau de bord de surveillance des menaces en temps réel</h2>
          <p>Visualisez chaque tentative et session à travers tout votre écosystème. Notre moteur basé sur l'IA catégorise le trafic et signale les violations potentielles avant qu'elles ne s'aggravent.</p>
          <div className="flex flex-col gap-4">
            <p className="flex gap-2"><CircleCheck className="text-green-300"/><span>Détection d'anomalies en temps réel</span></p>
            <p className="flex gap-2"><CircleCheck className="text-green-300"/><span>Cartes thermiques mondiales des modèles d'accès</span></p>
            <p className="flex gap-2"><CircleCheck className="text-green-300"/><span>Révocation instantanée des jetons compromis</span></p>
          </div>
        </div>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGqWjTduNlHwv9Acaem5ZTDeI-EjpoNm89lnfJC9I6s-Czr1-165yOUdZaKJkKOsVUWWTyCIWBzWueeJqrhzsDiIsOM59vU7D4VnUKkosBUdZrd3MCGVL2hTXoEFMEqUXMIqezmluXsYBP857t30_uctzbVPK0tG8SqA85QMISiBqHv61JJnT_mipk2Ro9XgAM2DIRrVBf6KyBeFWT4SpEHCATvf_n7lWQ5KAAuEulffgPzposN9kOZCWtzuHR8_xHN8aBh62fQyM" className="rounded-2xl w-full h-[400px]" alt="" />
      </div>


    </>
  )
}

export default Home
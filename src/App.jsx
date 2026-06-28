import Login from "./pages/Login"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import HomeHeader from "./components/HomeHeader"
import LoginHeader from "./components/LoginHeader"
import Register from "./pages/Register"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
  return (
    <>
      <BrowserRouter>
        <header className="fixed top-0 w-full z-10 bg-surface-container-low">
          <Routes>
            <Route path="/" element={<HomeHeader />} />
            <Route path="/login" element={<LoginHeader />} />
            <Route path="/register" element={<LoginHeader />} />
          </Routes>
        <hr className="border-outline-variant" />
        </header>
        <main className="mt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <footer className="mt-12 w-full">
        <hr className="border-outline-variant" />
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
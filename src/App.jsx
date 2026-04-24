import {  BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Menu from "./pages/Menu"
import Nosotros from "./pages/Nosotros"
import Reservas from "./pages/Reservas"
import Domicilios from "./pages/Domicilios"
import Comentarios from "./pages/Comentarios"
import './styles/index.css'
import './styles/Variables.css'
import './styles/navbar.css'
import './styles/footer.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="/domicilios" element={<Domicilios />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>

  )
}

export default App

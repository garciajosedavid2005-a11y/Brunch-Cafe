import Hero from "../../components/Hero/Hero"
import HistoriaNosotros from "../../components/HistoriaNosotros/HistoriaNosotros"
import UbicacionNosotros from "../../components/UbicacionNosotros/UbicacionNosotros"
import ContactoReservas from "../../components/ContactoReservas/ContactoReservas"
import "./Nosotros.css"

const Nosotros = () => {
    return (
        <main className="pagina-Nosotros">
            <Hero 
                estatico={true}
                titulo="¡Sobre Nosotros!..."
                colorFondo="var(--color-primario)"
                centrado={true}
            />
            <HistoriaNosotros />
            <UbicacionNosotros />
            <ContactoReservas />
        </main>
    )
}

export default Nosotros
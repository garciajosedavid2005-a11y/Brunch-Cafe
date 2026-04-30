import "./Reservas.css"
import HeroReservas from "../../components/HeroReservas/HeroReservas"
import FormularioReservas from "../../components/FormularioReservas/FormularioReservas"
import ContactoReservas from "../../components/ContactoReservas/ContactoReservas"

const Reservas = () => {
    return (
        <main className="pagina-Reservas">
            <HeroReservas />
            <FormularioReservas />
            <ContactoReservas />
        </main>

    )
}

export default Reservas 
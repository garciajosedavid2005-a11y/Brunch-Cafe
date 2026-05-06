import "./Reservas.css"
import HeroReservas from "../../components/HeroReservas/HeroReservas"
import FormularioReservas from "../../components/FormularioReservas/FormularioReservas"
import ContactoReservas from "../../components/ContactoReservas/ContactoReservas"
import FondoAnimado from "../../components/FondoAnimado/FondoAnimado"

const Reservas = () => {
    return (
        <main className="pagina-Reservas">
            <HeroReservas />
            <FondoAnimado>
                <FormularioReservas />
                <ContactoReservas />
            </FondoAnimado>
        </main>

    )
}

export default Reservas 
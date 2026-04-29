import heroBg from '../../assets/hero-reservas.jpg'
import "./HeroReservas.css"

const HeroReservas = () => {
    return (
        <section className="hero-reservas">

            {/* Imagen de fondo */}
            <div className="hero-reservas__fondo">
                <img src={heroBg} alt="Hero Reservas" className="hero-reservas__imagen" />
            </div>

            {/* Overlay oscuro */}
            <div className="hero-reservas__overlay" />

            {/* Texto */}
            <div className="hero-reservas__contenido grid-container">
                <div className="hero-reservas__texto">
                    <h1 className="hero-reservas__titulo">¡Haz tu reserva aquí!</h1>
                    <p className="hero-reservas__subtitulo">Disfruta el mejor brunch artesanal, todos los días</p>
                </div>
            </div>

            {/* Ola decorativa */}
            <div className="hero-reservas__ola" aria-hidden="true">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 C480,100 960,0 1440,80 L1440,100 L0,100 Z" fill="var(--color-fondo)" />
                </svg>
            </div>

        </section>
    )
}

export default HeroReservas
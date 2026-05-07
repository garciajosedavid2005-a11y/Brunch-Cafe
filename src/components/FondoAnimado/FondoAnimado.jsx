import "./FondoAnimado.css"

const iconos = [
    { emoji: "☕", clase: "icono-1" },
    { emoji: "🥐", clase: "icono-2" },
    { emoji: "🍓", clase: "icono-3" },
    { emoji: "🍳", clase: "icono-4" },
    { emoji: "🥑", clase: "icono-5" },
    { emoji: "🍊", clase: "icono-6" },
    { emoji: "☕", clase: "icono-7" },
    { emoji: "🥐", clase: "icono-8" },
    { emoji: "🍓", clase: "icono-9" },
    { emoji: "🍳", clase: "icono-10" },
    { emoji: "🫐", clase: "icono-11" },
    { emoji: "🧇", clase: "icono-12" },
    { emoji: "🍵", clase: "icono-13" },
    { emoji: "🥞", clase: "icono-14" },
    { emoji: "🍋", clase: "icono-15" },
]

const FondoAnimado = ({ children }) => {
    return (
        <div className="fondo-animado">
            {iconos.map((icono, i) => (
                <span key={i} className={`fondo-animado__icono ${icono.clase}`}>
                    {icono.emoji}
                </span>
            ))}
            <div className="fondo-animado__contenido">
                {children}
            </div>
        </div>
    )
}

export default FondoAnimado
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCarrito } from "../../context/CarritoContext";
import compras from "../../assets/carrito-de-compras.png";
import logoOscuro from "../../assets/logoOscuro.png";
import logoClaro from "../../assets/logoClaro.png";
import "./Navbar.css";

const rutasTransparentes = [
  "/",
  "/reservas",
  "/nosotros",
  "/comentarios",
];

const Navbar = () => {
    const { pathname } = useLocation();
    const [oculta, setOculta] = useState(false);
    const [animando, setAnimando] = useState(false)
    const esTransparente = rutasTransparentes.includes(pathname);
    const { productos } = useCarrito()

    const totalProductos = productos.reduce((acc, p) => acc + p.cantidad, 0)

    // Animación al agregar producto
    useEffect(() => {
        if (totalProductos > 0) {
            setAnimando(true)
            const timer = setTimeout(() => setAnimando(false), 600)
            return () => clearTimeout(timer)
        }
    }, [totalProductos])

    useEffect(() => {
        if (esTransparente) return;
        let ultimoScroll = window.scrollY;
        const manejarScroll = () => {
            const scrollActual = window.scrollY;
            if (scrollActual > ultimoScroll && scrollActual > 100) {
                setOculta(true);
            } else {
                setOculta(false);
            }
            ultimoScroll = scrollActual;
        };
        window.addEventListener("scroll", manejarScroll);
        return () => window.removeEventListener("scroll", manejarScroll);
    }, [esTransparente]);

    return (
        <header className={`top-bar ${esTransparente ? "top-bar--transparente" : ""} ${oculta ? "top-bar--oculta" : ""}`}>
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        <NavLink to="/" className="navbar__logo-enlace">
                            <div className="navbar__logo-wrapper">
                                <img
                                    src={esTransparente ? logoClaro : logoOscuro}
                                    alt="Brunch Café"
                                    className="navbar__logo"
                                />
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="top-bar-right">
                <ul className="menu">
                    <li><NavLink className="access" to="/">Inicio</NavLink></li>
                    <li><NavLink className="access" to="/menu">Menú</NavLink></li>
                    <li><NavLink className="access" to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink className="access" to="/reservas">Reservas</NavLink></li>
                    <li><NavLink className="access" to="/comentarios">Comentarios</NavLink></li>

                    {/* Carrito con contador y animación */}
                    <li>
                        <NavLink className="access" to="/domicilios">
                            <div className={`navbar__carrito ${animando ? 'navbar__carrito--animando' : ''}`}>
                                <img
                                    src={compras}
                                    alt="Carrito de compras"
                                    className="icon-carrito"
                                />
                                {totalProductos > 0 && (
                                    <span className="navbar__carrito-badge">
                                        {totalProductos}
                                    </span>
                                )}
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
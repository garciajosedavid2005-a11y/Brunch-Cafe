import { NavLink, useLocation } from "react-router-dom";
import compras from "../../assets/carrito-de-compras.png";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
    const ubicacion = useLocation();
    const esInicio = ubicacion.pathname === "/"|| ubicacion.pathname === "/reservas";

  return (
    <div className={"top-bar" + (esInicio ? " top-bar--transparente" : "")}>
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            <NavLink to="/" className="navbar__logo-enlace">
            <img 
              src={logo}
              alt="Brunch Café" 
              className="navbar__logo"
            />
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
          <li>
            <NavLink className="access" to="/domicilios">
              <img src={compras} alt="Carrito de compras" className="icon-carrito" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
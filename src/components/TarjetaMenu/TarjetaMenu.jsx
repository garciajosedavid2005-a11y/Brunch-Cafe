import useAnimacionEntrada from "../../hooks/useAnimacionEntrada";
import "./TarjetaMenu.css";


const TarjetaMenu = ({ id, nombre, descripcion, precio, imagen, delay }) => {
  const ref = useAnimacionEntrada();

  return (
    <article ref={ref} className={`tarjeta-menu animar animar--zoom delay-${delay}`} data-id={id}>
      <div className="tarjeta-menu__imagen-wrap">
        {imagen ? (
          <img
            className="tarjeta-menu__imagen"
            src={imagen}
            alt={`Imagen de ${nombre}`}
            loading="lazy"
          />
        ) : (
          <div className="tarjeta-menu__imagen-placeholder">
            <span className="tarjeta-menu__imagen-icon">🍽️</span>
          </div>
        )}

        <div className="tarjeta-menu__overlay">
          <div className="tarjeta-menu__overlay-body">
            <p className="tarjeta-menu__overlay-text">{descripcion}</p>
            <button
              type="button"
              className="tarjeta-menu__overlay-boton"
              onClick={() => {
                // handleAddToCart({ id, nombre, precio, imagen })
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <div className="tarjeta-menu__contenido">
        <h3 className="tarjeta-menu__nombre">{nombre}</h3>

        <div className="tarjeta-menu__valoracion" aria-label="Valoración de 5 estrellas">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <span className="tarjeta-menu__precio">{precio}</span>
      </div>
    </article>
  );
};

export default TarjetaMenu;

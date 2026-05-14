import "./CarritoProducto.css";

const CarritoProducto = ({ id, nombre, precio, imagen, cantidad = 1 }) => {
  return (
    <article className="carrito-producto" data-id={id}>
      <div className="carrito-producto__detalle">
        <div className="carrito-producto__imagen-wrap">
          {imagen ? (
            <img
              className="carrito-producto__imagen"
              src={imagen}
              alt={`Miniatura de ${nombre}`}
              loading="lazy"
            />
          ) : (
            <div className="carrito-producto__imagen-placeholder">📦</div>
          )}
        </div>

        <div className="carrito-producto__texto">
          <h4 className="carrito-producto__nombre">{nombre}</h4>
          <span className="carrito-producto__precio">${precio} c/u</span>
        </div>
      </div>

      <div className="carrito-producto__acciones">
        <div className="carrito-producto__cantidad">
          <button
            type="button"
            className="carrito-producto__cantidad-btn"
            onClick={() => {
              // handleDecreaseQuantity(id)
            }}
            aria-label={`Disminuir cantidad de ${nombre}`}
          >
            −
          </button>
          <span className="carrito-producto__cantidad-valor">{cantidad}</span>
          <button
            type="button"
            className="carrito-producto__cantidad-btn"
            onClick={() => {
              // handleIncreaseQuantity(id)
            }}
            aria-label={`Aumentar cantidad de ${nombre}`}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="carrito-producto__eliminar"
          onClick={() => {
            // handleRemoveProducto(id)
          }}
          aria-label={`Eliminar ${nombre} del carrito`}
        >
          🗑️
        </button>
      </div>
    </article>
  );
};

export default CarritoProducto;

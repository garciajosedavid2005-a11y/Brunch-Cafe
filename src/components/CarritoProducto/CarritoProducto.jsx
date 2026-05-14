import "./CarritoProducto.css"

const CarritoProducto = ({ imagen, nombre, descripcion }) => {
    return (
        <div className="carrito-producto">

            {/* Título */}
            <h1 className="carrito-producto__titulo">Carrito Brunch Café</h1>
            <div className="carrito-producto__separador"></div>

            {/* Producto */}
            <div className="grid-x grid-padding-x align-middle">

                {/* Imagen */}
                <div className="cell small-12 medium-4">
                    <img
                        src={imagen}
                        alt={nombre}
                        className="carrito-producto__imagen"
                    />
                </div>

                {/* Info */}
                <div className="cell small-12 medium-8">
                    <h3 className="carrito-producto__nombre">{nombre}</h3>
                    <div className="carrito-producto__linea"></div>
                    <p className="carrito-producto__descripcion">{descripcion}</p>
                    <p className="carrito-producto__descripcion">{descripcion}</p>

                    {/* Contador */}
                    <div className="carrito-producto__contador">
                        <button className="carrito-producto__btn">−</button>
                        <span className="carrito-producto__cantidad">0</span>
                        <button className="carrito-producto__btn">+</button>
                    </div>

                    <p className="carrito-producto__total">Total: $ 000000</p>
                </div>

            </div>

            {/* Botón agregar */}
            <div className="carrito-producto__agregar">
                <button className="carrito-producto__agregar-btn">
                    <span>+</span> Agregar Otro Producto al Carrito
                </button>
            </div>

        </div>
    )
}

export default CarritoProducto
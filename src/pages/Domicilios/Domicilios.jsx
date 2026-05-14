import "./Domicilios.css"
import CarritoProducto from "../../components/CarritoProducto/CarritoProducto"
import CarritoFormulario from "../../components/CarritoFormulario/CarritoFormulario"

const Domicilios = () => {
    return (
        <main className="carrito-pagina">
            <div className="grid-container">
                <CarritoProducto
                    imagen="https://via.placeholder.com/300x200"
                    nombre="Nombre del Producto..."
                    descripcion="Breve Descripción del producto"
                />
                <CarritoFormulario />
            </div>
        </main>
    )
}

export default Domicilios
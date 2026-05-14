import "./CarritoFormulario.css"
import { FaUser, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const CarritoFormulario = () => {
    return (
        <div className="carrito-formulario">

            {/* Título */}
            <h3 className="carrito-formulario__titulo">Información de Domicilio...</h3>
            <div className="carrito-formulario__separador"></div>

            {/* Campos */}
            <div className="carrito-formulario__card">
                <div className="grid-x grid-padding-x">

                    <div className="cell small-12">
                        <div className="carrito-formulario__campo">
                            <FaUser className="carrito-formulario__icono" />
                            <input
                                type="text"
                                placeholder="Indique su Nombre..."
                                className="carrito-formulario__input"
                            />
                        </div>
                    </div>

                    <div className="cell small-12 medium-6">
                        <div className="carrito-formulario__campo">
                            <FaMapMarkerAlt className="carrito-formulario__icono" />
                            <input
                                type="text"
                                placeholder="Indique su Dirección..."
                                className="carrito-formulario__input"
                            />
                        </div>
                    </div>

                    <div className="cell small-12 medium-6">
                        <div className="carrito-formulario__campo">
                            <FaClock className="carrito-formulario__icono" />
                            <input
                                type="text"
                                placeholder="Indique la Hora que desee..."
                                className="carrito-formulario__input"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Total estimado */}
            <div className="carrito-formulario__total">
                <div className="carrito-formulario__total-linea"></div>
                <p className="carrito-formulario__total-texto">TOTAL ESTIMADO: $ 000000</p>
                <div className="carrito-formulario__total-linea"></div>
            </div>

            {/* Botones */}
            <div className="carrito-formulario__botones">
                <button className="carrito-formulario__btn-limpiar">LIMPIAR</button>
                <button className="carrito-formulario__btn-finalizar">FINALIZAR COMPRA</button>
            </div>

        </div>
    )
}

export default CarritoFormulario
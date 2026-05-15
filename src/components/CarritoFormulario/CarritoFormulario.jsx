import "./CarritoFormulario.css"
import { FaUser, FaMapMarkerAlt, FaClock, FaHome, FaStickyNote } from 'react-icons/fa'
import { useCarrito } from '../../context/CarritoContext'

const CarritoFormulario = () => {

    const { calcularTotal, limpiarCarrito } = useCarrito()

    return (
        <div className="carrito-formulario">

            {/* Título */}
            <h3 className="carrito-formulario__titulo">Información de Domicilio...</h3>
            <div className="carrito-formulario__separador"></div>

            <div className="carrito-formulario__contenedor">
                {/* Campos */}
                <div className="carrito-formulario__card">
                    <div className="grid-x grid-padding-x">

                        {/* Nombre */}
                        <div className="cell small-12">
                            <label className="carrito-formulario__label">Tu Nombre...</label>
                            <div className="carrito-formulario__campo">
                                <FaUser className="carrito-formulario__icono" />
                                <input
                                    type="text"
                                    placeholder="Indique su Nombre..."
                                    className="carrito-formulario__input"
                                />
                            </div>
                        </div>

                        {/* Dirección */}
                        <div className="cell small-12 medium-6">
                            <label className="carrito-formulario__label">Tu Dirección...</label>
                            <div className="carrito-formulario__campo">
                                <FaMapMarkerAlt className="carrito-formulario__icono" />
                                <input
                                    type="text"
                                    placeholder="Indique su Dirección..."
                                    className="carrito-formulario__input"
                                />
                            </div>
                        </div>

                        {/* Hora */}
                        <div className="cell small-12 medium-6">
                            <label className="carrito-formulario__label">Hora de entrega...</label>
                            <div className="carrito-formulario__campo">
                                <FaClock className="carrito-formulario__icono" />
                                <input
                                    type="text"
                                    placeholder="Hora de entrega..."
                                    className="carrito-formulario__input"
                                />
                            </div>
                        </div>

                        {/* Barrio o conjunto */}
                        <div className="cell small-12 medium-6">
                            <label className="carrito-formulario__label">Barrio o conjunto...</label>
                            <div className="carrito-formulario__campo">
                                <FaHome className="carrito-formulario__icono" />
                                <input
                                    type="text"
                                    placeholder="Barrio o conjunto cerrado..."
                                    className="carrito-formulario__input"
                                />
                            </div>
                        </div>

                        {/* Indicaciones */}
                        <div className="cell small-12 medium-6">
                            <label className="carrito-formulario__label">Indicaciones especiales...</label>
                            <div className="carrito-formulario__campo">
                                <FaStickyNote className="carrito-formulario__icono" />
                                <input
                                    type="text"
                                    placeholder="Indicaciones especiales..."
                                    className="carrito-formulario__input"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Total estimado */}
                <div className="carrito-formulario__total">
                    <div className="carrito-formulario__total-linea"></div>
                    <p className="carrito-formulario__total-texto">
                        TOTAL ESTIMADO: ${calcularTotal().toLocaleString('es-CO')}
                    </p>
                    <div className="carrito-formulario__total-linea"></div>
                </div>

                {/* Botones */}
                <div className="carrito-formulario__botones">
                    <button
                        className="carrito-formulario__btn-limpiar"
                        onClick={limpiarCarrito}
                    >
                        LIMPIAR
                    </button>
                    <button className="carrito-formulario__btn-finalizar">
                        FINALIZAR COMPRA
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CarritoFormulario
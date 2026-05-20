import "./CarritoFormulario.css"
import { FaUser, FaMapMarkerAlt, FaClock, FaHome, FaStickyNote } from 'react-icons/fa'
import { useCarrito } from '../../context/CarritoContext'
import { useState } from 'react'
import ResumenPedido from '../ResumenPedido/ResumenPedido'

const CarritoFormulario = () => {

    const { calcularTotal, limpiarCarrito, productos } = useCarrito()

    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        hora: '',
        barrio: '',
        indicaciones: ''
    })

    const [mostrarModal, setMostrarModal] = useState(false)
    const [errores, setErrores] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validar = () => {
        const nuevosErrores = {}
        if (!formData.nombre.trim()) nuevosErrores.nombre = 'El nombre es requerido'
        if (!formData.direccion.trim()) nuevosErrores.direccion = 'La dirección es requerida'
        if (!formData.hora.trim()) nuevosErrores.hora = 'La hora es requerida'
        if (!formData.barrio.trim()) nuevosErrores.barrio = 'El barrio es requerido'
        if (!formData.hora.trim()) {
            nuevosErrores.hora = 'La hora es requerida'
        } else {
            const hora = formData.hora
            if (hora < '08:00' || hora > '16:00') {
                nuevosErrores.hora = 'La hora debe estar entre 8:00 AM y 4:00 PM'
            }
        }

        return nuevosErrores
    }

    const handleFinalizar = () => {

        if (productos.length === 0) {
            alert('Tu carrito está vacío — agrega productos desde el menú')
            return
        }

        const nuevosErrores = validar()
        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores)
            return
        }
        setErrores({})
        setMostrarModal(true)
    }

    const handleConfirmar = () => {
        setMostrarModal(false)
        alert('¡Pedido confirmado! Pronto estará en tu puerta.')
        limpiarCarrito()
        setFormData({ nombre: '', direccion: '', hora: '', barrio: '', indicaciones: '' })
    }

    return (

        <>
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
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                            </div>
                            {errores.nombre && <p className="carrito-error">{errores.nombre}</p>}
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
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                />
                            </div>
                            {errores.direccion && <p className="carrito-error">{errores.direccion}</p>}
                        </div>

                        {/* Hora */}
                        <div className="cell small-12 medium-6">
                            <label className="carrito-formulario__label">Hora de entrega...</label>
                            <div className="carrito-formulario__campo">
                                <FaClock className="carrito-formulario__icono" />
                                <input
                                    type="time"
                                    placeholder="Hora de entrega..."
                                    className="carrito-formulario__input"
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleChange}
                                    min="08:00"
                                    max="16:00"
                                />
                            </div>
                            {errores.hora && <p className="carrito-error">{errores.hora}</p>}
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
                                    name="barrio"
                                    value={formData.barrio}
                                    onChange={handleChange}
                                />
                            </div>
                            {errores.barrio && <p className="carrito-error">{errores.barrio}</p>}
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
                                    name="indicaciones"
                                    value={formData.indicaciones}
                                    onChange={handleChange}
                                />
                            </div>
                            {errores.indicaciones && <p className="carrito-error">{errores.indicaciones}</p>}
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
                    <button className="carrito-formulario__btn-finalizar" onClick={handleFinalizar}>
                        FINALIZAR COMPRA
                    </button>
                </div>

            </div>
        </div>
        
        {mostrarModal && (
                <ResumenPedido
                    formData={formData}
                    onEditar={() => setMostrarModal(false)}
                    onConfirmar={handleConfirmar}
                />
            )}
        </>
    );
}

export default CarritoFormulario
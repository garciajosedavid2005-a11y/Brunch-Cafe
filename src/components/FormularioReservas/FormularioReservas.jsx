import "./FormularioReservas.css"
import { personas } from '../../data/personas'
import { horas } from '../../data/horas'
import useSelectPersonas from '../../hooks/useSelectPersonas'
import { FaUser, FaUsers, FaCalendarAlt, FaClock, FaCommentAlt } from 'react-icons/fa'

const FormularioReservas = () => {
    const [persona, SelectPersonas] = useSelectPersonas('Seleccione la cantidad de personas:', personas, false)
    const [hora, SelectHoras] = useSelectPersonas('Ingrese la hora:', horas, false)
    const hoy = new Date().toISOString().split('T')[0]

    return (
        <section className="formulario-seccion">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="cell small-12 medium-8 large-6">
                        <div className="formulario-card">
                            <h2 className="formulario-titulo">BIENVENIDOS A BRUNCH CAFE...</h2>
                            <form>

                                {/* Campo nombre */}
                                <label htmlFor="nombre">Ingrese el nombre:</label>
                                <div className="formulario-campo-icono">
                                    <FaUser className="formulario-icono" />
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Ingrese su nombre"
                                        className="formulario-input"
                                    />
                                </div>

                                {/* Campo Cantidad de Personas */}
                                <label>Seleccione la cantidad de personas:</label>
                                <div className="formulario-campo-icono">
                                    <FaUsers className="formulario-icono" />
                                    <SelectPersonas />
                                </div>

                                {/* Campo Fecha */}
                                <label htmlFor="fecha">Ingrese la fecha que desee:</label>
                                <div className="formulario-campo-icono">
                                    <FaCalendarAlt className="formulario-icono" />
                                    <input
                                        type="date"
                                        id="fecha"
                                        name="fecha"
                                        min={hoy}
                                        onKeyDown={(e) => e.preventDefault()}
                                        className="formulario-input"
                                    />
                                </div>

                                {/* Campo Hora */}
                                <label>Ingrese la hora:</label>
                                <div className="formulario-campo-icono">
                                    <FaClock className="formulario-icono" />
                                    <SelectHoras />
                                </div>


                                {/* Observaciones */}
                                <label htmlFor="observaciones">Observaciones adicionales:</label>
                                <div className="formulario-campo-icono formulario-campo-icono--textarea">
                                    <FaCommentAlt className="formulario-icono formulario-icono--top" />
                                    <textarea
                                        id="observaciones"
                                        name="observaciones"
                                        rows="4"
                                        placeholder="Alguna solicitud especial, alergias, etc."
                                        className="formulario-input"
                                    />
                                </div>

                                {/* Botones */}
                                <div className="formulario-botones">
                                    <button type="button" className="button secondary hollow">
                                        Limpiar Reserva
                                    </button>
                                    <button type="submit" className="button">
                                        Enviar Reserva
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormularioReservas
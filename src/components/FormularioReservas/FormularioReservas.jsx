import "./FormularioReservas.css"
import { personas } from '../../data/personas'
import { horas } from '../../data/horas'
import useSelectPersonas from '../../hooks/useSelectPersonas'

const FormularioReservas = () => {
    { /* Hook para seleccionar personas */ }
    const [persona, SelectPersonas] = useSelectPersonas('Seleccione la cantidad de personas:', personas)

    {/* Reutalización del Hook para seleccionar horas */ }
    const [hora, SelectHoras] = useSelectPersonas('Ingrese la hora:', horas)

    { /*Limitar la fecha para que no sea anterior a hoy*/ }
    const hoy = new Date().toISOString().split('T')[0]

    return (
        <section className="formulario-seccion">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="cell small-12 medium-8 large-6">
                        <div className="formulario-card">
                            <h2 className="formulario-titulo">BIENVENIDOS A BRUNCH CAFE...</h2>
                            <form>
                                {/* Aquí van los campos */}
                                {/* Campo nombre */}
                                    <label htmlFor="nombre">Ingrese el nombre:</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        placeholder="Ingrese su nombre"
                                        className="formulario-input"
                                    />

                                    {/* Campo Cantidad de Personas*/ }
                                    <SelectPersonas />

                                    { /* Campo Fecha de Reserva*/ }
                                    <label htmlFor="fecha">Ingrese la fecha que desee:</label>
                                    <input
                                        placeholder="Fecha de la reserva"
                                        type="date"
                                        id="fecha"
                                        name="fecha"
                                        min={hoy}
                                    />

                                    { /* Campo Hora de Reserva*/ }
                                    <SelectHoras />

                                    {/* Observaciones */}
                                    <label htmlFor="observaciones">Observaciones adicionales:</label>
                                    <textarea
                                        id="observaciones"
                                        name="observaciones"
                                        rows="4"
                                        placeholder="Alguna solicitud especial, alergias, etc."
                                    />

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
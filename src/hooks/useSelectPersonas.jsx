import { useState } from 'react'

const useSelectPersonas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectPersonas = () => (
        <>
            <label>{label}</label>
            <select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione...</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}>
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </>
    )

    return [state, SelectPersonas]
}

export default useSelectPersonas
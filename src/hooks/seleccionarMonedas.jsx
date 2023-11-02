import { useState } from "react"



export default function seleccionarMonedas(label,opciones) {
    const [state, setState] = useState('')
    const SeleccionarMoneda=()=>(
        <>
            <label className=" text-3xl font-semibold text-white text-center">{label}</label>

            <select 
                className=" text-md rounded-lg h-10 w-full p-3 transition-all"
                value={state}
                onChange={e=>setState(e.target.value)}
                >

                <option>Selecciones su moneda</option>
                
                {opciones.map(opcion=>(
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </select>
        </>
    )
    return [state,SeleccionarMoneda]
}

import React, { Fragment, useState} from 'react';
import Error from './Error'


const Pregunta = ({guardarPresupuesto, guardarRestante, cambiarMostrar, valor}) => {

    const [cantidad, guardarCantidad]=useState(0);
    const [error, guardarError]=useState(false)

    const definirPresupuesto =e =>{
        guardarCantidad (
            parseInt(e.target.value)
        ) 
    }

    const agregarPresupuesto = e =>{
        e.preventDefault()

        //validar
        if (cantidad <1 || isNaN (cantidad)){
            guardarError(true)
            return;
        }

        //si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);

    }
    if(valor > 0 ){
        cambiarMostrar(false);
        }

    return (
        <Fragment>
            <h2>Cuento con:</h2>
                {error ? <Error mensaje ="El valor es incorrecto" /> : null}

            <form
            onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="En mi billetera tengo: $"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="definir cantidad"
                />


            </form>

        </Fragment>

    );
}

export default Pregunta;
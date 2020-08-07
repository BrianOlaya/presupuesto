import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid'


const Formulario = ({guardarGasto, guardarCrearGasto}) => {
     
    const [nombre, guardarNombre]=useState('');
    const [cantidad, guardarCantidad]=useState('');
    const [error, guardarError]=useState(false);


    const agregarGasto = e =>{
        e.preventDefault();

        //validar
        if(nombre.trim()=== '' || cantidad<1 || isNaN(cantidad)){
            guardarError(true)
            return;
        }

        guardarError(false)
        //constuir el gasto
        const gasto ={
            nombre:nombre,  // este nombre es el valor de del state nombre linea 7
            cantidad:cantidad,  // esta cantidad es el valor de del state cantidad linea 8
            id : shortid.generate()
        }
     

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);



        //resetear el formulario
        guardarNombre('');
        guardarCantidad('');


    }

    return (
        <form
        onSubmit={agregarGasto}
        >
            <h2>Ingresa tus gastos aquí</h2>
                {error?  <Error mensaje= "Ambos campos son obligatorios o prespuesto incorrecto"/>  :  null }

            <div className="campo">
                <label>Nombre del gasto</label>

                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e=>guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>

                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 5000"
                    value={cantidad}
                    onChange={e=> guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />

        </form>

    );
}

export default Formulario;
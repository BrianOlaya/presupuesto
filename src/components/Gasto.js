import React from 'react';


const Gasto = ({gasto}) =>  (  

    <li className="gastos">
        <p>{gasto.nombre}</p>

        <span className="gasto">${gasto.cantidad}</span>

    </li>
);

 
export default Gasto;

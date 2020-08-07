import React from 'react';


const Gasto = ({gasto}) =>  (  

    <li className="gastos">
        <p>{gasto.nombre}</p>

        <span className="gasto">${(Intl.NumberFormat().format(gasto.cantidad))}</span>

    </li>
);

 
export default Gasto;

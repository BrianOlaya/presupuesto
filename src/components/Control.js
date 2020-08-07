import React, { Fragment } from 'react';
import {revisarPrersupuesto} from '../helper';

const Control = ({presupuesto, restante}) => {

    return (
        <Fragment>
            <div className="alert alert-primary">
                Billetera inicial:${(Intl.NumberFormat().format(presupuesto))}  

            </div>
            <div className={revisarPrersupuesto( presupuesto, restante)}>
                Me quedan:${(Intl.NumberFormat().format(restante))}    

            </div>
        </Fragment>
    );
}

export default Control;

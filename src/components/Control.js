import React, { Fragment } from 'react';
import {revisarPrersupuesto} from '../helper';

const Control = ({presupuesto, restante}) => {

    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto:${presupuesto}

            </div>
            <div className={revisarPrersupuesto( presupuesto, restante)}>
                Restante:${restante}

            </div>
        </Fragment>
    );
}

export default Control;

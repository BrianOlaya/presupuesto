import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado'
import Control from './components/Control'


function App() {

  //presupuesto en localstorage
  let presupuestoInicial = parseInt(localStorage.getItem('presupuesto'));
  if (!presupuestoInicial) {
    presupuestoInicial = 0;
  }

  let restanteInicial = parseInt(localStorage.getItem('restante'));
  if (!restanteInicial) {
    restanteInicial = presupuestoInicial;
  }

  let gastosInicial = JSON.parse(localStorage.getItem('gastos'));
  if (!gastosInicial) {
    gastosInicial = [];
  }




  const [presupuesto, guardarPresupuesto] = useState(presupuestoInicial);
  const [restante, guardarRestante] = useState(restanteInicial);
  const [mostrar, cambiarMostrar] = useState(true);
  const [gastos, guardarGastos] = useState(gastosInicial)
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto);
  }, [presupuesto])


  useEffect(() => {
    localStorage.setItem('restante', restante);
  }, [restante])

  useEffect(() => {
    if (gastosInicial) {
      localStorage.setItem('gastos', JSON.stringify(gastos));
    } else {
      localStorage.setItem('gastos', JSON.stringify([]));
    }

  }, [gastos , gastosInicial])




  //useEffect que acyualiza el restante  
  useEffect(() => {
    if (creargasto) {
      guardarGastos([
        ...gastos,
        gasto
      ]);

      //resta del prespuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      guardarRestante(presupuestoRestante)


      //Resetear  a false
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, restante])


  //funcion que hacer rwset global

  const resetGlobal = e => {
    guardarPresupuesto(0);
    guardarGastos([]);
    guardarRestante(0);
    cambiarMostrar(true);
  }

  return (
    <div className="container">
      <header>
        <h1>Mis gastos</h1>
        <div className="contenido-principal contenido">
          {mostrar
            ?
            (<Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              cambiarMostrar={cambiarMostrar}
              valor={presupuesto}


            />)

            :
            (<div className="row list-center">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <Control
                  presupuesto={presupuesto}
                  restante={restante}
                />

                <button
                  className="reset"
                  type="submit"
                  onClick={e => resetGlobal()}
                > Reset</button>
              </div>


            </div>

            )
          }


        </div>
      </header>
    </div>
  );
}

export default App;

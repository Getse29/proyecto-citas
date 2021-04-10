import { Fragment, useEffect, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
import "./index.css";

function App() {

  /* citas en local storage */
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales])

  /* Tomar las citas actualles y añadir la nueva */
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  /* Eliminar Cita */
  const eliminarCita = citaID => {
    const nuevasCitas = citas.filter(cita => cita.id !== citaID);
    setCitas(nuevasCitas);
  }

  /* Mensaje condicionales */
  const titulo = citas.length === 0 ? 'Agrega una nueva cita' : 'Administrar citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2> {titulo} </h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

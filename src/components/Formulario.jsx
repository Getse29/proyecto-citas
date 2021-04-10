import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {

  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });


  const [error, setError] = useState(false)

  const actualizarState = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = e => {
    e.preventDefault();

    /* Validar */
    if (mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === '') {
      return setError(true);
    }

    /* Eliminar mensaje error */
    setError(false);

    /* asignar id */
    cita.id = uuid();
    /* Crear cita */
    crearCita(cita);

    /* reiniciar form */
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
    })
  }

  return (
    <Fragment>
      <h2>Crear cita</h2>

      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input
          className="u-full-width"
          type="text"
          name="mascota"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          className="u-full-width"
          type="text"
          name="propietario"
          placeholder="Nombre dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          className="u-full-width"
          type="date"
          name="fecha"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          className="u-full-width"
          type="time"
          name="hora"
          onChange={actualizarState}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>
      </form>
    </Fragment>
  )
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
}

export default Formulario;
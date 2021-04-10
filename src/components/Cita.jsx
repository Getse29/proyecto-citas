import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

export const Cita = ({ cita, eliminarCita }) => {

  const { mascota, propietario, fecha, hora, sintomas, id } = cita

  return (
    <Fragment>
      <div className="cita">
        <p>Mascota: <span>{mascota}</span></p>
        <p>Mascota: <span>{propietario}</span></p>
        <p>Mascota: <span>{fecha}</span></p>
        <p>Mascota: <span>{hora}</span></p>
        <p>Mascota: <span>{sintomas}</span></p>

        <button
          className="button eliminar u-full-width"
          onClick={() => eliminarCita(id)}
        >Eliminar &times;</button>
      </div>
    </Fragment>
  )
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default Cita;
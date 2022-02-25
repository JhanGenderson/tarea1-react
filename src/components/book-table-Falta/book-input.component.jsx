import React from "react";
import "./book-table.styles.css";

const BookForm = () => {
  return <div className="seccion-formulario">
      <form>
          <label> Nombre: </label>
          <input type="text" placeholder="Your Name" />

          <label> Correo: </label>
          <input type="email" placeholder="Your Email" />

          <label> Telefono: </label>
          <input type="number" placeholder="Your Phone Number" />

          <label> Fecha: </label>
          <input type="date" placeholder="Date" />

          <label> Hora: </label>
          <input type="time" placeholder="Time" />

          <label>Numero de personas: </label>
          <input type="number" placeholder="Cantidad de personas"/>

          <button class="btn-form" type="submit">Book my table</button>
        </form>
  </div>;
};

export default BookForm;

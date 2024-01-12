import { useState } from "react";
import "../styles/header.css";

const Header = ({ setIngresarRemito }) => {
  const ingreso = () => {
    setIngresarRemito(true);
  };

  return (
    <>
      <div className="container">
        <h1>CONTROL DE REMITOS ACDF</h1>
        <ul className="list">
          <button className="btn btn-warning">Inicio</button>
          <button onClick={ingreso} className="btn btn-warning">
            Nuevo Ingreso
          </button>
          <button className="btn btn-warning">Filtros</button>
        </ul>
      </div>
    </>
  );
};

export default Header;

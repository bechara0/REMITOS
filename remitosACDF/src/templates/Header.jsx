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
          <button>Inicio</button>
          <button onClick={ingreso}>Nuevo Ingreso</button>
          <button>Filtros</button>
          <button>Todos loa remitos</button>
        </ul>
      </div>
    </>
  );
};

export default Header;

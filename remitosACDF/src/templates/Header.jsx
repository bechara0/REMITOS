import "../styles/header.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <h1>CONTROL DE REMITOS ACDF</h1>
        <ul className="list">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nuevo Ingreso</a>
          </li>
          <li>
            <a href="#">Filtros</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;

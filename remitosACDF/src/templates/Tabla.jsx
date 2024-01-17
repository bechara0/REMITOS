import React from "react";
import { borrarRemito } from "../helpers/helper";

const Tabla = ({
  todosLosRemitos,
  expandirRemito,
  setExpandirRemito,
  setIdRemito,
}) => {
  console.log("lista de remitos: ", todosLosRemitos);

  const handleExpandir = (_id) => {
    setExpandirRemito(true);
    setIdRemito(_id);
  };

  const handleBorrar = async (_id) => {
    try {
      const remitoBorrado = await borrarRemito(_id);
    } catch {
      console.error("Error al intentar borrrar remito: ", error);
    }
    location.reload();
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Fecha</th>
            <th>Nº Remito</th>
          </tr>
        </thead>
        <tbody>
          {todosLosRemitos.map((remito) => (
            <tr key={remito._id}>
              <td>{remito.proveedor}</td>
              <td>{remito.fecha}</td>
              <td>{remito.remito}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => handleExpandir(remito._id)}
                >
                  Expandir
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleBorrar(remito._id)}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;

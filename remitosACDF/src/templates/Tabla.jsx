import React from "react";

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;

import { borrarRemito } from "../helpers/helper";

const Remito = ({ expandirRemito, remitoIndividual, setExpandirRemito }) => {
  const {
    proveedor,
    remito,
    cantidad,
    descripcion,
    fecha,
    facturado,
    factura,
  } = remitoIndividual;
  const handlevolver = (e) => {
    e.preventDefault();
    setExpandirRemito(false);
  };
  return (
    <>
      {expandirRemito && (
        <div>
          <p>{proveedor}</p>
          <p>{remito}</p>
          <p>{fecha}</p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {cantidad && Array.isArray(cantidad) ? (
                // Verificación de que cantidad es un array antes de mapear
                descripcion.map((item, index) => (
                  <tr key={index}>
                    <td>{cantidad[index]}</td>
                    <td>{item}</td>
                  </tr>
                ))
              ) : (
                // Renderizar un mensaje de error o manejar la falta de cantidad
                <tr>
                  <td colSpan="2">Cantidad no disponible</td>
                </tr>
              )}
            </tbody>
          </table>
          <button className="btn btn-success" onClick={handlevolver}>
            Volver
          </button>
        </div>
      )}
    </>
  );
};

export default Remito;

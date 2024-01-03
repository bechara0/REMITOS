import React from "react";

const IngresoRemito = ({ setIngresarRemito, ingresarRemito, proveedores }) => {
  console.log("proveedores ", proveedores);
  return (
    <>
      {ingresarRemito && (
        <>
          <h1>Ingreso Nuevo Remito</h1>
          <form>
            <label>Selecciona un Proveedor</label>
            <select>
              <option value="">Seleccionar...</option>
              {proveedores.map((proveedor) => {
                return (
                  <option key={proveedor._id} value={proveedor.proveedor}>
                    {proveedor.proveedor}
                  </option>
                );
              })}
            </select>
            <input type="text" placeholder="Ingrese Fecha Remito" />
            <input type="text" placeholder="Ingrese Nº Remito" />
          </form>
        </>
      )}
    </>
  );
};

export default IngresoRemito;

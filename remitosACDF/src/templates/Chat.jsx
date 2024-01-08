import React from "react";

const IngresoRemito = ({
  setIngresarRemito,
  ingresarRemito,
  proveedores,
  setManejoDetalle,
  manejoDetalle,
  datosFormulario,
  setDatosFormulario,
}) => {
  const encenderFormulario = (e) => {
    e.preventDefault();
    setManejoDetalle(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cantidad") {
      setDatosFormulario((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], parseInt(value, 10)],
      }));
    } else if (name === "descripcion") {
      setDatosFormulario((prevData) => ({
        ...prevData,
        [name]: [...prevData[name], value],
      }));
    } else {
      setDatosFormulario((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  console.log("datos a enviar: ", datosFormulario);

  const sumarOtroDetalle = (e) => {
    e.preventDefault();
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {ingresarRemito && (
        <>
          <h1>Ingreso Nuevo Remito</h1>
          <form>
            <label>Selecciona un Proveedor</label>
            <select
              value={datosFormulario.proveedor}
              onChange={handleChange}
              name="proveedor"
            >
              <option>Seleccionar...</option>
              {proveedores.map((proveedor) => {
                return (
                  <option key={proveedor._id} value={proveedor.proveedor}>
                    {proveedor.proveedor}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              placeholder="Ingrese Fecha Remito"
              name="fecha"
              value={datosFormulario.fecha}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingrese Nº Remito"
              name="remito"
              value={datosFormulario.remito}
              onChange={handleChange}
            />
            <button onClick={(e) => encenderFormulario(e)}>
              Agregar Insumo
            </button>
            {manejoDetalle && (
              <div>
                <input
                  type="number"
                  placeholder="Ingrese Cantidad"
                  value={datosFormulario.cantidad}
                  onChange={handleChange}
                  name="cantidad"
                />
                <input
                  type="text"
                  placeholder="Ingrese Detalle"
                  value={datosFormulario.descripcion}
                  onChange={(e) =>
                    handleChange({
                      target: { name: "descripcion", value: e.target.value },
                    })
                  }
                />
                <button onClick={(e) => sumarOtroDetalle(e)}>
                  Agregar Otro
                </button>
              </div>
            )}
            <input
              type="text"
              placeholder="Ingrese Nº Factura"
              value={datosFormulario.factura}
              onChange={handleChange}
              name="factura"
            />
            <input type="submit" onClick={(e) => enviarFormulario(e)} />
          </form>
        </>
      )}
    </>
  );
};

export default IngresoRemito;

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

  const handleCantidad = (e) => {
    e.preventDefault();
    setDatosFormulario((prevData) => ({
      ...prevData,
      cantidad: [...prevData.cantidad, parseInt(prevData.cantidadInput, 10)],
      cantidadInput: "", // Limpiar el input después de agregar al array
    }));
  };

  const handleDescripcion = (e) => {
    e.preventDefault();
    setDatosFormulario((prevData) => ({
      ...prevData,
      descripcion: [...prevData.descripcion, prevData.descripcionInput],
      descripcionInput: "", // Limpiar el input después de agregar al array
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosFormulario((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
                <div>
                  <input
                    type="number"
                    placeholder="Ingrese Cantidad"
                    value={datosFormulario.cantidadInput} // Usar 'value' en lugar de 'defaultValue'
                    onChange={(e) =>
                      setDatosFormulario((prevData) => ({
                        ...prevData,
                        cantidadInput: e.target.value,
                      }))
                    }
                    name="cantidad"
                  />
                  <button onClick={handleCantidad}>Enviar cantidad</button>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Ingrese Detalle"
                    value={datosFormulario.descripcionInput}
                    onChange={(e) =>
                      setDatosFormulario((prevData) => ({
                        ...prevData,
                        descripcionInput: e.target.value,
                      }))
                    }
                  />

                  <button onClick={handleDescripcion}>Enviar detalle</button>
                </div>
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

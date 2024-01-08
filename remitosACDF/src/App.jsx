import { useEffect, useState } from "react";

import "./App.css";
import Header from "./templates/Header";
import { cargarProveedores } from "./helpers/helper";
import IngresoRemito from "./templates/IngresoRemito";

function App() {
  const [proveedores, setProveedores] = useState({});
  const [ingresarRemito, setIngresarRemito] = useState(false);
  const [manejoDetalle, setManejoDetalle] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState({
    proveedor: "",
    fecha: "",
    remito: "",
    cantidad: [],
    cantidadInput: "",
    unidad: "",
    descripcion: [],
    descripcionInput: "",
    facturado: false,
    factura: "",
  });

  useEffect(() => {
    const listaProveedores = async () => {
      const proveedoresLista = await cargarProveedores();
      setProveedores(proveedoresLista);
    };

    listaProveedores();
  }, []);
  console.log(proveedores);
  return (
    <>
      <Header setIngresarRemito={setIngresarRemito} />
      <IngresoRemito
        ingresarRemito={ingresarRemito}
        setIngresarRemito={setIngresarRemito}
        proveedores={proveedores}
        manejoDetalle={manejoDetalle}
        setManejoDetalle={setManejoDetalle}
        datosFormulario={datosFormulario}
        setDatosFormulario={setDatosFormulario}
      />
    </>
  );
}

export default App;

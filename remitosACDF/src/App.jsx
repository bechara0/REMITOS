import { useEffect, useState } from "react";

import "./App.css";
import Header from "./templates/Header";
import { cargarProveedores } from "./helpers/helper";
import IngresoRemito from "./templates/IngresoRemito";

function App() {
  const [proveedores, setProveedores] = useState({});
  const [ingresarRemito, setIngresarRemito] = useState(false);

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
      />
    </>
  );
}

export default App;

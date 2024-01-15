import { useEffect, useState } from "react";

import "./App.css";
import Header from "./templates/Header";
import {
  cargarProveedores,
  getTodosRemitos,
  remitoPorId,
} from "./helpers/helper";
import IngresoRemito from "./templates/IngresoRemito";
import Tabla from "./templates/Tabla";
import Remito from "./templates/Remito";

function App() {
  const [proveedores, setProveedores] = useState({});
  const [ingresarRemito, setIngresarRemito] = useState(false);
  const [manejoDetalle, setManejoDetalle] = useState(false);
  const [booleanPostRemito, setBooleanPostRemito] = useState(false);
  const [expandirRemito, setExpandirRemito] = useState(false);
  const [todosLosRemitos, setTodosLosRemitos] = useState([]);
  const [remitoIndividual, setRemitoIndividual] = useState({});
  const [idRemito, setIdRemito] = useState("");
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
    factura: [],
  });

  useEffect(() => {
    const listaProveedores = async () => {
      const proveedoresLista = await cargarProveedores();
      setProveedores(proveedoresLista);
    };

    listaProveedores();
  }, []);

  useEffect(() => {
    const listaRemitos = async () => {
      const remitosLista = await getTodosRemitos();
      setTodosLosRemitos(remitosLista);
    };
    listaRemitos();
  }, []);

  useEffect(() => {
    if (expandirRemito) {
      const traerRemito = async () => {
        const remitoId = await remitoPorId(idRemito);

        setRemitoIndividual(remitoId);
      };
      traerRemito();
    }
  }, [expandirRemito]);

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
        booleanPostRemito={booleanPostRemito}
        setBooleanPostRemito={setBooleanPostRemito}
      />
      <Tabla
        todosLosRemitos={todosLosRemitos}
        expandirRemito={expandirRemito}
        setExpandirRemito={setExpandirRemito}
        setIdRemito={setIdRemito}
      />
      <Remito
        expandirRemito={expandirRemito}
        setExpandirRemito={setExpandirRemito}
        remitoIndividual={remitoIndividual}
        
      />
    </>
  );
}

export default App;

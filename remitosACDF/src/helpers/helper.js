// traer datos proveedores
export const cargarProveedores = async () => {
  try {
    const url = `http://127.0.0.1:3000/api/getProveedores`;
    const listaProveedores = await fetch(url);
    const resultado = await listaProveedores.json();
    return resultado;
  } catch (error) {
    console.error(error);
  }
};

// get remitos

export const getTodosRemitos = async () => {
  try {
    const url = "http://127.0.0.1:3000/api/getRemitos";
    const listaRemitos = await fetch(url);
    const resultado = await listaRemitos.json();
    return resultado;
  } catch (error) {
    console.error(error);
  }
};

// remito por id

export const remitoPorId = async (_id) => {
  try {
    const url = `http://127.0.0.1:3000/api/getRemitos?_id=${_id}`;
    const remito = await fetch(url);
    const resultado = await remito.json();
    return resultado;
  } catch (error) {
    console.error(error);
  }
};

// hacer post remitos
export const postRemitos = async (datosRemito) => {
  try {
    const url = "http://127.0.0.1:3000/api/post/remito";
    const envioForm = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosRemito),
    });
    if (envioForm.ok) {
      return true;
      alert("Datos enviados correctamente");
    } else {
      throw new Error("Error en petición POST");
    }
  } catch (error) {
    console.error(error);
    alert("Error en envío de datos del Remito a base de datos");
  }
};

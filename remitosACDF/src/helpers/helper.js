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

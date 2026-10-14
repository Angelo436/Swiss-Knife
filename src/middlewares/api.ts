async function getFiles(path: string = "") {
  try {
    const respuesta = await fetch(
      `/api/getFiles?path=${path}`,
    );

    
    if (!respuesta.ok) {
      console.log(respuesta);
      throw new Error("Ocurrió un error al conectar con la API");
    }

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Hubo un problema:", error);
  }
}




export default getFiles;
async function getFiles(path: string = "") {
  try {
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    const respuesta = await fetch(
      `/api/getFiles?path=${cleanPath}`,
    );

    console.log(respuesta);

    if (!respuesta.ok) {
      throw new Error("Ocurrió un error al conectar con la API");
    }

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Hubo un problema:", error);
  }
}




export default getFiles;
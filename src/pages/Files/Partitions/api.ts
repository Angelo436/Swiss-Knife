async function getPartitions() {
  try {
    const respuesta = await fetch(`/api/getPartitions`);

    
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

export default getPartitions;
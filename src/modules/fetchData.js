async function importarMonedas() {
  const res = await fetch("./src/nombreMonedas.json");
  const todasLasMonedas = await res.json();
  localStorage.setItem("todasLasMonedas", JSON.stringify(todasLasMonedas));
  try {
    return todasLasMonedas;
  } catch (error) {
    console.error(error);
  }
} // Pasar a localstorage

export { importarMonedas };

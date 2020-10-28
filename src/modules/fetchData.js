import { crearNotificacion } from "./ui/index.js";

async function importarMonedas() {
  const res = await fetch("./src/nombreMonedas.json");
  const todasLasMonedas = await res.json();
  localStorage.setItem("todasLasMonedas", JSON.stringify(todasLasMonedas));
  try {
    return todasLasMonedas;
  } catch (error) {
    console.error(error);
  }
}

async function obtenerListaMonedas() {
  const URL = "https://api.exchangeratesapi.io/latest";
  const todasLasMonedas = () => {
    if (localStorage.getItem("todasLasMonedas") === null) {
      return importarMonedas();
    } else {
      return JSON.parse(localStorage.getItem("todasLasMonedas"));
    }
  };
  const res = await fetch(URL);
  const info = await res.json();
  try {
    $("#fecha-input").attr("max", info.date);
    Object.keys(info.rates).forEach((nombreMoneda) => {
      todasLasMonedas().some((moneda) => {
        if (moneda.codigo === nombreMoneda) {
          $("#listado-monedas").append(
            new Option(moneda.divisa + " - " + nombreMoneda, nombreMoneda)
          );
        }
      });
    });
  } catch (error) {
    crearNotificacion("error", error);
  }
}

export { importarMonedas, obtenerListaMonedas };

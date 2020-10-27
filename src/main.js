import {
  crearMensajeExito,
  crearTarjeta,
  crearTextoTarjeta,
  crearNotificacion,
  eliminarTarjetas,
  limpiarPantalla,
  agregarValorMoneda,
} from "./modules/ui.js";
import { importarMonedas } from "./modules/fetchData.js";
console.log(
  "El código fue ofuscado con una técnica llamada ESTE FUE MI PRIMER PROYECTO, DEGAME EN PAS"
);
importarMonedas();

const completarTarjetas = async () => {
  const URL = "https://api.exchangeratesapi.io/";
  const base = document.querySelector("#listado-monedas").value;
  const fecha = document.querySelector("#fecha-input");
  const todasLasMonedas = () => {
    if (localStorage.getItem("todasLasMonedas") === null) {
      return importarMonedas();
    } else {
      return JSON.parse(localStorage.getItem("todasLasMonedas"));
    }
  };

  if (base === "") {
    return crearNotificacion(
      "error",
      "Por favor seleccioná un tipo de moneda."
    );
  } else if (fecha.value === "") {
    return crearNotificacion("error", "Por favor seleccioná una fecha.");
  }

  let nombreMonedaBase;

  eliminarTarjetas();

  const res = await fetch(URL + fecha.value + "?base=" + base);
  const info = await res.json();
  try {
    console.log(URL + fecha.value + "?base=" + base);
    Object.keys(info.rates).forEach((codigoMoneda, index) => {
      const valorMoneda = Object.values(info.rates)[index];
      crearTarjeta(codigoMoneda);
      todasLasMonedas().some((moneda) => {
        if (moneda.codigo === codigoMoneda) {
          $(`#${codigoMoneda}-nombre`).text(moneda.divisa);
          if (moneda.codigo === base) {
            nombreMonedaBase = moneda.divisa.toLocaleLowerCase();
          }
        }
      });
      agregarValorMoneda(codigoMoneda, valorMoneda);
      $(`#${codigoMoneda}-valor-moneda`).text(valorMoneda);
      crearNotificacion("exito", crearMensajeExito(nombreMonedaBase));
      crearTextoTarjeta(base, codigoMoneda, valorMoneda);
    });
  } catch {
    (error) => {
      crearNotificacion("error", error);
    };
  }
};

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

obtenerListaMonedas();

const $obtenerCambios = document.querySelector("#obtener-valores");
const $eliminarTodo = document.querySelector("#eliminar-todo");

$obtenerCambios.onclick = completarTarjetas;
$eliminarTodo.onclick = limpiarPantalla;

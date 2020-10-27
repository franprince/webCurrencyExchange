import {
  crearMensajeExito,
  crearTarjeta,
  crearTextoTarjeta,
  crearNotificacion,
  eliminarTarjetas,
  limpiarPantalla,
  definirFechaMaxima,
} from "./modules/ui.js";

export const importarMonedas = async () => {
  const res = await fetch("./src/nombreMonedas.json");
  return await res.json();
}; // Pasar a localstorage

const obtenerListaMonedas = async () => {
  const URL = "https://api.exchangeratesapi.io/latest";
  const res = await fetch(URL);
  const info = await res.json();
  const todasLasMonedas = await importarMonedas();
  try {
    definirFechaMaxima(info.date);
    Object.keys(info.rates).forEach((nombreMoneda) => {
      todasLasMonedas.some((moneda) => {
        if (moneda.codigo === nombreMoneda) {
          $("#listado-monedas").append(
            new Option(moneda.divisa + " - " + nombreMoneda, nombreMoneda)
          );
        }
      });
    });
  } catch {
    (error) => crearNotificacion("error", error);
  }
};

const completarTarjetas = async () => {
  const URL = "https://api.exchangeratesapi.io/";
  const base = document.querySelector("#listado-monedas").value;
  const fecha = document.querySelector("#fecha-input");
  const todasLasMonedas = await importarMonedas();

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

  fetch(URL + fecha.value + "?base=" + base)
    .then((res) => res.json())
    .then((info) => {
      Object.keys(info.rates).forEach((codigoMoneda, index) => {
        const valorMoneda = Object.values(info.rates)[index];
        crearTarjeta(codigoMoneda);
        todasLasMonedas.some((moneda) => {
          if (moneda.codigo === codigoMoneda) {
            $(`#${codigoMoneda}-nombre`).text(moneda.divisa);
            if (moneda.codigo === base) {
              nombreMonedaBase = moneda.divisa.toLocaleLowerCase();
            }
          }
        });
        $(`#${codigoMoneda}-valor-moneda`).text(valorMoneda);
        crearNotificacion("exito", crearMensajeExito(nombreMonedaBase));
        crearTextoTarjeta(base, codigoMoneda, valorMoneda);
      });
    })
    .catch((error) => {
      crearNotificacion("error", error);
    });
};

obtenerListaMonedas();

const $obtenerCambios = document.querySelector("#obtener-valores");
const $eliminarTodo = document.querySelector("#eliminar-todo");

$obtenerCambios.onclick = completarTarjetas;
$eliminarTodo.onclick = limpiarPantalla;

import { crearComponentes } from "./componentes.js";

function eliminarTarjetas() {
  document.querySelectorAll(".card-wrapper").forEach((e) => e.remove());
}

function eliminarNotificacion() {
  document.querySelector("#notificacion").textContent = "";
  document.querySelector("#notificacion").className = "";
}

function definirFechaMaxima(fecha) {
  $("#fecha-input").attr("max", fecha);
}

function crearTarjeta(id) {
  crearComponentes(id);
} //Ya sé que está horrible esto, voy a revisarlo.

function crearMensajeExito(nombreMonedaBase) {
  const fecha = document.querySelector("#fecha-input");
  const opcionesFecha = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return `Mostrando los valores de cambio del día ${fecha.valueAsDate
    .toLocaleDateString("es-AR", opcionesFecha)
    .replace(",", "")}, tomando ${nombreMonedaBase} como base.`;
}

function agregarValorMoneda(codigoMoneda, valorMoneda) {
  $(`#${codigoMoneda}-valor-moneda`).text(valorMoneda);
}

function crearNotificacion(tipo, mensaje) {
  const $notificacion = $("#notificacion");
  $notificacion.removeClass();
  if (tipo === "exito") {
    $notificacion.addClass("alert alert-success");
  } else if (tipo === "error") {
    $notificacion.addClass("alert alert-danger");
  } else {
    $notificacion.addClass("alert");
  }
  $notificacion.text(mensaje);
}

function crearTextoTarjeta(idMonedaBase, idMonedaTarjeta, valorMoneda) {
  const $textoTarjeta = $(`.card-text-${idMonedaTarjeta}`);
  $textoTarjeta.text(
    `Se necesitan ${
      Math.round((1 / valorMoneda) * 10000) / 10000
    } ${idMonedaBase} para comprar 1 ${idMonedaTarjeta}`
  );
}

function limpiarPantalla() {
  eliminarNotificacion();
  eliminarTarjetas();
}

export {
  crearMensajeExito,
  crearTarjeta,
  crearTextoTarjeta,
  crearNotificacion,
  eliminarTarjetas,
  limpiarPantalla,
  definirFechaMaxima,
  agregarValorMoneda,
};

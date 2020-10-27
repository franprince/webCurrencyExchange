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
  const cardWrapper = $(
    `<div id="${id}-wrapper" class="my-3 col-md-4 col-lg-3 col-sm-6 card-wrapper">`
  );
  const containerTarjeta = $(`<div id="${id}" class="card">`);
  const nombreMoneda = $(
    `<h4 id="${id}-nombre" class="mt-4 card-title text-center"></h4>`
  );
  const banderMoneda = $(
    `<div class="mx-auto mt-1 currency-flag currency-flag-${id.toLowerCase()} currency-flag-xl"></div>`
  );
  const bodyTarjeta = $('<div class="card-body"></div>');
  const valorMoneda = $(
    `<h5 id="${id}-valor-moneda" class="card-title text-center"></h5>`
  );
  const textoTarjeta = $(`<p class="card-text-${id}"></p>`);

  const $containerPrincipal = $("#container-principal");

  $containerPrincipal.append(cardWrapper);
  cardWrapper.append(containerTarjeta);
  containerTarjeta.append(nombreMoneda);
  containerTarjeta.append(banderMoneda);
  containerTarjeta.append(bodyTarjeta);
  bodyTarjeta.append(valorMoneda);
  bodyTarjeta.append(textoTarjeta);
}

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

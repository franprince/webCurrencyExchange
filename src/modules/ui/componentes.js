function crearComponentes(id) {
  const cardWrapper = $(`<div id="${id}-wrapper">`);
  $(cardWrapper).addClass([
    "my-3",
    "col-md-4",
    "col-lg-3",
    "col-sm-6",
    "card-wrapper",
  ]);

  const containerTarjeta = $(`<div id="${id}">`).addClass("card");

  const nombreMoneda = $(`<h4 id="${id}-nombre"></h4>`);
  $(nombreMoneda).addClass(["mt-4", "card-title", "text-center"]);

  const banderaMoneda = $(`<div></div>`);
  $(banderaMoneda).addClass([
    "mx-auto",
    "mt-1",
    "currency-flag",
    `currency-flag-${id.toLowerCase()}`,
    "currency-flag-xl",
  ]);

  const bodyTarjeta = $("<div></div>").addClass("card-body");

  const valorMoneda = $(`<h5 id="${id}-valor-moneda"></h5>`);
  $(valorMoneda).addClass(["card-title", "text-center"]);

  const textoTarjeta = $(`<p></p>`).addClass(`card-text-${id}`);

  const $containerPrincipal = $("#container-principal");

  $containerPrincipal.append(cardWrapper);
  cardWrapper.append(containerTarjeta);
  containerTarjeta.append(nombreMoneda);
  containerTarjeta.append(banderaMoneda);
  containerTarjeta.append(bodyTarjeta);
  bodyTarjeta.append(valorMoneda);
  bodyTarjeta.append(textoTarjeta);
}
export { crearComponentes };

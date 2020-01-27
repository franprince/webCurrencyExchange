const $obtenerCambios = document.querySelector("#obtener-valores");
let todasLasMonedas;

fetch("./src/nombreMonedas.json").then(
  function (u) { return u.json(); }
).then(
  function (json) {
    todasLasMonedas = json;
  }
);

function obtenerListaMonedas() {
  const URL = "https://api.exchangeratesapi.io/latest";

  fetch(URL)
    .then(res => res.json())
    .then(info => {
      $("#fecha-input").attr("max", info.date)
      Object.keys(info.rates).forEach(nombreMoneda => {
        todasLasMonedas.some(moneda => {
          if (moneda.codigo === nombreMoneda) {
            $('#listado-monedas').append(new Option(moneda.divisa + " - " + nombreMoneda, nombreMoneda))
          }
        })
      })
    })
    .catch(error => crearNotificacion("error", error));
};




function completarTarjetas() {
  const URL = "https://api.exchangeratesapi.io/",
    base = document.querySelector("#listado-monedas").value,
    fecha = document.querySelector("#fecha-input");

  let nombreMonedaBase;
  if (base === "") {
    return crearNotificacion("error", "Por favor seleccioná un tipo de moneda.");
  }else if(fecha.value === ""){
    return crearNotificacion("error", "Por favor seleccioná una fecha.");
  };

  eliminarTarjetas();

  fetch(URL + fecha.value + "?base=" + base)
    .then(res => res.json())
    .then(info => {
      Object.keys(info.rates).forEach((codigoMoneda, index) => {
        const valorMoneda = Object.values(info.rates)[index];
        crearTarjeta(codigoMoneda);
        todasLasMonedas.some(moneda => {
          if (moneda.codigo === codigoMoneda) {
            $(`#${codigoMoneda}-nombre`).text(moneda.divisa);
            if (moneda.codigo === base) {
              nombreMonedaBase = (moneda.divisa).toLocaleLowerCase();
            }
          }
        })
        $(`#${codigoMoneda}-valor-moneda`).text(valorMoneda);
        crearNotificacion("exito", crearMensajeExito());
        crearTextoTarjeta(base, codigoMoneda, valorMoneda);
      })
    })
    .catch(error => {
      crearNotificacion("error", error);
    })

  function crearTarjeta(id) {
    const cardWrapper = $(`<div id="${id}-wrapper" class="my-3 col-md-4 col-lg-3 col-sm-6 card-wrapper">`),
      containerTarjeta = $(`<div id="${id}" class="card">`),
      nombreMoneda = $(`<h4 id="${id}-nombre" class="mt-4 card-title text-center"></h4>`),
      banderMoneda = $(`<div class="mx-auto mt-1 currency-flag currency-flag-${id.toLowerCase()} currency-flag-xl"></div>`),
      bodyTarjeta = $('<div class="card-body"></div>'),
      valorMoneda = $(`<h5 id="${id}-valor-moneda" class="card-title text-center"></h5>`),
      textoTarjeta = $(`<p class="card-text-${id}"></p>`)

    const $containerPrincipal = $('#container-principal');

    $containerPrincipal.append(cardWrapper);
    cardWrapper.append(containerTarjeta);
    containerTarjeta.append(nombreMoneda);
    containerTarjeta.append(banderMoneda);
    containerTarjeta.append(bodyTarjeta);
    bodyTarjeta.append(valorMoneda);
    bodyTarjeta.append(textoTarjeta);
  }

  function eliminarTarjetas() {
    document.querySelectorAll(".card-wrapper").forEach(e => e.remove());
  };

  function crearMensajeExito() {
    opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return `Mostrando los valores de cambio del día ${fecha.valueAsDate.toLocaleDateString("es-AR", opcionesFecha).replace(",", "")}, tomando ${nombreMonedaBase} como base.`;
  }

  function crearNotificacion(tipo, mensaje){
    const $notificacion = $("#notificacion");

    $notificacion.removeClass();
    if(tipo === "exito"){
      $notificacion.addClass("alert alert-success");
    }else if(tipo === "error"){
      $notificacion.addClass("alert alert-danger");
    }else{
      $notificacion.addClass("alert");
    };

    $notificacion.text(mensaje);
    
  };

  function crearTextoTarjeta(idMonedaBase, idMonedaTarjeta, valorMoneda) {
    const $textoTarjeta = $(`.card-text-${idMonedaTarjeta}`);
    $textoTarjeta.text(`Se necesitan ${Math.round((1 / valorMoneda) * 10000) / 10000} ${idMonedaBase} para comprar 1 ${idMonedaTarjeta}`)
  }
}

obtenerListaMonedas();

$obtenerCambios.onclick = completarTarjetas;

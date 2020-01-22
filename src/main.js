const $obtenerCambios = document.querySelector("#obtener-valores");
const todasLasMonedas = [
  {
    "divisa": "Afgani afgano",
    "codigo": "AFN"
  },
  {
    "divisa": "Ariary malgache",
    "codigo": "MGA"
  },
  {
    "divisa": "BAD UNIDAD DE CUENTAS",
    "codigo": "XUA"
  },
  {
    "divisa": "Baht",
    "codigo": "THB"
  },
  {
    "divisa": "Balboa",
    "codigo": "PAB"
  },
  {
    "divisa": "Birr etíope",
    "codigo": "ETB"
  },
  {
    "divisa": "Bolívar",
    "codigo": "VEF"
  },
  {
    "divisa": "Boliviano",
    "codigo": "BOB"
  },
  {
    "divisa": "Cedi",
    "codigo": "GHS"
  },
  {
    "divisa": "Chelín keniano",
    "codigo": "KES"
  },
  {
    "divisa": "Chelín somalí",
    "codigo": "SOS"
  },
  {
    "divisa": "Chelín tanzano",
    "codigo": "TZS"
  },
  {
    "divisa": "Chelín ugandés",
    "codigo": "UGX"
  },
  {
    "divisa": "Colón",
    "codigo": "SVC"
  },
  {
    "divisa": "Colón costarricense",
    "codigo": "CRC"
  },
  {
    "divisa": "Córdoba oro",
    "codigo": "NIO"
  },
  {
    "divisa": "Corona danesa",
    "codigo": "DKK"
  },
  {
    "divisa": "Corona islandesa",
    "codigo": "ISK"
  },
  {
    "divisa": "Corona noruega",
    "codigo": "NOK"
  },
  {
    "divisa": "Corona sueca",
    "codigo": "SEK"
  },
  {
    "divisa": "Czech Koruna",
    "codigo": "CZK"
  },
  {
    "divisa": "Dalasi",
    "codigo": "GMD"
  },
  {
    "divisa": "Dinar",
    "codigo": "MKD"
  },
  {
    "divisa": "Dinar argelino",
    "codigo": "DZD"
  },
  {
    "divisa": "Dinar bareiní",
    "codigo": "BHD"
  },
  {
    "divisa": "Dinar iraquí",
    "codigo": "IQD"
  },
  {
    "divisa": "Dinar jordano",
    "codigo": "JOD"
  },
  {
    "divisa": "Dinar kuwaití",
    "codigo": "KWD"
  },
  {
    "divisa": "Dinar libio",
    "codigo": "LYD"
  },
  {
    "divisa": "Dinar serbio",
    "codigo": "RSD"
  },
  {
    "divisa": "Dinar tunecino",
    "codigo": "TND"
  },
  {
    "divisa": "Dirham DE EAU",
    "codigo": "AED"
  },
  {
    "divisa": "Dírham marroquí",
    "codigo": "MAD"
  },
  {
    "divisa": "Dobra",
    "codigo": "STD"
  },
  {
    "divisa": "Dólar australiano",
    "codigo": "AUD"
  },
  {
    "divisa": "Dólar bahameño",
    "codigo": "BSD"
  },
  {
    "divisa": "Dólar beliceño",
    "codigo": "BZD"
  },
  {
    "divisa": "Dólar bermudeño",
    "codigo": "BMD"
  },
  {
    "divisa": "Dólar canadiense",
    "codigo": "CAD"
  },
  {
    "divisa": "Dólar de Barbados",
    "codigo": "BBD"
  },
  {
    "divisa": "Dólar de Brunei",
    "codigo": "BND"
  },
  {
    "divisa": "Dólar de Hong Kong",
    "codigo": "HKD"
  },
  {
    "divisa": "Dólar de Islas Salomón",
    "codigo": "SBD"
  },
  {
    "divisa": "Dólar de las Islas Cayman",
    "codigo": "KYD"
  },
  {
    "divisa": "Dólar de Namibia",
    "codigo": "NAD"
  },
  {
    "divisa": "Dólar de Singapur",
    "codigo": "SGD"
  },
  {
    "divisa": "Dólar de Surinam",
    "codigo": "SRD"
  },
  {
    "divisa": "Dólar de Trinidad y Tobago",
    "codigo": "TTD"
  },
  {
    "divisa": "Dólar del Caribe oriental",
    "codigo": "XCD"
  },
  {
    "divisa": "Dólar estadounidense",
    "codigo": "USD"
  },
  {
    "divisa": "Dólar estadounidense (Next day)",
    "codigo": "USN"
  },
  {
    "divisa": "Dólar fiyiano",
    "codigo": "FJD"
  },
  {
    "divisa": "Dólar guyanés",
    "codigo": "GYD"
  },
  {
    "divisa": "Dólar jamaiquino",
    "codigo": "JMD"
  },
  {
    "divisa": "Dólar liberiano",
    "codigo": "LRD"
  },
  {
    "divisa": "Dólar neozelandés",
    "codigo": "NZD"
  },
  {
    "divisa": "Dólar zimbabuense",
    "codigo": "ZWL"
  },
  {
    "divisa": "Dong",
    "codigo": "VND"
  },
  {
    "divisa": "Dram armenio",
    "codigo": "AMD"
  },
  {
    "divisa": "Escudo caboverdiano",
    "codigo": "CVE"
  },
  {
    "divisa": "Euro",
    "codigo": "EUR"
  },
  {
    "divisa": "Florín antillano neerlandés",
    "codigo": "ANG"
  },
  {
    "divisa": "Florín arubeño",
    "codigo": "AWG"
  },
  {
    "divisa": "Florín holandés",
    "codigo": "ANG"
  },
  {
    "divisa": "Forinto húngaro",
    "codigo": "HUF"
  },
  {
    "divisa": "Franco burundés",
    "codigo": "BIF"
  },
  {
    "divisa": "Franco CFA de África Central",
    "codigo": "XAF"
  },
  {
    "divisa": "Franco CFA de África Occidental",
    "codigo": "XOF"
  },
  {
    "divisa": "Franco CFP",
    "codigo": "XPF"
  },
  {
    "divisa": "Franco comorense",
    "codigo": "KMF"
  },
  {
    "divisa": "Franco congoleño",
    "codigo": "CDF"
  },
  {
    "divisa": "Franco guineano",
    "codigo": "GNF"
  },
  {
    "divisa": "Franco ruandés",
    "codigo": "RWF"
  },
  {
    "divisa": "Franco suizo",
    "codigo": "CHF"
  },
  {
    "divisa": "Franco WIR",
    "codigo": "CHW"
  },
  {
    "divisa": "Franco yibutiano",
    "codigo": "DJF"
  },
  {
    "divisa": "Gourde",
    "codigo": "HTG"
  },
  {
    "divisa": "Grivnia",
    "codigo": "UAH"
  },
  {
    "divisa": "Guaraní",
    "codigo": "PYG"
  },
  {
    "divisa": "Kina",
    "codigo": "PGK"
  },
  {
    "divisa": "Kip laosiano",
    "codigo": "LAK"
  },
  {
    "divisa": "Kuna",
    "codigo": "HRK"
  },
  {
    "divisa": "Kwacha malauí",
    "codigo": "MWK"
  },
  {
    "divisa": "Kwacha zambiano",
    "codigo": "ZMW"
  },
  {
    "divisa": "Kwanza angoleño",
    "codigo": "AOA"
  },
  {
    "divisa": "Kyat birmano",
    "codigo": "MMK"
  },
  {
    "divisa": "Lari",
    "codigo": "GEL"
  },
  {
    "divisa": "Lek",
    "codigo": "ALL"
  },
  {
    "divisa": "Lempira",
    "codigo": "HNL"
  },
  {
    "divisa": "Leone",
    "codigo": "SLL"
  },
  {
    "divisa": "Leu Moldavo",
    "codigo": "MDL"
  },
  {
    "divisa": "Leu rumano",
    "codigo": "RON"
  },
  {
    "divisa": "Lev",
    "codigo": "BGN"
  },
  {
    "divisa": "Libra de Santa Helena",
    "codigo": "SHP"
  },
  {
    "divisa": "Libra egipcia",
    "codigo": "EGP"
  },
  {
    "divisa": "Libra esterlina",
    "codigo": "GBP"
  },
  {
    "divisa": "Libra gibraltareña",
    "codigo": "GIP"
  },
  {
    "divisa": "Libra libanesa",
    "codigo": "LBP"
  },
  {
    "divisa": "Libra malvinense",
    "codigo": "FKP"
  },
  {
    "divisa": "Libra siria",
    "codigo": "SYP"
  },
  {
    "divisa": "Libra sudanesa",
    "codigo": "SDG"
  },
  {
    "divisa": "Libra sursudanesa",
    "codigo": "SSP"
  },
  {
    "divisa": "Lilangeni",
    "codigo": "SZL"
  },
  {
    "divisa": "Lira turca",
    "codigo": "TRY"
  },
  {
    "divisa": "Loti",
    "codigo": "LSL"
  },
  {
    "divisa": "Manat azerbaiyano",
    "codigo": "AZN"
  },
  {
    "divisa": "Manat turcomano",
    "codigo": "TMT"
  },
  {
    "divisa": "Marco bosnioherzegovino",
    "codigo": "BAM"
  },
  {
    "divisa": "Metical mozambiqueño",
    "codigo": "MZN"
  },
  {
    "divisa": "Mvdol",
    "codigo": "BOV"
  },
  {
    "divisa": "Naira",
    "codigo": "NGN"
  },
  {
    "divisa": "Nakfa",
    "codigo": "ERN"
  },
  {
    "divisa": "Ngultrum butanés",
    "codigo": "BTN"
  },
  {
    "divisa": "Nuevo dólar de Taiwán",
    "codigo": "TWD"
  },
  {
    "divisa": "Nuevo séquel",
    "codigo": "ILS"
  },
  {
    "divisa": "Nuevo Sol",
    "codigo": "PEN"
  },
  {
    "divisa": "Pa’anga",
    "codigo": "TOP"
  },
  {
    "divisa": "Pataca",
    "codigo": "MOP"
  },
  {
    "divisa": "Peso argentino",
    "codigo": "ARS"
  },
  {
    "divisa": "Peso chileno",
    "codigo": "CLP"
  },
  {
    "divisa": "Peso colombiano",
    "codigo": "COP"
  },
  {
    "divisa": "Peso convertible",
    "codigo": "CUC"
  },
  {
    "divisa": "Peso cubano",
    "codigo": "CUP"
  },
  {
    "divisa": "Peso dominicano",
    "codigo": "DOP"
  },
  {
    "divisa": "Peso filipino",
    "codigo": "PHP"
  },
  {
    "divisa": "Peso mexicano",
    "codigo": "MXN"
  },
  {
    "divisa": "Peso uruguayo",
    "codigo": "UYU"
  },
  {
    "divisa": "Peso uruguayo en unidades indexadas (URUIURUI)",
    "codigo": "UYI"
  },
  {
    "divisa": "Pula",
    "codigo": "BWP"
  },
  {
    "divisa": "Quetzal",
    "codigo": "GTQ"
  },
  {
    "divisa": "Rand",
    "codigo": "ZAR"
  },
  {
    "divisa": "Real brasileño",
    "codigo": "BRL"
  },
  {
    "divisa": "Renminbi",
    "codigo": "CNY"
  },
  {
    "divisa": "Rial iraní",
    "codigo": "IRR"
  },
  {
    "divisa": "Rial omaní",
    "codigo": "OMR"
  },
  {
    "divisa": "Rial yemení",
    "codigo": "YER"
  },
  {
    "divisa": "Riel camboyano",
    "codigo": "KHR"
  },
  {
    "divisa": "Ringgit malayo",
    "codigo": "MYR"
  },
  {
    "divisa": "Riyal catarí",
    "codigo": "QAR"
  },
  {
    "divisa": "Riyal saudí",
    "codigo": "SAR"
  },
  {
    "divisa": "Rublo bielorruso",
    "codigo": "BYR"
  },
  {
    "divisa": "Rublo ruso",
    "codigo": "RUB"
  },
  {
    "divisa": "Rupia de maldivas",
    "codigo": "MVR"
  },
  {
    "divisa": "Rupia de Mauricio",
    "codigo": "MUR"
  },
  {
    "divisa": "Rupia de Seychelles",
    "codigo": "SCR"
  },
  {
    "divisa": "Rupia de Sri Lanka",
    "codigo": "LKR"
  },
  {
    "divisa": "Rupia india",
    "codigo": "INR"
  },
  {
    "divisa": "Rupia indonesia",
    "codigo": "IDR"
  },
  {
    "divisa": "Rupia nepalí",
    "codigo": "NPR"
  },
  {
    "divisa": "Rupia pakistaní",
    "codigo": "PKR"
  },
  {
    "divisa": "SDR (Derecho Especial de Retiro)",
    "codigo": "XDR"
  },
  {
    "divisa": "Som",
    "codigo": "KGS"
  },
  {
    "divisa": "Som uzbeko",
    "codigo": "UZS"
  },
  {
    "divisa": "Somoni",
    "codigo": "TJS"
  },
  {
    "divisa": "Sucre",
    "codigo": "XSU"
  },
  {
    "divisa": "Taka",
    "codigo": "BDT"
  },
  {
    "divisa": "Tala",
    "codigo": "WST"
  },
  {
    "divisa": "Tenge kazajo",
    "codigo": "KZT"
  },
  {
    "divisa": "Tugrik",
    "codigo": "MNT"
  },
  {
    "divisa": "Uguiya",
    "codigo": "MRO"
  },
  {
    "divisa": "Unidad de Fomento",
    "codigo": "CLF"
  },
  {
    "divisa": "Unidad de Inversion Mexicana(UDI)",
    "codigo": "MXV"
  },
  {
    "divisa": "Unidad de valor real",
    "codigo": "COU"
  },
  {
    "divisa": "Vatu",
    "codigo": "VUV"
  },
  {
    "divisa": "WIR Euro",
    "codigo": "CHE"
  },
  {
    "divisa": "Won",
    "codigo": "KRW"
  },
  {
    "divisa": "Won norcoreano",
    "codigo": "KPW"
  },
  {
    "divisa": "Yen",
    "codigo": "JPY"
  },
  {
    "divisa": "Zloty",
    "codigo": "PLN"
  }
];

function obtenerListaMonedas() {
  const Url = "https://api.exchangeratesapi.io/latest";

  fetch(Url)
    .then(res => res.json())
    .then(info => {
      Object.keys(info.rates).forEach(nombreMoneda => {
        todasLasMonedas.some(moneda => {
          if (moneda.codigo === nombreMoneda) {
            $('#listado-monedas').append(new Option(moneda.divisa + " - " + nombreMoneda, nombreMoneda))
          }
        })
      })
    })
    .catch(error => console.error("Ocurrió el siguiente error: " + error));
};




function completarTarjetas() {
  const URL = "https://api.exchangeratesapi.io/",
        base  = document.querySelector("#listado-monedas").value,
        fecha = document.querySelector("#fecha-input").value;
  
  let   nombreMonedaBase;

        eliminarTarjetas();

  fetch(URL + fecha + "?base=" + base)
    .then(res => res.json())
    .then(info => {
      Object.keys(info.rates).forEach((codigoMoneda, index) => {
        crearTarjeta(codigoMoneda);
        todasLasMonedas.some(moneda => {
          if (moneda.codigo === codigoMoneda) {
            $(`#${codigoMoneda}-nombre`).text(moneda.divisa);
            if(moneda.codigo === base){
              nombreMonedaBase = moneda.divisa;
            }
          }
        })
        $(`#${codigoMoneda}-valor-moneda`).text(Object.values(info.rates)[index]);
        actualizarNotificación()
      })
      })
        .catch(error=>{
        console.error("Ocurrió un error: "+error);
    })

    function crearTarjeta(id){
      const containerTarjeta = $(`<div id="${id}" class="card col-3">`);
      const nombreMoneda = $(`<h4 id="${id}-nombre" class="mt-4 card-title text-center"></h4>`);
      const banderMoneda = $(`<div class="mx-auto mt-1 currency-flag currency-flag-${id.toLowerCase()} currency-flag-xl"></div>`);
      const bodyTarjeta = $('<div class="card-body"></div>');
      const valorMoneda = $(`<h5 id="${id}-valor-moneda" class="card-title text-center"></h5>`);
      const $containerPrincipal = $('#container-principal');
    
      $containerPrincipal.append(containerTarjeta);
      containerTarjeta.append(nombreMoneda);
      containerTarjeta.append(banderMoneda);
      containerTarjeta.append(bodyTarjeta);
      bodyTarjeta.append(valorMoneda);
    }

    function eliminarTarjetas(){
      document.querySelectorAll(".card").forEach(e=>e.remove());
    };

    function actualizarNotificación(){
      const $notificacion = document.querySelector("#notificacion");
      $notificacion.textContent = `Mostrando los valores de cambio del día ${fecha}, tomando el ${nombreMonedaBase} como base.`
    }
}

obtenerListaMonedas();

$obtenerCambios.onclick = completarTarjetas;


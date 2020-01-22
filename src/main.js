function obtenerListaMonedas(){
    const Url = "https://api.exchangeratesapi.io/latest";
    fetch(Url)
    .then(res => res.json())
    .then(info =>{
        Object.keys(info.rates).forEach(nombreMoneda=>{
            $('#listado-monedas').append(new Option(nombreMoneda, nombreMoneda));
        })
    })
    .catch(error => console.error("Ocurrió el siguiente error: " +error));
    
};

function obtenerValoresCambio(){
    const   URL     = "https://api.exchangeratesapi.io/",
            base    = "USD",
            fecha   = $("#fecha-input")[0].value;
    fetch(URL+fecha+"?base="+base)
    .then(res => res.json())
    .then(info =>{
        Object.keys(info.rates).forEach(nombreMoneda=>{
            $('#listado-monedas').append(new Option(nombreMoneda, nombreMoneda));
        })
    })
};

obtenerListaMonedas();

const todasLasMonedas = [
    {
      "Divisa": "Afgani afgano",
      "Código": "AFN"
    },
    {
      "Divisa": "Ariary malgache",
      "Código": "MGA"
    },
    {
      "Divisa": "BAD UNIDAD DE CUENTAS",
      "Código": "XUA"
    },
    {
      "Divisa": "Baht",
      "Código": "THB"
    },
    {
      "Divisa": "Balboa",
      "Código": "PAB"
    },
    {
      "Divisa": "Birr etíope",
      "Código": "ETB"
    },
    {
      "Divisa": "Bolívar",
      "Código": "VEF"
    },
    {
      "Divisa": "Boliviano",
      "Código": "BOB"
    },
    {
      "Divisa": "Cedi",
      "Código": "GHS"
    },
    {
      "Divisa": "Chelín keniano",
      "Código": "KES"
    },
    {
      "Divisa": "Chelín somalí",
      "Código": "SOS"
    },
    {
      "Divisa": "Chelín tanzano",
      "Código": "TZS"
    },
    {
      "Divisa": "Chelín ugandés",
      "Código": "UGX"
    },
    {
      "Divisa": "Colón",
      "Código": "SVC"
    },
    {
      "Divisa": "Colón costarricense",
      "Código": "CRC"
    },
    {
      "Divisa": "Córdoba oro",
      "Código": "NIO"
    },
    {
      "Divisa": "Corona danesa",
      "Código": "DKK"
    },
    {
      "Divisa": "Corona islandesa",
      "Código": "ISK"
    },
    {
      "Divisa": "Corona noruega",
      "Código": "NOK"
    },
    {
      "Divisa": "Corona sueca",
      "Código": "SEK"
    },
    {
      "Divisa": "Czech Koruna",
      "Código": "CZK"
    },
    {
      "Divisa": "Dalasi",
      "Código": "GMD"
    },
    {
      "Divisa": "Dinar",
      "Código": "MKD"
    },
    {
      "Divisa": "Dinar argelino",
      "Código": "DZD"
    },
    {
      "Divisa": "Dinar bareiní",
      "Código": "BHD"
    },
    {
      "Divisa": "Dinar iraquí",
      "Código": "IQD"
    },
    {
      "Divisa": "Dinar jordano",
      "Código": "JOD"
    },
    {
      "Divisa": "Dinar kuwaití",
      "Código": "KWD"
    },
    {
      "Divisa": "Dinar libio",
      "Código": "LYD"
    },
    {
      "Divisa": "Dinar serbio",
      "Código": "RSD"
    },
    {
      "Divisa": "Dinar tunecino",
      "Código": "TND"
    },
    {
      "Divisa": "Dirham DE EAU",
      "Código": "AED"
    },
    {
      "Divisa": "Dírham marroquí",
      "Código": "MAD"
    },
    {
      "Divisa": "Dobra",
      "Código": "STD"
    },
    {
      "Divisa": "Dólar australiano",
      "Código": "AUD"
    },
    {
      "Divisa": "Dólar bahameño",
      "Código": "BSD"
    },
    {
      "Divisa": "Dólar beliceño",
      "Código": "BZD"
    },
    {
      "Divisa": "Dólar bermudeño",
      "Código": "BMD"
    },
    {
      "Divisa": "Dólar canadiense",
      "Código": "CAD"
    },
    {
      "Divisa": "Dólar de Barbados",
      "Código": "BBD"
    },
    {
      "Divisa": "Dólar de Brunei",
      "Código": "BND"
    },
    {
      "Divisa": "Dólar de Hong Kong",
      "Código": "HKD"
    },
    {
      "Divisa": "Dólar de Islas Salomón",
      "Código": "SBD"
    },
    {
      "Divisa": "Dólar de la Islas Cook",
      "Código": "NZD"
    },
    {
      "Divisa": "Dólar de las Islas Cayman",
      "Código": "KYD"
    },
    {
      "Divisa": "Dólar de Namibia",
      "Código": "NAD"
    },
    {
      "Divisa": "Dólar de Singapur",
      "Código": "SGD"
    },
    {
      "Divisa": "Dólar de Surinam",
      "Código": "SRD"
    },
    {
      "Divisa": "Dólar de Trinidad y Tobago",
      "Código": "TTD"
    },
    {
      "Divisa": "Dólar del Caribe oriental",
      "Código": "XCD"
    },
    {
      "Divisa": "Dólar estadounidense",
      "Código": "USD"
    },
    {
      "Divisa": "Dólar estadounidense (Next day)",
      "Código": "USN"
    },
    {
      "Divisa": "Dólar fiyiano",
      "Código": "FJD"
    },
    {
      "Divisa": "Dólar guyanés",
      "Código": "GYD"
    },
    {
      "Divisa": "Dólar jamaiquino",
      "Código": "JMD"
    },
    {
      "Divisa": "Dólar liberiano",
      "Código": "LRD"
    },
    {
      "Divisa": "Dólar neozelandés",
      "Código": "NZD"
    },
    {
      "Divisa": "Dólar tuvaluano",
      "Código": "AUD"
    },
    {
      "Divisa": "Dólar zimbabuense",
      "Código": "ZWL"
    },
    {
      "Divisa": "Dong",
      "Código": "VND"
    },
    {
      "Divisa": "Dram armenio",
      "Código": "AMD"
    },
    {
      "Divisa": "Escudo caboverdiano",
      "Código": "CVE"
    },
    {
      "Divisa": "Euro",
      "Código": "EUR"
    },
    {
      "Divisa": "Florín antillano neerlandés",
      "Código": "ANG"
    },
    {
      "Divisa": "Florín arubeño",
      "Código": "AWG"
    },
    {
      "Divisa": "Florín holandés",
      "Código": "ANG"
    },
    {
      "Divisa": "Forinto húngaro",
      "Código": "HUF"
    },
    {
      "Divisa": "Franco burundés",
      "Código": "BIF"
    },
    {
      "Divisa": "Franco CFA de África Central",
      "Código": "XAF"
    },
    {
      "Divisa": "Franco CFA de África Occidental",
      "Código": "XOF"
    },
    {
      "Divisa": "Franco CFP",
      "Código": "XPF"
    },
    {
      "Divisa": "Franco comorense",
      "Código": "KMF"
    },
    {
      "Divisa": "Franco congoleño",
      "Código": "CDF"
    },
    {
      "Divisa": "Franco guineano",
      "Código": "GNF"
    },
    {
      "Divisa": "Franco ruandés",
      "Código": "RWF"
    },
    {
      "Divisa": "Franco suizo",
      "Código": "CHF"
    },
    {
      "Divisa": "Franco suizo",
      "Código": "CHF"
    },
    {
      "Divisa": "Franco WIR",
      "Código": "CHW"
    },
    {
      "Divisa": "Franco yibutiano",
      "Código": "DJF"
    },
    {
      "Divisa": "Gourde",
      "Código": "HTG"
    },
    {
      "Divisa": "Grivnia",
      "Código": "UAH"
    },
    {
      "Divisa": "Guaraní",
      "Código": "PYG"
    },
    {
      "Divisa": "Kina",
      "Código": "PGK"
    },
    {
      "Divisa": "Kip laosiano",
      "Código": "LAK"
    },
    {
      "Divisa": "Kuna",
      "Código": "HRK"
    },
    {
      "Divisa": "Kwacha malauí",
      "Código": "MWK"
    },
    {
      "Divisa": "Kwacha zambiano",
      "Código": "ZMW"
    },
    {
      "Divisa": "Kwanza angoleño",
      "Código": "AOA"
    },
    {
      "Divisa": "Kyat birmano",
      "Código": "MMK"
    },
    {
      "Divisa": "Lari",
      "Código": "GEL"
    },
    {
      "Divisa": "Lek",
      "Código": "ALL"
    },
    {
      "Divisa": "Lempira",
      "Código": "HNL"
    },
    {
      "Divisa": "Leone",
      "Código": "SLL"
    },
    {
      "Divisa": "Leu Moldavo",
      "Código": "MDL"
    },
    {
      "Divisa": "Leu rumano",
      "Código": "RON"
    },
    {
      "Divisa": "Lev",
      "Código": "BGN"
    },
    {
      "Divisa": "Libra de Santa Helena",
      "Código": "SHP"
    },
    {
      "Divisa": "Libra egipcia",
      "Código": "EGP"
    },
    {
      "Divisa": "Libra esterlina",
      "Código": "GBP"
    },
    {
      "Divisa": "Libra gibraltareña",
      "Código": "GIP"
    },
    {
      "Divisa": "Libra libanesa",
      "Código": "LBP"
    },
    {
      "Divisa": "Libra malvinense",
      "Código": "FKP"
    },
    {
      "Divisa": "Libra siria",
      "Código": "SYP"
    },
    {
      "Divisa": "Libra sudanesa",
      "Código": "SDG"
    },
    {
      "Divisa": "Libra sursudanesa",
      "Código": "SSP"
    },
    {
      "Divisa": "Lilangeni",
      "Código": "SZL"
    },
    {
      "Divisa": "Lira turca",
      "Código": "TRY"
    },
    {
      "Divisa": "Loti",
      "Código": "LSL"
    },
    {
      "Divisa": "Manat azerbaiyano",
      "Código": "AZN"
    },
    {
      "Divisa": "Manat turcomano",
      "Código": "TMT"
    },
    {
      "Divisa": "Marco bosnioherzegovino",
      "Código": "BAM"
    },
    {
      "Divisa": "Metical mozambiqueño",
      "Código": "MZN"
    },
    {
      "Divisa": "Mvdol",
      "Código": "BOV"
    },
    {
      "Divisa": "Naira",
      "Código": "NGN"
    },
    {
      "Divisa": "Nakfa",
      "Código": "ERN"
    },
    {
      "Divisa": "Ngultrum butanés",
      "Código": "BTN"
    },
    {
      "Divisa": "Nuevo dólar de Taiwán",
      "Código": "TWD"
    },
    {
      "Divisa": "Nuevo séquel",
      "Código": "ILS"
    },
    {
      "Divisa": "Nuevo Sol",
      "Código": "PEN"
    },
    {
      "Divisa": "Pa’anga",
      "Código": "TOP"
    },
    {
      "Divisa": "Pataca",
      "Código": "MOP"
    },
    {
      "Divisa": "Peso argentino",
      "Código": "ARS"
    },
    {
      "Divisa": "Peso chileno",
      "Código": "CLP"
    },
    {
      "Divisa": "Peso colombiano",
      "Código": "COP"
    },
    {
      "Divisa": "Peso convertible",
      "Código": "CUC"
    },
    {
      "Divisa": "Peso cubano",
      "Código": "CUP"
    },
    {
      "Divisa": "Peso dominicano",
      "Código": "DOP"
    },
    {
      "Divisa": "Peso filipino",
      "Código": "PHP"
    },
    {
      "Divisa": "Peso mexicano",
      "Código": "MXN"
    },
    {
      "Divisa": "Peso uruguayo",
      "Código": "UYU"
    },
    {
      "Divisa": "Peso uruguayo en unidades indexadas (URUIURUI)",
      "Código": "UYI"
    },
    {
      "Divisa": "Pula",
      "Código": "BWP"
    },
    {
      "Divisa": "Quetzal",
      "Código": "GTQ"
    },
    {
      "Divisa": "Rand",
      "Código": "ZAR"
    },
    {
      "Divisa": "Rand",
      "Código": "ZAR"
    },
    {
      "Divisa": "Rand",
      "Código": "ZAR"
    },
    {
      "Divisa": "Real brasileño",
      "Código": "BRL"
    },
    {
      "Divisa": "Renminbi",
      "Código": "CNY"
    },
    {
      "Divisa": "Rial iraní",
      "Código": "IRR"
    },
    {
      "Divisa": "Rial omaní",
      "Código": "OMR"
    },
    {
      "Divisa": "Rial yemení",
      "Código": "YER"
    },
    {
      "Divisa": "Riel camboyano",
      "Código": "KHR"
    },
    {
      "Divisa": "Ringgit malayo",
      "Código": "MYR"
    },
    {
      "Divisa": "Riyal catarí",
      "Código": "QAR"
    },
    {
      "Divisa": "Riyal saudí",
      "Código": "SAR"
    },
    {
      "Divisa": "Rublo bielorruso",
      "Código": "BYR"
    },
    {
      "Divisa": "Rublo ruso",
      "Código": "RUB"
    },
    {
      "Divisa": "Rupia de maldivas",
      "Código": "MVR"
    },
    {
      "Divisa": "Rupia de Mauricio",
      "Código": "MUR"
    },
    {
      "Divisa": "Rupia de Seychelles",
      "Código": "SCR"
    },
    {
      "Divisa": "Rupia de Sri Lanka",
      "Código": "LKR"
    },
    {
      "Divisa": "Rupia india",
      "Código": "INR"
    },
    {
      "Divisa": "Rupia india",
      "Código": "INR"
    },
    {
      "Divisa": "Rupia indonesia",
      "Código": "IDR"
    },
    {
      "Divisa": "Rupia nepalí",
      "Código": "NPR"
    },
    {
      "Divisa": "Rupia pakistaní",
      "Código": "PKR"
    },
    {
      "Divisa": "SDR (Derecho Especial de Retiro)",
      "Código": "XDR"
    },
    {
      "Divisa": "Som",
      "Código": "KGS"
    },
    {
      "Divisa": "Som uzbeko",
      "Código": "UZS"
    },
    {
      "Divisa": "Somoni",
      "Código": "TJS"
    },
    {
      "Divisa": "Sucre",
      "Código": "XSU"
    },
    {
      "Divisa": "Taka",
      "Código": "BDT"
    },
    {
      "Divisa": "Tala",
      "Código": "WST"
    },
    {
      "Divisa": "Tenge kazajo",
      "Código": "KZT"
    },
    {
      "Divisa": "Tugrik",
      "Código": "MNT"
    },
    {
      "Divisa": "Uguiya",
      "Código": "MRO"
    },
    {
      "Divisa": "Unidad de Fomento",
      "Código": "CLF"
    },
    {
      "Divisa": "Unidad de Inversion Mexicana(UDI)",
      "Código": "MXV"
    },
    {
      "Divisa": "Unidad de valor real",
      "Código": "COU"
    },
    {
      "Divisa": "Vatu",
      "Código": "VUV"
    },
    {
      "Divisa": "WIR Euro",
      "Código": "CHE"
    },
    {
      "Divisa": "Won",
      "Código": "KRW"
    },
    {
      "Divisa": "Won norcoreano",
      "Código": "KPW"
    },
    {
      "Divisa": "Yen",
      "Código": "JPY"
    },
    {
      "Divisa": "Zloty",
      "Código": "PLN"
    }
   ];

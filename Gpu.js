var resultado;
var DineroDeuda;

function buscador(Identificador_tarjeta){
    return resultado = GpuS[Identificador_tarjeta];
}

function calcular_bruto_Y_neto (CT) {
    const producido_tarjeta_bruto = resultado.beneficio_bruto * CT;
    Bruta.innerHTML = producido_tarjeta_bruto + "€/dia";

    const producido_tarjeta_neto = parseInt(producido_tarjeta_bruto - DineroDeuda);
    Neta.innerHTML = producido_tarjeta_neto + "€/dia";
};

function Tarjeta(){
    const Tipo_tarjeta = document.getElementById("tarjeta").value;
    console.log(Tipo_tarjeta)
    buscador(Tipo_tarjeta)
}


function consumo(CT, PI){
//extraer el consumo de la tarjeta de video
    const electricidad = resultado.KW_dia;
    consumoT.innerHTML = electricidad + "KW/Dia";
    const Consumo_total = electricidad * CT;
    if (CT == 0){
        alert("Sin tarjetas es Dificil generar consumos")
        consumoTT.innerHTML = "Campo faltante!";
    }
    else{
        consumoTT.innerHTML = Consumo_total + "KW/Dia";
    }
//Extraer el valor de la luz segun el pais
    const Finder_pais = paises.filter( pais => {
    return pais.Nombre === PI;
    })
    console.log(Finder_pais)
    const Valor_pais = Finder_pais[0].valor_luz;
    console.log(Valor_pais);

//calcular el valor diario de la tarjeta segun el pais
    const consumo_final = Consumo_total * Valor_pais;
    console.log(consumo_final);
    return DineroDeuda = consumo_final
}

function Cantidad_valor(){
    const Numero = document.getElementById("cantidad").value;
    const Paises2 = document.getElementById("paises").value;

    var nombre = resultado.nombre;
    Tarjeta_grafica.innerHTML = nombre;
    consumo(Numero, Paises2);
    calcular_bruto_Y_neto(Numero)
}
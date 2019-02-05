// Necesito importar la hora local y crear un contador de tiempo

/* CONTADOR */
function pad(val) {
    var valString = val + "";
    // Si el valor es menor que 10, me devolverá un 0
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}

var totalSegundos = 0;

setInterval(setTime, 1000);

function setTime() {
    ++totalSegundos;
    document.getElementById("segundos").innerHTML = pad(totalSegundos % 60);
    document.getElementById("minutos").innerHTML = pad(parseInt(totalSegundos / 60)); /* Los minutos son segundos/60 */
}
/* FIN DEL CONTADOR */

/* FECHA Y HORA */
function checkTime(i) {
    // Como antes, quiero que se muestre un 0 antes si algun valor es inferior a 10
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(getTime);

function getTime() {
    var hoy = new Date();
    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();
    var dia = hoy.getDate();
    var año = hoy.getFullYear();
    var num_mes = new Array();
    num_mes[0] = "Ene";
    num_mes[1] = "Feb";
    num_mes[2] = "Mar";
    num_mes[3] = "Abr";
    num_mes[4] = "May";
    num_mes[5] = "Jun";
    num_mes[6] = "Jul";
    num_mes[7] = "Ago";
    num_mes[8] = "Sept";
    num_mes[9] = "Oct";
    num_mes[10] = "Nov";
    num_mes[11] = "Dic";
    var mes = num_mes[hoy.getMonth()];

    /* La función getMonth nos devuelve el número del mes, siendo "ENERO = 0" 
    entonces tuve que crear un array para que al introducirle el número 
    me devolviese el nombre del mes */

    dia = checkTime(dia);
    mes = checkTime(mes);
    año = checkTime(año);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('tiempo').innerHTML = h + ":" + m + ":" + s;
    document.getElementById('fecha').innerHTML = dia + " " + mes + " " + año;
}
/* FIN DE FECHA Y HORA*/
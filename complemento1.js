// Funciones de fecha y hora

function diasEntreFechas(fecha1, fecha2){
    const unDia = 1000*60*60*24;                            // Conversión de ms por día
    const diferencia = Math.abs(fecha1 - fecha2);           // Expresadas en ms
    return Math.floor(diferencia/unDia);
};

dia = prompt("Ingresa el día de nacimiento");
mes = prompt("Ingresa el mes de nacimiento");
anno = prompt("Ingresa el anno de nacimiento");

const hoy = new Date();
const nacimiento = new Date(anno,mes,dia);

miEdad = diasEntreFechas(hoy,nacimiento);

console.log(miEdad);
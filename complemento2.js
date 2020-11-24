// Funciones recursivas

var dividendo = prompt("Ingrese el valor de DIVIDENDO");
var divisor = prompt("Ingrese el valor de DIVISOR");

divisor = Number(divisor);
dividendo = Number(dividendo);

function divisionEntera(dividendo,divisor){
    if(dividendo < divisor){
        return 0;
    }
    else{
        return 1 + divisionEntera(dividendo-divisor,divisor);
    }
};

resultadoDivision = divisionEntera(dividendo,divisor);

console.log(resultadoDivision);
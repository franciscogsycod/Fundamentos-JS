// Comparaciones

var x = 4;
var y = "4";

// Comparando por el valor
console.log(x==y);

// Comparando por el valor y el tipo
console.log(x===y);

// Comparando objetos

var Francisco = {
    nombre : "Francisco"
}

var Javier = {
    nombre : "Francisco"
};

var otraPersona = Francisco;

console.log(Francisco === Javier);
console.log(otraPersona === Francisco);

var unaMas = {
    ...Francisco                // Creación de un objeto literal (nuevo objeto en unoMas)
};
console.log(unaMas);

unaMas.nombre = "Pepe";

console.log(unaMas);
console.log(Francisco);
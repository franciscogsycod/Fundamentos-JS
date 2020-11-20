// Alcance de las funciones

// Aqui ocurre Side-effect al modificar la variable global "nombre"
/*
var nombre = "Francisco";

function imprimirMayusculas(){
    nombre = nombre.toUpperCase();
    return console.log(nombre);
};

imprimirMayusculas();
*/
// Aqui no ocurre el Side-effect al colocar una variable global "n"

var nombre = "Francisco";

function imprimirMayusculas(nombre){
    nombre = nombre.toUpperCase();
    return console.log(`Por función : ${nombre}`);
};

imprimirMayusculas(nombre);
console.log(`Original : ${nombre}`);
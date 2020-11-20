// Objetos

var Francisco = {
    nombre : "Francisco",
    edad : 28
};
var Javier = {
    nombre : "Javier",
    edad : 30
};

function imprimirMayusculas(persona){                           // Obtiene como entrada un objeto
    var nombre = persona.nombre.toUpperCase();
    return console.log(`Función imprimir MAY : ${nombre}`);
};

imprimirMayusculas(Francisco);                                  // Se le manda un objeto
imprimirMayusculas(Javier);                                     // Se le manda un objeto


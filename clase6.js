// Desestructurar objetos

var Francisco = {
    nombre : "Francisco",
    edad : 28
};
var Javier = {
    nombre : "Javier",
    edad : 30
};

function imprimirMayusculas(persona){                           // Obtiene como entrada un objeto
    //var nombre = persona.nombre.toUpperCase();
    //return console.log(`Función imprimir MAY : ${nombre}`);
    // OTRA FORMA DE HACERLO ES :
    var {nombre} = persona;
    return console.log(`Función imprimir MAY : ${nombre.toUpperCase()}`);
};

imprimirMayusculas(Francisco);                                  // Se le manda un objeto
imprimirMayusculas(Javier);                                     // Se le manda un objeto

// ********** RETO

function imprimirNombreEdad(persona){
    var {nombre} = persona;
    var {edad} = persona;
    return console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
};

imprimirNombreEdad(Francisco);                                  
imprimirNombreEdad(Javier);
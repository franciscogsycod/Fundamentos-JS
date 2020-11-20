// Arrow functions

var francisco = {
    nombre : "Francisco",
    apellido : "Gomez",
    edad : 28,
    ingeniero : true,
    cocinero : false,
    fisico : false,
    marino : false,
    drone : true
};

var javier = {
    nombre : "Javier",
    apellido : "Olguin",
    edad : 15,
    ingeniero : false,
    cocinero : false,
    fisico : true,
    marino : false,
    drone : false
};

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);

    if(persona.ingeniero){                              // Dado que francisco.ingeniero es TRUE
        console.log("Es Ingeniero");                     // no es necesario evaluar la condicion con ===
    }                                                   // solamente hay que dejar el estatement en persona.x
    else{
        console.log("No es ingeniero");
    }                                                   
    if(persona.cocinero){
        console.log("Es Cocinero");
    }
    else{
        console.log("No es cocinero");
    }
    if(persona.fisico){
        console.log("Es Fisico");
    }
    else{
        console.log("No es Fisico");
    }
    if(persona.marino){
        console.log("Es Marino");
    }
    else{
        console.log("No es Marino");
    }
    if(persona.drone){
        console.log("Es Drone");
    }
    else{
        console.log("No es Drone");
    }
}

//imprimirProfesiones(francisco);
//imprimirProfesiones(javier);

const MAYORIA_EDAD = 18;

// **** Arrow function
//const esMayorEdad = persona => persona.edad >= MAYORIA_EDAD;

// Desestructurando el Arrow Function
const esMayorEdad = ({edad}) => edad >= MAYORIA_EDAD;

//

/*
const esMayorEdad = function (persona){                         // Inicialización de constante (o var) como función
    return persona.edad >= MAYORIA_EDAD;
};
*/

function imprimirMayorEdad (persona){
    if(esMayorEdad(persona)){                                   // Recibe el condicional un objeto (TRUE o FALSE)
        console.log(`${persona.nombre} es mayor de edad`)       // de la función que se invoca
    }
    else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirMayorEdad(francisco);
imprimirMayorEdad(javier);

function permitirAcceso (persona){
    if(!esMayorEdad(persona)){
        console.log("ACCESO DENEGADO");
    }
    else{
        console.log("ACCESO PERMITIDO");
    }
};

permitirAcceso(francisco);
permitirAcceso(javier);
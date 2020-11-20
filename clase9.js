// Condicionales

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
    edad : 30,
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

imprimirProfesiones(francisco);
imprimirProfesiones(javier);
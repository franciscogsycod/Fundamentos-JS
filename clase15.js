// Estructura de control de condicional múltiple: SWITCH

var signo = prompt("Cual es tu signo? ")                                  // Le pregunta al usuario y le pide datos

switch(signo){
    case "aries":
        console.log(`Eres ${signo}`);
        break;
    case "tauro":
        console.log(`Eres ${signo}`);
        break;
    case "geminis":
        console.log(`Eres ${signo}`);
    break;
    default:
        console.log("No ingresaste signo");
};
// Estructuras repetitivas: WHILE

const francisco = {
    nombre : "Francisco",
    apellido : "Gomez",
    edad : 28,
    peso : 75
}

const INCREMENTO_PESO = .300;
const DIAS_ANNO = 365;
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO;
const META = francisco.peso - 3;

const comeMucho = () => Math.random() < 0.3;
const haceDeporte = () => Math.random() < 0.4;

var dias = 0;

while(francisco.peso > META){
    //debugger
    if(comeMucho()){
        aumentarPeso(francisco);
    }
    else if(haceDeporte()){
        adelgazarPeso(francisco);
    }
    else{
        null;
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días para que ${francisco.nombre} adelgazara ${francisco.peso.toFixed(1)} kg`);
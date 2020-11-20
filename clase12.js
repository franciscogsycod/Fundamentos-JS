// Estructuras repetitivas : FOR

const francisco = {
    nombre : "Francisco",
    apellido : "Gomez",
    edad : 28,
    peso : 75
}

console.log(`Al INICIO del año ${francisco.nombre } pesa ${francisco.peso} kg`);

const INCREMENTO_PESO = .200;
const DIAS_ANNO = 365;
const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazarPeso = persona => persona.peso -= INCREMENTO_PESO;

for(var i=1; i<=DIAS_ANNO; i++){                              // INICIO, CONDICION, INCREMENTO
    var random = Math.random()
    if(random < 0.25){
        aumentarPeso(francisco);
    }
    else if (random < 0.5) {
        adelgazarPeso(francisco);
    }   
    else{
        null;
    }
};

console.log(`Al FINAL del del año ${francisco.nombre } pesa ${francisco.peso.toFixed(1)} kg`);
// Parámetros como referencia o como valor

var Francisco = {
    nombre : "Francisco",
    apellido : "Gomez",
    edad : 28
};

var Javier = {
    nombre : "Javier",
    apellido : "Olguin",
    edad : 30
};

function cumpleaños(persona){
    return {
        ...persona,
        edad : persona + 1
    }
}

console.log(cumpleaños(Francisco.edad));
console.log(Francisco.edad);

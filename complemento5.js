// Estructuras de datos inmutables

const francisco = {
    nombre : "Francisco",
    apellido : "Gomez",
    edad : 28
}

//const cumpleanos = persona => persona.edad++;

const cumpleanosInmutable = persona => ({
    ...persona,
    edad : persona.edad + 1
})

console.log(francisco)
console.log(cumpleanosInmutable(francisco))
// Filtrar elementos de un array

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula];

const ESTATURA_ALTA = 1.8;
const ESTATURA_BAJA = 1.6;

// Filtrado de personas ALTAS
const esAlta = ({altura}) => altura > ESTATURA_ALTA;
var personasAltas = personas.filter(esAlta);
console.log(personasAltas);

// Filtrado de personas BAJAS
const esBaja = ({altura}) => altura < ESTATURA_BAJA;
var personasBajas = personas.filter(esBaja);
console.log(personasBajas);
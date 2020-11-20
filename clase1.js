var nombre = "Francisco", apellido = "Gomez";

var nombreMayusculas = nombre.toUpperCase();
var apellidoMinusculas = apellido.toLowerCase();

console.log(nombreMayusculas);          // Cambiar texto a MAYUSCULAS
console.log(apellidoMinusculas);        // Cambiar texto a minusculas

var primeraLetraNombre = nombre.charAt(0);  
console.log(primeraLetraNombre);        // Muestra la letra señalada en charAt(x)

var cantidadLetrasNombre = nombre.length;
console.log(cantidadLetrasNombre);        // Muestra la cantidad de caracteres del nombre

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

// Interpolacion de texto (concatenación nueva de JS)

var nameCompleto = `${nombre} ${apellido.toUpperCase()}`;
console.log(nameCompleto);

// Sustraer letras

var extraerLetras = nombre.substr(2,2);
console.log(extraerLetras);

// Mostrar el la ultima letra del nombre
var ultimaNombre = nombre.charAt(nombre.length-1);
console.log(ultimaNombre);
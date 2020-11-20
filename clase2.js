// Numeros

edad = 35;
console.log(edad);

// Ambas lineas suman un 1

edad = edad + 1;
console.log(edad);

edad += 1;
console.log(edad);

// Ambas lineas restan 5

edad = edad - 5;
console.log(edad);

edad -= 5;
console.log(edad);

// Decimales (flotantes)

var precioVino = 203.21;
console.log(precioVino);

var totalVinos = Math.round(precioVino * 5);        // Redondea al entero mas cercano
console.log(totalVinos);

var totalDosDecimales = totalVinos.toFixed(2);      // Redondea a dos decimales
totalDosDecimales2 = parseFloat(totalDosDecimales);
console.log(totalDosDecimales2);


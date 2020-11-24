// Cambiando de contexto al llamar una función

const pablo = {
	nombre: 'Pablo',
	apellido: 'Olivares',
}
const mariela = {
	nombre: 'Mariela',
	apellido: 'Riesnik',
}

function saludar(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
}

const saludarPablo = saludar.bind(pablo);
const saludarMariela = saludar.bind(mariela);

console.log(saludarPablo());
console.log(saludarMariela());

// Call y Apply

saludar.call(pablo)
saludar.apply(mariela)
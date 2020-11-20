// Como funcionan las clases en Javascript : Objetos

// Crear prototipos

function persona(nombre,apellido,edad,altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.altura = altura;
    return this
};

persona.prototype.saludar = function(){
    if(this.altura > 1.7){
        condAltura = "SI";
    }
    else{
        condAltura = "NO";
    }
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y ${condAltura} soy alto porque mido ${this.altura} metros`);
}

var Francisco = new persona("Francisco","Gomez",28,1.8);    // Palabra para crear nuevos objetos dado un prototipo
var Javier = new persona("Javier","Olguin",30,1.5);

console.table(Francisco);
console.table(Javier);

console.log(Francisco.saludar());
console.log(Javier.saludar());
// Herencia prototipal por ECMAScript-6+



// Herencia prototipal
// function hereda(prototipoHijo,prototipoPadre){
//     var fn = function(){}                           // Función dummy
//     fn.prototype = prototipoPadre.prototype;
//     prototipoHijo.prototype = new fn;
//     prototipoHijo.prototype.constructor = prototipoHijo;
// }

class persona {
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.altura = altura;
        return this;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
    soyAlto() {
        return this.altura > 1.7;
    }
};

class developer extends persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura);
        // this.nombre = nombre;
        // this.apellido = apellido;
        // this.altura = altura;
    }
}
// function developer(nombre,apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// };

//hereda(developer,persona);

developer.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Developer`);
};

// var Francisco = new persona("Francisco","Gomez",28,1.8);    
// var Javier = new developer("Javier","Olguin",30,1.5);


// Funciones como parametros

// // Herencia prototipal por ECMAScript-6+

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
    saludar(fn) {
        var {nombre,apellido,edad} = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`);
        if(fn){
            fn(nombre,apellido,false)
        }
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
    saludar(fn){
        var {nombre,apellido} = this;
        console.log(`Hola me llamo ${nombre} ${apellido} y soy Developer`);
        if(fn){
            fn(nombre,apellido,true);
        }
    }
}
// function developer(nombre,apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// };

//hereda(developer,persona);

// developer.prototype.saludar = function(){
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Developer`);
// };

// var Francisco = new persona("Francisco","Gomez",28,1.8);    
// var Javier = new developer("Javier","Olguin",30,1.5);

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log("Ah mira, no sabia que eras developer!");
    }
};

var Francisco = new persona("Francisco","Gomez",28,1.8);    
var Javier = new developer("Javier","Olguin",30,1.5);

Francisco.saludar();
Javier.saludar(responderSaludo);
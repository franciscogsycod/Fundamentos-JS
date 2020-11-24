// Memorización : Ahorrando cómputo

var numero;
numero = prompt("Ingrese el numero para calcular su factorial")

numero = Number(numero);

function factorial(numero){
    if(!this.cache){
        this.cache = {}
    }
    if(this.cache[numero]){
        return this.cache[numero]
    }
    
    if(numero === 1){
        return 1
    }
    else{
        this.cache[numero] = numero * factorial(numero-1);
        return this.cache[numero]
    }
}

resultado = factorial(numero);

console.log(resultado);
console.log(this.cache[numero]);
// Como funciona el asincronismo en JS

// Event-Loop

// console.log("a");
// setTimeout(() => console.log("b"),0);          // Retardo de ejecución hecha por el navegador en 0 segundos
// console.log("c");                              // resultando como ultima tarea del JS

setTimeout(()=>console.log("d"),2000);

for(var i=0;i<100000000;i++){
    null;
}
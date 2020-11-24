// Closures de Javascript

function crearSaludo(finalFrase){
    return nombre => console.log(`Hola ${nombre} ${finalFrase}`);
}

const saludoArgentino = crearSaludo("che");
const saludoMexicano = crearSaludo("wey");
const saludoColombiano = crearSaludo("parce");

saludoArgentino("Sasha")
saludoMexicano("Francisco")
saludoColombiano("Alberto")
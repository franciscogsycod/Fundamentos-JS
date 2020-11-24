// Manejo de errores con callbacks

const API_URL = "https://swapi.dev/api/";

const PEOPLE_URL = "people/:id";
// const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id",4)}`;
const OPTIONS_GET = {crossDomain: true};

// $.get(LUKE_URL,OPTIONS_GET,function(data){        // Metodo que permite hacer request $.get(URL_completa,)
//     console.log(`Hola, yo soy ${data.name}`)
// })

// Callback - Funcion que se ejecuta en el futuro que get es el encargado de llamar

// const personajeRespuesta = data => console.log(`Hola, soy ${data.name}`);

// Haciendo multiples requests

function obtenerPersonaje(id,callback){
    const PERSONAJES_URL = `${API_URL}${PEOPLE_URL.replace(":id",id)}`;
    $.get(PERSONAJES_URL,OPTIONS_GET, callback).fail(function(){
        console.log("No se pudo obtener el contenido");
    })
};

// $.get(LUKE_URL,OPTIONS_GET,personajeRespuesta)

// numeroPersonaje = prompt("Ingresa un numero de personaje :")

obtenerPersonaje(1, function (data){
    console.log(`Hola, soy ${data.name}`);
    obtenerPersonaje(2, function (data){
        console.log(`Hola, soy ${data.name}`);
        obtenerPersonaje(3, function (data){
            console.log(`Hola, soy ${data.name}`);
            obtenerPersonaje(4, function(data){
                console.log(`Hola, soy ${data.name}`);
                obtenerPersonaje(5, function(data){
                    console.log(`Hola, soy ${data.name}`);
                })
            })
        })
    })
})
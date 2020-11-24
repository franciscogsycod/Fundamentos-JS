// Manejando el orden y el asíncronimso en Javascript

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
    $.get(PERSONAJES_URL,OPTIONS_GET, function (data){
        console.log(`Hola, soy ${data.name}`);
        if(callback){
            callback();
        }
    })
};

// $.get(LUKE_URL,OPTIONS_GET,personajeRespuesta)

// numeroPersonaje = prompt("Ingresa un numero de personaje :")

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4);
        })
    })
});
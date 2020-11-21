// Callbacks

const API_URL = "https://swapi.dev/api/"

const PEOPLE_URL = "people/:id"
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(":id",4)}`
const OPTIONS_GET = {crossDomain: true}

// $.get(LUKE_URL,OPTIONS_GET,function(data){        // Metodo que permite hacer request $.get(URL_completa,)
//     console.log(`Hola, yo soy ${data.name}`)
// })

const personajeRespuesta = data => console.log(`Hola, soy ${data.name}`);
$.get(LUKE_URL,OPTIONS_GET,personajeRespuesta)

// Callback - Funcion que se ejecuta en el futuro que get es el encargado de llamar


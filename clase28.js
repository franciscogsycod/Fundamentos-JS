// Promesas

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTIONS_GET = {crossDomain: true};

function obtenerPersonaje(id){
    return new Promise((resolve,reject) => {
        const PERSONAJES_URL = `${API_URL}${PEOPLE_URL.replace(":id",id)}`;
        $
        .get(PERSONAJES_URL,OPTIONS_GET, function(dato){
            resolve(dato);
        })
        .fail(() => { reject(id);
        })
    })
};

obtenerPersonaje(1)
    .then((data) => console.log(`El personaje 1 es ${data.name}`))
    .catch((id) => console.log(`Sucedio un error al obtener el personaje ${id}`));

obtenerPersonaje(2)
.then((data) => console.log(`El personaje 2 es ${data.name}`))
.catch((id) => console.log(`Sucedio un error al obtener el personaje ${id}`));

obtenerPersonaje(3)
    .then((data) => console.log(`El personaje 3 es ${data.name}`))
    .catch((id) => console.log(`Sucedio un error al obtener el personaje ${id}`));

obtenerPersonaje(4)
.then((data) => console.log(`El personaje 4 es ${data.name}`))
.catch((id) => console.log(`Sucedio un error al obtener el personaje ${id}`));

obtenerPersonaje(5)
    .then((data) => console.log(`El personaje 5 es ${data.name}`))
    .catch((id) => console.log(`Sucedio un error al obtener el personaje ${id}`));

obtenerPersonaje(6)
.then((data) => console.log(`El personaje 6 es ${data.name}`))
.catch((id) => console.log(`Sucedio un error al obtener el personaje ${id}`));
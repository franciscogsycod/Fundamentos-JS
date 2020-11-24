// Promesas encadenadas

// Promesas

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const OPTIONS_GET = {crossDomain: true};
let id;

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

id = 4;

obtenerPersonaje(id)
    .then(data => {console.log(`El personaje ${id} es ${data.name}`); 
        return obtenerPersonaje(id);
    })
    .catch(id => console.log(`Sucedio un error al obtener el personaje ${id}`));
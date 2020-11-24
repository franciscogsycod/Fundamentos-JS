// Multiples promesas en paralelo

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

var ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20];
var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(data => console.table(data))
    .catch(id => console.table(`Sucedio un error al obtener el personaje ${id}`));
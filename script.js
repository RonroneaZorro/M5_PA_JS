
const separador = (titulo) => {
  setTimeout(() => {
  console.log(`=========================  ${titulo}  ==========================`);
        }, 2000);;

};

// Función con callback

// Datos del usuario
const usuario = {
    nombre: 'Tulio Triviño',
    correo: 'TulioT@31minutos.com',
    ciudad: 'Santiago',
};

separador('Uso de callbacks');
// Definimos los datos del usuario que serán retornados por todas las simulaciones
function obtenerUsuarioCallback(callback) {
    setTimeout(() => {
        callback(usuario); // Invocamos el callback con los datos despues de 2 segundos
    }, 2000);
}

// Uso del callback: imprimimos nombre y correo
obtenerUsuarioCallback((usuario) => {
    console.log('Nombre:', usuario.nombre);
    console.log('Correo:', usuario.correo);
});

// ----------------------------------------------------------------------------------------

// Función que retorna una Promise

separador('Uso de promesas');

function obtenerUsuarioPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(usuario); // Resolvemos la promesa con los datos despues de 2 segundos
        }, 2000);
    });
}

// Consumo de la promesa con .then() y .catch()
obtenerUsuarioPromesa()
    .then((usuario) => {
        console.log('Nombre:', usuario.nombre);
        console.log('Ciudad:', usuario.ciudad);
    })
    .catch((error) => {
        console.error('Error al obtener usuario:', error.message);
    });

// ----------------------------------------------------------------------------------------

// Función async que usa la promesa anterior

separador('Uso de Async/Await');

async function obtenerUsuarioAsync() {
    try {
        const usuario = await obtenerUsuarioPromesa(); // Esperamos la resolución de la promesa
        console.log(`Usuario obtenido: Nombre: ${usuario.nombre}, Correo: ${usuario.correo}, Ciudad: ${usuario.ciudad}`);
    } catch (error) {
        console.error('Error al obtener usuario:', error.message);
    }
}

// Llamada a la función async
obtenerUsuarioAsync();

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

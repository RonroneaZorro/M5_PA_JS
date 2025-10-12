

const separador = (titulo) => {
  console.log(`\n====================================================================`);
  console.log(`=========================  ${titulo}  ==========================`);
  console.log(`====================================================================\n`);
};
separador('ACTIVIDAD 1');

// 1. Función callback en JavaScript

// a. La llamada o invocación a la función principal: Función callback como parámetro
function saludoPrincipal(callback) {
    // b. Ejecución de la función principal
    console.log('Buenos días'); 
    
    callback();
}

// c. Función callback que pregunta por el café
function callbackCafe() {
    console.log('¿Quieres un café?');
}

// Llamamos a la función principal pasando el callback como parámetro
saludoPrincipal(callbackCafe);

separador('ACTIVIDAD 2');

// 2. Función callback en JavaScript

function operaciones(a, b, minora, potencias) {
    var diferencia = a - b;
    var elevado = Math.pow(a, b);
    minora(a, b, diferencia); 
    potencias(a, b, elevado); 
}

operaciones(5, 3,
    function(a, b, diferencia) {
        console.log("La diferencia entre " + a + " y " + b + " es: " + diferencia);
    },
    function(a, b, elevado) {
        console.log("Elevando " + a + " a potencia " + b + " se obtiene: " + elevado);
    }
);
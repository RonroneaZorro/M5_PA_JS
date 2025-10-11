// Carácteristicas de ES6+:
// - Variables: const/let
// - Fúncion flecha: => arrow function
// - Template literals
// - Destructuring (objetos y array)
// - Spread/rest manipulación de datos
// - Map gestión de datos
// - async/await y promesas para simular carga asíncrona (de datos)
// - Polyfill con función Array.from 

const entregas = [  // Datos iniciales (se podría importar de un JSON)
  { direccion: "Av. Siempre Viva 742", paquetes: 4 },
  { direccion: "Calle Falsa 123", paquetes: 2 },
  { direccion: "Av. Siempre Viva 742", paquetes: 3 },
  { direccion: "Pje. Las Rosas 456", paquetes: 5 },
  { direccion: "Calle Falsa 123", paquetes: 1 }
];

// Carga de datos usando una promesa
const loadData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(entregas), 500);
  });
};

// Función de flecha para procesar y generar el reporte
const processDeliveries = async () => {
  const data = await loadData();  // async/await

  // Map para filtrar y contar paquetes
  const deliveryMap = new Map();
  data.forEach(({ direccion, paquetes }) => {  
    const currentPaquetes = deliveryMap.get(direccion) || 0;  
    deliveryMap.set(direccion, currentPaquetes + paquetes);
  });

  // Convertir Map a array usando Array.from (polyfilled)
  let processed = Array.from(deliveryMap, ([direccion, paquetes]) => ({ 
    direccion,
    paquetes
  }));

  // Se ordena el array de mayor a menor (por cantidad de paquetes)
  processed = [...processed].sort((a, b) => b.paquetes - a.paquetes);

  return processed;
};

// Se genera el reporte usando template literals
const generateReport = (deliveries, companyName = 'ExpressGo') => { 
  let report = `
  ========================================================
        === Reporte de Rutas de ${companyName} ===
  ========================================================\n
  Rutas priorizadas por cantidad de paquetes:\n\n`;
  report += 'Prioridad | Dirección'.padEnd(40) + '| Paquetes\n';
  report += ''.padEnd(40, '-') + '\n';

  const lines = deliveries.reduce((acc, { direccion, paquetes }, index) => { 
    const priority = index + 1;
    acc.push(`${priority.toString().padStart(8)} | ${direccion.padEnd(25)} | ${paquetes}\n`);
    return acc;
  }, []);

  report += lines.join(''); 
  report += `\nTotal de rutas únicas: ${deliveries.length}`;
  return report;
};

// Función para procesar y generar el reporte
const processAndReport = async () => {
  try {
    const processedDeliveries = await processDeliveries();
    const report = generateReport(processedDeliveries);
    console.log(report); 
  } catch (error) {
    console.error('Error procesando entregas:', error);
  }
};

// Exporta la función si se ejecuta directamente
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { processAndReport };
}

// Procesa y genera el reporte cuando se ejecuta directamente
processAndReport();
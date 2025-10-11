// ES6+ Features Used:
// - const/let
// - Arrow functions (with default params)
// - Template literals
// - Destructuring (object and array)
// - Spread/rest operators
// - Map (for unique addresses and summing)
// - async/await with Promises (simulate data load)
// - Array.from (with polyfill for old browsers)

const entregas = [  // Initial data (could be from JSON)
  { direccion: "Av. Siempre Viva 742", paquetes: 4 },
  { direccion: "Calle Falsa 123", paquetes: 2 },
  { direccion: "Av. Siempre Viva 742", paquetes: 3 },
  { direccion: "Pje. Las Rosas 456", paquetes: 5 },
  { direccion: "Calle Falsa 123", paquetes: 1 }
];

// Simulate async data loading (e.g., from JSON file) using Promise
const loadData = () => {
  return new Promise((resolve) => {
    // Simulate delay for file/JSON load
    setTimeout(() => resolve(entregas), 500);
  });
};

// Process deliveries: remove duplicates, sum packages, sort by priority
const processDeliveries = async () => {
  const data = await loadData();  // async/await

  // Use Map to manage unique addresses and sum packages (rest operator for loop if needed)
  const deliveryMap = new Map();
  data.forEach(({ direccion, paquetes }) => {  // Destructuring in forEach
    const currentPaquetes = deliveryMap.get(direccion) || 0;  // Default via || (ES6 style)
    deliveryMap.set(direccion, currentPaquetes + paquetes);
  });

  // Convert Map to array using Array.from (polyfilled)
  let processed = Array.from(deliveryMap, ([direccion, paquetes]) => ({  // Destructuring array
    direccion,
    paquetes
  }));

  // Sort descending by paquetes (priority: more packages first)
  processed = [...processed].sort((a, b) => b.paquetes - a.paquetes);  // Spread to create new array

  return processed;
};

// Generate report using template literals (arrow function with default param)
const generateReport = (deliveries, companyName = 'ExpressGo') => {  // Arrow with default
  let report = `=== Reporte de Rutas Optimizadas para ${companyName} ===\n\n`;
  report += 'Prioridad | Dirección'.padEnd(40) + '| Paquetes\n';
  report += ''.padEnd(40, '-') + '\n';

  // Use reduce with template literals and destructuring (spread for iteration if needed)
  const lines = deliveries.reduce((acc, { direccion, paquetes }, index) => {  // Destructuring
    const priority = index + 1;
    acc.push(`${priority.toString().padStart(8)} | ${direccion.padEnd(25)} | ${paquetes}\n`);
    return acc;
  }, []);

  report += lines.join('');  // Join array of template strings
  report += `\nTotal de rutas únicas: ${deliveries.length}`;
  return report;
};

// Main function to process and generate report
const processAndReport = async () => {
  try {
    const processedDeliveries = await processDeliveries();
    const report = generateReport(processedDeliveries);
    console.log(report);  // Output to console (or DOM in browser)
  } catch (error) {
    console.error('Error procesando entregas:', error);
  }
};

// Export for module use (ES6 modules, but Webpack handles)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { processAndReport };
}

// Auto-run in browser/Node
processAndReport();
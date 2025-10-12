# 🚚 Proyecto ExpressGo: Optimizador de Rutas (ES6+)

## Descripción del Proyecto

Este proyecto implementa un algoritmo en JavaScript moderno (ES6+) para resolver un problema de optimización de rutas para la empresa de reparto ExpressGo. 

## Características
- Procesamiento de listas, eliminando duplicados y consolida un paquete
- Ordena la lista con prioridad: Mayor cantidad de paquetes
- Genera un reporte visual en pantalla (Consola del desarrollador)
- Compatible con navegadores modernos como antiguos, utilizando herramientas de desarrollo estándar **Webpack** y **Babel**

## Requerimientos Cumplidos

El proyecto cumple con los siguientes puntos del desafío:

- **Procesamiento de Datos:** El algoritmo elimina direcciones duplicadas y suma los paquetes correspondientes utilizando la estructura de datos `Map` para un manejo eficiente.
- **Priorización de Rutas:** Las rutas se ordenan de forma descendente según la cantidad total de paquetes, garantizando una priorización efectiva para las entregas.
- **Generación de Reportes:** Se utiliza `Template literals` para crear un reporte claro y bien formateado que se muestra en la consola del navegador.
- **Uso de ES6+:** Se implementan más de ocho características modernas de JavaScript, incluyendo `let`, `const`, `Arrow functions`, `Destructuring`, `Spread operator`, `Map`, `async/await` y `Promises`.
- **Compatibilidad de Navegadores:** La configuración de **Webpack** y **Babel** asegura que el código JavaScript moderno sea transpila a una sintaxis compatible con navegadores más antiguos. Además, se incluye un polyfill para garantizar el funcionamiento de funcionalidades de ES6+ como las `Promises`.

## Tecnologías Utilizadas

- **JavaScript (ES6+):** Lenguaje principal del algoritmo.
- **Node.js y npm:** Entorno de ejecución y gestor de paquetes.
- **Webpack:** Empaquetador de módulos para compilar y optimizar el código.
- **Babel:** Transpilador de JavaScript para garantizar la compatibilidad con versiones antiguas del lenguaje.
- **core-js:** Biblioteca de polyfills para añadir soporte de funcionalidades modernas.

## Instalación y Uso

Sigue estos pasos para configurar y ejecutar el proyecto:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/RonroneaZorro/M5_PA_JS.git]
    cd [M5_PA_JS]
    ```
2.  **Cambiar a la rama del proyecto:**
    ```bash
    git checkout -b M5AE2_ABP2 origin/M5AE2_ABP2
    ```
3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Compilar y empaquetar el código:**
    ```bash
    npm run build
    ```

5.  **Ver el resultado:**
    Abre el archivo `index.html` en tu navegador y revisa la **consola del desarrollador** para ver el reporte de rutas optimizadas.

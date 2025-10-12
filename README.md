# 📚 Funciones callbacks en JavaScript

## Descripción del Proyecto

Este proyecto es una demostración de la manipulación del **Document Object Model (DOM)** y el uso de **funciones `callback`** en JavaScript. 
La actividad se divide en dos conceptos fundamentales:
- Programación asíncrona
- Manipulación del flujo de control.

El código se desarrolló utilizando características modernas de **ES6+** para una sintaxis más limpia y eficiente.

---

## Requerimientos Cumplidos

### Actividad 1: Función Callback Básica

- Se creó una función principal (`saludoPrincipal`) que ejecuta su código y luego invoca una función `callback`.
- Se implementó una función `callback` (`callbackCafe`) que se pasa como argumento a la función principal y se ejecuta al final.
- La ejecución sigue el orden correcto: la función principal se inicia, muestra un mensaje, y finalmente el `callback` se ejecuta.

### Actividad 2: Modificación de Código Existente

- Se modificó el código base (originalmente en ES5) para utilizar características de **ES6+**.
- Se emplearon **Funciones de flecha** (`=>`) para la función principal y los `callbacks`.
- Se utilizaron **`Template literals`** (``) para crear mensajes de consola dinámicos que se adaptan automáticamente a los valores de entrada.
- El código final es más legible y moderno, cumpliendo con la salida exacta solicitada al combinar los valores de entrada en la cadena de texto de manera flexible.

---

## Tecnologías Utilizadas

- **JavaScript (ES6+):** Lenguaje principal para la lógica del programa.
- **Node.js:** Entorno de ejecución para ejecutar las dependencias del proyecto.

---

## Instalación y Uso

Sigue estos pasos para ver el proyecto en acción:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/RonroneaZorro/M5_PA_JS.git]
    cd [M5_PA_JS]
    ```
2.  **Cambiar a la rama del proyecto:**
    ```bash
    git checkout -b M5AE2_ABP2 origin/M5AE4_ABP3
    ```
3. **Descargar el archivo zip del proyecto y descomprir (opción sin clonar)**
4.  **Ver el resultado:**
  1.  Abre el archivo `index.html` en tu navegador web.
  2.  Abre las herramientas del desarrollador (F12 o clic derecho -> "Inspeccionar").
  3.  Selecciona la pestaña **"Consola"** para ver los resultados de la ejecución de ambas actividades.

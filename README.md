# 📚 Funciones Asíncrona en JavaScript

## Descripción del Proyecto

Este proyecto es una demostración de los diferentes mecanismos de `programación asíncrona en JavaScript`.
El código se desarrolló utilizando características modernas de **ES6+** para una sintaxis clara, legible y eficiente.

La actividad se divide en 3 conceptos fundamentales:
- Uso de Callbacks.
- Uso de Promesas
- Uso de Async/Await

---

## Requerimientos Cumplidos

El proyecto cumple con los siguientes puntos del desafío:

### Programación Asíncrona

- **Uso de Callbacks:** Se implementó una función `(obtenerUsuarioCallback)` que simula una consulta de 2 segundos. Una vez que la operación termina, esta función invoca un callback para manejar los datos del usuario, demostrando el patrón básico de control de flujo asíncrono.
- **Uso de Promesas:** Se creó una función `(obtenerUsuarioPromesa)` que retorna una `Promise`. Esta promesa se `resuelve` después de una demora de 2 segundos, y se consume utilizando los métodos `.then()` y `.catch()` para procesar los datos o manejar un posible error.
- **Uso de Async/Await:** Se implementó una función async `(obtenerUsuarioAsync)` que utiliza la palabra clave `await` para esperar el resultado de la `Promise`. Este enfoque permite escribir código asíncrono con una sintaxis que se asemeja al código síncrono, mejorando la legibilidad.

---

## Tecnologías Utilizadas

- **JavaScript (ES6+):** Lenguaje principal para la lógica del programa.

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
    git checkout -b M5AE4_ABP4 origin/M5AE4_ABP4
    ```
3. **Descargar el archivo zip del proyecto y descomprir (opción sin clonar)**
4.  **Ver el resultado:**
  1.  Abre el archivo `index.html` en tu navegador web.
  2.  Abre las herramientas del desarrollador (F12 o clic derecho -> "Inspeccionar").
  3.  Selecciona la pestaña **"Consola"** para ver los resultados de la ejecución.

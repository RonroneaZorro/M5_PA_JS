# 📅 Consumo de API de Feriados en Chile con JavaScript

## Descripción del Proyecto

Este proyecto implementa el **consumo de una API** pública utilizando **JavaScript** y **jQuery**, con el objetivo de mostrar los feriados oficiales de Chile para el año actual.

La actividad consiste en los siguientes conceptos fundamentales:
- Consumo de APIs mediante peticiones HTTP
- Manipulación del DOM y manejo de datos en formato JSON
- Programación asíncrona con JavaScript

## Características
- Conexión a la API pública de feriados: https://www.feriadosapp.com/api/holidays.json
- Obtención y procesamiento de datos JSON
- Renderizado dinámico de feriados en una tabla HTML
- Uso de jQuery para facilitar el consumo de la API y manipulación del DOM
- Integración opcional de frameworks CSS (como Bootstrap) para mejorar la presentación

---

## Requerimientos Cumplidos
### 🌐 Consumo de API
- Se utiliza jQuery AJAX para realizar una petición GET a la API de feriados.
- Los datos son procesados y mostrados en una tabla HTML en tiempo real.

### 💾 Manejo de JSON
- El objeto JSON devuelto por la API se recorre con JavaScript para extraer la información relevante (fecha, nombre, tipo, etc.).

### 🧱 Estructura HTML
- Estructura base con etiquetas semánticas (header, main, table, etc.).
- Sección principal que contiene la tabla dinámica donde se muestran los feriados.

### 🎨 Estilos
- Posibilidad de incorporar librerías como Bootstrap o Foundation para el diseño.
- Estilo limpio y adaptable para una visualización clara de la información.

---

### 🧰 Tecnologías Utilizadas
- **HTML5** – Estructura base del sitio.
- **CSS3 / Bootstrap** – Estilos y diseño visual.
- **JavaScript (ES6+)** – Lógica y procesamiento de datos.
- **jQuery** – Consumo de la API y manipulación del DOM.
- **JSON** – Formato de intercambio de datos de la API.

---

## 📁 Estructura del Proyecto

``` pgsql
M5_PA_JS/
│
├── index.html          # Estructura principal del sitio
├── js/
│   └── script.js       # Lógica para consumo de API y renderizado
├── css/
│   └── styles.css      # Estilos personalizados o framework CSS
└── README.md

```
 
---

## ⚙️ Instalación y Uso

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/RonroneaZorro/M5_PA_JS.git
    cd M5_PA_JS
    ```
2.  **Cambiar a la rama del proyecto:**
    ```bash
    git checkout -b M5AE5_ABP4 origin/M5AE5_ABP4
    ```
3. Abrir el archivo principal:
- Abre index.html en tu navegador.
4. Ver el resultado:
- La aplicación cargará automáticamente los feriados desde la API y los mostrará en una tabla dentro del sitio web.
  
---

## Autor
- Proyecto desarrollado por ***Daniel Paredes***


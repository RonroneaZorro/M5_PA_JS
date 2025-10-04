
//función constructora para el objeto paciente 
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
    // getters y setters
    this.getNombre = function () { return _nombre; };
    this.setNombre = function (nuevoNombre) { _nombre = nuevoNombre; };

    this.getEdad = function () { return _edad; };
    this.setEdad = function (nuevaEdad) { _edad = nuevaEdad; };

    this.getRut = function () { return _rut; };
    this.setRut = function (nuevoRut) { _rut = nuevoRut; };

    this.getDiagnostico = function () { return _diagnostico; };
    this.setDiagnostico = function (nuevoDiagnostico) { _diagnostico = nuevoDiagnostico; };
}
//función constructora para el objeto consultorio
function Consultorio(nombre) {
    this.nombre = nombre;
    this.pacientes = [];
}

Consultorio.prototype.ingresarPaciente = function (paciente) {
    this.pacientes.push(paciente);
};
//prototype para buscar usuarios por nombre
Consultorio.prototype.buscarPorNombre = function (buscarNombre) {
    console.log(`--- Buscando paciente: "${buscarNombre}" ---`);
    var p = this.pacientes.find(
        (paciente) => paciente.getNombre().toLowerCase() === buscarNombre.toLowerCase()
    );
    if (p) {
        console.log("Paciente Encontrado:");
        console.log("Nombre:", p.getNombre());
        console.log("Edad:", p.getEdad());
        console.log("RUT:", p.getRut());
        console.log("Diagnóstico:", p.getDiagnostico());
    } else {
        console.log(`No se encontró ningún paciente con el nombre "${buscarNombre}".`);
    }
    return this.pacientes.filter(function (p) {
        return p.getNombre().toLowerCase() === buscarNombre.toLowerCase();
    });
};

//prototype que muestra los datos de todos los pacientes
Consultorio.prototype.mostrarTodos = function () {
    console.log(`--- Listado de Pacientes del Consultorio: ${this.nombre} ---`);
    this.pacientes.forEach((paciente) => {
        console.log("Nombre:", paciente.getNombre());
        console.log("Edad:", paciente.getEdad());
        console.log("RUT:", paciente.getRut());
        console.log("Diagnóstico:", paciente.getDiagnostico());
        console.log("------------------------");
    });
    return this.pacientes;
};

var consultorio = new Consultorio("Centro Médico Módulo 5");

const paciente1 = new Paciente("Tony", 16, "12345678-9", "Locura");
const paciente2 = new Paciente("Ashura", 25, "12345678-9", "Instinto cazador");
const paciente3 = new Paciente("Charmy", 33, "12345678-9", "Mente brillante");

consultorio.ingresarPaciente(paciente1);
consultorio.ingresarPaciente(paciente2);
consultorio.ingresarPaciente(paciente3);

//función para buscar pacientes por nombre en el html
function buscarPaciente() {
    var nombre = document.getElementById("searchInput").value;
    var resultado = consultorio.buscarPorNombre(nombre);
    mostrarPacientes(resultado, "resultado");
    window.onload = function () {
        mostrarPacientes(consultorio.mostrarTodos(), "todosPacientes");
    }
}

//función para mostrar los pacientes en el html
function mostrarPacientes(pacientes, contenedorId) {
    var contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";
    pacientes.forEach(function (p) {
        var card = document.createElement("div");
        card.className = "paciente-card";
        card.innerHTML =
            "<strong>Nombre:</strong> " + p.getNombre() + "<br>" +
            "<strong>Edad:</strong> " + p.getEdad() + "<br>" +
            "<strong>RUT:</strong> " + p.getRut() + "<br>" +
            "<strong>Diagnóstico:</strong> " + p.getDiagnostico();
        contenedor.appendChild(card);
    });
}

// Modificar el diagnóstico de un paciente utilizando un setter
function mostrarcambiodiagnostico() {
    paciente1.setDiagnostico("Esquizofrenia con bajo nivel de inteligencia");
    console.log(`--- Diagnóstico de ${paciente1.getNombre()} ha sido actualizado ---`);
    console.log(`Nuevo diagnóstico de ${paciente1.getNombre()}: ${paciente1.getDiagnostico()}`)
}

// Hacemos que se demore 3 segundos en cambiar el diagnóstico
setTimeout(mostrarcambiodiagnostico, 3000);

window.onload = function () {
    mostrarPacientes(consultorio.mostrarTodos(), "todosPacientes");
};

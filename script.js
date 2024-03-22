
function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}



Paciente.prototype.getNombre = function() {
    return this.nombre;
}

Paciente.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
}

Paciente.prototype.getEdad = function() {
    return this.edad;
}

Paciente.prototype.setEdad = function(edad) {
    this.edad = edad;
}

Paciente.prototype.getRut = function() {
    return this.rut;
}

Paciente.prototype.setRut = function(rut) {
    this.rut = rut;
}

Paciente.prototype.getDiagnostico = function() {
    return this.diagnostico;
}

Paciente.prototype.setDiagnostico = function(diagnostico) {
    this.diagnostico = diagnostico;
}



Paciente.prototype.buscarPorNombre = function(nombre) {
    if (this.nombre.toLowerCase() === nombre.toLowerCase()) {
        return this;
    } else {
        return null;
    }
}



Paciente.prototype.mostrarTodos = function() {
    console.log("Listado de pacientes:"); 
    console.log("Nombre\t\tEdad\tRut\tDiagnostico");
    console.log(`${this.nombre}\t${this.edad}\t${this.rut}\t${this.diagnostico}`);
}



var paciente1 = new Paciente("Juan Perez", 30, "15.366.569-6", "Diabetes");
var paciente2 = new Paciente("María García", 25, "12.144.369-5", "Epilepsia");



paciente1.mostrarTodos();
paciente2.mostrarTodos();



var pacienteBuscado = paciente1.buscarPorNombre("Juan Perez");
if (pacienteBuscado !== null) {
    console.log("Paciente encontrado:");
    console.log("Nombre\t\tEdad\tRut\tDiagnostico");
    console.log(`${pacienteBuscado.nombre}\t${pacienteBuscado.edad}\t${pacienteBuscado.rut}\t${pacienteBuscado.diagnostico}`);
} else {
    console.log("No se encontró ningún paciente con ese nombre.");
}

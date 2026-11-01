// ==========================================
// TU LUZ INTERIOR
// Simulador de servicios
// ==========================================

// Datos generales
const añoActual = new Date().getFullYear();
const precioPorSesion = 15000;
const horasPorSesion = 1;

// ==========================================
// CLASE SERVICIO
// ==========================================

class Servicio {
    constructor(nombre, categoria, precio, duracion) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.duracion = duracion;
    }

    aplicarDescuento(porcentaje) {
        this.precio = this.precio - (this.precio * porcentaje / 100);
    }
}

// ==========================================
// INSTANCIACIÓN DE OBJETOS
// ==========================================

const servicio1 = new Servicio("Limpieza energética", "Energía", 15000, 1);

const servicio2 = new Servicio("Reiki", "Sanación", 18000, 1);

const servicio3 = new Servicio("Meditación guiada", "Bienestar", 12000, 1);

// ==========================================
// ARRAY DE SERVICIOS
// ==========================================

const servicios = [servicio1, servicio2, servicio3];

// ==========================================
// FUNCIONES DEL SIMULADOR
// ==========================================

// Mostrar servicios disponibles
function mostrarServicios() {
    console.log("SERVICIOS DISPONIBLES:");

    for (const servicio of servicios) {
        console.log(
            servicio.nombre +
            " - $" + servicio.precio +
            " - Duración: " + servicio.duracion + " hora/s"
        );
    }
}

// Agregar un nuevo servicio
function agregarServicio() {
    const nombre = prompt("Ingrese el nombre del servicio:");

    if (nombre === "") {
        console.log("Debe ingresar un nombre.");
    } else {
        const nuevoServicio = new Servicio(
            nombre,
            "Nuevo servicio",
            precioPorSesion,
            horasPorSesion
        );

        servicios.push(nuevoServicio);

        console.log("Servicio agregado correctamente.");
    }
}

// Buscar un servicio
function buscarServicio(nombre) {
    const encontrado = servicios.find(
        servicio => servicio.nombre === nombre
    );

    if (encontrado) {
        console.log("Servicio encontrado:", encontrado);
    } else {
        console.log("El servicio no existe.");
    }
}

// ==========================================
// APLICACIÓN DE MÉTODOS DE ARRAY
// ==========================================

// Agregar un servicio al principio
servicios.unshift(
    new Servicio("Armonización de chakras", "Energía", 16000, 1)
);

// Eliminar el último servicio
servicios.pop();

// Buscar si existe un servicio
console.log(
    "¿Existe Reiki?",
    servicios.some(servicio => servicio.nombre === "Reiki")
);

// Eliminar un elemento utilizando splice
servicios.splice(2, 1);

// ==========================================
// EJECUCIÓN DE MÉTODOS DE CLASE
// ==========================================

// Aplicar descuentos
servicio1.aplicarDescuento(10);
servicio2.aplicarDescuento(15);
servicio3.aplicarDescuento(5);

// Mostrar resultados modificados
console.log("RESULTADOS DESPUÉS DE LOS DESCUENTOS:");

console.log(servicio1);
console.log(servicio2);
console.log(servicio3);

// ==========================================
// EJECUCIÓN DEL SIMULADOR
// ==========================================

mostrarServicios();
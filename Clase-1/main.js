
// ==========================================
// TU LUZ INTERIOR
// Simulador de sesiones y catálogo de servicios
// ==========================================

// DATOS GENERALES

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

    // Método para aplicar un descuento al precio.
    aplicarDescuento(porcentaje) {
        this.precio = this.precio - (this.precio * porcentaje / 100);
    }
}

// ==========================================
// CREACIÓN DE OBJETOS
// ==========================================

const servicio1 = new Servicio(
    "Limpieza energética",
    "Limpieza y armonización",
    15000,
    1
);

const servicio2 = new Servicio(
    "Reiki",
    "Terapia energética",
    15000,
    1
);

const servicio3 = new Servicio(
    "Meditación guiada",
    "Bienestar y relajación",
    15000,
    1
);

// Aplicamos descuentos a los objetos.

servicio1.aplicarDescuento(10);
servicio2.aplicarDescuento(15);
servicio3.aplicarDescuento(20);

// Verificamos los resultados en consola.

console.log("===== SERVICIOS CON CLASES Y OBJETOS =====");

console.log(servicio1);
console.log(servicio2);
console.log(servicio3);

// ==========================================
// CATÁLOGO DE SERVICIOS
// ==========================================

const servicios = [
    "Limpieza energética",
    "Reiki",
    "Meditación guiada",
    "Armonización de chakras",
    "Lectura de tarot"
];

// ==========================================
// FUNCIÓN PARA MOSTRAR LOS SERVICIOS
// ==========================================

function mostrarServicios() {
    console.log("===== CATÁLOGO TU LUZ INTERIOR =====");

    for (const servicio of servicios) {
        console.log(servicio);
    }
}

// ==========================================
// FUNCIÓN PARA AGREGAR UN SERVICIO
// ==========================================

function agregarServicio() {
    const nuevoServicio = prompt("Ingresá el nombre del nuevo servicio:");

    if (nuevoServicio && nuevoServicio.trim() !== "") {
        servicios.push(nuevoServicio);

        console.log("Servicio agregado correctamente.");
        mostrarServicios();
    } else {
        console.log("No ingresaste un nombre válido.");
    }
}

// ==========================================
// FUNCIÓN PARA CALCULAR SESIONES
// ==========================================

function calcularSesiones() {
    const nombre = prompt("Ingresá tu nombre:");

    const añoNacimiento = Number(
        prompt("Ingresá tu año de nacimiento:")
    );

    const cantidadSesiones = Number(
        prompt("¿Cuántas sesiones deseás realizar?")
    );

    if (
        nombre === null ||
        añoNacimiento <= 0 ||
        añoNacimiento > añoActual ||
        !Number.isInteger(añoNacimiento) ||
        cantidadSesiones <= 0 ||
        !Number.isInteger(cantidadSesiones)
    ) {
        console.log("Los datos ingresados no son válidos.");
        return;
    }

    const edad = añoActual - añoNacimiento;

    let precioTotal = precioPorSesion * cantidadSesiones;

    if (cantidadSesiones >= 3) {
        precioTotal = precioTotal * 0.90;

        console.log("¡Obtuviste un 10% de descuento!");
    }

    const horasTotales = horasPorSesion * cantidadSesiones;

    console.log("===== RESUMEN DE TU RESERVA =====");
    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad + " años");
    console.log("Cantidad de sesiones: " + cantidadSesiones);
    console.log("Horas totales: " + horasTotales);
    console.log("Precio por sesión: $" + precioPorSesion);
    console.log("Precio final: $" + precioTotal);
}

// ==========================================
// EJECUCIÓN DEL SIMULADOR
// ==========================================

mostrarServicios();

calcularSesiones();

// ==================================
// FIN DEL SIMULADOR
// ==================================
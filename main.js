// ==========================================
// TU LUZ INTERIOR
// SIMULADOR DE SESIONES Y SERVICIOS
// ==========================================


// DATOS GENERALES

const añoActual = new Date().getFullYear();
const horasPorSesion = 1;


// ==========================================
// CLASE SERVICIO
// ==========================================

class Servicio {
    constructor(id, nombre, categoria, precio, duracion) {
        this.id = id;
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
    1,
    "Limpieza energética",
    "Limpieza y armonización",
    15000,
    1
);

const servicio2 = new Servicio(
    2,
    "Reiki",
    "Terapia energética",
    15000,
    1
);

const servicio3 = new Servicio(
    3,
    "Meditación guiada",
    "Bienestar y relajación",
    15000,
    1
);


// Aplicamos descuentos a los objetos.

servicio1.aplicarDescuento(10);
servicio2.aplicarDescuento(15);
servicio3.aplicarDescuento(20);


// Mostramos los resultados en consola.

console.log("===== SERVICIOS CON CLASES Y OBJETOS =====");

console.log(servicio1);
console.log(servicio2);
console.log(servicio3);


// ==========================================
// ARRAY DE OBJETOS
// ==========================================

const servicios = [
    servicio1,
    servicio2,
    servicio3,

    new Servicio(
        4,
        "Armonización de chakras",
        "Equilibrio energético",
        15000,
        1
    ),

    new Servicio(
        5,
        "Lectura de tarot",
        "Orientación espiritual",
        15000,
        1
    )
];


// Próximo ID disponible.

let siguienteIdServicio = 6;


// Array del carrito de compras.

const carrito = [];


// ==========================================
// MOSTRAR SERVICIOS - FOR...OF
// ==========================================

function mostrarServicios() {

    let mensaje = "SERVICIOS DISPONIBLES:\n\n";

    for (const servicio of servicios) {

        mensaje +=
            "ID: " + servicio.id + "\n" +
            "Servicio: " + servicio.nombre + "\n" +
            "Categoría: " + servicio.categoria + "\n" +
            "Precio: $" + servicio.precio.toLocaleString("es-AR") + "\n" +
            "Duración: " + servicio.duracion + " hora(s)\n\n";
    }

    alert(mensaje);
    console.log(mensaje);
}


// ==========================================
// AGREGAR SERVICIOS - PUSH Y UNSHIFT
// ==========================================

function agregarServicio() {

    const nombre = prompt(
        "Ingresá el nombre del nuevo servicio:"
    );

    if (nombre === null || nombre.trim() === "") {
        alert("No ingresaste un servicio válido.");
        return;
    }

    const categoria = prompt(
        "Ingresá la categoría del servicio:"
    );

    if (categoria === null || categoria.trim() === "") {
        alert("Categoría inválida.");
        return;
    }

    const respuestaPrecio = prompt(
        "Ingresá el precio del servicio:"
    );

    if (respuestaPrecio === null || respuestaPrecio.trim() === "") {
        alert("Operación cancelada.");
        return;
    }

    const precio = Number(respuestaPrecio);

    if (!Number.isFinite(precio) || precio <= 0) {
        alert("Ingresá un precio válido.");
        return;
    }

    const respuestaDuracion = prompt(
        "Ingresá la duración en horas:"
    );

    if (respuestaDuracion === null || respuestaDuracion.trim() === "") {
        alert("Operación cancelada.");
        return;
    }

    const duracion = Number(respuestaDuracion);

    if (!Number.isFinite(duracion) || duracion <= 0) {
        alert("Ingresá una duración válida.");
        return;
    }

    const posicion = prompt(
        "¿Dónde querés agregarlo?\n" +
        "1. Al final\n" +
        "2. Al principio"
    );

    if (posicion === "1") {

        const nuevoServicio = new Servicio(
            siguienteIdServicio,
            nombre.trim(),
            categoria.trim(),
            precio,
            duracion
        );

        servicios.push(nuevoServicio);
        siguienteIdServicio++;

        alert("Servicio agregado al final.");

    } else if (posicion === "2") {

        const nuevoServicio = new Servicio(
            siguienteIdServicio,
            nombre.trim(),
            categoria.trim(),
            precio,
            duracion
        );

        servicios.unshift(nuevoServicio);
        siguienteIdServicio++;

        alert("Servicio agregado al principio.");

    } else {

        alert("Opción inválida.");
        return;
    }

    mostrarServicios();
}


// ==========================================
// ELIMINAR SERVICIO - POP
// ==========================================

function eliminarServicio() {

    if (servicios.length === 0) {
        alert("No hay servicios para eliminar.");
        return;
    }

    const eliminado = servicios.pop();

    alert("Se ha eliminado el servicio: " + eliminado.nombre);

    console.log("Servicio eliminado:", eliminado);
}


// ==========================================
// BUSCAR SERVICIO - INCLUDES E INDEXOF
// ==========================================

function buscarServicio() {

    const nombre = prompt(
        "¿Qué servicio querés buscar?"
    );

    if (nombre === null || nombre.trim() === "") {
        alert("Búsqueda cancelada o vacía.");
        return;
    }

    const listaMinusculas = servicios.map(
        (servicio) => servicio.nombre.toLowerCase()
    );

    const buscado = nombre.trim().toLowerCase();

    if (listaMinusculas.includes(buscado)) {

        const indice = listaMinusculas.indexOf(buscado);

        const servicioEncontrado = servicios[indice];

        alert(
            "Servicio encontrado: " + servicioEncontrado.nombre +
            "\nID: " + servicioEncontrado.id +
            "\nPrecio: $" + servicioEncontrado.precio.toLocaleString("es-AR")
        );

        console.log("Servicio encontrado:", servicioEncontrado);

    } else {

        alert("El servicio no está disponible.");
    }
}


// ==========================================
// ACTUALIZAR SERVICIO - SPLICE
// ==========================================

function actualizarServicio() {

    mostrarServicios();

    const respuesta = prompt(
        "Ingresá el ID del servicio que querés modificar:"
    );

    if (respuesta === null || respuesta.trim() === "") {
        return;
    }

    const id = Number(respuesta);

    if (!Number.isInteger(id)) {
        alert("Ingresá un ID válido.");
        return;
    }

    const indice = servicios.findIndex(
        (servicio) => servicio.id === id
    );

    if (indice === -1) {
        alert("ID inválido.");
        return;
    }

    const servicioActual = servicios[indice];

    const nuevoNombre = prompt(
        "Nuevo nombre para " + servicioActual.nombre + ":"
    );

    if (
        nuevoNombre === null ||
        nuevoNombre.trim() === ""
    ) {
        alert("No ingresaste un nombre válido.");
        return;
    }

    const servicioActualizado = new Servicio(
        servicioActual.id,
        nuevoNombre.trim(),
        servicioActual.categoria,
        servicioActual.precio,
        servicioActual.duracion
    );

    servicios.splice(indice, 1, servicioActualizado);

    alert("Servicio actualizado correctamente.");

    mostrarServicios();

    console.log("Servicio actualizado:", servicioActualizado);
}


// ==========================================
// FILTRAR SERVICIOS - FILTER
// FUNCIÓN DE ORDEN SUPERIOR
// ==========================================

function filtrarServicios() {

    const respuesta = prompt(
        "Ingresá el precio máximo que querés pagar:"
    );

    if (respuesta === null || respuesta.trim() === "") {
        return;
    }

    const precioMaximo = Number(respuesta);

    if (!Number.isFinite(precioMaximo) || precioMaximo <= 0) {
        alert("Ingresá un precio válido.");
        return;
    }

    const serviciosFiltrados = servicios.filter(
        (servicio) => servicio.precio <= precioMaximo
    );

    console.log("===== SERVICIOS FILTRADOS =====");

    console.log(serviciosFiltrados);

    if (serviciosFiltrados.length === 0) {

        alert("No hay servicios disponibles con ese presupuesto.");

    } else {

        let mensaje = "SERVICIOS SEGÚN TU PRESUPUESTO:\n\n";

        for (const servicio of serviciosFiltrados) {

            mensaje +=
                "ID: " + servicio.id + "\n" +
                "Servicio: " + servicio.nombre + "\n" +
                "Precio: $" + servicio.precio.toLocaleString("es-AR") + "\n\n";
        }

        alert(mensaje);
    }
}


// ==========================================
// CALCULAR PRECIO DE SESIONES
// ==========================================

function calcularPrecio(sesiones, precioServicio) {

    let total = sesiones * precioServicio;

    if (sesiones >= 3) {
        total = total * 0.9;
    }

    return total;
}


// ==========================================
// SIMULADOR DE SESIONES
// ==========================================

function simularSesiones() {

    const nombre = prompt("¿Cuál es tu nombre?");

    if (nombre === null || nombre.trim() === "") {
        alert("Ingresá un nombre válido.");
        return;
    }

    const nacimiento = prompt(
        "¿En qué año naciste?"
    );

    if (nacimiento === null || nacimiento.trim() === "") {
        return;
    }

    const añoNacimiento = Number(nacimiento);

    if (
        !Number.isInteger(añoNacimiento) ||
        añoNacimiento < 1900 ||
        añoNacimiento > añoActual
    ) {
        alert("Año de nacimiento inválido.");
        return;
    }

    // Mostramos el catálogo para elegir un servicio.

    mostrarServicios();

    const idServicio = prompt(
        "Ingresá el ID del servicio que querés contratar:"
    );

    if (idServicio === null || idServicio.trim() === "") {
        return;
    }

    const id = Number(idServicio);

    if (!Number.isInteger(id)) {
        alert("Ingresá un ID válido.");
        return;
    }

    // FIND: buscamos el objeto correspondiente al ID.

    const servicioSeleccionado = servicios.find(
        (servicio) => servicio.id === id
    );

    if (!servicioSeleccionado) {
        alert("No se encontró el servicio seleccionado.");
        return;
    }

    const cantidad = prompt(
        "¿Cuántas sesiones querés contratar?"
    );

    if (cantidad === null || cantidad.trim() === "") {
        return;
    }

    const sesiones = Number(cantidad);

    if (!Number.isInteger(sesiones) || sesiones <= 0) {
        alert("Ingresá una cantidad válida.");
        return;
    }

    const edad = añoActual - añoNacimiento;

    const horas = sesiones * servicioSeleccionado.duracion;

    const total = calcularPrecio(
        sesiones,
        servicioSeleccionado.precio
    );

    // Agregamos la compra al carrito.

    const compra = {
        servicioId: servicioSeleccionado.id,
        nombreServicio: servicioSeleccionado.nombre,
        cantidad: sesiones,
        subtotal: total
    };

    carrito.push(compra);

    let mensaje =
        "Hola " + nombre.trim() + "\n\n" +
        "Edad aproximada: " + edad + " años\n" +
        "Servicio: " + servicioSeleccionado.nombre + "\n" +
        "Sesiones: " + sesiones + "\n" +
        "Duración total: " + horas + " horas\n" +
        "Precio individual: $" +
        servicioSeleccionado.precio.toLocaleString("es-AR") + "\n" +
        "Total: $" + total.toLocaleString("es-AR");

    if (sesiones >= 3) {

        mensaje += "\nDescuento aplicado: 10%";

    } else {

        mensaje += "\nSin descuento.";
    }

    alert(mensaje);

    console.log("===== COMPRA REALIZADA =====");
    console.log(compra);

    console.log("===== CARRITO ACTUALIZADO =====");
    console.log(carrito);
}


// ==========================================
// CALCULAR TOTAL DEL CARRITO - REDUCE
// FUNCIÓN DE ORDEN SUPERIOR
// ==========================================

function calcularTotalCarrito() {

    const total = carrito.reduce(
        (acumulador, compra) => acumulador + compra.subtotal,
        0
    );

    console.log("===== RESUMEN DEL CARRITO =====");

    console.log(carrito);

    console.log(
        "TOTAL DE COMPRAS: $" + total.toLocaleString("es-AR")
    );

    alert(
        "Cantidad de compras: " + carrito.length +
        "\nTotal acumulado: $" + total.toLocaleString("es-AR")
    );
}


// ==========================================
// MENÚ PRINCIPAL - WHILE Y SWITCH
// ==========================================

function iniciarSimulador() {

    let opcion = "";

    while (opcion !== "9") {

        opcion = prompt(
            "TU LUZ INTERIOR\n\n" +
            "1. Ver servicios\n" +
            "2. Agregar servicio\n" +
            "3. Eliminar último servicio\n" +
            "4. Buscar servicio\n" +
            "5. Actualizar servicio\n" +
            "6. Calcular sesiones\n" +
            "7. Filtrar servicios por precio\n" +
            "8. Consultar total del carrito\n" +
            "9. Salir\n\n" +
            "Elegí una opción:"
        );

        if (opcion === null) {
            break;
        }

        switch (opcion) {

            case "1":
                mostrarServicios();
                break;

            case "2":
                agregarServicio();
                break;

            case "3":
                eliminarServicio();
                break;

            case "4":
                buscarServicio();
                break;

            case "5":
                actualizarServicio();
                break;

            case "6":
                simularSesiones();
                break;

            case "7":
                filtrarServicios();
                break;

            case "8":
                calcularTotalCarrito();
                break;

            case "9":
                alert("Gracias por visitar Tu Luz Interior.");
                break;

            default:
                alert("Opción inválida. Intentá nuevamente.");
        }
    }
}


// ==========================================
// INICIAR PROGRAMA
// ==========================================

iniciarSimulador();

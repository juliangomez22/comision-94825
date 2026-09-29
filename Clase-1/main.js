// ==========================================
// TU LUZ INTERIOR
// MI PRIMER SCRIPT INTERACTIVO
// ==========================================


// ==========================================
// 1. CAPTURA DE DATOS
// ==========================================

// Primer dato: nombre
const nombre = prompt("¿Cuál es tu nombre?");


// Segundo dato: año de nacimiento
const añoNacimiento = parseInt(
    prompt("¿En qué año naciste?"),
    10
);

// Tercer dato: cantidad de sesiones
const sesiones = parseInt(
    prompt("¿Cuántas sesiones de limpieza energética te interesan?"),
    10
);


// ==========================================
// 2. DATOS Y PROCESAMIENTO
// ==========================================

// Obtenemos el año actual
const añoActual = new Date().getFullYear();

// Calculamos la edad
const edad = añoActual - añoNacimiento;

// Precio de una sesión individual
const precioPorSesion = 15000;

// Duración aproximada de cada sesión
const horasPorSesion = 1;

// Calculamos la cantidad total de horas
const horasTotales = sesiones * horasPorSesion;

// Calculamos el precio total de todas las sesiones
const precioTotal = sesiones * precioPorSesion;


// ==========================================
// 3. CONCATENACIÓN DE STRINGS
// ==========================================

const mensajePrincipal =
    "Hola " + nombre +
    ". Tenés aproximadamente " + edad +
    " años y seleccionaste " + sesiones +
    " sesión/es de limpieza energética.";

const mensajeSesiones =
    "Cada sesión tiene una duración aproximada de " +
    horasPorSesion + " hora.";

const mensajePrecio =
    "El precio por una sesión individual es de $" +
    precioPorSesion.toLocaleString("es-AR") +
    ".\n\n" +
    "El precio total por " +
    sesiones +
    " sesión/es es de $" +
    precioTotal.toLocaleString("es-AR") + ".";


// ==========================================
// 4. MOSTRAR RESULTADOS
// ==========================================

// Mostramos la información mediante alert()
alert(mensajePrincipal);

alert(mensajeSesiones);

alert(mensajePrecio);


// ==========================================
// 5. MOSTRAR INFORMACIÓN EN CONSOLA
// ==========================================

console.log("================================");
console.log("       TU LUZ INTERIOR");
console.log("================================");

console.log("Nombre:", nombre);
console.log("Año de nacimiento:", añoNacimiento);
console.log("Edad aproximada:", edad);
console.log("Cantidad de sesiones:", sesiones);
console.log("Horas por sesión:", horasPorSesion);
console.log("Horas totales:", horasTotales);
console.log("Precio por sesión: $" + precioPorSesion);
console.log("Precio total: $" + precioTotal);

console.log("================================");
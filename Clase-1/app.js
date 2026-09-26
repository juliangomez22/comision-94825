// ==========================================
// TU LUZ INTERIOR
// PRE-ENTREGA MÓDULO 1
// ==========================================


// 1. SOLICITAR DATOS AL USUARIO
// ==========================================


// Pedimos el nombre
const nombre = prompt("Por favor, ingresa tu nombre:");


// Pedimos el año de nacimiento
const añoNacimiento = parseInt(
    prompt("Por favor, ingresa tu año de nacimiento (por ejemplo, 1990):"),
    10
);


// Pedimos la cantidad de sesiones
const cantidadSesiones = parseInt(
    prompt("¿Cuántas sesiones deseas realizar?"),
    10
);


// 2. PROCESAR LA INFORMACIÓN
// ==========================================


// Obtenemos el año actual
const añoActual = 2026;


// Calculamos la edad
const edad = añoActual - añoNacimiento;


// Precio de cada sesión
const precioSesion = 20000;


// Calculamos el precio total
const precioTotal = cantidadSesiones * precioSesion;


// 3. CONCATENAR INFORMACIÓN
// ==========================================


const mensajeFinal =
    `Hola, ${nombre}! ` +
    `Tienes ${edad} años. ` +
    `Elegiste realizar ${cantidadSesiones} sesiones de Tu Luz Interior. ` +
    `El precio total es de $${precioTotal}.`;


// 4. MOSTRAR EL RESULTADO
// ==========================================


// Mostramos el resultado en la consola
console.log(mensajeFinal);


// Mostramos el resultado mediante una alerta
alert(mensajeFinal);
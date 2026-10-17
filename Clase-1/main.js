// ==========================================
// TU LUZ INTERIOR
// Cálculo de sesiones y precio
// ==========================================

const añoActual = new Date().getFullYear();
const precioPorSesion = 15000;
const horasPorSesion = 1;

// Función 1: recibe un mensaje y valida que el dato no esté vacío.

function pedirTexto(mensaje) {
    let respuesta = prompt(mensaje);

    while (respuesta === null || respuesta.trim() === "") {
        if (respuesta === null) {
            alert("Cancelaste el ingreso. Recargá la página para intentarlo de nuevo.");
            return null;
        }

        alert("Este dato no puede quedar vacío.");
        respuesta = prompt(mensaje);
    }

    return respuesta.trim();
}

// Función 2: recibe una pregunta y un rango, y pide un año válido.
// El return devuelve el año ingresado.

function pedirAño(mensaje, minimo, maximo) {
    let año = 0;

    while (!Number.isInteger(año) || año < minimo || año > maximo) {
        const respuesta = prompt(mensaje);

        if (respuesta === null) {
            alert("Cancelaste el ingreso del año de nacimiento.");
            return null;
        }

        año = Number(respuesta);

        if (!Number.isInteger(año) || año < minimo || año > maximo) {
            alert("Ingresá un año válido entre " + minimo + " y " + maximo + ".");
        }
    }

    return año;
}

// Función flecha: recibe la cantidad de sesiones y devuelve el precio total.

const calcularPrecio = (sesiones) => {
    let total = sesiones * precioPorSesion;

    if (sesiones >= 3) {
        total = total * 0.9; // Aplica un 10 % de descuento.
    }

    return total;
};

// Función 3: recibe los datos del simulador y prepara el mensaje final.

function mostrarResultado(nombre, añoNacimiento, sesiones, precioTotal) {
    const edad = añoActual - añoNacimiento;
    const horasTotales = sesiones * horasPorSesion;

    let mensaje =
        "Hola " + nombre + ".\n" +
        "Tenés aproximadamente " + edad + " años.\n" +
        "Elegiste " + sesiones + " sesión/es.\n" +
        "Duración total: " + horasTotales + " hora/s.\n" +
        "Precio por sesión: $" + precioPorSesion.toLocaleString("es-AR") + ".\n" +
        "Total a pagar: $" + precioTotal.toLocaleString("es-AR") + ".";

    if (sesiones >= 3) {
        mensaje += "\nSe aplicó un 10 % de descuento.";
    } else {
        mensaje += "\nNo se aplicó descuento.";
    }

    alert(mensaje);
    console.log(mensaje);
}

// ==========================================
// PROGRAMA PRINCIPAL: pedir datos y llamar
// a las funciones
// ==========================================


const nombre = pedirTexto("¿Cuál es tu nombre?");

if (nombre !== null) {
    const añoNacimiento = pedirAño(
        "¿En qué año naciste?",
        1900,
        añoActual
    );

    if (añoNacimiento !== null) {
        let sesiones = 0;

        while (!Number.isInteger(sesiones) || sesiones <= 0) {
            const respuesta = prompt(
                "¿Cuántas sesiones de limpieza energética te interesan? " +
                "Ingresá un número entero mayor que 0."
            );

            if (respuesta === null) {
                alert("Cancelaste el ingreso de la cantidad de sesiones.");
                break;
            }

            sesiones = Number(respuesta);

            if (!Number.isInteger(sesiones) || sesiones <= 0) {
                alert("Ingresá una cantidad entera de sesiones mayor que 0.");
            }
        }

        if (Number.isInteger(sesiones) && sesiones > 0) {
            const precioTotal = calcularPrecio(sesiones);
            mostrarResultado(nombre, añoNacimiento, sesiones, precioTotal);
        }
    }
}
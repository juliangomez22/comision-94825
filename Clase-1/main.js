// ==========================================
// TU LUZ INTERIOR
// CHECKPOINT DE ARRAYS
// Cálculo de sesiones y gestión de servicios
// ==========================================

// CONSTANTES PRINCIPALES

const añoActual = new Date().getFullYear();
const precioPorSesion = 15000;
const horasPorSesion = 1;


// ==========================================
// ARRAY DE SERVICIOS
// ==========================================

// Catálogo inicial con cinco servicios

const servicios = [
    "Limpieza energética",
    "Reiki",
    "Meditación guiada",
    "Armonización de chakras",
    "Lectura de tarot"
];


// ==========================================
// FUNCIÓN PARA PEDIR TEXTO
// ==========================================

function pedirTexto(mensaje) {

    let respuesta = prompt(mensaje);

    while (respuesta !== null && respuesta.trim() === "") {

        alert("Este dato no puede quedar vacío.");

        respuesta = prompt(mensaje);
    }

    if (respuesta === null) {

        alert("Cancelaste el ingreso.");
        return null;
    }

    return respuesta.trim();
}


// ==========================================
// FUNCIÓN PARA PEDIR AÑO DE NACIMIENTO
// ==========================================

function pedirAño(mensaje, minimo, maximo) {

    let año = 0;

    while (!Number.isInteger(año) || año < minimo || año > maximo) {

        const respuesta = prompt(mensaje);

        if (respuesta === null) {

            alert("Cancelaste el ingreso del año de nacimiento.");
            return null;
        }

        if (respuesta.trim() === "") {

            alert("Ingresá un año válido.");
            continue;
        }

        año = Number(respuesta);

        if (!Number.isInteger(año) || año < minimo || año > maximo) {

            alert(
                "Ingresá un año entre " +
                minimo + " y " + maximo
            );
        }
    }

    return año;
}


// ==========================================
// FUNCIÓN PARA CALCULAR PRECIO
// ==========================================

// Aplica 10% de descuento desde 3 sesiones

function calcularPrecio(sesiones) {

    let total = sesiones * precioPorSesion;

    if (sesiones >= 3) {

        total = total * 0.9;
    }

    return total;
}


// ==========================================
// FUNCIÓN PARA MOSTRAR SERVICIOS
// BUCLE FOR...OF
// ==========================================

function mostrarServicios(lista) {

    let reporte = "SERVICIOS DISPONIBLES:\n\n";

    for (const servicio of lista) {

        reporte += "Servicio: " + servicio + "\n";
    }

    alert(reporte);
    console.log(reporte);
}


// ==========================================
// FUNCIÓN PARA GESTIONAR SERVICIOS
// MÉTODOS DE ARRAYS
// ==========================================

function gestionarServicios() {

    // MOSTRAR CATÁLOGO INICIAL

    mostrarServicios(servicios);


    // ======================================
    // MÉTODO PUSH()
    // Agregar un servicio al final
    // ======================================

    servicios.push("Aromaterapia");

    console.log("Se agregó Aromaterapia al final del catálogo.");


    // ======================================
    // MÉTODO UNSHIFT()
    // Agregar un servicio al principio
    // ======================================

    servicios.unshift("Sesión de bienestar integral");

    console.log("Se agregó Sesión de bienestar integral al principio.");


    // ======================================
    // MÉTODO POP()
    // Eliminar el último servicio
    // ======================================

    const servicioEliminado = servicios.pop();

    alert("Se ha eliminado el elemento: " + servicioEliminado);

    console.log("Servicio eliminado: " + servicioEliminado);


    // ======================================
    // BÚSQUEDA DE SERVICIOS
    // MÉTODOS INCLUDES() E INDEXOF()
    // ======================================

    const servicioBuscado = prompt(
        "¿Qué servicio querés buscar?\n\n" +
        servicios.join("\n")
    );

    if (servicioBuscado !== null && servicioBuscado.trim() !== "") {

        const busqueda = servicioBuscado.trim().toLowerCase();

        // Creamos una lista auxiliar en minúsculas
        // para comparar sin distinguir mayúsculas.

        const serviciosMinuscula = [];

        for (const servicio of servicios) {

            serviciosMinuscula.push(servicio.toLowerCase());
        }

        // Verificamos si existe el servicio

        if (serviciosMinuscula.includes(busqueda)) {

            // Obtenemos el índice del servicio

            const indice = serviciosMinuscula.indexOf(busqueda);

            alert(
                "El servicio " + servicios[indice] +
                " está disponible en el índice " + indice + "."
            );

            console.log(
                "Servicio encontrado: " +
                servicios[indice] +
                " - Índice: " + indice
            );

        } else {

            alert("El servicio no está disponible.");

            console.log("Servicio no encontrado: " + servicioBuscado);
        }

    } else if (servicioBuscado === null) {

        console.log("Se canceló la búsqueda.");

    } else {

        alert("No ingresaste ningún servicio.");
    }


    // ======================================
    // MÉTODO SPLICE()
    // Reemplazar un servicio por otro
    // ======================================

    const servicioAnterior = servicios[1];

    servicios.splice(1, 1, "Masaje relajante");

    alert(
        "Se reemplazó el servicio " +
        servicioAnterior +
        " por Masaje relajante."
    );

    console.log("Servicio actualizado con splice().");


    // ======================================
    // MOSTRAR CATÁLOGO ACTUALIZADO
    // ======================================

    mostrarServicios(servicios);
}


// ==========================================
// FUNCIÓN PARA MOSTRAR RESULTADOS
// ==========================================

function mostrarResultado(nombre, añoNacimiento, sesiones, precioTotal) {

    const edad = añoActual - añoNacimiento;

    const horasTotales = sesiones * horasPorSesion;

    let mensaje =
        "Hola " + nombre + ".\n\n" +
        "Tenés aproximadamente " + edad + " años.\n" +
        "Elegiste " + sesiones + " sesión/es.\n" +
        "Duración total: " + horasTotales + " hora/s.\n" +
        "Precio por sesión: $" +
        precioPorSesion.toLocaleString("es-AR") + ".\n" +
        "Total a pagar: $" +
        precioTotal.toLocaleString("es-AR") + ".";

    if (sesiones >= 3) {

        mensaje += "\nSe aplicó un 10% de descuento.";

    } else {

        mensaje += "\nNo se aplicó descuento.";
    }

    alert(mensaje);

    console.log(mensaje);
}


// ==========================================
// PROGRAMA PRINCIPAL
// ==========================================

// SOLICITAR NOMBRE

const nombre = pedirTexto("¿Cuál es tu nombre?");

if (nombre !== null) {

    // SOLICITAR AÑO DE NACIMIENTO

    const añoNacimiento = pedirAño(
        "¿En qué año naciste?",
        1900,
        añoActual
    );

    if (añoNacimiento !== null) {

        // SOLICITAR CANTIDAD DE SESIONES

        let sesiones = 0;
        let ingresoCancelado = false;

        while (!Number.isInteger(sesiones) || sesiones <= 0) {

            const respuesta = prompt(
                "¿Cuántas sesiones de limpieza energética te interesan?\n" +
                "Ingresá un número entero mayor que 0."
            );

            if (respuesta === null) {

                alert("Cancelaste el ingreso de sesiones.");

                ingresoCancelado = true;

                break;
            }

            if (respuesta.trim() === "") {

                alert("Ingresá una cantidad válida.");
                continue;
            }

            sesiones = Number(respuesta);

            if (!Number.isInteger(sesiones) || sesiones <= 0) {

                alert(
                    "Ingresá una cantidad entera de sesiones mayor que 0."
                );
            }
        }

        // CALCULAR Y MOSTRAR RESULTADOS

        if (!ingresoCancelado && Number.isInteger(sesiones) && sesiones > 0) {

            const precioTotal = calcularPrecio(sesiones);

            mostrarResultado(
                nombre,
                añoNacimiento,
                sesiones,
                precioTotal
            );

            // GESTIONAR CATÁLOGO DE SERVICIOS

            gestionarServicios();
        }
    }
}
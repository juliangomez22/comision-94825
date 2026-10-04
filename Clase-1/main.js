// ==========================================
// TU LUZ INTERIOR
// Cálculo de sesiones y precio
// ==========================================

// 1. CAPTURA Y VALIDACIÓN DEL NOMBRE

const nombreIngresado = prompt("¿Cuál es tu nombre?");

if (nombreIngresado === null || nombreIngresado.trim() === "") {
    alert("No ingresaste tu nombre. Recargá la página para intentarlo de nuevo.");
} else {
    const nombre = nombreIngresado.trim();

    // 2. CAPTURA Y VALIDACIÓN DEL AÑO DE NACIMIENTO

    const añoActual = new Date().getFullYear();
    let añoNacimiento = 0;

    while (
        !Number.isInteger(añoNacimiento) ||
        añoNacimiento < 1900 ||
        añoNacimiento > añoActual
    ) {
        const respuestaAño = prompt("¿En qué año naciste?");

        if (respuestaAño === null) {
            break;
        }

        añoNacimiento = Number(respuestaAño);

        if (
            !Number.isInteger(añoNacimiento) ||
            añoNacimiento < 1900 ||
            añoNacimiento > añoActual
        ) {
            alert("Ingresá un año válido entre 1900 y " + añoActual + ".");
        }
    }

    if (añoNacimiento >= 1900 && añoNacimiento <= añoActual) {
        // 3. CAPTURA Y VALIDACIÓN DE LA CANTIDAD DE SESIONES

        let sesiones = 0;

        while (!Number.isInteger(sesiones) || sesiones <= 0) {
            const respuestaSesiones = prompt(
                "¿Cuántas sesiones de limpieza energética te interesan? " +
                "Ingresá un número entero mayor que 0."
            );

            if (respuestaSesiones === null) {
                break;
            }

            sesiones = Number(respuestaSesiones);

            if (!Number.isInteger(sesiones) || sesiones <= 0) {
                alert("Ingresá una cantidad entera de sesiones mayor que 0.");
            }
        }

        if (Number.isInteger(sesiones) && sesiones > 0) {
            // 4. CÁLCULOS

            const edad = añoActual - añoNacimiento;
            const precioPorSesion = 15000;
            const horasPorSesion = 1;
            const horasTotales = sesiones * horasPorSesion;

            let precioTotal = sesiones * precioPorSesion;

            // 5. DECISIÓN: DESCUENTO PARA TRES SESIONES O MÁS

            if (sesiones >= 3) {
                precioTotal = precioTotal * 0.9;
                alert("¡Tenés un 10 % de descuento por elegir 3 sesiones o más!");
            } else {
                alert("Con menos de 3 sesiones, se aplica el precio normal.");
            }

            // 6. MOSTRAR RESULTADOS

            const mensaje =
                "Hola " + nombre + ".\n" +
                "Tenés aproximadamente " + edad + " años.\n" +
                "Elegiste " + sesiones + " sesión/es.\n" +
                "Cada sesión dura aproximadamente " + horasPorSesion + " hora.\n" +
                "Duración total: " + horasTotales + " hora/s.\n" +
                "Precio por sesión: $" +
                precioPorSesion.toLocaleString("es-AR") + ".\n" +
                "Total a pagar: $" +
                precioTotal.toLocaleString("es-AR") + ".";

            alert(mensaje);
            console.log(mensaje);
        } else {
            alert("Cancelaste el ingreso de la cantidad de sesiones.");
        }
    } else {
        alert("Cancelaste el ingreso del año de nacimiento.");
    }
}
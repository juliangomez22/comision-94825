// ==========================================
 // TU LUZ INTERIOR
 // SIMULADOR DE SESIONES Y SERVICIOS
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

 // Mostramos los resultados en consola.

 console.log("===== SERVICIOS CON CLASES Y OBJETOS =====");

 console.log(servicio1);
 console.log(servicio2);
 console.log(servicio3);

 // ==========================================
 // ARRAY DE SERVICIOS
 // ==========================================

 const servicios = [
     servicio1.nombre,
     servicio2.nombre,
     servicio3.nombre,
     "Armonización de chakras",
     "Lectura de tarot"
 ];

 // ==========================================
 // MOSTRAR SERVICIOS - FOR...OF
 // ==========================================

 function mostrarServicios() {
     let mensaje = "SERVICIOS DISPONIBLES:\n\n";

     for (const servicio of servicios) {
         mensaje += "Servicio: " + servicio + "\n";
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

     const posicion = prompt(
         "¿Dónde querés agregarlo?\n" +
         "1. Al final\n" +
         "2. Al principio"
     );

     if (posicion === "1") {
         servicios.push(nombre.trim());
         alert("Servicio agregado al final.");
     } else if (posicion === "2") {
         servicios.unshift(nombre.trim());
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

     alert("Se ha eliminado el elemento: " + eliminado);
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

     const listaMinusculas = [];

     for (const servicio of servicios) {
         listaMinusculas.push(servicio.toLowerCase());
     }

     const buscado = nombre.trim().toLowerCase();

     if (listaMinusculas.includes(buscado)) {
         const indice = listaMinusculas.indexOf(buscado);

         alert(
             "Servicio encontrado: " + servicios[indice] +
             "\nÍndice: " + indice
         );
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
         "Ingresá el índice del servicio a modificar.\n" +
         "Los índices comienzan en 0."
     );

     if (respuesta === null || respuesta.trim() === "") {
         return;
     }

     const indice = Number(respuesta);

     if (
         !Number.isInteger(indice) ||
         indice < 0 ||
         indice >= servicios.length
     ) {
         alert("Índice inválido.");
         return;
     }

     const nuevoServicio = prompt(
         "Nuevo nombre para " + servicios[indice] + ":"
     );

     if (
         nuevoServicio === null ||
         nuevoServicio.trim() === ""
     ) {
         alert("No ingresaste un nombre válido.");
         return;
     }

     servicios.splice(indice, 1, nuevoServicio.trim());

     alert("Servicio actualizado correctamente.");
     mostrarServicios();
 }

 // ==========================================
 // CALCULAR PRECIO DE SESIONES
 // ==========================================

 function calcularPrecio(sesiones) {
     let total = sesiones * precioPorSesion;

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
     const horas = sesiones * horasPorSesion;
     const total = calcularPrecio(sesiones);

     let mensaje =
         "Hola " + nombre.trim() + "\n\n" +
         "Edad aproximada: " + edad + " años\n" +
         "Sesiones: " + sesiones + "\n" +
         "Duración total: " + horas + " horas\n" +
         "Precio individual: $" +
         precioPorSesion.toLocaleString("es-AR") + "\n" +
         "Total: $" + total.toLocaleString("es-AR");

     if (sesiones >= 3) {
         mensaje += "\nDescuento aplicado: 10%";
     } else {
         mensaje += "\nSin descuento.";
     }

     alert(mensaje);
     console.log(mensaje);
 }

 // ==========================================
 // MENÚ PRINCIPAL - WHILE Y SWITCH
 // ==========================================

 function iniciarSimulador() {
     let opcion = "";

     while (opcion !== "7") {
         opcion = prompt(
             "TU LUZ INTERIOR\n\n" +
             "1. Ver servicios\n" +
             "2. Agregar servicio\n" +
             "3. Eliminar último servicio\n" +
             "4. Buscar servicio\n" +
             "5. Actualizar servicio\n" +
             "6. Calcular sesiones\n" +
             "7. Salir\n\n" +
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

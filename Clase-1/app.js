let nombre = "Julian";  // string o cadena de texto (siempre entre comillas)
let edad = 28;  // number (no hace falta comillas)
let soltero = false;  // boolean (solo acepta: true o false)
let millonario = undefined;  // undefined (no tiene valor)
let mansion = null;  // null (declaramos que la variable no tiene valor)

//console.log(nombre);  // imprime en consola todas las variables
//console.log(edad);
//console.log(soltero);
//console.log(millonario);
//console.log(mansion);

millonario = true;  // cambiamos el valor de la variable millonario a true
console.log(millonario);  // imprime en consola el nuevo valor de millonario


const DNI = 1231231;  // const (constante, no se puede cambiar su valor)
console.log(DNI);  // imprime en consola el valor de la constante DNI

console.log(typeof nombre); // imprime en consola el tipo de dato de la variable nombre


let suma = 10 + 10;  // suma de dos números
let resta = 10 - 5;
let multiplicacion = 10 * 10;  // multiplicación de dos números
let division = 10 / 2;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);  

console.log(suma + resta);  // suma de dos variables

// console.log(nombre + edad);  // concatenación de un string y un number

// camelcase: nombreDeLaVariable

let sumaRara = (nombre + "" + edad);  // concatenación de un string y un number
// console.log(sumaRara);  // imprime en consola la concatenación de nombre y edad

// funciones nativas
prompt("Hola, ¿cómo estás?");  // abre un cuadro de diálogo para ingresar texto

// let user = prompt("Julian");  // guarda el valor ingresado en la variable user
// console.log(user);  // imprime en consola el valor de la variable user

// let user = prompt(number"28");  // guarda el valor ingresado en la variable user
// console.log(user);  // imprime en consola el valor de la variable user
// console.log(parseInt(user));  // convierte el valor de user a un número entero y lo imprime en consola

// alert("soy alerta jeje");  // abre un cuadro de diálogo con un mensaje

// confirm

// let siOno = confirm("¿Estás seguro de que quieres continuar?");  // abre un cuadro de diálogo con un mensaje y dos botones (Aceptar y Cancelar)
// console.log(siOno);  // imprime en consola el valor de la variable siOno (true o false dependiendo de la elección del usuario)


let mensaje = ("Hola, soy Julian" + " y tengo " + 28 + " años.");  // string o cadena de texto (siempre entre comillas)

console.log(mensaje);  // imprime en consola el valor de la variable mensaje
# Tu Luz Interior

Simulador sencillo para calcular sesiones de limpieza energética y consultar un catálogo de servicios. El proyecto utiliza HTML y JavaScript, e incorpora conceptos de programación orientada a objetos mediante clases, constructores, instanciación de objetos y métodos. También practica funciones, ciclos y métodos de arrays.

## Archivos

- `index.html`: página principal del simulador.
- `main.js`: contiene las preguntas, validaciones, cálculos de precios, manejo del catálogo y la implementación de la clase `Servicio`.

## Cómo usarlo

1. Guarda `index.html` y `main.js` en la misma carpeta.
2. Abre `index.html` en un navegador web (por ejemplo, con doble clic).
3. Cuando aparezca la ventana, ingresá tu nombre.
4. Ingresá tu año de nacimiento como un número entero entre 1900 y el año actual.
5. Indicá cuántas sesiones querés reservar. Debe ser un número entero mayor que cero.
6. El simulador mostrará tu edad aproximada, la duración y el precio total. Desde tres sesiones se aplica un 10 % de descuento.
7. Después del resumen, aparecerá el catálogo de servicios. Elegí uno escribiendo su nombre. La búsqueda admite mayúsculas o minúsculas, pero el texto debe coincidir con el nombre del servicio.
8. Al final se mostrará el listado actualizado de servicios.

Si cancelás una pregunta, el simulador interrumpe el paso correspondiente. Para volver a empezar, recargá la página.

## Clases y objetos

Se incorpora la clase `Servicio`, cuyo constructor recibe cuatro parámetros: `nombre`, `categoria`, `precio` y `duracion`. Estas propiedades permiten representar los diferentes servicios ofrecidos por Tu Luz Interior.

A partir de esta clase se crean tres objetos mediante la palabra clave `new`:

- `servicio1`: Limpieza energética.
- `servicio2`: Reiki.
- `servicio3`: Meditación guiada.

La clase incluye el método `aplicarDescuento(porcentaje)`, que permite calcular y modificar el precio de cada servicio según el porcentaje indicado.

Para verificar su funcionamiento, se ejecuta el método sobre los tres objetos y se muestran los resultados actualizados mediante `console.log()`.

## Catálogo y arrays

El catálogo permite gestionar los servicios mediante diferentes métodos de arrays:

- `push()`: agrega un servicio al final.
- `unshift()`: agrega un servicio al principio.
- `pop()`: elimina el último servicio.
- `some()`: comprueba si existe un servicio determinado.
- `splice()`: elimina un elemento del catálogo.
- `for...of`: recorre los servicios para mostrar su información.

También se utilizan funciones para mostrar, agregar y buscar servicios dentro del catálogo.

## Verificación en consola

Los mensajes de `alert` y las preguntas de `prompt` forman parte normal del funcionamiento. Para consultar los objetos creados, los precios modificados y los mensajes de registro, abrí las herramientas de desarrollador del navegador y consultá la pestaña **Consola**.
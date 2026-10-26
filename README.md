# Tu Luz Interior

Simulador para calcular sesiones de limpieza energética y consultar un catálogo de servicios. Está hecho con HTML y JavaScript.

## Archivos

- `index.html`: página principal.
- `main.js`: preguntas, validaciones, cálculo de precio y manejo del catálogo.

## Instrucciones de uso

1. Guarda `index.html` y `main.js` en la misma carpeta.
2. Abre `index.html` en un navegador.
3. Ingresá tu nombre.
4. Ingresá tu año de nacimiento como un número entero entre 1900 y el año actual.
5. Indicá cuántas sesiones querés reservar. Debe ser un número entero mayor que cero.
6. El simulador mostrará tu edad aproximada, la duración y el precio. Desde tres sesiones, se aplica un 10 % de descuento.
7. Después aparecerá el catálogo. Escribí el nombre de un servicio para buscarlo. La búsqueda acepta mayúsculas y minúsculas, pero el nombre debe coincidir.
8. Al final verás el catálogo actualizado.

Si cancelás una pregunta, recargá la página para comenzar de nuevo.

## Arrays incluidos

El programa comienza con cinco servicios y demuestra cómo:

- Agregar servicios al final y al principio con `push` y `unshift`.
- Eliminar el último elemento con `pop` y mostrar cuál se eliminó.
- Buscar un servicio con `includes` e informar su índice con `indexOf`.
- Reemplazar el elemento del índice 1 con `splice`.
- Recorrer y mostrar los servicios usando `for...of`.

Los mensajes y preguntas de `alert` y `prompt` son parte normal del simulador. Para ver los registros, abrí las herramientas de desarrollador del navegador y consultá la pestaña **Consola**.
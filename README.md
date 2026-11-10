# Tu Luz Interior

Simulador interactivo de sesiones y servicios de bienestar energético. El proyecto permite consultar un catálogo de servicios, agregar, eliminar, buscar y actualizar servicios, calcular el costo de sesiones y gestionar un carrito de compras.

Está desarrollado con **HTML, CSS y JavaScript**, aplicando los contenidos trabajados durante el curso, incluyendo programación orientada a objetos, arrays, funciones, estructuras de control y métodos de orden superior.

## Archivos del proyecto

- `index.html`: estructura principal del sitio web.
- `main.js`: lógica del simulador, administración de servicios, cálculo de sesiones y carrito de compras.
- `css/styles.css`: estilos visuales del sitio.

## Funcionalidades del simulador

El simulador permite realizar las siguientes operaciones:

1. **Ver servicios:** muestra el catálogo disponible con su ID, nombre, categoría, precio y duración.
2. **Agregar servicios:** permite incorporar nuevos servicios al catálogo, al principio o al final del array.
3. **Eliminar servicios:** permite eliminar el último servicio del catálogo.
4. **Buscar servicios:** busca un servicio por su nombre.
5. **Actualizar servicios:** permite modificar el nombre de un servicio existente mediante su ID.
6. **Calcular sesiones:** solicita los datos del usuario, permite seleccionar un servicio y calcular el costo según la cantidad de sesiones.
7. **Filtrar servicios:** muestra los servicios disponibles según el presupuesto indicado.
8. **Consultar carrito:** muestra las compras realizadas y calcula el importe total acumulado.
9. **Salir:** finaliza el simulador.

## Programación orientada a objetos

Se incorporó la clase `Servicio`, que cuenta con un constructor de cinco parámetros:

- `id`: identificador del servicio.
- `nombre`: nombre del servicio.
- `categoria`: categoría a la que pertenece.
- `precio`: precio del servicio.
- `duracion`: duración estimada en horas.

También incluye el método `aplicarDescuento(porcentaje)`, que permite modificar el precio de un servicio aplicando un porcentaje de descuento.

Se crearon tres objetos iniciales mediante la clase `Servicio`:

- Limpieza energética.
- Reiki.
- Meditación guiada.

A estos objetos se les aplicaron diferentes descuentos. Además, se incorporaron otros dos servicios al catálogo: Ar
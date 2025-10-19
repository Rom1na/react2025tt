# La tienda Online
## Trabajo práctico curso  React - Talento Tech Segundo Cuatrimestre Tech 2025


Este repositorio aloja el trabajo práctico del curso de React de Talento Tech 2025
La consigna es hacer una estructura que emule un comercio electrónico.
En mi caso elegí utilizar la api pública fake api store  para  los productos.
[FAKE API STORE](https://fakestoreapi.com/) 

***Comentarios:***
Hasta el momento, la estructura del proyecto es un punto de entrada con mensaje de bienvenida en App.jsx,con un footer de redes sociales y  una navbar que permite navegar
por las categorias de productos exhibidos con un componente card mapeando el resultado de la consulta a la api.
- La api tiene la opción para traer grupos de productos por categoria, lo que me permitió reutilizar el componente galería pasandole como argumento (prop) el resultado de esa request.
- Si bien uso un contexto global en toda la aplicación, en el caso de desplegar la información de la galería a 'Más detalle', uso el state de react-router-dom para pasar sólo la data del producto en particular.
- No generé un contexto exclusivo para auth ya que el tamaño del proyecto por el momento no lo ameritaba por el momento.
- El carrito tiene persistencia en LocalStorage y permite guardar un objeto carrito por usuario ingresado, y recuperarlo al loguearse con el mismo.
- El carrito  tiene la opción de eliminar, aumentar o disminuir la cantidad del producto seleccionado, y si desde la galería se selecciona un producto que ya se encontraba en  el carrito, directamente aumenta la cantidad del item.
- Al vaciar el carrito (Botón) o borrar el último producto del carrito, el carrito se elimina del localStorage.
- Al hacer click en 'Realizar compra', se 'confirma' la compra con un alert y  el carrito se resetea, asumiendo que a partir de ese momento la lógica se maneja desde el BackEnd.
- La lógica de las rutas protegidas es solo permitir acceso al carrito una vez logueado, se puede visitar las galerías y ver los detalles de los productos, pero para agregar productos y ver el carrito debe estar registrado.
- La validación de usuario no está desarrollada, en este ejemplo sólo se solicita  un nombre (que se utiliza como key en localStorage para persistir el carrito del usuario). Al hacer click en 'Enviar' en el form se habilita el carrito, hasta que el usuario use el logOut, con el cual, se deshabilita el carrito, las rutas y se resetea el estado que guarda el carrito, para su reutilización.
- El proyecto es responsive.



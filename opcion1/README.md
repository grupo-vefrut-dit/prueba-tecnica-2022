# Opción 1

En la presente prueba se tendrán que consumir los datos de [The Open Movie Database](https://www.omdbapi.com/) teniendo la libertad de desarrollarlo con algunas de estas tecnologías: Js Vanilla / Typescript / React / VueJS / Angular.

Los datos se deberán representar en las siguientes vistas:

1. Login
   
![Login](https://lh3.googleusercontent.com/drive-viewer/AJc5JmQbyHS-SZnYXIcdAnue5tWo9D5totpvZfG1yqfeOCXsnw8Hky8f5FxOYyWprvhnhMB7ixFGnvI=w3456-h1772)

En esta vista el usuario deberá ingresar nombre de usuario y contraseña, si es que ya se crearon anteriormente las credenciales se deberá ingresar y cargar todos los datos relacionados, si es que no existe se deberá crear uno nuevo. La información del usuario no debe perder o borrar cuando se refresque la página o el cierre del navegador.

2. Vista principal
   
![Home](https://lh3.googleusercontent.com/drive-viewer/AJc5JmSbn5tvc6jbFXU0HW2UTGNWsMUsoxqap6Wgad7Y7OSMD2RiVW-qJbGLDwa_CeShBhtQAxglll0=w3456-h1772)

En esta vista se tiene que listar un catálogo y deberá contar con un buscador de peliculas por nombre. Se debe contar con un **Navbar** donde se tenga la opción de cerrar sesión y el link de la página de Favoritos.

Las peliculas listadas deberán ser presentadas en vista de grilla y deberán contener informanción resaltante del item en cuestión, asi como su imagen de portada.

**(Opcional)** Realizar paginación 

3. Detalle

![Detail](https://lh3.googleusercontent.com/drive-viewer/AJc5JmQK9HcUgg3DJ8fnXGd7XS2Eik37r5FI8Cxw_mcjeyBIKajyWCg-5oI5FQWO6110cJMHOBsylVo=w3456-h1772)

Esta vista deberá mostrar la información de la pelicula, así como la imagen de portada y la opción para agregarlo a lista de Favoritos o quitarlo si es que ya se encuentra en ella.

4. Favoritos

![Favorites](https://lh3.googleusercontent.com/drive-viewer/AJc5JmR9Voj9r2n5xSo0SwKjLR3WsQ4E81zCcoga6TtMk9QLf2EUSgGnM4CuRIaLtjMH0RIxVfXKwAY=w3456-h1772)

Esta vista deberá listar las peliculas que se guardaron como favoritas, además de la opción de sacarlas de la lista.

## Consideraciones:
- El diseño y color de las vistas presentadas es referencial.
- Al cerrar sesión e ingresar con otro usuario, no se debe perder la lista de favoritos del usuario anterior.

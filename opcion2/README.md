# Opción 2

En este prueba se deberá desarrollar una API Restful para la administración de un catálogo de peliculas. La aplicación deberá desarrollarse utilizando algunas de las siguientes tecnologías: Node.js / Typescript / MongoDB / MySQL.

| Acción | Descripción |
| ------ | ----------- |
| Iniciar sesión | Logear al usuario y devolver token |
| Registrar usuario | Registrar nombre de usuario y clave |
| Cerrar sesión | Invalidar token de usuario |
| Refrescar token | Generar nuevo token e invalidar el anterior |
| Registrar película | Registrar nombre, año, descripción, categoría e imagen de portada |
| Listar peliculas | Obtener peliculas registradas, además permite filtros por los siguientes parámetros: SORT, LIMIT, PAGE, SEARCH_BY_NAME _(Ejemplo: sort='nombre-ASC'  limit=10  page=2  search_by_name='a todo gas' )_|
| Buscar película por id | |
| Eliminar película | |



## Consideraciones
- Si es que utilizan una base de datos relacional, incluir el script de la base de datos.
- Al iniciar sesión el token deberá tener una duración de entre 3 a 5 minutos
- La API Rest debe contar con las validaciones correspondientes y deberá retornar mensajes de error según sea el caso.

## comandos utilizados
npm init -y
npm i express bcryptjs dotenv jsonwebtoken 
npm i cors mongoose morgan helmet
npm i @babel/core @babel/cli -D
npm i @babel/node @babel/preset-env nodemon -D
npm run build 
npm run start 
npm run dev
mkdir controllers models routes

## registrarse
-- usuario registrado 
{
    "nombre": "carlos_valverde",
    "clave": "c1992a"
}
---- token de usuario registrado
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDI0YTNkM2E2Y2U5ODNmMjdmN2QyNSIsImlhdCI6MTY2NTI4ODc2NSwiZXhwIjoxNjY1Mjg5MDY1fQ.44hvSWihscjP4Kvs9OQvTf1NDbdN8EXmRnRW7Hnzt2I"
}

## login o sesion 
{
    "nombre": "carlos_valverde",
    "clave": "c1992a"
}

---- token de usuario logueado
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDI0YTNkM2E2Y2U5ODNmMjdmN2QyNSIsImlhdCI6MTY2NTI4ODg2MywiZXhwIjoxNjY1Mjg5MTYzfQ.1rt0SkfveB1jUfIjzG9BCgjQBXl4D4dYse4nrPLgoKk"
}

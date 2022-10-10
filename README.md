# API PELICULAS

En esta examen se deberá desarrollar una API RestFull para la administración de un catálogo de peliculas. La aplicación deberá desarrollarse utilizando algunas de las siguientes tecnologías: Node.js / Typescript / MongoDB / MySQL.



## Construido con

✓ @hapi/joi<br>
✓ bcrypt<br>
✓ cloudinary<br>
✓ cookie-parser<br>
✓ cors<br>
✓ dotenv<br>
✓ express<br>
✓ express-fileupload<br>
✓ fs-extra<br>
✓ joi<br>
✓ jsonwebtoken<br>
✓ morgan<br>
✓ mysql2<br>
✓ sequelize<br>
✓ typescript<br>



## Estructura del Proyecto

tsconfig.json <br>
package-lock.json<br>
package.json <br>
.env.example <br>
.gitignore <br>
movies.sql<br>
upload  <br>
src / <br>
└── connection <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bd.ts <br>
└── controllers <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movies.controller.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user.controller.ts <br>
└── inc <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config.ts <br>
└── middlewares <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;authToken.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;refreshToken.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;validator.ts <br>
└── models <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movies.models.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user.models.ts <br>
└── router <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;auth.routes.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;movies.routes.ts <br>
└── utils <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cloudinary.ts <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tokenManager.ts <br>
app.ts <br>
index.ts



## Instalación

Clonar el repositorio   
    
    ```
      git clone https://github.com/obrian-code/prueba-tecnica-2022.git
    ```
    
Instalar paquetes
    
    ```
      npm install
    ```

Ejecutar código

    ```
      npm run dev
      npm run start
    ```



## Configuración .ENV

    ```
      HOST = 
      USER = 
      PASSWORD= 
      DATABASE= 

      PORT = 

      JWTSECRET  = 
      JWTREFRESH = 

      CLOUDINARY_CLOUD_NAME = 
      CLOUDINARY_API_KEY = 
      CLOUDINARY_API_SECRET = 

      API_URL = 
    ```



## Rutas del API

| Metodo | Ruta | Descripción |
| ------------- | ------------- | ------------- |
| POST | /api/v1/login | Logear al usuario y devolver token |
| POST | /api/v1/register | Registrar nombre de usuario y clave |
| GET | /api/v1/refresh | Generar nuevo token e invalidar el anterior |
| GET | /api/v1/logout | Invalidar token de usuario |
| GET | /api/v1/movies | Obtener peliculas registradas, además permite filtros por los siguientes parámetros: SORT, LIMIT, PAGE, SEARCH_BY_NAME _(Ejemplo: sort='nombre-ASC'  limit=10  page=2  search_by_name='a todo gas' ) |
| GET | /api/v1/movies/:id | Buscar película por id |
| POST | /api/v1/movies | Registrar nombre, año, descripción, categoría e imagen de portada |
| DELETE | /api/v1/movies/:id | Eliminar una película |



## Crédito
 Creado con ❤ por <a href="https://github.com/obrian-code">obrian-code </a>



### License

 ```
Copyright 20202 obrian-code

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 ```

# Puntos claves para desarrollar un back-end API-REST en express para gestionar el servicio de manejo de usuarios:

### Crear usuario
Para crear un usuario se debe realizar una petición POST a la ruta /api/users con los siguientes datos:
```json
{
    "name": "nombre",
    "email": "correo",
    "password": "contraseña"
}
```
### Login usuario
Para loguear un usuario se debe realizar una petición POST a la ruta /api/auth con los siguientes datos:
```json
{
    "email": "correo",
    "password": "contraseña"
}
```

### Actualizar los datos de un usuario
Para actualizar los datos de un usuario se debe realizar una petición PUT a la ruta /api/users/:id con los siguientes datos:
```json
{
    "name": "nombre",
    "email": "correo",
    "password": "contraseña"
}
```

### Eliminar usuario
Para eliminar un usuario se debe realizar una petición DELETE a la ruta /api/users/:id

### Listar todos los usuarios
Para listar todos los usuarios se debe realizar una petición GET a la ruta /api/users

### Conectar a una base de datos MONGODB utilizando mongoose
Para conectar a una base de datos MONGODB utilizando mongoose se debe realizar la siguiente configuración:

```javascript
const mongoose = require("mongoose");

const dbConnection = async () => {
  // intenta algo
  try {
    await mongoose.connect("url de la base de datos");
    console.log("Base de datos conectada");

    // y si hay un error, capturalo
  } catch (error) { 
    console.log(error);
  }
};

module.exports = { dbConnection };
```

## Crear el proyecto de nodejs
Para crear el proyecto de nodejs se debe ejecutar el siguiente comando:
```bash
npm init -y
```

## Instalar las dependencias necesarias
Para instalar las dependencias necesarias se debe ejecutar el siguiente comando:
```bash

npm install express mongoose dotenv cors
```

- express: Es un marco de aplicación web para Node.js que proporciona un conjunto robusto de características para las aplicaciones web y móviles.

- mongoose: Es una biblioteca de Node.js que proporciona una solución directa y basada en esquemas para modelar los datos de su aplicación. Incluye construcción de consultas, validación de datos, ganchos de lógica de negocio y más, listos para usar.

- dotenv: Este módulo carga variables de entorno desde un archivo .env a process.env. Esto es útil para ocultar información sensible como las claves de la API y las contraseñas de la base de datos.

- cors: Es un paquete de Node.js para proporcionar un middleware de CORS (Cross-Origin Resource Sharing). Este middleware puede ser utilizado para permitir o restringir solicitudes cruzadas entre diferentes dominios.


## Crear el archivo .env
Para crear el archivo .env se debe ejecutar el siguiente comando:
```bash
touch .env
```

## Crear el archivo .gitignore
Para crear el archivo .gitignore se debe ejecutar el siguiente comando:
```bash
touch .gitignore
```

-ejemplo de contenido para el gitignore de nodejs:
```bash
https://www.toptal.com/developers/gitignore/api/node
```


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## __Descripción general de desarrollo__

Aplicación desarrollada por el ingeniero [Juan Sebastian Medina Toro](https://www.linkedin.com/in/juan-sebastian-medina-toro-887491249/). Esta aplicación será para probar todo el tema de conexión con PostgreSQL usando ```docker``` y la práctica general de NestJS, aprendiendo osbre el framework y como generar un proyecto API RESTFul completo.

A continuación, se realizará la definición de lo que tendremos que configurar para que funcione la aplicación así como algunos tips usados para que nos funcione la aplicación, la documentación de End Points se usará tentativamente más adelante Open API o Swagger, se irá definiendo.

## INICIO DE PROYECTO
Es importante destacar que usaremos mucho __yarn__ para la instalación de las dependencias. Primeramente, creamos aplicación nest usando el comando:
```
$ nest new 04-OutletPassion
```
Luego instamos algunas dependencias iniciales para poder trabajar todo el tema de validaciones y elementos importantes:
```bash
# Para configuraciones
$ yarn add joi
# Configuraciones nest
$ yarn add @nestjs/config
# Para los validadores DTO
$ yarn add class-validator class-transformer
# Para Type ORM, decoradores y el driver Postgres
$ yarn @nestjs/typeorm typeorm pg
# Para el manejo de los UUID
$ yarn add uuid
# Para el tipado de UUID
$ yarn add @types/uuid
```
Al crear el archivo de docker-compose.yaml, en la definición de puerto colocamos la estructura ``["5400:5432"]``, esto es porque, como tenemos postgres instalado localmente, entonces el puerto 5432 ya lo tenemos ocupado para la máquina docker, por tanto, generamos 5400 en selección y que la máquina virtual en su interior funcione normal en la 5432. Por tanto, obedeciendo a este archivo, el valor de las variables de entorno, para la conexión disponemos colocar en las credenciales DBeaver:
- __Host__: localhost
- __Port__: 5400 según la definición anterior
- __Database__: La que asignamos en DB_NAME
- __Nombre de usuario__: La que asignamos en DB_USER
- __Contraseña__: La que asignamos en DB_PASSWORD

EN CASO DE ERRORES del tipo _host all all all scram-sha-256_ que aparece en los test de conexión o en el mismo docker, buscamos el archivo ``pg_hba.conf`` dentro de la carpeta ``postgres`` que se generó en la raíz del proyecto luego de ejecutar el comando ``docker-compose up -d`` por consola, y al final, cambiamos _host all all all scram-sha-256_ por __host all all all trust__, es decir, quitamos el scram-sha-256 y le colocamos el trust. #NOTA: Si al realizar las configuraciones no basta y tenemos errores, debemos eliminar la máquina/imagen docker, eliminar la carpeta raíz de postgres que se crea segúnlas configuraciones del .yaml y volver a ejecutar el comando ``docker-compose up -d`` para que tome los cambios.

## INSTALACIÓN
Bienvenidos a la aplicación ``Outlet Passion``. Primeramente clonamos el proyecto:

```bash
# Primeramente clonamos el proyecto de:
$ git clone ..:: Aquí irá el repositorio de GIT ::..
```
- Instalamos las dependencias de Node:
```
$ yarn install
```
- Clonamos el archivo ``.env.template`` y renombrarlo a ``.env``
- Configurar las variables de entorno
- Levantar la base de datos con el comando:
```
$ docker-compose up -d
```
- Antes de comenzar, poblemos la base de datos con una información básica, para ello, __ejecutaremos el SEED__ de la aplicación ejecutando la ruta:
```bash
# NOTA: Petición de tipo GET
#       Poblaremos la tabla de productos
$ http://localhost:3050/api/v1/seed
```

## CORRIENDO LA APLICACIÓN
Después de todos los pasos de instalación, podemos ejecutar la aplicación:
```bash
$ yarn start:dev
```

## TESTING

```bash
```

## RESUMEN DE END POINTS

```bash
```

## SOPORTE

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## INFORMACIÓN DESARROLLADOR Y APP

- Autor - [Juan Sebastian Medina Toro](https://www.linkedin.com/in/juan-sebastian-medina-toro-887491249/)
- Nest Help - [https://nestjs.com](https://nestjs.com/)

## LICENCIA
Aplicación Outlet Passion [Licencia](LICENSE).

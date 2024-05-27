# Card Tokenization Service

Este es un servicio de tokenización de tarjetas que utiliza AWS Lambda y Serverless Framework.

## Ejecutar Localmente

### Prerrequisitos
- Node.js y npm instalados en tu sistema.
- Credenciales de AWS configuradas en tu máquina.

### Pasos
1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto ejecutando el comando:
   ```bash
   npm install
3. Asegúrate de tener las credenciales de AWS configuradas en tu máquina.
4. Crea un archivo .env en la raíz del proyecto y establece las variables de entorno necesarias. Puedes usar el archivo .env.example como referencia.
5. Inicia el servicio localmente ejecutando el siguiente comando:
   ```bash
   npm run start:offline
6. El servicio estará disponible en http://localhost:3000.

## Configuración de Redis en Local con Docker

### Pasos

1. Instalación de Docker:
   - Si aún no tienes Docker instalado en tu sistema, puedes descargar e instalar Docker Desktop desde el siguiente enlace: [Descargar Docker](https://www.docker.com/products/docker-desktop)

2. Descarga la imagen de Redis desde Docker Hub:
   - Abre tu terminal y ejecuta el siguiente comando para descargar la imagen oficial de Redis desde Docker Hub:
     ```bash
     docker pull redis
     ```

3. Inicia un contenedor de Redis:
   - Una vez que la imagen se haya descargado, ejecuta el siguiente comando para iniciar un contenedor de Redis:
     ```bash
     docker run --name redis -d redis -p 6379:6379 redis-server --save 60 1 --loglevel warning
     ```

4. Verifica que el contenedor de Redis esté funcionando correctamente:
   - Puedes verificar si el contenedor de Redis está en ejecución utilizando el siguiente comando:
     ```bash
     docker ps
     ```
   - Deberías ver una salida que incluye el contenedor de Redis en la lista, lo que indica que está en ejecución.

Con estos pasos, habrás configurado Redis en tu entorno local utilizando Docker y podrás utilizarlo en el proyecto.

## Despliegue en AWS Lambda
### Prerrequisitos
- Cuenta de AWS configurada.
- AWS CLI instalado y configurado en tu máquina.

### Pasos
1. Asegúrate de tener las credenciales de AWS configuradas en tu máquina.
2. Ejecuta el siguiente comando para desplegar las funciones en AWS Lambda:
   ```bash
   npm run deploy
3. Una vez completado el despliegue, las funciones estarán disponibles en AWS Lambda.

## Estructura del Proyecto
El proyecto sigue la siguiente estructura de carpetas:

- /src: Código fuente TypeScript.
- /handlers: Funciones Lambda.
- /services: Lógica de negocio, incluyendo tokenización y validación.
- /models: Definiciones de modelos para la base de datos.
- /utils: Funciones de utilidad, como validadores.
- /database: Configuración de la conexión a PostgreSQL y Redis.
- /tests: Pruebas unitarias utilizando Jest.
- /scripts: Scripts para compilación y despliegue.
- /docs: Documentación del proyecto, incluyendo el README.md.

## Tecnologías Utilizadas
- Backend: TypeScript
- BD relacional: PostgreSQL
- BD no relacional: Redis
- Test: Jest

## Plugins Utilizados
- serverless-offline: Para ejecutar el servicio localmente.
- serverless-plugin-typescript: Para compilar TypeScript a JavaScript durante el despliegue.

Este README proporciona una guía básica para ejecutar el proyecto localmente y desplegarlo en AWS Lambda. Asegúrate de ajustar los detalles según las necesidades específicas de tu proyecto.

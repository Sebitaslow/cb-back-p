# CB Backend API

Backend API para la aplicación CB (Content Builder) con configuración de CORS mejorada.

## 🚀 Características

- **API RESTful** con Express.js
- **Configuración de CORS** robusta para múltiples orígenes
- **Autenticación** de usuarios
- **Gestión de videos** con Cloudinary
- **Base de datos MySQL** con mysql2
- **Logging** detallado de peticiones
- **Manejo de errores** centralizado

## 📋 Prerrequisitos

- Node.js (versión 16 o superior)
- MySQL
- Cuenta de Cloudinary (opcional)

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd cb-back-p
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   DB_HOST=localhost
   DB_NAME=tu_database
   DB_USER=tu_usuario
   DB_PASSWORD=tu_password
   DB_PORT=3306
   
   CLOUDINARY_CLOUD_NAME=tu_cloud_name
   CLOUDINARY_API_KEY=tu_api_key
   CLOUDINARY_API_SECRET=tu_api_secret
   ```

4. **Ejecutar el servidor**
   ```bash
   # Desarrollo
   npm run dev
   
   # Producción
   npm start
   ```

## 🌐 Endpoints

### Rutas de Prueba
- `GET /hello` - Verificar que el servidor funciona
- `GET /test-cors` - Probar configuración de CORS

### Autenticación
- `POST /auth` - Login de usuarios

### Categorías
- `GET /categories` - Obtener todas las categorías

### Speakers
- `GET /speakers` - Obtener todos los speakers (team leaders)

### Videos
- `GET /videos` - Obtener videos
- `POST /videos` - Subir nuevo video
- `PUT /videos/:id` - Actualizar video
- `DELETE /videos/:id` - Eliminar video

### Comentarios
- `GET /comment` - Obtener comentarios
- `POST /comment` - Crear comentario

### Búsqueda
- `GET /search` - Buscar videos

### Chat
- `GET /chat` - Obtener mensajes del chat
- `POST /chat` - Enviar mensaje

## 🔒 Configuración de CORS

El proyecto incluye una configuración robusta de CORS que permite:

- **Orígenes permitidos:**
  - `https://cb-front-lol.vercel.app`
  - `http://localhost:3000`
  - `http://localhost:5173`
  - `http://localhost:4173`

- **Métodos permitidos:** GET, POST, PUT, DELETE, OPTIONS
- **Headers permitidos:** Content-Type, Authorization, x-auth-token, Origin, Accept, X-Requested-With

## 🧪 Pruebas

Ejecutar las pruebas de rutas:
```bash
node test-routes.js
```

## 📝 Scripts Disponibles

- `npm start` - Ejecutar en producción
- `npm run dev` - Ejecutar en desarrollo con nodemon
- `npm test` - Ejecutar pruebas

## 🏗️ Estructura del Proyecto

```
cb-back-p/
├── modules/
│   ├── auth/           # Autenticación
│   ├── categories/     # Categorías
│   ├── chat/          # Chat
│   ├── comments/      # Comentarios
│   ├── search/        # Búsqueda
│   ├── speakers/      # Speakers
│   └── videos/        # Videos
├── cors-config.js     # Configuración de CORS
├── db.js             # Configuración de base de datos
├── cloudinary.js     # Configuración de Cloudinary
├── index.js          # Archivo principal
└── test-routes.js    # Script de pruebas
```

## 🚨 Solución de Problemas

### Error de CORS
Si encuentras errores de CORS, verifica:
1. Que el servidor esté corriendo
2. Que el origen del frontend esté en la lista de orígenes permitidos
3. Los logs del servidor para ver las peticiones entrantes

### Error de Base de Datos
Si hay problemas con la base de datos:
1. Verificar que las variables de entorno estén configuradas
2. Que MySQL esté corriendo
3. Que las credenciales sean correctas

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para soporte o preguntas, contacta al equipo de desarrollo.

# Aplicación de Listado de Usuarios

Esta aplicación es una implementación de un listado de usuarios utilizando React + Vite, con funcionalidades de búsqueda, paginación y micro frontends.

## Características

- 📋 Listado de usuarios con diseño de tarjetas
- 🔍 Búsqueda en tiempo real por nombre y email
- 📱 Diseño responsivo
- ⚡ Paginación dinámica
- 🎯 Implementación de micro frontend
- 🎨 UI moderna con Tailwind CSS y shadcn/ui

## Requisitos Previos

- Node.js (versión 14.0 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone <https://github.com/luismgc001/domina-test>
cd domina-test
```

2. Instalar las dependencias:
```bash
npm install
```

## Ejecución

Para iniciar la aplicación en modo desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Estructura del Proyecto

```
src/
  ├── components/
  │   └── UserList/
  │       └── UserList.jsx       # Micro frontend de listado de usuarios
  ├── lib/
  │   └── utils.js              # Utilidades compartidas
  ├── App.jsx                   # Componente principal
  ├── main.jsx                  # Punto de entrada
  └── index.css                 # Estilos globales
```

## API Utilizada

La aplicación consume la API de ReqRes (https://reqres.in/) para obtener los datos de usuarios. La API proporciona:
- Listado paginado de usuarios
- 6 usuarios por página
- 2 páginas en total
- Datos de ejemplo que incluyen avatar, nombre, email

## Funcionalidades

### Búsqueda
- Búsqueda en tiempo real
- Filtra por nombre y email
- Case-insensitive (no distingue mayúsculas/minúsculas)

### Paginación
- Navegación entre páginas
- Muestra el número total de páginas disponibles

### Micro Frontend
El componente UserList está implementado como un micro frontend, lo que significa que:
- Maneja su propia lógica de presentación
- Es independiente del componente principal
- Se comunica a través de props bien definidas
- Puede ser reutilizado en otras partes de la aplicación

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la versión de producción localmente
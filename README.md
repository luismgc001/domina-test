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
git clone <url-del-repositorio>
cd nombre-del-proyecto
```

2. Instalar las dependencias:
```bash
npm install
```

3. Instalar los componentes de shadcn/ui:
```bash
npx shadcn-ui@latest init
```

Durante la instalación de shadcn/ui, seleccionar:
- Would you like to use TypeScript? → No
- Which style would you like to use? → Default
- Which color would you like to use as base color? → Slate
- Where is your global CSS file? → src/index.css
- Would you like to use CSS variables for colors? → Yes
- Where is your tailwind.config.js located? → tailwind.config.js
- Configure the import alias for components? → @/components
- Configure the import alias for utils? → @/lib/utils
- Are you using React Server Components? → No

4. Instalar los componentes necesarios:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add button
npx shadcn-ui@latest add pagination
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
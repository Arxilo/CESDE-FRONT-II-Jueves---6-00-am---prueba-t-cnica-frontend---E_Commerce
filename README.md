<div align="center">

# Dashy

**Panel Administrativo E-Commerce**

Prueba tecnica para la vacante de Desarrollador Frontend Junior

---

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)

</div>

---

## Descripcion

Aplicacion web SPA que permite gestionar productos de un e-commerce a traves de un CRUD completo conectado a una API REST. Incluye autenticacion simulada con LocalStorage y rutas protegidas.

## Funcionalidades

- Login con validacion de credenciales y spinner de carga
- Rutas protegidas con redireccion automatica
- Crear, editar y eliminar productos
- Validaciones en todos los campos del formulario
- Alertas interactivas con SweetAlert2
- Paginacion de productos (6 por pagina)
- Cierre de sesion
- Diseno responsive

## Credenciales de acceso

```
Usuario: Admin
Contrasena: 1234
```

## Stack Tecnologico

<div align="center">

| Tecnologia | Version | Uso |
|:---:|:---:|:---|
| React | 19 | Framework de UI |
| Vite | 8 | Bundler y servidor de desarrollo |
| React Router DOM | 7 | Enrutamiento SPA |
| Tailwind CSS | 4 | Estilos utilitarios |
| Axios | 1.16 | Peticiones HTTP |
| SweetAlert2 | 11 | Alertas y confirmaciones |
| MockAPI | — | API REST simulada |
| LocalStorage | — | Sesion simulada |

</div>

## Arquitectura del proyecto

```
src/
│
├── features/
│   ├── auth/
│   │   ├── components/    ProtectedRoute
│   │   ├── hooks/         useLogin
│   │   ├── services/      authService
│   │   └── pages/         LoginPage
│   │
│   └── products/
│       ├── components/    ProductCard, ProductForm, ProductList
│       ├── hooks/         useProductos, useProductForm
│       ├── services/      productService
│       └── pages/         ProductosPage
│
├── shared/
│   ├── components/        Pagination
│   └── utils/             alerts
│
├── layouts/               MainLayout
├── router/                Configuracion de rutas
├── index.css
└── main.jsx
```

## Instalacion y ejecucion

**1.** Clonar el repositorio:
```bash
git clone https://github.com/Arxilo/CESDE-FRONT-II-Jueves---6-00-am---prueba-t-cnica-frontend---E_Commerce.git
```

**2.** Instalar dependencias:
```bash
npm install
```

**3.** Ejecutar en modo desarrollo:
```bash
npm run dev
```

**4.** Abrir en el navegador:
```
http://localhost:5173
```

## GitFlow

El proyecto fue desarrollado siguiendo la metodologia GitFlow:

```
main ─────────────────────────────────── Produccion
  │
  └── develop ────────────────────────── Integracion
        │
        ├── feature/project-setup ────── Configuracion inicial
        ├── feature/auth ─────────────── Autenticacion y rutas protegidas
        ├── feature/products-crud ────── CRUD completo de productos
        ├── feature/ui-polish ────────── Estilos base
        └── refactor/ui-redesign ─────── Rediseno de interfaz
```

> Convencion de commits: **Conventional Commits** (`feat:` `fix:` `refactor:` `chore:` `style:`)

## Entidad Producto

<div align="center">

| Campo | Tipo | Validacion |
|:---:|:---:|:---|
| `nombre` | String | No puede estar vacio |
| `precio` | Number | Obligatorio, no negativo |
| `categoria` | String | No puede estar vacia |
| `stock` | Number | Obligatorio, no negativo |
| `imagenURL` | String | No puede estar vacia |

</div>

---

<div align="center">

Desarrollado por **Mateo Arzila**

CESDE — Semestre III — Front-End II

</div>

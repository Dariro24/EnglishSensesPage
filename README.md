# English Senses Page

Sitio web institucional de **English Senses**, desarrollado con **Astro** y estilos personalizados organizados por páginas y secciones.  
El proyecto está pensado para presentar la marca, sus cursos, servicios y prueba de nivel de inglés, con una estructura visual por secciones y navegación optimizada para escritorio y, posteriormente, para móviles.

---

## Descripción del proyecto

Este sitio fue construido para mostrar la propuesta de valor de **English Senses** mediante una experiencia visual clara, moderna y editable.

Incluye las siguientes páginas principales:

- **Inicio**
- **Nosotros**
- **Cursos**
- **Servicios**
- **Mide tu inglés**

El contenido visual y textual está organizado para facilitar futuras modificaciones sin tener que reescribir toda la estructura del sitio.

---

## Tecnologías utilizadas

- **Astro**
- **CSS modular por página**
- **JSON para contenido editable**
- **Vercel** para despliegue
- **Vercel Speed Insights** para monitoreo de rendimiento

---

## Estructura general del proyecto

```text
.
├── public/
│   ├── fonts/
│   └── media/
│       ├── home/
│       ├── nosotros/
│       ├── cursos/
│       ├── servicios/
│       ├── mide-tu-ingles/
│       └── shared/
│
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── FloatingWhatsApp.astro
│   │   ├── NextSectionButton.astro
│   │   └── SectionSheet.astro
│   │
│   ├── config/
│   │   └── pages/
│   │       ├── home.json
│   │       ├── nosotros.json
│   │       ├── cursos.json
│   │       ├── servicios.json
│   │       └── mide-tu-ingles.json
│   │
│   ├── layouts/
│   │   └── MainLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── nosotros.astro
│   │   ├── cursos.astro
│   │   ├── servicios.astro
│   │   └── mide-tu-ingles.astro
│   │
│   └── styles/
│       ├── global.css
│       ├── header.css
│       ├── footer.css
│       ├── sections.css
│       ├── home.css
│       ├── nosotros.css
│       ├── cursos.css
│       ├── servicios.css
│       ├── mide-tu-ingles.css
│       └── floating-whatsapp.css
│
├── astro.config.mjs
├── package.json
└── README.md
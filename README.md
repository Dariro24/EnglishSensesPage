# Astro + Tailwind Starter

Proyecto base para una landing sencilla, visual y escalable, pensado para usar:

- Astro
- Tailwind CSS
- Componentes reutilizables
- Un archivo JSON para centralizar links y textos

## 1) Requisitos previos

Instala en tu equipo:

- **Node.js** versión LTS
- **Visual Studio Code**

Extensiones recomendadas en VS Code:

- **Astro**
- **Tailwind CSS IntelliSense**

## 2) Crear o abrir el proyecto

Si quieres crear un proyecto nuevo desde cero con el asistente oficial de Astro:

```bash
npm create astro@latest
```

Si vas a usar esta base que ya te entregué:

1. Descomprime la carpeta.
2. Ábrela en Visual Studio Code.
3. Abre la terminal integrada en la raíz del proyecto.

## 3) Instalar dependencias

```bash
npm install
```

## 4) Ejecutar en desarrollo

```bash
npm run dev
```

Luego abre en tu navegador la URL local que te muestre la terminal.

## 5) Estructura del proyecto

```text
astro-tailwind-starter/
├─ public/
│  └─ media/
├─ src/
│  ├─ components/
│  ├─ config/
│  │  └─ site-content.json
│  ├─ layouts/
│  ├─ pages/
│  └─ styles/
├─ astro.config.mjs
├─ package.json
└─ README.md
```

## 6) Dónde cambiar los links y textos

El archivo más importante para contenido editable es:

```text
src/config/site-content.json
```

Ahí puedes cambiar:

- nombre del sitio
- textos principales
- textos de secciones
- labels de botones
- URLs de botones
- rutas de imágenes y GIFs

### Ejemplo

```json
"links": {
  "principal": {
    "label": "Botón principal",
    "url": "https://example.com/principal"
  }
}
```

## 7) Dónde cambiar imágenes o GIFs

Reemplaza los archivos dentro de:

```text
public/media/
```

Y luego actualiza sus rutas en:

```text
src/config/site-content.json
```

## 8) Build de producción

```bash
npm run build
```

Para previsualizar el resultado final:

```bash
npm run preview
```

## 9) Idea de crecimiento futuro

Esta base ya queda preparada para crecer con facilidad:

- nuevas secciones reutilizando componentes
- configuración separada del contenido
- integración futura con CMS
- SEO más completo
- formularios
- analítica
- internacionalización

## 10) Siguiente recomendación

Antes de seguir con desarrollo visual, define una maqueta con:

- versión móvil
- versión escritorio
- tipografía
- paleta de colores
- espaciados
- imágenes finales
- textos definitivos

Con esa maqueta, esta base se adapta rápido sin rehacer la arquitectura.

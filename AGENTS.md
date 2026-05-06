# AGENTS.md

Guia para futuras sesiones de Codex en este proyecto Astro. Estas instrucciones
aplican a todo el repositorio.

## Proyecto

Sitio Astro para English Senses. Usa Astro 6, Tailwind CSS 4 importado desde
CSS, contenido en JSON y estilos manuales por pagina/componente. No asumas que
Tailwind controla el layout principal: la mayor parte del responsive vive en
CSS custom.

## Estructura

- `src/pages/`: paginas Astro principales.
  - `index.astro`: Home. Usa `SectionSheet` en varias secciones.
  - `nosotros.astro`, `cursos.astro`, `servicios.astro`,
    `mide-tu-ingles.astro`: paginas por secciones con footer interno al final.
  - `cupones.astro`: render de cupones en cliente desde parametros de URL/API.
- `src/layouts/`:
  - `MainLayout.astro`: layout real usado por las paginas; renderiza `Header`,
    `Footer` opcional, `FloatingWhatsApp` opcional y el slot.
  - `BaseLayout.astro`: layout simple, aparentemente no usado actualmente.
- `src/components/`: `Header`, `Footer`, `FloatingWhatsApp`,
  `NextSectionButton`, `SectionSheet`.
- `src/config/`: contenido editable.
  - `site.json`: logo, navegacion y links globales.
  - `footer.json`: datos del footer.
  - `pages/*.json`: contenido por pagina.
- `src/styles/`: estilos globales, compartidos y por pagina.
- `public/media/`: imagenes organizadas por pagina/seccion.
- `public/fonts/`: fuentes locales.

## Responsive y estilos

El diseno desktop actual se considera aprobado. No modificar desktop salvo
autorizacion explicita. Cuando la tarea sea visual o responsive, priorizar
correcciones mobile.

Breakpoints principales:

- `1199px`: tablet grande.
- `991px`: tablet.
- `767px`: mobile.
- `390px` y reglas por altura mobile en `sections.css`.

Archivos clave:

- `src/styles/global.css`: variables, colores, fuentes, `.site-shell`,
  `.page-wrap`, scroll snap, alturas de header y bullets compartidos.
- `src/styles/header.css`: header, logo, navegacion desktop y menu mobile.
- `src/styles/footer.css`: footer responsive.
- `src/styles/sections.css`: base compartida de secciones, shells, alturas,
  CTAs, boton de siguiente seccion, secciones finales y reglas mobile.
- `src/styles/home.css`: hero y ajustes especificos del Home.
- `src/styles/nosotros.css`: layouts especificos de Nosotros.
- `src/styles/cursos.css`: layouts especificos de Cursos.
- `src/styles/servicios.css`: layouts especificos de Servicios.
- `src/styles/mide-tu-ingles.css`: layouts especificos de Mide tu ingles.
- `src/styles/cupones.css`: pagina de cupones, con breakpoints propios.

Antes de cambiar responsive, revisar tanto `sections.css` como el CSS especifico
de la pagina afectada.

## Codigo repetido conocido

No refactorizar automaticamente sin que la tarea lo pida, pero tener presente:

- El script de scroll entre secciones (`getHeaderOffset`,
  `scrollToWithOffset`, `[data-next-target]`) esta repetido en varias paginas.
- Varias paginas usan `showFooter={false}` y renderizan `Footer` manualmente al
  final.
- `cursos.css`, `servicios.css` y `mide-tu-ingles.css` repiten patrones de grid,
  contenido/media, titulos grandes, listas con bullets, CTAs y breakpoints.
- El patron `title.split("\n").map(...)` se repite para titulos multilinea.
- `FloatingWhatsApp` se invoca con props en `cupones.astro`, pero el componente
  actual lee el link desde `site.json`.

## Reglas de trabajo

- No modificar archivos no relacionados con la tarea.
- No modificar archivos de configuracion global, `package.json`,
  `astro.config.mjs` o `tsconfig.json` salvo que la tarea lo requiera claramente.
- No instalar, actualizar ni eliminar dependencias sin autorizacion.
- No ejecutar comandos destructivos como `rm`, `git reset`, `git clean` o
  similares sin autorizacion.
- Si hay un servidor `npm run dev` activo, no iniciar otro innecesariamente.
- Respetar cambios existentes del usuario. Si el arbol esta sucio, revisar
  antes de editar y no revertir cambios ajenos.
- Mantener contenido textual, links y rutas de imagen en JSON cuando ya sigan
  ese patron.
- Usar componentes y clases compartidas existentes antes de crear nuevas
  abstracciones.
- Usar `apply_patch` para ediciones manuales.
- Verificar con `npm run build` cuando el cambio toque Astro, imports, props,
  scripts o CSS con riesgo de romper compilacion.
- Cuando propongas cambios visuales, primero explicar que archivo se tocara y
  por que.

## Restricciones de diseno

- Mantener la identidad visual actual: azul primario `--color-primary`, naranja
  `--color-accent`, fondo claro y CTAs redondeados.
- No convertir las paginas en landing pages genericas ni agregar heroes
  decorativos innecesarios.
- Evitar decoracion gratuita, gradientes dominantes, orbes o elementos visuales
  que no pertenezcan al sistema actual.
- Conservar la experiencia de secciones de alto de viewport y scroll snap salvo
  que la tarea pida cambiarla.
- En mobile, revisar pantallas de poca altura; `sections.css` ya contiene reglas
  especificas para esos casos.
- No ocultar errores de layout agregando mas `overflow-x: hidden`; ya existe en
  `global.css`.
- Si agregas botones o controles, preferir `primary-cta` y
  `section-next-button` salvo razon clara para una variante.
- Mantener textos dentro de sus contenedores en desktop y mobile; evitar
  solapamientos.

## Encoding

Hay textos con caracteres mal codificados en algunos archivos existentes. No
corregirlos como parte de tareas no relacionadas para evitar mezclar cambios de
contenido/encoding con otros objetivos.

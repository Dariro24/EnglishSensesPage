# AGENTS.md

Guia para futuras sesiones de Codex en este proyecto Astro. Estas instrucciones
aplican a todo el repositorio.

## Prioridad de instrucciones

- Las instrucciones directas del usuario en la sesion actual tienen prioridad
  sobre este archivo.
- Si una instruccion del usuario contradice este archivo, seguir la instruccion
  del usuario y mencionar brevemente la contradiccion si puede afectar el
  resultado.
- Si la tarea es ambigua, hacer el cambio minimo y seguro en lugar de redisenar
  la seccion completa.
- No asumir que una recomendacion generica de una skill, libreria o patron externo
  debe aplicarse automaticamente al proyecto.

## Proyecto

Sitio Astro para English Senses. Usa Astro 6, Tailwind CSS 4 importado desde
CSS, contenido en JSON y estilos manuales por pagina/componente. No asumas que
Tailwind controla el layout principal: la mayor parte del responsive vive en
CSS custom.

El diseno desktop actual se considera aprobado. En tareas visuales, responsive o
de layout, priorizar correcciones mobile sin afectar desktop.

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

## Comandos del proyecto

- Instalar dependencias: `npm install`
- Desarrollo local: `npm run dev`
- Validacion de build: `npm run build`

No ejecutar comandos de deploy, publicacion, instalacion global, actualizacion de
dependencias o comandos destructivos sin autorizacion explicita.

## Flujo de trabajo esperado

Antes de editar:

1. Revisar los archivos relacionados con la tarea.
2. Identificar si el problema viene de estilos globales, estilos compartidos o CSS
   especifico de pagina.
3. Explicar brevemente que archivos se van a tocar y por que.
4. Hacer el cambio minimo necesario.
5. Revisar que no se haya afectado desktop si la tarea era mobile.
6. Ejecutar `npm run build` cuando el cambio pueda afectar compilacion, imports,
   componentes, props, scripts o estructura Astro.

Despues de editar:

- Resumir archivos modificados.
- Explicar el motivo de cada cambio.
- Indicar si falta validacion visual manual en navegador.
- Si no se ejecuto `npm run build`, explicar por que no era necesario.

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

## Politica responsive

- Para problemas mobile, trabajar dentro de media queries existentes antes de
  alterar reglas base.
- No modificar reglas desktop aprobadas salvo que sea estrictamente necesario.
- Si se cambia una regla base, explicar por que no era suficiente corregirla en
  mobile.
- Validar los estados principales: desktop, tablet, mobile y mobile de poca
  altura.
- Evitar soluciones fragiles basadas solo en `margin-top` o `transform` si el
  problema es de estructura, grid, flex, altura o flujo del documento.
- No ocultar problemas de layout agregando mas `overflow-x: hidden`; ya existe
  en `global.css`.
- Mantener textos dentro de sus contenedores en desktop y mobile; evitar
  solapamientos.
- En mobile, revisar pantallas de poca altura; `sections.css` ya contiene reglas
  especificas para esos casos.
- Si una seccion usa scroll snap, validar que el contenido no quede cortado ni
  inaccesible.

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

Si la tarea pide refactorizacion:

- Proponer primero el alcance.
- Evitar cambios masivos innecesarios.
- Mantener compatibilidad visual con el estado aprobado.
- Validar que las paginas afectadas sigan compilando.
- No mezclar refactorizacion con cambios de contenido.

## Uso de skills

Si hay skills instaladas para Astro, Tailwind, frontend, accesibilidad o SEO:

- Usarlas como apoyo tecnico, no como reemplazo de estas instrucciones.
- Priorizar las skills relacionadas con Astro, Tailwind CSS, frontend-design,
  accessibility y SEO para tareas visuales.
- No aplicar recomendaciones genericas que cambien la identidad visual aprobada.
- No convertir el proyecto a una arquitectura nueva solo porque una skill lo
  sugiera.
- No modificar dependencias, configuracion global o estructura del proyecto solo
  por recomendacion de una skill.
- Si una skill sugiere un cambio amplio, resumir la recomendacion y pedir
  autorizacion antes de aplicarla.

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
- No modificar archivos JSON de contenido salvo que la tarea lo pida
  explicitamente. Si el problema visual puede resolverse desde Astro o CSS, no
  tocar JSON.
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
- Si agregas botones o controles, preferir `primary-cta` y
  `section-next-button` salvo razon clara para una variante.
- Mantener consistencia entre secciones: jerarquia visual clara, espaciado
  equilibrado, CTA visible y contenido legible.
- Evitar soluciones que se vean bien solo en una resolucion exacta.
- No reducir demasiado fuentes, botones o elementos visuales para forzar que
  todo quepa; primero revisar estructura, altura, grid, flex y flujo.

## Accesibilidad y SEO

Cuando la tarea toque componentes visibles, revisar de forma basica:

- Jerarquia correcta de titulos.
- Textos alternativos razonables en imagenes.
- Botones y enlaces con proposito claro.
- Contraste suficiente entre texto y fondo.
- Evitar botones que parezcan clicables si no tienen accion.
- Mantener contenido importante en HTML cuando sea relevante para SEO.
- No sacrificar accesibilidad por decoracion visual.

## Cupones

Para `cupones.astro` y `cupones.css`:

- No modificar el JSON ni la logica de API salvo que se pida explicitamente.
- Priorizar ajustes visuales desde CSS o estructura Astro.
- Mantener la pagina simple, centrada y clara.
- En mobile, evitar que el logo se monte sobre el boton principal.
- Conservar el enfoque de redencion por WhatsApp.

## Encoding

Hay textos con caracteres mal codificados en algunos archivos existentes. No
corregirlos como parte de tareas no relacionadas para evitar mezclar cambios de
contenido/encoding con otros objetivos.
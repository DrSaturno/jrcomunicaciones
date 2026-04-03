# HOW_TO_START.md — JR Comunicación
## Guía de inicio rápido para Antigravity

---

## 1. CREAR EL PROYECTO EN ANTIGRAVITY

1. Abrí Antigravity y creá un nuevo proyecto
2. Elegí **"Blank Project"** (sin template)
3. Nombre del proyecto: `jr-comunicacion`
4. Subí (o copiá) los 3 archivos de este pack:
   - `SPEC.md`
   - `TASKS.md`
   - `CLAUDE.md`

---

## 2. PRIMER PROMPT A CLAUDE CODE

Pegá este prompt exacto para arrancar:

```
Leé CLAUDE.md, SPEC.md y TASKS.md antes de escribir cualquier código.

Arrancá por la Fase 1:
- Creá la estructura de carpetas completa (css/, js/, img/clientes/, img/portfolio/)
- Creá index.html con la estructura base completa (todos los section IDs, head con fonts y CSS/JS links)
- Creá css/main.css con todas las variables CSS de la paleta y el reset base
- Creá css/animations.css con las clases reveal

Cuando termines cada archivo, marcalo como completado en TASKS.md.
No improvises nada que no esté en SPEC.md.
```

---

## 3. PROMPTS SIGUIENTES POR FASE

### Fase 2 — Hero
```
Construí la sección #hero completa según SPEC.md sección 5.2.
Creá css/hero.css y todo el HTML dentro del section#hero en index.html.
Incluí: eyebrow, headline con italic outline, sub-texto, 2 CTAs y stats.
```

### Fase 2 — Valor
```
Construí la sección #valor según SPEC.md sección 5.3.
Creá css/valor.css. Grid de 2 columnas: intro + (card promesa + 4 pilares).
```

### Fase 2 — Metodología
```
Construí la sección #metodologia según SPEC.md sección 5.4.
Creá css/metodologia.css. Incluí el grid de 3 pasos con numeración Playfair Display y el componente de proceso visual como SVG o CSS puro (reemplazando la vieja imagen de engranajes).
```

### Fase 2 — Servicios
```
Construí la sección #servicios según SPEC.md sección 5.5.
Creá css/servicios.css y js/servicios.js.
Grid 3x2 en fondo negro. Accordeon: click en card abre lista de sub-servicios, solo uno abierto a la vez.
```

### Fase 3 — Portfolio
```
Construí la sección #portfolio completa según SPEC.md sección 5.6.
Creá css/portfolio.css y js/portfolio.js.
Incluí: array portfolioItems[], render de cards, filtros por categoría, modal de detalle con slide-in desde derecha.
```

### Fase 4 — Clientes + Contacto + Footer
```
Construí las secciones #clientes y #contacto según SPEC.md secciones 5.7 y 5.8.
Creá css/clientes.css y css/contacto.css y js/contacto.js.
Formulario con validación + integración Formspree (action placeholder para que el cliente lo configure).
```

### Fase 5 — Polish + Nav final
```
Implementá los detalles finales de SPEC.md:
1. js/nav.js: sticky nav, active link highlight con IntersectionObserver, hamburger mobile
2. js/animations.js: reveals en todas las secciones
3. Cursor rojo custom en desktop
4. Botón back-to-top (aparece al bajar 500px)
5. Scroll progress bar (línea roja fina en top del viewport)
Asegurate que css/nav.css esté completo incluyendo el menú mobile.
```

### Fase 6 — QA Final
```
Revisá todo el proyecto:
1. Verificá que no haya errores de sintaxis en HTML, CSS y JS
2. Chequeá que todos los links internos y anclas funcionen
3. Verificá responsive: ajustá lo que se rompa en mobile (< 768px) y tablet
4. Asegurate que el modal cierre correctamente con Escape, click en overlay y botón X
5. Actualizá TASKS.md marcando todas las tareas completadas
Listá todo lo que encontraste y corregiste.
```

---

## 4. AGREGAR CONTENIDO REAL

Una vez que la estructura esté lista, el cliente necesita:

### Imágenes de portfolio
- Carpeta: `img/portfolio/`
- Formato: JPG, mínimo 800x600px
- Naming: `portfolio-01.jpg` hasta `portfolio-09.jpg` (o más)
- Actualizar el array `portfolioItems[]` en `js/portfolio.js` con títulos, clientes y descripciones reales

### Logos de clientes
- Carpeta: `img/clientes/`
- Formato: PNG con fondo transparente o SVG
- Logos de: Molinos, Roman, Lightech, Swell, Puerto Madero, Corrientes Intensa, Bar&Drinks, ITE Logistics, Vitale

### Formulario
- Crear cuenta en [Formspree](https://formspree.io)
- Crear formulario y copiar el ID
- Reemplazar en `index.html`: `action="https://formspree.io/f/TU_ID_ACA"`

### Data Fiscal AFIP
- Descargar imagen desde el portal de AFIP
- Guardar en `img/data-fiscal.jpg`
- Descomentar el `<img>` en la sección de contacto

---

## 5. ESTRUCTURA FINAL DE ARCHIVOS

```
jr-comunicacion/
├── index.html
├── css/
│   ├── main.css
│   ├── animations.css
│   ├── nav.css
│   ├── hero.css
│   ├── valor.css
│   ├── metodologia.css
│   ├── servicios.css
│   ├── portfolio.css
│   ├── clientes.css
│   └── contacto.css
├── js/
│   ├── nav.js
│   ├── animations.js
│   ├── servicios.js
│   ├── portfolio.js
│   └── contacto.js
├── img/
│   ├── logo-jr.svg
│   ├── og-image.jpg
│   ├── clientes/
│   │   └── (logos de clientes)
│   └── portfolio/
│       └── (imágenes de trabajos)
├── SPEC.md
├── TASKS.md
├── CLAUDE.md
└── HOW_TO_START.md
```

---

## NOTAS

- Si Claude Code pregunta sobre algo que no está en SPEC.md, decile que **lo invente siguiendo el estilo y la paleta definida**, y que lo documente en SPEC.md
- Si hay un error que no puede resolver solo, pedile que te explique el problema y qué intentó antes de buscar otra solución
- El sitio no usa `iframe` para el mapa — si lo necesitan, agregar la sección en el prompt de contacto

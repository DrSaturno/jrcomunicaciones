# TASKS.md — JR Comunicación Website
## Breakdown de tareas por fase

---

## FASE 1 — Estructura base + Estilos globales

### T-001 · Setup del proyecto
- [x] Crear estructura de carpetas (css/, js/, img/)
- [x] Crear index.html con head completo (meta, fonts, CSS links, JS links)
- [x] Crear css/main.css con variables CSS y reset
- [x] Crear css/animations.css con clases reveal

### T-002 · Navegación
- [ ] HTML: nav sticky con logo + links + CTA
- [ ] CSS: estilos desktop + scroll state
- [ ] CSS: menú mobile (hamburger + overlay)
- [ ] JS: nav.js — scroll listener, active link, hamburger toggle

---

## FASE 2 — Secciones de contenido

### T-003 · Hero (#hero)
- [ ] HTML: estructura hero (eyebrow, headline, sub, btns, stats)
- [ ] CSS: hero.css — fondo negro, grid lines, círculo decorativo
- [ ] CSS: tipografía display + outline italic
- [ ] CSS: stats posicionamiento derecho
- [ ] CSS: responsive (headline scale, stats bajo en mobile)

### T-004 · Propuesta de Valor (#valor)
- [ ] HTML: 2 columnas — intro izquierda + card promesa + pilares derecha
- [ ] CSS: valor.css — grid, card negra, pilares con hover
- [ ] CSS: responsive (stack en mobile)

### T-005 · Metodología (#metodologia)
- [ ] HTML: intro 2 columnas + grid 3 pasos + proceso visual
- [ ] CSS: metodologia.css — numeración editorial, grid pasos, quote
- [ ] HTML/CSS: componente proceso (círculos SVG conectados o CSS puro)
- [ ] CSS: responsive

### T-006 · Servicios (#servicios)
- [ ] HTML: grid 3x2 con cada servicio + lista interna
- [ ] CSS: servicios.css — fondo negro, cards, hover rojo
- [ ] JS: servicios.js — accordeon click (uno a la vez, max-height transition)
- [ ] CSS: responsive (2 col tablet, 1 col mobile)

---

## FASE 3 — Portfolio

### T-007 · Portfolio filtros
- [ ] HTML: pills de filtro + grid de cards
- [ ] CSS: portfolio.css — pills, grid 1px gap, overlay
- [ ] JS: portfolio.js — array de datos, render dinámico de cards
- [ ] JS: lógica de filtrado por data-category
- [ ] JS: animación de entrada/salida de cards (opacity + transform)

### T-008 · Portfolio modal
- [ ] HTML: template del modal (overlay + panel)
- [ ] CSS: modal — slide-in desde derecha, overlay oscuro
- [ ] JS: apertura con datos dinámicos del item
- [ ] JS: cierre (X, overlay, Escape)
- [ ] JS: prevent body scroll
- [ ] CSS: responsive (full screen en mobile)

---

## FASE 4 — Clientes + Contacto + Footer

### T-009 · Clientes (#clientes)
- [ ] HTML: grid de logos
- [ ] CSS: clientes.css — grayscale + hover color, grid responsive
- [ ] Imágenes: logos en /img/clientes/ (preparar o usar placeholders)

### T-010 · Contacto (#contacto)
- [ ] HTML: 2 columnas — datos + formulario
- [ ] CSS: contacto.css — fondo negro, form styling, inputs
- [ ] JS: contacto.js — validación + submit + estados
- [ ] Integración: Formspree o EmailJS (config en SPEC.md)
- [ ] HTML: footer strip

---

## FASE 5 — Animaciones + Polish

### T-011 · Animaciones reveal
- [ ] JS: animations.js — IntersectionObserver setup
- [ ] Agregar clase `.reveal` + variantes a todos los elementos target
- [ ] CSS: keyframes para cada variante
- [ ] Test: performance en mobile

### T-012 · Detalles y polish
- [ ] Cursor rojo custom en desktop
- [ ] Smooth scroll verificación cross-browser
- [ ] Scroll progress bar (opcional — thin red line top of page)
- [ ] Hover states verificación completa
- [ ] Back to top button (aparece al bajar > 500px)

---

## FASE 6 — QA + Contenido real

### T-013 · QA responsive
- [ ] Test en 320px (iPhone SE)
- [ ] Test en 768px (iPad)
- [ ] Test en 1024px (iPad Pro landscape)
- [ ] Test en 1440px (Desktop estándar)
- [ ] Test en 1920px (Desktop wide)

### T-014 · QA cross-browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Safari iOS

### T-015 · Contenido real
- [ ] Reemplazar imágenes portfolio placeholder con trabajos reales
- [ ] Actualizar datos en portfolioItems[] (js/portfolio.js)
- [ ] Logos de clientes reales en /img/clientes/
- [ ] Verificar email del formulario
- [ ] Agregar Data Fiscal AFIP
- [ ] Revisar textos con cliente

### T-016 · SEO + Performance
- [ ] Optimizar imágenes (WebP donde sea posible)
- [ ] Agregar loading="lazy" en todas las imágenes
- [ ] Verificar meta tags
- [ ] Test de velocidad con Lighthouse
- [ ] Favicon

---

## ESTADO ACTUAL

| Fase | Estado |
|------|--------|
| Fase 1 — Base | ✅ Completada |
| Fase 2 — Contenido | ✅ Completada |
| Fase 3 — Portfolio | ✅ Completada |
| Fase 4 — Contacto | ✅ Completada |
| Fase 5 — Polish | ✅ Completada |
| Fase 6 — QA + Contenido | 🔲 Pendiente |

---

## CONVENCIONES

- Commits: `feat(seccion): descripción breve`
- Clases CSS: BEM modificado → `.bloque__elemento--modificador`
- Variables JS: camelCase
- IDs HTML: kebab-case (solo para anclas de navegación)
- Imágenes: `nombre-descriptivo-01.jpg` en minúsculas con guiones

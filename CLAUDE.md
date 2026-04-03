# CLAUDE.md — JR Comunicación Website
## Instrucciones para Claude Code

---

## CONTEXTO DEL PROYECTO

Estás construyendo el sitio web de **JR Comunicación**, una agencia de publicidad de Buenos Aires con más de 20 años de trayectoria. El sitio es una **Single Page Application** en HTML + CSS + Vanilla JS puro.

Lee **SPEC.md** antes de escribir cualquier código. Es la fuente de verdad para el diseño, los textos y los comportamientos.

Lee **TASKS.md** para saber en qué tarea trabajar y marcar como completada `[x]` cuando termines.

---

## REGLAS CRÍTICAS — LEE ANTES DE EMPEZAR

### Arquitectura
1. **Un solo `index.html`** — toda la estructura HTML va en un archivo
2. **CSS separado por sección** — cada sección tiene su CSS en `/css/nombre.css`
3. **JS separado por funcionalidad** — cada módulo JS en `/js/nombre.js`
4. **Sin frameworks** — cero React, Vue, Bootstrap, jQuery. Solo Vanilla JS y CSS puro
5. **Google Fonts** vía CDN en el `<head>`. Ninguna otra dependencia externa

### Estilos
6. **Variables CSS** — toda la paleta en `:root` en `css/main.css`. Nunca hardcodear colores en otros archivos
7. **`border-radius: 2px`** en cards y botones — editorial/industrial, no redondeado
8. **Sin sombras** (`box-shadow`) decorativas — solo bordes `1px solid var(--light)`
9. **Sin gradientes** decorativos
10. **Fuente Playfair Display** en todos los títulos de sección y números decorativos
11. **Fuente DM Sans** en todo el cuerpo, UI, labels

### Paleta de colores (respetar exactamente)
```css
--black:    #0a0a0a
--white:    #fafaf7
--cream:    #f5f0e8
--red:      #c8102e
--red-dark: #9b0b21
--gray:     #6b6b6b
--light:    #ebebeb
```

### HTML semántico
12. Usar tags semánticos: `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<main>`
13. Cada sección tiene `id` para ancla de navegación (ver SPEC.md sección 3)
14. `alt` descriptivo en todas las imágenes

### JavaScript
15. **Event delegation** donde sea posible (especialmente portfolio)
16. **IntersectionObserver** para animaciones reveal (NO usar scroll events directamente)
17. **Estado del modal** en objeto: `{ isOpen: false, currentItem: null }`
18. **Datos del portfolio** en array `portfolioItems[]` al inicio de `js/portfolio.js`

### Responsive
19. **Mobile first** en media queries: base = mobile, `@media (min-width: 768px)` para tablet, `@media (min-width: 1024px)` para desktop
20. **Imágenes**: siempre `max-width: 100%; height: auto`

---

## ORDEN DE CONSTRUCCIÓN

Seguir estrictamente el orden de fases en TASKS.md:

```
1. index.html (estructura completa vacía con todos los section IDs)
2. css/main.css (variables + reset + tipografía base)
3. css/animations.css
4. nav (HTML + CSS + JS)
5. hero (HTML + CSS)
6. valor (HTML + CSS)
7. metodologia (HTML + CSS)
8. servicios (HTML + CSS + JS accordeon)
9. portfolio (HTML + CSS + JS filtros + modal)
10. clientes (HTML + CSS)
11. contacto (HTML + CSS + JS form)
12. Polish: cursor, back-to-top, reveals
```

---

## TEXTOS CLAVE (usar exactamente)

### Hero
- Eyebrow: `Agencia de Comunicación · Buenos Aires · +20 años`
- Headline línea 1: `POTENCIAMOS`
- Headline línea 2: `TU MARCA` (en italic outline)
- Sub: `Somos el equipo que convierte estrategia en resultados. Branding, publicidad, digital y trade marketing para marcas que quieren destacarse.`
- CTA primario: `Ver Portfolio`
- CTA secundario: `Nuestra Metodología`
- Stats: `20+` / Años · `+200` / Proyectos · `6` / Disciplinas

### Metodología
- Paso 1: `BUSCAMOS / SU NECESIDAD`
- Paso 2: `CONSTRUIMOS / SU ESTRATEGIA`
- Paso 3: `ACTIVAMOS / SU MERCADO`

### Sección Valor — Promesa (card negra)
- Tag: `Nuestra Promesa`
- Título: `Resultados que ya conocemos`
- Texto: `Hemos transitado los mismos mercados como clientes y como proveedores. Entendemos qué necesita su marca, sabemos dónde está la oportunidad y ya lo hemos ejecutado. No probamos con su inversión: llegamos con el camino trazado.`

### Contacto
- Dirección: `Deán Funes 1279 - CP (1244)`
- Ciudad: `Ciudad Autónoma de Buenos Aires — Argentina`
- Teléfono: `+54 11 4304-6658`
- Email: `info@jrcomunicaciones.com.ar`

---

## ESTRUCTURA DEL index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <!-- meta charset, viewport, title, description -->
  <!-- Google Fonts: Playfair Display + DM Sans -->
  <!-- CSS: main.css, animations.css, nav.css, hero.css, valor.css,
           metodologia.css, servicios.css, portfolio.css, clientes.css, contacto.css -->
</head>
<body>
  <div id="cursor"></div>
  <div id="progress-bar"></div>

  <nav id="nav">...</nav>

  <main>
    <section id="hero">...</section>
    <section id="valor">...</section>
    <section id="metodologia">...</section>
    <section id="servicios">...</section>
    <section id="portfolio">...</section>
    <section id="clientes">...</section>
    <section id="contacto">...</section>
  </main>

  <footer>...</footer>

  <!-- Modal portfolio (fuera de main) -->
  <div id="portfolio-modal" class="modal" aria-hidden="true">...</div>

  <!-- Back to top -->
  <button id="back-to-top" aria-label="Volver arriba">↑</button>

  <!-- JS modules en orden -->
  <script src="js/nav.js"></script>
  <script src="js/animations.js"></script>
  <script src="js/servicios.js"></script>
  <script src="js/portfolio.js"></script>
  <script src="js/contacto.js"></script>
</body>
</html>
```

---

## COMPONENTE PORTFOLIO — Detalle técnico

### Array de datos (portfolioItems en js/portfolio.js)
```js
const portfolioItems = [
  {
    id: 1,
    title: "Identidad Visual Molinos",
    client: "Molinos Río de la Plata",
    category: "branding",
    img: "img/portfolio/portfolio-01.jpg",
    desc: "Desarrollo de manual de marca completo y sistema de papelería institucional para una de las marcas líderes del mercado de consumo masivo.",
    tags: ["Branding", "Manual de Marca", "Papelería"]
  },
  // ... resto de items según SPEC.md
];
```

### Render de cards
```js
function renderCards(items) {
  grid.innerHTML = items.map(item => `
    <div class="portfolio-item reveal reveal-up" data-category="${item.category}" data-id="${item.id}">
      <div class="portfolio-thumb">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <div class="portfolio-overlay">
          <span class="portfolio-cat">${item.category}</span>
          <h3 class="portfolio-title">${item.title}</h3>
          <button class="portfolio-btn" data-id="${item.id}">Ver Proyecto →</button>
        </div>
      </div>
    </div>
  `).join('');
}
```

### Filtrado
```js
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filtered = cat === 'all' ? portfolioItems : portfolioItems.filter(i => i.category === cat);
    renderCards(filtered);
    initReveal(); // re-inicializar observer en nuevas cards
  });
});
```

---

## COMPONENTE MODAL — Detalle técnico

```js
function openModal(id) {
  const item = portfolioItems.find(i => i.id === id);
  if (!item) return;
  
  modalTitle.textContent = item.title;
  modalClient.textContent = item.client;
  modalDesc.textContent = item.desc;
  modalImg.src = item.img;
  modalImg.alt = item.title;
  modalCat.textContent = item.category;
  modalTags.innerHTML = item.tags.map(t => `<span class="tag">${t}</span>`).join('');
  
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Event listeners
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
```

---

## FORMULARIO — Integración Formspree

```html
<form id="contact-form" action="https://formspree.io/f/REEMPLAZAR_CON_ID" method="POST">
```

```js
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      showMessage('success', '¡Mensaje enviado! Te respondemos en menos de 24hs hábiles.');
      form.reset();
    } else {
      throw new Error();
    }
  } catch {
    showMessage('error', 'Hubo un error. Por favor enviá un email a info@jrcomunicaciones.com.ar');
  } finally {
    btn.textContent = 'Enviar Consulta';
    btn.disabled = false;
  }
});
```

---

## ANIMACIONES REVEAL — Implementación

```css
/* css/animations.css */
.reveal {
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal-up    { transform: translateY(30px); }
.reveal-left  { transform: translateX(-30px); }
.reveal-right { transform: translateX(30px); }
.reveal-fade  { transform: none; }

.reveal.visible {
  opacity: 1;
  transform: translate(0);
}
```

```js
// js/animations.js
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);
```

---

## CHECKLIST ANTES DE ENTREGAR

- [ ] Todas las secciones visibles y con contenido
- [ ] Navegación funciona y hace smooth scroll
- [ ] Filtros de portfolio funcionan
- [ ] Modal abre y cierra correctamente
- [ ] Accordeon de servicios funciona
- [ ] Formulario valida y envía
- [ ] Responsive en 320px, 768px, 1024px, 1440px
- [ ] Sin errores en consola del navegador
- [ ] Imágenes con loading="lazy"
- [ ] TASKS.md actualizado con tareas completadas

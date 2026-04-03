# SPEC.md — JR Comunicación Website
## Versión 1.0 | Metodología SDD (Spec-Driven Development)

---

## 1. VISIÓN DEL PROYECTO

Rediseño completo del sitio web de **JR Comunicación**, agencia de publicidad con más de 20 años de trayectoria en Buenos Aires. El nuevo sitio es una **Single Page Application (SPA)** que reemplaza la arquitectura multi-página actual por una experiencia continua, moderna y de alto impacto visual.

**Dominio actual:** jrcomunicaciones.com.ar  
**Stack:** HTML5 + CSS3 + Vanilla JS (sin frameworks, máxima compatibilidad)  
**Tipo:** One-page website con anclas de navegación  

---

## 2. OBJETIVOS

- Transmitir **credibilidad y trayectoria** (+20 años) desde el primer scroll
- Comunicar la **propuesta de valor y diferencial** de la agencia de forma clara
- Mostrar la **metodología de trabajo** como argumento de venta
- Exhibir el **portfolio** con filtros por categoría y detalle en modal
- Generar **conversión directa** mediante CTA hacia contacto
- Diseño **editorial, premium, blanco/negro/rojo** — alejado del estilo corporativo genérico

---

## 3. ARQUITECTURA DE SECCIONES (ONE PAGE)

```
[NAV fija]
│
├── #hero          → Hero de impacto con headline, propuesta y stats
├── #valor         → Valor agregado, promesa y pilares diferenciales
├── #metodologia   → Cómo trabajamos (Buscamos → Construimos → Activamos)
├── #servicios     → Qué hacemos: Branding, Digital, Publicidad, Trade MKT, BTL, Stands
├── #portfolio     → Grilla de trabajos con filtros + modals de detalle
├── #clientes      → Logos de clientes
└── #contacto      → Datos de contacto + formulario + mapa
```

---

## 4. DISEÑO VISUAL

### 4.1 Paleta de colores
```css
--black:   #0a0a0a    /* fondo hero, elementos de peso */
--white:   #fafaf7    /* fondo principal */
--cream:   #f5f0e8    /* fondos de sección alternos */
--red:     #c8102e    /* acento principal, CTA, highlights */
--red-dark:#9b0b21    /* hover states */
--gray:    #6b6b6b    /* texto secundario */
--light:   #ebebeb    /* bordes, separadores */
```

### 4.2 Tipografía
```
Display / Títulos:  Playfair Display (serif) — 400, 700, 900
Cuerpo / UI:        DM Sans — 300, 400, 500
```
Fuente: Google Fonts CDN

### 4.3 Principios de diseño
- Editorial, sin gradientes decorativos
- Espaciado generoso (padding secciones: 7rem 5vw)
- Grid asimétrico donde aplica
- Bordes de 1px en cards (sin sombras)
- border-radius: 2px (casi cuadrado — industrial/editorial)
- Animaciones al scroll: fade-in + slide-up con IntersectionObserver
- Cursor rojo custom en desktop

### 4.4 Responsive breakpoints
```
Desktop:  > 1024px
Tablet:   768px – 1024px
Mobile:   < 768px
```

---

## 5. ESPECIFICACIÓN DE SECCIONES

### 5.1 NAV
- Logo circular (JR sobre fondo negro) + wordmark "COMUNICACIÓN"
- Links: Inicio / Metodología / Servicios / Portfolio / Contacto
- CTA button: "Hablemos" → ancla a #contacto
- Sticky con blur backdrop al hacer scroll
- Hamburger en mobile
- Línea inferior sutil al hacer scroll (border-bottom: 1px solid rgba(0,0,0,0.08))

### 5.2 HERO (#hero)
- Fondo: #0a0a0a
- Headline principal:
  ```
  POTENCIAMOS
  TU MARCA
  ```
  Tipografía: Playfair Display 900, ~8rem, color blanco
  Segunda línea en italic outline (color transparent, stroke blanco 40% opacity)
- Eyebrow: "Agencia de Comunicación · Buenos Aires · +20 años"
- Sub-texto: "Somos el equipo que convierte estrategia en resultados. Branding, publicidad, digital y trade marketing para marcas que quieren destacarse."
- 2 CTAs: [Ver Portfolio] (rojo) + [Nuestra Metodología] (ghost)
- Stats flotantes (derecha): "20+ Años" / "+200 Proyectos" / "6 Disciplinas"
- Background: líneas de grid verticales sutiles (repeating-linear-gradient)
- Círculo decorativo (outline rojo muy sutil, top-right)

### 5.3 VALOR AGREGADO (#valor)
Fondo: --cream
Layout: 2 columnas

**Columna izquierda:**
- Label: "Por qué elegirnos"
- Título: "No somos una agencia más. *Somos el equipo que ya lo hizo.*"
- Párrafo intro sobre los 20 años y perspectiva dual (clientes + proveedores)

**Columna derecha:**
- Card negra: "Nuestra Promesa" → texto sobre entender la necesidad, construir estrategia y activar mercado
- 4 pilares con numeración editorial:
  1. **Su Marca** — equipo multidisciplinario, mejores alternativas
  2. **Su Oportunidad** — +20 años explorando mercados
  3. **Su Mercado** — know-how para identificar consumidores actuales y potenciales
  4. **Su Imagen** — sabemos qué necesita, cómo hacerlo y ya lo hemos hecho

### 5.4 METODOLOGÍA (#metodologia)
Fondo: --white

**Intro 2 columnas:**
- Izquierda: label + título + párrafo
- Derecha: quote en itálica con border-left rojo

**Grid 3 columnas (pasos):**
```
01 BUSCAMOS       02 CONSTRUIMOS     03 ACTIVAMOS
Su Necesidad      Su Estrategia      Su Mercado

Analizamos su     La estrategia de   La comunicación
metodología de    impulso se arma    que se alcanza
trabajo...        mediante...        entre publicidad
                                    y marketing...
```
- Numeración: Playfair Display 900, 4rem, color --light (gris claro decorativo)
- Borde 1px separando cada columna
- Sin background de color

**Proceso visual — 6 engranajes:**
Reemplazar la imagen de engranajes con un componente CSS/SVG animado que muestre:
`Visión → Objetivos → Planificación → Estrategia → Trabajo en Equipo → Innovación → Crecimiento`
(círculos conectados con línea, cada uno se ilumina al hacer hover)

### 5.5 SERVICIOS (#servicios)
Fondo: --black (oscuro)

Label blanco + título blanco con acento rojo

Grid 3x2 de cards de servicio:
```
[BRANDING]        [DIGITAL]         [PUBLICIDAD]
Su Identidad      Su Presentación   Su Comunicación

[TRADE MKT]       [BTL]             [STANDS]
Su Punto de Venta Su Identidad      Diseño y Producción
```

Cada card:
- Hover: se ilumina border rojo, fondo pasa a rojo oscuro muy sutil
- Click: abre accordeon con lista de sub-servicios
- Ícono simple SVG por categoría

Lista de sub-servicios (accordeon):
- **Branding:** Logos, Manuales de Marca, Catálogos, Papelería, Carpetas, Folletería, Comunicaciones Internas, Packaging
- **Digital:** Diseño Web, E-commerce, Intranet/Portales, Newsletters, Flyers, Comunicación Digital, Presentaciones, DVDs Interactivos
- **Publicidad:** Avisos publicitarios, Campañas, Catálogos, Revistas, Publi Notas
- **Trade MKT:** Material POP, Exhibidores, Corporeos, Gigantografías, Ploteos/Vinilos, Catálogo de Venta
- **BTL:** Acciones Promocionales, Lanzamiento de Productos, Acciones de Imagen, Posicionamiento BTL
- **Stands:** Diseño de Stands, Producción, Montaje, Stands Modulares, Stands Personalizados

### 5.6 PORTFOLIO (#portfolio)
Fondo: --white

**Filtros:**
```
[Todos] [Branding] [Digital] [Publicidad] [Trade MKT] [BTL] [Stands]
```
- Pills con borde, activo fondo negro + texto blanco
- Filtrado con JS (data-category en cada card)
- Animación de reordenamiento (opacity + scale)

**Grid de trabajos:** 3 columnas, gap 1px (look editorial de revista)
Cada card:
```html
<div class="portfolio-item" data-category="branding">
  <div class="portfolio-thumb">
    <img src="img/portfolio/[nombre].jpg" alt="...">
    <div class="portfolio-overlay">
      <span class="portfolio-cat">Branding</span>
      <h3 class="portfolio-title">Nombre del Proyecto</h3>
      <button class="portfolio-btn">Ver Proyecto →</button>
    </div>
  </div>
</div>
```

**Modal de detalle:**
- Overlay oscuro (rgba 0,0,0,0.85)
- Panel derecho deslizable (slide-in desde derecha)
- Contenido:
  - Imagen principal grande
  - Categoría (tag rojo)
  - Título del proyecto
  - Cliente
  - Descripción del trabajo
  - Tags de disciplinas usadas
  - [Cerrar X] en esquina superior
- Cierre: click en overlay, click en X, tecla Escape

**Datos de portfolio (placeholder — reemplazar con trabajos reales):**
```js
const portfolioItems = [
  { id:1, title:"Identidad Visual Molinos", client:"Molinos Río de la Plata", category:"branding", img:"portfolio-01.jpg", desc:"Desarrollo de manual de marca y papelería institucional.", tags:["Branding","Diseño","Manual de Marca"] },
  { id:2, title:"Campaña Digital Swell", client:"Swell", category:"digital", img:"portfolio-02.jpg", desc:"Campaña de comunicación digital para lanzamiento de temporada.", tags:["Digital","Campaña","Redes Sociales"] },
  { id:3, title:"Trade MKT Roman", client:"Roman", category:"trade", img:"portfolio-03.jpg", desc:"Material de punto de venta y exhibidores para canal retail.", tags:["Trade MKT","POP","Exhibidores"] },
  { id:4, title:"Stand Lightech Exposición", client:"Lightech", category:"stands", img:"portfolio-04.jpg", desc:"Diseño y producción de stand para feria internacional.", tags:["Stands","Producción","Diseño"] },
  { id:5, title:"BTL Corrientes Intensa", client:"Corrientes Intensa", category:"btl", img:"portfolio-05.jpg", desc:"Acción BTL de lanzamiento de producto en puntos estratégicos.", tags:["BTL","Activación","Lanzamiento"] },
  { id:6, title:"Campaña Gráfica Bar&Drinks", client:"Bar&Drinks", category:"publicidad", img:"portfolio-06.jpg", desc:"Desarrollo de campaña gráfica para medios y punto de venta.", tags:["Publicidad","Gráfica","Campaña"] },
  { id:7, title:"Identidad Puerto Madero", client:"Puerto Madero", category:"branding", img:"portfolio-07.jpg", desc:"Branding institucional y señalética.", tags:["Branding","Señalética"] },
  { id:8, title:"E-commerce ITE Logistics", client:"ITE Logistics", category:"digital", img:"portfolio-08.jpg", desc:"Plataforma digital y catálogo online.", tags:["Digital","E-commerce"] },
  { id:9, title:"Activación Swell Temporada", client:"Swell", category:"btl", img:"portfolio-09.jpg", desc:"Activación en puntos de venta clave durante temporada alta.", tags:["BTL","Activación"] }
];
```

### 5.7 CLIENTES (#clientes)
Fondo: --cream

Título + párrafo intro

Grid de logos en escala de grises (filter: grayscale(100%)):
- Hover: color real + escala 1.05
- Clientes: Vitale (Juego de Apuestas), Molinos, Roman, Lightech, Swell, Puerto Madero, Corrientes Intensa, Bar&Drinks, ITE Logistics

### 5.8 CONTACTO (#contacto)
Fondo: --black

Layout 2 columnas:

**Columna izquierda:**
- Label + título + párrafo
- Datos de contacto:
  - 📍 Deán Funes 1279 - CP (1244), CABA, Argentina
  - 📞 +54 11 4304-6658
  - ✉️ info@jrcomunicaciones.com.ar
- Horario: Lun–Vie 9:00 a 18:00 hs
- Ícono Data Fiscal (AFIP)

**Columna derecha:**
- Formulario de contacto:
  - Nombre
  - Empresa
  - Email
  - Teléfono
  - Servicio de interés (select: Branding / Digital / Publicidad / Trade MKT / BTL / Stands / Consulta General)
  - Mensaje
  - [Enviar Consulta] → button rojo
- Nota: "Respondemos en menos de 24 horas hábiles"

**Footer strip:**
- Copyright 2024 JR Comunicación
- Links legales
- Redes sociales (si existen)

---

## 6. COMPORTAMIENTOS JS

### 6.1 Navegación
```js
// Smooth scroll a anclas
// Active link highlight según sección visible (IntersectionObserver)
// Nav cambia de estilo al pasar 80px de scroll
// Hamburger toggle en mobile
```

### 6.2 Animaciones al scroll
```js
// IntersectionObserver en todos los elementos con clase .reveal
// Clases: .reveal-up, .reveal-left, .reveal-right, .reveal-fade
// threshold: 0.15, una sola vez (unobserve después de activar)
```

### 6.3 Portfolio
```js
// Filtrado por data-category
// Animación de salida/entrada de cards
// Apertura de modal con datos dinámicos
// Cierre de modal (overlay click, X click, Escape key)
// Prevent body scroll cuando modal abierto
```

### 6.4 Servicios accordeon
```js
// Click en card → toggle de lista de sub-servicios
// Solo uno abierto a la vez
// Animación de altura con max-height transition
```

### 6.5 Formulario
```js
// Validación básica HTML5 + custom
// Estado loading en el botón al enviar
// Mensaje de éxito/error inline
// (Backend: integrar con servicio de email — Formspree, EmailJS, o backend propio)
```

---

## 7. ESTRUCTURA DE ARCHIVOS

```
jr-comunicacion/
├── index.html              ← Toda la estructura HTML one-page
├── css/
│   ├── main.css            ← Estilos globales, variables, base
│   ├── nav.css             ← Navegación y mobile menu
│   ├── hero.css            ← Sección hero
│   ├── valor.css           ← Propuesta de valor
│   ├── metodologia.css     ← Metodología
│   ├── servicios.css       ← Grid de servicios
│   ├── portfolio.css       ← Portfolio, filtros, modal
│   ├── clientes.css        ← Logos de clientes
│   ├── contacto.css        ← Contacto y footer
│   └── animations.css      ← Clases de animación (reveal)
├── js/
│   ├── nav.js              ← Sticky nav, scroll highlight, hamburger
│   ├── animations.js       ← IntersectionObserver reveals
│   ├── servicios.js        ← Accordeon de servicios
│   ├── portfolio.js        ← Filtros + modal
│   └── contacto.js         ← Formulario
├── img/
│   ├── logo-jr.svg         ← Logo vectorial
│   ├── clientes/           ← Logos de clientes (SVG/PNG)
│   └── portfolio/          ← Imágenes de trabajos (JPG, 800x600 min)
└── SPEC.md                 ← Este archivo
```

---

## 8. DEPENDENCIAS EXTERNAS

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">

<!-- NO hay frameworks JS ni CSS externos -->
<!-- Todo en Vanilla JS + CSS puro -->
```

---

## 9. SEO Y META

```html
<meta name="description" content="JR Comunicación — Agencia de publicidad y marketing con más de 20 años en Buenos Aires. Branding, digital, publicidad, trade marketing y diseño de stands.">
<meta name="keywords" content="agencia de publicidad Buenos Aires, branding, marketing digital, trade marketing, diseño de stands, comunicación corporativa">
<meta property="og:title" content="JR Comunicación — Agencia de Publicidad Buenos Aires">
<meta property="og:description" content="Más de 20 años potenciando marcas. Branding, digital, publicidad y trade marketing.">
<meta property="og:image" content="img/og-image.jpg">
<meta property="og:url" content="https://jrcomunicaciones.com.ar">
```

---

## 10. NOTAS DE IMPLEMENTACIÓN

1. **Imágenes de portfolio:** Las imágenes actuales del sitio viejo deben ser reutilizadas o reemplazadas. Carpeta `img/portfolio/` con naming `portfolio-01.jpg` a `portfolio-09.jpg`.
2. **Formulario backend:** El form puede conectarse a Formspree (https://formspree.io) agregando `action="https://formspree.io/f/[ID]"` — sin backend propio.
3. **Mapa de Google:** Embed iframe de Google Maps apuntando a Deán Funes 1279, CABA.
4. **Data Fiscal:** Imagen de AFIP se descarga desde https://serviciosweb.afip.gob.ar/genericos/comprobantes/comprobanteComprasIVA.aspx
5. **Performance:** Todas las imágenes deben tener `loading="lazy"`. Fonts con `display=swap`.

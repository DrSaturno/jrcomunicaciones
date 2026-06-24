// js/portfolio.js — Filtros + Modal

const portfolioItems = [
  {
    id: 30,
    title: "Casamar",
    client: "Casamar",
    category: "all",
    img: "img/casamar.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: []
  },
  {
    id: 31,
    title: "Gobierno de la Ciudad de Buenos Aires",
    client: "Gobierno de la Ciudad de Buenos Aires",
    category: "all",
    img: "img/gobierno de la ciudad de buenos aires.png",
    desc: "Campaña de comunicación institucional para el Gobierno de la Ciudad de Buenos Aires.",
    tags: []
  },
  {
    id: 32,
    title: "Sub Secretaria de Deportes de la Ciudad",
    client: "Sub Secretaria de Deportes de la Ciudad",
    category: "all",
    img: "img/sub secretaria de deportes de la ciudad.png",
    desc: "Campaña de comunicación institucional para la Sub Secretaria de Deportes de la Ciudad.",
    tags: []
  },
  {
    id: 33,
    title: "Consejo de la Magistratura",
    client: "Consejo de la Magistratura",
    category: "all",
    img: "img/consejo de la magistratura.png",
    desc: "Campaña de comunicación institucional para el Consejo de la Magistratura.",
    tags: []
  },
  {
    id: 34,
    title: "Pan American Energy",
    client: "Pan American Energy",
    category: "all",
    img: "img/pan american energy.png",
    desc: "Campaña de comunicación corporativa para Pan American Energy.",
    tags: []
  },
  {
    id: 35,
    title: "AUSA Autopistas Urbanas",
    client: "AUSA Autopistas Urbanas",
    category: "all",
    img: "img/ausa autopistas urbanas.png",
    desc: "Campaña de comunicación institucional para AUSA Autopistas Urbanas.",
    tags: []
  },
  {
    id: 36,
    title: "Ministerio de Movilidad e Infraestructura",
    client: "Ministerio de Movilidad e Infraestructura",
    category: "all",
    img: "img/ministerio de movilidad e infre estructura.png",
    desc: "Campaña de comunicación institucional para el Ministerio de Movilidad e Infraestructura.",
    tags: []
  }
];

// Estado del modal
const modalState = { isOpen: false, currentItem: null };

let currentLimit = Infinity;
const MOBILE_BREAKPOINT = 767;

// Elementos
const grid         = document.getElementById('portfolio-grid');
const filterBtns   = document.querySelectorAll('.portfolio__filter');
const actionsWrap  = document.getElementById('portfolio-actions');
const loadMoreBtn  = document.getElementById('load-more-btn');
const modal        = document.getElementById('portfolio-modal');
const modalImg     = document.getElementById('modal-img');
const modalCat     = document.getElementById('modal-cat');
const modalTitle   = document.getElementById('modal-title');
const modalClient  = document.getElementById('modal-client');
const modalDesc    = document.getElementById('modal-desc');
const modalTags    = document.getElementById('modal-tags');
const modalClose   = document.querySelector('.modal__close');
const modalOverlay = modal ? modal.querySelector('.modal__overlay') : null;

// ── Render ──────────────────────────────────────────────────────
function renderCards(items) {
  if (!grid) return;

  const total = items.length;
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  
  // Si estamos en mobile y no hemos "cargado más", limitamos a 12
  const displayItems = items.slice(0, currentLimit);

  grid.innerHTML = displayItems.map(item => `
    <div class="portfolio-item reveal reveal-up" data-category="${item.category}" data-id="${item.id}">
      <div class="portfolio-thumb">
        <img src="${item.img}" alt="${item.title}" class="portfolio-img--${item.category}" loading="lazy" onerror="this.style.backgroundColor='#1a1a1a'">
        <div class="portfolio-overlay">
          <h3 class="portfolio-title">${item.title}</h3>
          <button class="portfolio-btn" data-id="${item.id}">Ver Proyecto →</button>
        </div>
      </div>
    </div>
  `).join('');

  // Mostrar/Ocultar botón de Cargar Más
  if (actionsWrap) {
    if (displayItems.length < total) {
      actionsWrap.style.display = 'flex';
    } else {
      actionsWrap.style.display = 'none';
    }
  }

  // Re-inicializar reveals
  if (typeof initReveal === 'function') initReveal();
}

// ── Filtros ──────────────────────────────────────────────────────
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Resetear límite al filtrar
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      currentLimit = 12;
    } else {
      currentLimit = Infinity;
    }

    updateView();
  });
});

// ── Load More ───────────────────────────────────────────────────
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    currentLimit += 12;
    updateView();
  });
}

function updateView() {
  const activeBtn = Array.from(filterBtns).find(b => b.classList.contains('active'));
  const cat = activeBtn ? activeBtn.dataset.filter : 'all';
  
  const filtered = cat === 'all'
    ? portfolioItems
    : portfolioItems.filter(i => i.category === cat);

  renderCards(filtered);
}

// ── Event delegation para cards ──────────────────────────────────
if (grid) {
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.portfolio-btn, .portfolio-item');
    if (!btn) return;
    const id = parseInt(btn.dataset.id);
    if (id) openModal(id);
  });
}

// ── Modal ────────────────────────────────────────────────────────
function openModal(id) {
  const item = portfolioItems.find(i => i.id === id);
  if (!item || !modal) return;

  modalState.isOpen = true;
  modalState.currentItem = item;

  modalImg.src    = item.img;
  modalImg.alt    = item.title;
  modalCat.textContent    = item.category.toUpperCase();
  modalTitle.textContent  = item.title;
  modalClient.textContent = item.client;
  modalDesc.textContent   = item.desc;
  modalTags.innerHTML     = item.tags.map(t => `<span class="tag">${t}</span>`).join('');

  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Scroll al tope del panel
  const panel = modal.querySelector('.modal__panel');
  if (panel) panel.scrollTop = 0;
}

function closeModal() {
  if (!modal) return;
  modalState.isOpen = false;
  modalState.currentItem = null;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Cierre por botón X
if (modalClose) modalClose.addEventListener('click', closeModal);

// Cierre por overlay
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

// Cierre por Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalState.isOpen) closeModal();
});

// ── Init ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    currentLimit = 12;
  } else {
    currentLimit = Infinity;
  }
  updateView();
});

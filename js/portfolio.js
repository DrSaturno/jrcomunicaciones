// js/portfolio.js — Filtros + Modal

const portfolioItems = [

  {
    id: 10,
    title: "Desarrollo de Marca 01",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo1.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 11,
    title: "Desarrollo de Marca 02",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo2.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 12,
    title: "Desarrollo de Marca 03",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo3.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 13,
    title: "Desarrollo de Marca 04",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo4.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 14,
    title: "Desarrollo de Marca 05",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo5.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 15,
    title: "Desarrollo de Marca 06",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo6.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 16,
    title: "Desarrollo de Marca 07",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo7.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 17,
    title: "Desarrollo de Marca 08",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo8.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 18,
    title: "Desarrollo de Marca 09",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo9.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 19,
    title: "Desarrollo de Marca 10",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo10.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 20,
    title: "Desarrollo de Marca 11",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo11.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 21,
    title: "Desarrollo de Marca 12",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo12.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 22,
    title: "Desarrollo de Marca 13",
    client: "Cliente Branding",
    category: "branding",
    img: "img/logo13.png",
    desc: "Diseño integral de logotipo e identidad visual corporativa.",
    tags: ["Branding", "Logo", "Identidad"]
  },
  {
    id: 23,
    title: "Proyecto Digital 01",
    client: "Cliente Digital",
    category: "digital",
    img: "img/web1.png",
    desc: "Desarrollo web y presencia digital optimizada.",
    tags: ["Digital", "Web", "UI/UX"]
  },
  {
    id: 24,
    title: "Proyecto Digital 02",
    client: "Cliente Digital",
    category: "digital",
    img: "img/web2.png",
    desc: "Desarrollo web y presencia digital optimizada.",
    tags: ["Digital", "Web", "UI/UX"]
  },
  {
    id: 25,
    title: "Proyecto Digital 03",
    client: "Cliente Digital",
    category: "digital",
    img: "img/web3.png",
    desc: "Desarrollo web y presencia digital optimizada.",
    tags: ["Digital", "Web", "UI/UX"]
  },
  {
    id: 26,
    title: "Proyecto Digital 04",
    client: "Cliente Digital",
    category: "digital",
    img: "img/web4.png",
    desc: "Desarrollo web y presencia digital optimizada.",
    tags: ["Digital", "Web", "UI/UX"]
  },
  {
    id: 27,
    title: "Proyecto Digital 05",
    client: "Cliente Digital",
    category: "digital",
    img: "img/web5.png",
    desc: "Desarrollo web y presencia digital optimizada.",
    tags: ["Digital", "Web", "UI/UX"]
  },
  {
    id: 28,
    title: "Proyecto Digital 06",
    client: "Cliente Digital",
    category: "digital",
    img: "img/web6.png",
    desc: "Desarrollo web y presencia digital optimizada.",
    tags: ["Digital", "Web", "UI/UX"]
  },
  {
    id: 29,
    title: "Proyecto Digital 07",
    client: "Cliente Digital",
    category: "digital",
    img: "img/web7.png",
    desc: "Desarrollo web y presencia digital optimizada.",
    tags: ["Digital", "Web", "UI/UX"]
  }
];

// Estado del modal
const modalState = { isOpen: false, currentItem: null };

// Elementos
const grid        = document.getElementById('portfolio-grid');
const filterBtns  = document.querySelectorAll('.portfolio__filter');
const modal       = document.getElementById('portfolio-modal');
const modalImg    = document.getElementById('modal-img');
const modalCat    = document.getElementById('modal-cat');
const modalTitle  = document.getElementById('modal-title');
const modalClient = document.getElementById('modal-client');
const modalDesc   = document.getElementById('modal-desc');
const modalTags   = document.getElementById('modal-tags');
const modalClose  = document.querySelector('.modal__close');
const modalOverlay = modal ? modal.querySelector('.modal__overlay') : null;

// ── Render ──────────────────────────────────────────────────────
function renderCards(items) {
  if (!grid) return;

  grid.innerHTML = items.map(item => `
    <div class="portfolio-item reveal reveal-up" data-category="${item.category}" data-id="${item.id}">
      <div class="portfolio-thumb">
        <img src="${item.img}" alt="${item.title}" class="portfolio-img--${item.category}" loading="lazy" onerror="this.style.backgroundColor='#1a1a1a'">
        <div class="portfolio-overlay">
          <span class="portfolio-cat">${item.category}</span>
          <h3 class="portfolio-title">${item.title}</h3>
          <button class="portfolio-btn" data-id="${item.id}">Ver Proyecto →</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-inicializar reveals
  if (typeof initReveal === 'function') initReveal();
}

// ── Filtros ──────────────────────────────────────────────────────
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const cat = btn.dataset.filter;

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filtered = cat === 'all'
      ? portfolioItems
      : portfolioItems.filter(i => i.category === cat);

    renderCards(filtered);
  });
});

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
  renderCards(portfolioItems);
});

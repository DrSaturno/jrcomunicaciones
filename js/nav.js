// js/nav.js — Sticky nav, scroll highlight, hamburger, progress bar, back-to-top, cursor

document.addEventListener('DOMContentLoaded', () => {
  const nav         = document.getElementById('nav');
  const hamburger   = document.querySelector('.nav__hamburger');
  const mobileMenu  = document.querySelector('.nav__mobile');
  const navLinks    = document.querySelectorAll('.nav__link');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link');
  const progressBar = document.getElementById('progress-bar');
  const backToTop   = document.getElementById('back-to-top');
  const cursor      = document.getElementById('cursor');

  // ── Scroll progress bar ────────────────────────────────────────
  function updateProgress() {
    if (!progressBar) return;
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // ── Nav scrolled state ─────────────────────────────────────────
  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  // ── Back to top ────────────────────────────────────────────────
  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Active nav link con IntersectionObserver ───────────────────
  const sections = document.querySelectorAll('main section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => sectionObserver.observe(s));

  // ── Smooth scroll en links ─────────────────────────────────────
  function smoothScrollTo(href) {
    const target = document.querySelector(href);
    if (!target) return;
    const navH = nav ? nav.offsetHeight : 70;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      e.preventDefault();
      smoothScrollTo(href);
      // Cerrar mobile menu si está abierto
      if (mobileMenu && mobileMenu.getAttribute('aria-hidden') === 'false') {
        closeMobileMenu();
      }
    });
  });

  // ── Hamburger + Mobile menu ────────────────────────────────────
  function openMobileMenu() {
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }

  function closeMobileMenu() {
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  // Cerrar mobile con links
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => closeMobileMenu());
  });

  // ── Cursor custom ──────────────────────────────────────────────
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
    });
  }

  // ── Scroll handler único ───────────────────────────────────────
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateNav();
        updateProgress();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Init
  updateNav();
  updateProgress();
  updateBackToTop();
});

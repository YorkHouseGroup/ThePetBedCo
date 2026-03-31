/* ============================================
   ThePetBedCo — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  /* ---- Scroll-aware nav ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ---- Mobile hamburger ---- */
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Scroll reveal (Intersection Observer) ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ---- Email capture forms ---- */
  document.querySelectorAll('.email-capture-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const wrapper = form.closest('.email-capture-wrapper');
      if (wrapper) {
        const thanks = wrapper.querySelector('.email-thanks');
        if (thanks) {
          form.style.display = 'none';
          thanks.classList.add('visible');
        }
      }
    });
  });

  /* ---- Footer email forms ---- */
  document.querySelectorAll('.footer-email-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      if (btn) {
        btn.textContent = 'Thanks! ✓';
        btn.style.background = '#2C3E2D';
      }
    });
  });

  /* ---- Contact form ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const wrapper = contactForm.closest('.contact-form-wrapper');
      if (wrapper) {
        contactForm.style.display = 'none';
        const success = wrapper.querySelector('.form-success');
        if (success) success.classList.add('visible');
      }
    });
  }

  /* ---- Notify Me modal ---- */
  const modal = document.getElementById('notify-modal');
  const modalOverlay = document.getElementById('modal-overlay');

  function openModal(productName) {
    if (!modal || !modalOverlay) return;
    const titleEl = modal.querySelector('.modal__product-name');
    if (titleEl && productName) titleEl.textContent = productName;
    // reset state
    const form = modal.querySelector('.modal-notify-form');
    const thanks = modal.querySelector('.modal__thanks');
    if (form) form.style.display = '';
    if (thanks) thanks.classList.remove('visible');
    const emailInput = modal.querySelector('input[type="email"]');
    if (emailInput) emailInput.value = '';
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  const modalCloseBtn = document.querySelector('.modal__close');
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  document.querySelectorAll('.notify-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const productName = btn.dataset.product || 'this product';
      openModal(productName);
    });
  });

  const notifyForm = document.getElementById('notify-form');
  if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = document.querySelector('.modal-notify-form');
      const thanks = modal.querySelector('.modal__thanks');
      if (form) form.style.display = 'none';
      if (thanks) thanks.classList.add('visible');
    });
  }

  /* ---- Product filters ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');
  if (filterBtns.length && productCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        productCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
            setTimeout(() => { card.style.opacity = '1'; card.style.transform = ''; }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();

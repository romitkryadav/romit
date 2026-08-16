/**
 * Romit's Personal Website — UI & Interaction Engine
 * Content is now static HTML in each page for SEO.
 * This file handles only: theme, mobile menu, animations,
 * cursor glow, scroll progress, ripple, and modals.
 */

// ==========================================
// 1. CURSOR GLOW
// ==========================================

function initCursorGlow() {
  const isTouchDevice = window.matchMedia('(hover: none)').matches;
  if (isTouchDevice) return;

  const glow = document.createElement('div');
  glow.classList.add('cursor-glow');
  document.body.appendChild(glow);

  let mouseX = -500, mouseY = -500;
  let currentX = -500, currentY = -500;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });

  (function animateGlow() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    glow.style.transform = `translate(${currentX - 190}px, ${currentY - 190}px)`;
    requestAnimationFrame(animateGlow);
  })();
}

// ==========================================
// 2. SCROLL PROGRESS BAR
// ==========================================

function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width  = docHeight > 0 ? `${(scrollTop / docHeight) * 100}%` : '0%';
  }, { passive: true });
}

// ==========================================
// 3. NAV SCROLL SHRINK
// ==========================================

function initNavScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ==========================================
// 4. SCROLL REVEAL (Intersection Observer)
// ==========================================

function initScrollReveal() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(':scope > *').forEach(child => child.classList.add('in-view'));
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.stagger-children').forEach(el => staggerObserver.observe(el));
}

// ==========================================
// 5. BUTTON RIPPLE
// ==========================================

function initRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-ripple');
    if (!btn) return;
    const circle = document.createElement('span');
    circle.classList.add('ripple-circle');
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(circle);
    circle.addEventListener('animationend', () => circle.remove());
  });
}

// ==========================================
// 6. THEME TOGGLE
// ==========================================

function initTheme() {
  const saved  = localStorage.getItem('romit_theme');
  const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) document.documentElement.classList.add('dark');

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const isNowDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('romit_theme', isNowDark ? 'dark' : 'light');
      if (window.lucide) lucide.createIcons();
    });
  }
}

// ==========================================
// 7. MOBILE MENU
// ==========================================

function initMobileMenu() {
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
}

// ==========================================
// 8. PROJECT FILTER (projects.html only)
// ==========================================

function initProjectFilter() {
  const grid = document.getElementById('all-projects-grid');
  if (!grid) return;

  document.querySelectorAll('.project-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button styles
      document.querySelectorAll('.project-filter-btn').forEach(b => {
        b.classList.remove('bg-white', 'dark:bg-stone-800', 'text-stone-900', 'dark:text-white', 'shadow-2xs', 'font-semibold');
        b.classList.add('text-stone-600', 'dark:text-stone-400');
      });
      btn.classList.add('bg-white', 'dark:bg-stone-800', 'text-stone-900', 'dark:text-white', 'shadow-2xs', 'font-semibold');
      btn.classList.remove('text-stone-600', 'dark:text-stone-400');

      // Show/hide cards by data-category
      const cat = btn.getAttribute('data-category');
      grid.querySelectorAll('article[data-category]').forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

// ==========================================
// 9. ENTRY MODAL (experiences.html)
// ==========================================

function openEntry(templateId) {
  const tpl     = document.getElementById(templateId);
  const modal   = document.getElementById('article-modal');
  const content = document.getElementById('modal-article-content');
  if (!tpl || !modal || !content) return;

  // Clone template content into modal
  content.innerHTML = '';
  content.appendChild(tpl.content.cloneNode(true));

  const innerBox = modal.querySelector('[data-modal-box]');
  openModal(modal, innerBox);
}

// ==========================================
// 10. MODAL HELPERS
// ==========================================

function openModal(backdropEl, boxEl) {
  backdropEl.classList.remove('hidden');
  backdropEl.classList.add('flex', 'modal-backdrop');
  boxEl.classList.add('modal-box');
  boxEl.classList.remove('closing');
  backdropEl.classList.remove('closing');
  document.body.style.overflow = 'hidden';
}

function closeModal(backdropEl, boxEl) {
  backdropEl.classList.add('closing');
  boxEl.classList.add('closing');
  setTimeout(() => {
    backdropEl.classList.add('hidden');
    backdropEl.classList.remove('flex', 'modal-backdrop', 'closing');
    boxEl.classList.remove('modal-box', 'closing');
    document.body.style.overflow = '';
  }, 230);
}

function initModalClose() {
  const projModal = document.getElementById('project-modal');
  const artModal  = document.getElementById('article-modal');

  if (projModal) {
    const innerBox = projModal.querySelector('[data-modal-box]');
    const closeBtn = document.getElementById('close-project-modal');
    if (closeBtn && innerBox) closeBtn.onclick = () => closeModal(projModal, innerBox);
    projModal.addEventListener('click', e => { if (e.target === projModal) closeModal(projModal, innerBox); });
  }

  if (artModal) {
    const innerBox = artModal.querySelector('[data-modal-box]');
    const closeBtn = document.getElementById('close-article-modal');
    if (closeBtn && innerBox) closeBtn.onclick = () => closeModal(artModal, innerBox);
    artModal.addEventListener('click', e => { if (e.target === artModal) closeModal(artModal, innerBox); });
  }

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (projModal && !projModal.classList.contains('hidden'))
      closeModal(projModal, projModal.querySelector('[data-modal-box]'));
    if (artModal && !artModal.classList.contains('hidden'))
      closeModal(artModal, artModal.querySelector('[data-modal-box]'));
  });
}

// ==========================================
// 10. CONTACT FORM & CLIPBOARD
// ==========================================

function initContactForm() {
  const form      = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnText   = document.getElementById('form-btn-text');
  const spinner   = document.getElementById('form-spinner');
  const successMsg = document.getElementById('form-success-msg');
  const errorMsg   = document.getElementById('form-error-msg');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Show loading state
      submitBtn.disabled = true;
      btnText.textContent = 'Sending…';
      spinner.classList.remove('hidden');
      successMsg.classList.add('hidden');
      errorMsg.classList.add('hidden');

      try {
        const data = new FormData(form);
        const res  = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          // Success — show message, reset form
          form.reset();
          successMsg.classList.remove('hidden');
          successMsg.style.animation = 'heroFadeUp 0.4s ease forwards';
        } else {
          errorMsg.classList.remove('hidden');
        }
      } catch {
        errorMsg.classList.remove('hidden');
      } finally {
        // Restore button
        submitBtn.disabled = false;
        btnText.textContent = 'Send Message';
        spinner.classList.add('hidden');
      }
    });
  }

  // Copy email button
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText('romitkryadav@proton.me');
      copyBtn.innerText = 'Copied!';
      copyBtn.style.color = '#10b981';
      setTimeout(() => { copyBtn.innerText = 'Copy'; copyBtn.style.color = ''; }, 2000);
    };
  }
}

// ==========================================
// 11. INIT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initCursorGlow();
  initScrollProgress();
  initNavScroll();
  initScrollReveal();
  initRipple();
  initProjectFilter();
  initContactForm();
  initModalClose();

  if (window.lucide) lucide.createIcons();
});

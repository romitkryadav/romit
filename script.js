/**
 * Romit's Personal Website — Animation & Interaction Engine
 */

// ==========================================
// 1. DATA SOURCES
// ==========================================

const projectsData = [
  {
    id: 'metatag-lens',
    title: 'ThreadsGrab ',
    tagline: 'Threads Downloader & Follower Counter',
    description: 'A developer & SEO utility that fetches live meta tags, OpenGraph images, and Twitter Cards to preview how URLs look on Google, X, Facebook, and LinkedIn.',
    problemSolved: 'Eliminates guesswork before publishing articles by showing instant pixel-accurate SERP previews and OpenGraph rendering warnings.',
    category: 'seo-utility',
    categoryLabel: 'SEO Utility',
    status: 'live',
    date: '2026',
    techStack: ['TypeScript', 'Vite', 'Tailwind CSS', 'DOMParser'],
    screenshot: 'https://romitkryadav.fbviddl.com/projects/threadsgrab-project.png',
    demoUrl: 'https://github.com/romityadav',
    githubUrl: 'https://github.com/romityadav',
  },
  {
    id: 'clean-slug-generator',
    title: 'CleanSlug Engine',
    tagline: 'Internationalized Unicode-Safe URL Slugifier',
    description: 'A lightning-fast client-side string slugifier supporting multi-language transliteration, stopword filtering, and canonical URL structure validation.',
    problemSolved: 'Stops messy special characters and accents from breaking CMS permalinks and creates clean, keyword-dense URLs for SEO.',
    category: 'developer-tool',
    categoryLabel: 'Developer Tool',
    status: 'live',
    date: '2026',
    techStack: ['JavaScript', 'Web Workers', 'RegEx'],
    screenshot: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://github.com/romityadav',
    githubUrl: 'https://github.com/romityadav',
  },
  {
    id: 'svg-path-smoother',
    title: 'VectorPath Mini',
    tagline: 'In-Browser SVG Path Optimizer & Minifier',
    description: 'A lightweight canvas-powered tool to strip unnecessary vector precision decimals, convert absolute coordinates to relative, and shave 40%+ off SVG file weights.',
    problemSolved: 'Shrinks asset bundle payloads for modern frontend apps without needing heavy Node build pipelines.',
    category: 'web-tool',
    categoryLabel: 'Web Tool',
    status: 'live',
    date: '2025',
    techStack: ['TypeScript', 'Canvas API', 'Tailwind'],
    screenshot: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://github.com/romityadav',
    githubUrl: 'https://github.com/romityadav',
  },
  {
    id: 'contrast-ratio-lab',
    title: 'ContrastRatio Lab',
    tagline: 'WCAG AA/AAA Color Palette & Contrast Validator',
    description: 'An interactive color analyzer that verifies foreground and background combinations against WCAG 2.1 standards in real time.',
    problemSolved: 'Prevents hard-to-read websites and guarantees accessibility compliance across light and dark modes.',
    category: 'developer-tool',
    categoryLabel: 'Developer Tool',
    status: 'live',
    date: '2025',
    techStack: ['TypeScript', 'Chroma.js', 'CSS Variables'],
    screenshot: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
    demoUrl: 'https://github.com/romityadav',
    githubUrl: 'https://github.com/romityadav',
  }
];

const experiencesData = [
  {
    id: 'why-my-first-three-tools-failed',
    title: 'Why My First 3 Micro-Tools Got Zero Users (And What I Changed)',
    category: 'failures',
    categoryLabel: 'Failures & Lessons',
    publishedAt: 'Aug 10, 2026',
    readTime: '4 min read',
    excerpt: 'Building in a vacuum vs solving sharp pain points. A candid breakdown of why clean code is meaningless if nobody actually searches for the problem.',
    takeaways: [
      'Validate search query intent before writing a single line of React code.',
      'A utility that saves 5 seconds once a month has low retention; focus on high-frequency friction.',
      'Distribution and SEO architecture are not afterthoughts — they define product design.'
    ],
    content: `When I built my first three utilities, I spent weeks tweaking animations and perfecting state trees. But after launching, total visitors numbered in the single digits.\n\nHere is what went wrong:\n\n1. I built features I found fun, rather than utilities people were actively Googling for.\n2. I neglected basic keyword research and programmatic page titles.\n3. I didn't provide immediate value without requiring signups.\n\nAfter refactoring my mindset towards technical SEO and immediate utility value, my tools started finding organic traction.`
  },
  {
    id: 'demystifying-json-ld-structured-data',
    title: 'Demystifying JSON-LD: How Clean Schema Transformed My Search CTR',
    category: 'seo',
    categoryLabel: 'SEO & Search',
    publishedAt: 'Jul 28, 2026',
    readTime: '6 min read',
    excerpt: 'Deep-dive into nested schema types, software application markup, and rich snippets that help Google understand your web pages unambiguously.',
    takeaways: [
      'Always validate schemas with Google Rich Results Test.',
      'Explicitly declare operatingSystem, applicationCategory, and offers for software.',
      'Connect Person and WebSite nodes with clear sameAs social vectors.'
    ],
    content: `Structured data acts as direct semantic context for search engine crawlers. By providing well-structured JSON-LD graphs for my tools, search engines generated rich result cards with review badges and software tags, boosting click-through rates significantly.`
  },
  {
    id: 'zero-bloat-static-deployments',
    title: 'Shipping 100/100 Lighthouse Static Sites on Cloudflare Edge',
    category: 'building',
    categoryLabel: 'Building & Coding',
    publishedAt: 'Jul 14, 2026',
    readTime: '5 min read',
    excerpt: 'Achieving sub-100ms First Contentful Paint by removing runtime client overhead, inlining critical fonts, and leveraging edge caching.',
    takeaways: [
      'Eliminate heavy dependencies when standard browser APIs suffice.',
      'Use immutable cache-control headers for fingerprinted assets.',
      'Pre-render static HTML so users never wait on client JavaScript rendering.'
    ],
    content: `Users judge website speed in milliseconds. By keeping bundles lightweight and deploying to edge servers on Cloudflare Pages, pages load instantly across mobile and desktop connections.`
  }
];



// galleryData is a curated set of images for the gallery section, each with an ID, title, caption, URL, and date.




const galleryData = [
  {
    id: 'desk-setup',
    title: 'Minimal Desk Setup',
    caption: 'My coding workstation with split mechanical keyboard and warm ambient backlight.',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    date: 'August 2026'
  },
  {
    id: 'tea-notes',
    title: 'Morning Green Tea & Wireframes',
    caption: 'Sketching out user flows for a new metadata tool over a fresh brew.',
    url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&auto=format&fit=crop&q=80',
    date: 'July 2026'
  },
  {
    id: 'mountain-trail',
    title: 'Weekend Mountain Escape',
    caption: 'Stepping away from screens to recharge on mountain hiking trails.',
    url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80',
    date: 'June 2026'
  }
];

// ==========================================
// 2. CURSOR GLOW
// ==========================================

function initCursorGlow() {
  const isTouchDevice = window.matchMedia('(hover: none)').matches;
  if (isTouchDevice) return;

  const glow = document.createElement('div');
  glow.classList.add('cursor-glow');
  document.body.appendChild(glow);

  let mouseX = -500, mouseY = -500;
  let currentX = -500, currentY = -500;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    glow.style.opacity = '1';
  });

  function animateGlow() {
    // Smooth lerp follow
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    glow.style.transform = `translate(${currentX - 190}px, ${currentY - 190}px)`;
    rafId = requestAnimationFrame(animateGlow);
  }

  animateGlow();
}

// ==========================================
// 3. SCROLL PROGRESS BAR
// ==========================================

function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }, { passive: true });
}

// ==========================================
// 4. NAV SCROLL SHRINK
// ==========================================

function initNavScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ==========================================
// 5. SCROLL REVEAL (Intersection Observer)
// ==========================================

function initScrollReveal() {
  // Reveal single elements
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Stagger children
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.querySelectorAll(':scope > *');
        children.forEach(child => child.classList.add('in-view'));
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.stagger-children').forEach(el => staggerObserver.observe(el));
}

// ==========================================
// 6. BUTTON RIPPLE
// ==========================================

function initRipple() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-ripple');
    if (!btn) return;

    const circle = document.createElement('span');
    circle.classList.add('ripple-circle');

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top  = `${e.clientY - rect.top  - size / 2}px`;

    btn.appendChild(circle);
    circle.addEventListener('animationend', () => circle.remove());
  });
}

// ==========================================
// 7. THEME TOGGLE
// ==========================================

function initTheme() {
  const saved = localStorage.getItem('romit_theme');
  const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) document.documentElement.classList.add('dark');

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isNowDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('romit_theme', isNowDark ? 'dark' : 'light');
      if (window.lucide) lucide.createIcons();
    });
  }
}

// ==========================================
// 8. MOBILE MENU
// ==========================================

function initMobileMenu() {
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// ==========================================
// 9. RENDER FUNCTIONS
// ==========================================

function renderFeaturedHome() {
  const container = document.getElementById('home-featured-projects');
  if (container) {
    container.innerHTML = projectsData.slice(0, 3).map(p => `
      <div class="card-lift group flex flex-col justify-between bg-white dark:bg-[#141417] rounded-3xl border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 shadow-2xs overflow-hidden">
        <div class="img-zoom relative aspect-16/10 overflow-hidden bg-stone-100 dark:bg-stone-900 cursor-pointer" onclick="openProjectModal('${p.id}')">
          <img src="${p.screenshot}" alt="${p.title}" class="w-full h-full object-cover" loading="lazy" />
          <span class="badge-in absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 dark:bg-black/80 text-stone-800 dark:text-stone-200">${p.categoryLabel}</span>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <h3 class="font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 transition-colors cursor-pointer" onclick="openProjectModal('${p.id}')">${p.title}</h3>
            <p class="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mt-1">${p.description}</p>
          </div>
          <div class="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <button onclick="openProjectModal('${p.id}')" class="btn-ripple text-xs font-semibold text-stone-700 dark:text-stone-300 hover:text-stone-900 px-2 py-1 rounded-lg">Details</button>
            <a href="${p.demoUrl}" target="_blank" class="btn-ripple px-3 py-1.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold">Visit</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  const expContainer = document.getElementById('home-recent-experiences');
  if (expContainer) {
    expContainer.innerHTML = experiencesData.slice(0, 3).map(e => `
      <div onclick="openArticleModal('${e.id}')" class="card-lift group cursor-pointer p-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#141417] hover:border-stone-300 dark:hover:border-stone-700 shadow-2xs space-y-3">
        <div class="flex items-center justify-between text-[11px] text-stone-400">
          <span class="font-semibold text-emerald-600 dark:text-emerald-400">${e.categoryLabel}</span>
          <span>${e.readTime}</span>
        </div>
        <h3 class="font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 transition-colors leading-snug">${e.title}</h3>
        <p class="text-xs text-stone-600 dark:text-stone-300 line-clamp-2">${e.excerpt}</p>
      </div>
    `).join('');
  }

  // Re-run scroll reveal on newly injected cards
  initScrollReveal();
}

function renderAllProjects(category) {
  const grid = document.getElementById('all-projects-grid');
  if (!grid) return;

  const filtered = category === 'all' ? projectsData : projectsData.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => `
    <div class="card-lift reveal group flex flex-col justify-between bg-white dark:bg-[#141417] rounded-3xl border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 shadow-2xs overflow-hidden">
      <div class="img-zoom relative aspect-16/10 overflow-hidden bg-stone-100 dark:bg-stone-900 cursor-pointer" onclick="openProjectModal('${p.id}')">
        <img src="${p.screenshot}" alt="${p.title}" class="w-full h-full object-cover" loading="lazy" />
        <span class="badge-in absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/90 dark:bg-black/80 text-stone-800 dark:text-stone-200">${p.categoryLabel}</span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 class="font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 transition-colors cursor-pointer" onclick="openProjectModal('${p.id}')">${p.title}</h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mt-1">${p.description}</p>
          <div class="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-900 text-[11px] text-stone-600 dark:text-stone-400 mt-2">
            <strong>Problem Solved:</strong> ${p.problemSolved}
          </div>
        </div>
        <div class="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <button onclick="openProjectModal('${p.id}')" class="btn-ripple text-xs font-semibold text-stone-700 dark:text-stone-300 px-2 py-1 rounded-lg">View Story</button>
          <a href="${p.demoUrl}" target="_blank" class="btn-ripple px-3 py-1.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold">Live Project</a>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger reveal on injected cards immediately (they're in view)
  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  });

  document.querySelectorAll('.project-filter-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.project-filter-btn').forEach(b => {
        b.classList.remove('bg-white', 'dark:bg-stone-800', 'text-stone-900', 'dark:text-white', 'shadow-2xs', 'font-semibold');
        b.classList.add('text-stone-600', 'dark:text-stone-400');
      });
      btn.classList.add('bg-white', 'dark:bg-stone-800', 'text-stone-900', 'dark:text-white', 'shadow-2xs', 'font-semibold');
      btn.classList.remove('text-stone-600', 'dark:text-stone-400');
      renderAllProjects(btn.getAttribute('data-category'));
    };
  });
}

function renderExperiences() {
  const grid = document.getElementById('all-experiences-grid');
  if (!grid) return;

  grid.innerHTML = experiencesData.map(e => `
    <article onclick="openArticleModal('${e.id}')" class="card-lift reveal group cursor-pointer p-6 rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#141417] hover:border-stone-300 dark:hover:border-stone-700 shadow-2xs space-y-3">
      <div class="flex items-center justify-between text-[11px] text-stone-400">
        <span class="font-semibold text-emerald-600 dark:text-emerald-400">${e.categoryLabel}</span>
        <span>${e.publishedAt} • ${e.readTime}</span>
      </div>
      <h2 class="font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 transition-colors leading-snug">${e.title}</h2>
      <p class="text-xs text-stone-600 dark:text-stone-300 line-clamp-3">${e.excerpt}</p>
      <div class="pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-between items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
        <span>Read Full Entry</span>
        <span>→</span>
      </div>
    </article>
  `).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  });
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = galleryData.map(g => `
    <div class="card-lift reveal group relative rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#141417] overflow-hidden shadow-2xs">
      <div class="img-zoom aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-900">
        <img src="${g.url}" alt="${g.caption}" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <div class="p-4 space-y-1">
        <h3 class="font-bold text-xs text-stone-900 dark:text-stone-100">${g.title}</h3>
        <p class="text-[11px] text-stone-500 dark:text-stone-400">${g.caption}</p>
        <span class="text-[10px] font-mono text-stone-400 block pt-1">${g.date}</span>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  });
}

// ==========================================
// 10. MODALS (animated open/close)
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

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  const modal   = document.getElementById('project-modal');
  const box     = modal?.querySelector('.modal-box-inner');
  const content = document.getElementById('modal-project-content');
  if (!project || !modal || !content) return;

  content.innerHTML = `
    <div class="img-zoom relative aspect-16/9 rounded-2xl overflow-hidden bg-stone-100 dark:bg-stone-900">
      <img src="${project.screenshot}" alt="${project.title}" class="w-full h-full object-cover" />
    </div>
    <div class="space-y-2">
      <span class="badge-in inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">${project.categoryLabel}</span>
      <h2 class="text-xl font-bold text-stone-900 dark:text-stone-100">${project.title}</h2>
      <p class="text-stone-600 dark:text-stone-300 leading-relaxed">${project.description}</p>
    </div>
    <div class="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-100 dark:border-stone-800 space-y-1">
      <p class="font-bold text-stone-900 dark:text-stone-100">Why I built this:</p>
      <p class="text-stone-600 dark:text-stone-400">${project.problemSolved}</p>
    </div>
    <div class="pt-3 flex gap-2">
      <a href="${project.demoUrl}" target="_blank" class="btn-ripple flex-1 py-2.5 text-center rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold text-xs">Launch Tool</a>
      <a href="${project.githubUrl}" target="_blank" class="btn-ripple px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 font-semibold text-xs text-center">GitHub Code</a>
    </div>
  `;

  const innerBox = modal.querySelector('[data-modal-box]');
  openModal(modal, innerBox);
}

function openArticleModal(articleId) {
  const article = experiencesData.find(a => a.id === articleId);
  const modal   = document.getElementById('article-modal');
  const content = document.getElementById('modal-article-content');
  if (!article || !modal || !content) return;

  content.innerHTML = `
    <div class="space-y-2 border-b border-stone-200 dark:border-stone-800 pb-4">
      <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">${article.categoryLabel} • ${article.publishedAt}</span>
      <h1 class="text-2xl font-bold text-stone-900 dark:text-stone-100">${article.title}</h1>
      <p class="italic text-stone-500 font-serif">"${article.excerpt}"</p>
    </div>
    <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 text-amber-900 dark:text-amber-200 text-xs space-y-2">
      <p class="font-bold">Key Takeaways:</p>
      <ul class="list-disc list-inside space-y-1">
        ${article.takeaways.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
    <div class="text-stone-700 dark:text-stone-300 text-xs leading-relaxed space-y-3 font-sans">
      ${article.content.split('\n\n').map(c => `<p>${c}</p>`).join('')}
    </div>
  `;

  const innerBox = modal.querySelector('[data-modal-box]');
  openModal(modal, innerBox);
}

// ==========================================
// 11. CONTACT FORM & CLIPBOARD
// ==========================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.onsubmit = (e) => {
      e.preventDefault();
      const msg = document.getElementById('form-success-msg');
      if (msg) {
        msg.classList.remove('hidden');
        msg.style.animation = 'heroFadeUp 0.4s ease forwards';
      }
      form.reset();
    };
  }

  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.onclick = () => {
      navigator.clipboard.writeText('romitkryadav@gmail.com');
      copyBtn.innerText = 'Copied!';
      copyBtn.style.color = '#10b981';
      setTimeout(() => {
        copyBtn.innerText = 'Copy';
        copyBtn.style.color = '';
      }, 2000);
    };
  }
}

// ==========================================
// 12. CLOSE MODAL HANDLERS (wired after DOM ready)
// ==========================================

function initModalClose() {
  const projModal = document.getElementById('project-modal');
  const artModal  = document.getElementById('article-modal');

  if (projModal) {
    const closeBtn = document.getElementById('close-project-modal');
    const innerBox = projModal.querySelector('[data-modal-box]');
    if (closeBtn && innerBox) {
      closeBtn.onclick = () => closeModal(projModal, innerBox);
    }
    // Click outside to close
    projModal.addEventListener('click', (e) => {
      if (e.target === projModal) closeModal(projModal, innerBox);
    });
  }

  if (artModal) {
    const closeBtn = document.getElementById('close-article-modal');
    const innerBox = artModal.querySelector('[data-modal-box]');
    if (closeBtn && innerBox) {
      closeBtn.onclick = () => closeModal(artModal, innerBox);
    }
    artModal.addEventListener('click', (e) => {
      if (e.target === artModal) closeModal(artModal, innerBox);
    });
  }

  // Keyboard ESC
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (projModal && !projModal.classList.contains('hidden')) {
      const innerBox = projModal.querySelector('[data-modal-box]');
      closeModal(projModal, innerBox);
    }
    if (artModal && !artModal.classList.contains('hidden')) {
      const innerBox = artModal.querySelector('[data-modal-box]');
      closeModal(artModal, innerBox);
    }
  });
}

// ==========================================
// 13. INIT ON DOM READY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initCursorGlow();
  initScrollProgress();
  initNavScroll();
  initScrollReveal();
  initRipple();

  renderFeaturedHome();
  renderAllProjects('all');
  renderExperiences();
  renderGallery();
  initContactForm();
  initModalClose();

  if (window.lucide) lucide.createIcons();
});

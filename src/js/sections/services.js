import { siteContent } from '../data/content.js'

export function renderServices(el) {
  const { eyebrow, title, subtitle, items } = siteContent.services

  const cards = items.map((s) => `
    <article class="service-card overflow-hidden p-0" data-animate="fade-up">
      <div class="relative h-44 overflow-hidden">
        <img src="${s.image}" alt="${s.title}" class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent"></div>
        <span class="absolute right-4 top-4 h-2 w-2 rounded-full bg-brand-orange"></span>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-black text-ink-primary">${s.title}</h3>
        <p class="mt-3 text-sm leading-6 text-ink-secondary">${s.desc}</p>
      </div>
    </article>
  `).join('')

  el.innerHTML = `
    <section id="services-section" class="section bg-surface-base">
      <div class="container-main">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-animate="fade-up">
            <span class="eyebrow">${eyebrow}</span>
            <h2 class="mt-4 text-balanced text-3xl font-black leading-tight text-ink-primary sm:text-5xl">${title}</h2>
          </div>
          <p class="max-w-2xl text-base leading-8 text-ink-secondary lg:justify-self-end" data-animate="fade-up">${subtitle}</p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${cards}
        </div>
      </div>
    </section>
  `
}

import { siteContent } from '../data/content.js'

export function renderAbout(el) {
  const { eyebrow, titleTop, titleBottom, body, points } = siteContent.about

  const pointsList = points.map(p => `
    <li class="flex gap-3 text-sm leading-6 text-ink-secondary">
      <span class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-orange"></span>
      <span>${p}</span>
    </li>
  `).join('')

  el.innerHTML = `
    <section class="section bg-white">
      <div class="container-main grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div class="grid grid-cols-2 gap-4" data-animate="fade-up">
          <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=900&auto=format&fit=crop" alt="Mobil di bengkel" class="h-64 w-full rounded-lg object-cover sm:h-80" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1632823471565-1ecdf5c092bf?q=80&w=900&auto=format&fit=crop" alt="Teknisi memeriksa mobil" class="mt-10 h-64 w-full rounded-lg object-cover sm:h-80" loading="lazy" />
        </div>

        <div data-animate="fade-up">
          <span class="eyebrow">${eyebrow}</span>
          <h2 class="mt-4 text-balanced font-heading text-3xl font-black leading-tight text-ink-primary sm:text-5xl">
            ${titleTop}<br />
            <span class="text-gradient-logo">${titleBottom}</span>
          </h2>
          <p class="mt-5 max-w-2xl text-base leading-8 text-ink-secondary">${body}</p>
          <ul class="mt-7 space-y-4">${pointsList}</ul>
        </div>
      </div>
    </section>
  `
}

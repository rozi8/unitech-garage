import { siteContent } from '../data/content.js'
import initBeforeAfter from '../beforeAfter.js'

export function renderGallery(el) {
  const { eyebrow, title, subtitle, items } = siteContent.comparisons

  const cards = items.map((item, i) => `
    <article class="overflow-hidden rounded-lg border border-line bg-white shadow-sm" data-animate="fade-up">
      <div class="before-after relative overflow-hidden">
        <img src="${item.after}" alt="${item.title} setelah layanan" class="ba-after absolute inset-0 h-full w-full object-cover" loading="lazy" draggable="false" />
        <img src="${item.before}" alt="${item.title} sebelum layanan" class="ba-before absolute left-0 top-0 h-full object-cover" loading="lazy" draggable="false" />
        <div class="ba-divider absolute bottom-0 top-0 left-1/2 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.35)] pointer-events-none"></div>
        <button class="ba-handle absolute top-1/2 h-12 w-12 -translate-y-1/2 rounded-full border-4 border-white bg-brand-orange text-white shadow-xl" aria-label="Geser perbandingan sebelum dan sesudah">
          <span class="flex h-full w-full items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </span>
        </button>
        <div class="ba-label absolute left-3 top-3 rounded-md bg-brand-navy/90 px-3 py-2 text-[10px] font-black uppercase text-white sm:text-xs">SEBELUM (BEFORE)</div>
        <div class="ba-label absolute right-3 top-3 rounded-md bg-brand-orange px-3 py-2 text-[10px] font-black uppercase text-white sm:text-xs">SETELAH (SESUDAH)</div>
      </div>
      <div class="p-6">
        <div class="text-xs font-black text-brand-blue">Layanan 0${i + 1}</div>
        <h3 class="mt-2 text-xl font-black text-ink-primary">${item.title}</h3>
        <p class="mt-3 text-sm leading-6 text-ink-secondary">${item.desc}</p>
      </div>
    </article>
  `).join('')

  el.innerHTML = `
    <section class="section bg-white">
      <div class="container-main">
        <div class="mx-auto max-w-3xl text-center" data-animate="fade-up">
          <span class="eyebrow justify-center">${eyebrow}</span>
          <h2 class="mt-4 text-balanced text-3xl font-black leading-tight text-ink-primary sm:text-5xl">${title}</h2>
          <p class="mt-4 text-base leading-8 text-ink-secondary">${subtitle}</p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          ${cards}
        </div>
      </div>
    </section>
  `

  requestAnimationFrame(() => initBeforeAfter(el))
}

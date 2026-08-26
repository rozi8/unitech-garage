import { siteContent } from '../data/content.js'
import initBeforeAfter from '../beforeAfter.js'

export function renderGallery(el) {
  const { title, subtitle, items } = siteContent.comparisons

  const cards = items.map((item, i) => `
    <article class="overflow-hidden rounded-lg border border-line bg-white shadow-sm" data-animate="fade-up">
      <div class="before-after relative h-[260px] sm:h-[320px] overflow-hidden select-none touch-none cursor-ew-resize">
        <img src="${item.after}" alt="${item.title} setelah layanan" class="ba-after absolute inset-0 h-full w-full object-cover pointer-events-none" loading="lazy" draggable="false" />
        <img src="${item.before}" alt="${item.title} sebelum layanan" class="ba-before absolute inset-0 h-full w-full object-cover pointer-events-none z-10" loading="lazy" draggable="false" />
        <div class="ba-divider absolute bottom-0 top-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] pointer-events-none z-20 -translate-x-1/2"></div>
        <button class="ba-handle absolute top-1/2 h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 sm:border-4 border-white bg-brand-orange text-white shadow-2xl z-30 flex items-center justify-center cursor-ew-resize transition-transform duration-150 active:scale-95" aria-label="Geser perbandingan sebelum dan sesudah">
          <span class="flex h-full w-full items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
            </svg>
          </span>
        </button>
        <div class="ba-label absolute left-3 top-3 z-30 rounded-md bg-brand-navy/90 px-3 py-1.5 text-[11px] font-heading font-black uppercase text-white shadow-lg pointer-events-none sm:text-xs">SEBELUM</div>
        <div class="ba-label absolute right-3 top-3 z-30 rounded-md bg-brand-orange px-3 py-1.5 text-[11px] font-heading font-black uppercase text-white shadow-lg pointer-events-none sm:text-xs">SESUDAH</div>
      </div>
      <div class="p-6">
        <div class="text-xs font-heading font-black text-brand-blue">Layanan 0${i + 1}</div>
        <h3 class="mt-2 text-xl font-heading font-black text-ink-primary">${item.title}</h3>
        <p class="mt-3 text-sm leading-6 text-ink-secondary">${item.desc}</p>
      </div>
    </article>
  `).join('')

  el.innerHTML = `
    <section class="section bg-white">
      <div class="container-main">
        <div class="mx-auto max-w-3xl text-center" data-animate="fade-up">
          <h2 class="mt-4 text-balanced font-heading text-3xl font-black leading-tight text-ink-primary sm:text-5xl">${title}</h2>
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

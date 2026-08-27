import { siteContent } from '../data/content.js'
import initBeforeAfter from '../beforeAfter.js'

export function renderGallery(el) {
  const { title, subtitle, items } = siteContent.comparisons

  const cards = items.map((item, i) => `
    <div class="mobile-card-reveal min-w-0 h-full" data-animate="slide-left-mobile">
    <article class="group relative flex h-full flex-col justify-between w-full bg-white rounded-[28px] sm:rounded-[32px] overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1.5 transition-all duration-300">
      <div>
        <!-- Before/After Slider Container (Full Bleed Top, Left, Right) -->
        <div class="before-after relative w-full h-[250px] sm:h-[290px] overflow-hidden select-none touch-none cursor-ew-resize bg-slate-100">
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
          <div class="ba-label absolute left-3.5 top-3.5 z-30 rounded-full bg-brand-navy/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md pointer-events-none sm:text-xs">SEBELUM</div>
          <div class="ba-label absolute right-3.5 top-3.5 z-30 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md pointer-events-none sm:text-xs">SESUDAH</div>
        </div>

        <!-- Content Section -->
        <div class="px-5 pt-5 sm:px-6">
          <h3 class="text-xl font-bold text-slate-900 tracking-tight leading-snug">${item.title}</h3>
          <p class="mt-2.5 text-sm font-normal text-slate-600 leading-relaxed">${item.desc}</p>
        </div>
      </div>

      <!-- Action Button Row (Full Width CTA) -->
      <div class="px-5 pt-6 pb-6 sm:px-6">
        <a 
          href="#contact"
          class="w-full bg-slate-900 hover:bg-brand-orange active:scale-[0.98] text-white font-semibold text-sm py-3.5 px-5 rounded-full text-center transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group/btn">
          <span>Konsultasi Hasil Kerja</span>
          <svg class="w-4 h-4 text-white transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
    </div>
  `).join('')

  el.innerHTML = `
    <section class="section bg-white">
      <div class="container-main">
        <div class="mx-auto max-w-3xl text-center" data-animate="fade-up">
          <h2 class="mt-4 text-balanced font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">${title}</h2>
          <p class="mt-4 text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">${subtitle}</p>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${cards}
        </div>
      </div>
    </section>
  `

  requestAnimationFrame(() => initBeforeAfter(el))
}

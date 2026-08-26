import { siteContent } from '../data/content.js'

export function renderServices(el) {
  const { eyebrow, title, subtitle, items } = siteContent.services

  const cards = items.map((s, i) => `
    <article class="group relative flex flex-col justify-between w-full bg-white rounded-[32px] p-3.5 sm:p-4 pb-6 border border-slate-200/80 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-1.5 transition-all duration-300" data-animate="fade-up">
      <div>
        <!-- Hero Image Section (Landscape 16:10) -->
        <div class="relative w-full aspect-[16/10] rounded-[22px] overflow-hidden bg-slate-100">
          <img 
            src="${s.image}" 
            alt="${s.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          <div class="absolute left-3.5 top-3.5 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            Layanan 0${i + 1}
          </div>
        </div>

        <!-- Content Section -->
        <div class="px-3 pt-5">
          <h3 class="text-xl font-bold text-slate-900 tracking-tight leading-snug">
            ${s.title}
          </h3>

          <p class="text-sm font-normal text-slate-600 leading-relaxed mt-2.5">
            ${s.desc}
          </p>
        </div>
      </div>

      <!-- Action Button Row (Full Width CTA) -->
      <div class="px-3 pt-6">
        <a 
          href="#contact"
          class="w-full bg-slate-900 hover:bg-brand-orange active:scale-[0.98] text-white font-semibold text-sm py-3.5 px-5 rounded-full text-center transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group/btn">
          <span>Booking Layanan</span>
          <svg class="w-4 h-4 text-white transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  `).join('')

  el.innerHTML = `
    <section id="services-section" class="section bg-surface-base">
      <div class="container-main">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-animate="fade-up">
            <span class="eyebrow">${eyebrow}</span>
            <h2 class="mt-4 text-balanced font-heading text-3xl font-black leading-tight text-ink-primary sm:text-5xl">${title}</h2>
          </div>
          <p class="max-w-2xl text-base leading-8 text-ink-secondary lg:justify-self-end" data-animate="fade-up">${subtitle}</p>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          ${cards}
        </div>
      </div>
    </section>
  `
}

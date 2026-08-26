import { siteContent } from '../data/content.js'

export function renderLocation(el) {
  const { eyebrow, title, address, mapsEmbedUrl, cards } = siteContent.location

  el.innerHTML = `
    <section class="section bg-surface-base">
      <div class="container-main grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div data-animate="fade-up">
          <span class="eyebrow">${eyebrow}</span>
          <h2 class="mt-4 text-balanced font-heading text-3xl font-black leading-tight text-ink-primary sm:text-5xl">${title}</h2>
          <p class="mt-5 text-base font-semibold text-ink-secondary">${address}</p>
          
          <!-- Styled Cards (Original Grid Layout) -->
          <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            ${cards.map(card => `
              <div class="group relative rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm shadow-slate-200/50 hover:shadow-md hover:border-brand-orange/40 hover:-translate-y-0.5 transition-all duration-300">
                <div class="text-sm sm:text-base font-heading font-black text-ink-primary group-hover:text-brand-orange transition-colors">${card.title}</div>
                <p class="mt-2 text-xs sm:text-sm leading-relaxed text-ink-secondary font-normal">${card.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-sm" data-animate="fade-up">
          <iframe
            src="${mapsEmbedUrl}"
            class="aspect-video w-full rounded-xl"
            style="border:0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Lokasi Unitech Garage"
          ></iframe>
        </div>
      </div>
    </section>
  `
}

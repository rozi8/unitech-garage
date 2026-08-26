import { siteContent } from '../data/content.js'

export function renderWhyUs(el) {
  const { eyebrow, title, points } = siteContent.whyUs

  const cards = points.map((p) => `
    <article class="overflow-hidden rounded-lg border border-white/10 bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/15" data-animate="fade-up">
      <div class="relative h-40 overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent"></div>
        <span class="absolute right-4 top-4 h-2 w-2 rounded-full bg-brand-orange"></span>
      </div>
      <div class="p-6">
        <h3 class="text-lg font-black text-white">${p.title}</h3>
        <p class="mt-3 text-sm leading-6 text-blue-50/75">${p.desc}</p>
      </div>
    </article>
  `).join('')

  el.innerHTML = `
    <section class="section bg-surface-dark text-white">
      <div class="container-main">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-animate="fade-up">
            <span class="eyebrow">${eyebrow}</span>
            <h2 class="mt-4 text-balanced text-3xl font-black leading-tight text-white sm:text-5xl">${title}</h2>
          </div>
          <p class="max-w-2xl text-base leading-8 text-blue-50/75 lg:justify-self-end" data-animate="fade-up">
            Karakter visual navy dan biru memberi rasa andal, sementara aksen orange-merah menjaga energi otomotif tetap terasa aktif.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          ${cards}
        </div>
      </div>
    </section>
  `
}

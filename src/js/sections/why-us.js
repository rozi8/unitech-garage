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
        <h3 class="text-lg font-heading font-black text-white">${p.title}</h3>
        <p class="mt-3 text-sm leading-6 text-blue-50/75">${p.desc}</p>
      </div>
    </article>
  `).join('')

  el.innerHTML = `
    <section class="section bg-surface-dark text-white">
      <div class="container-main">
        <div class="mx-auto max-w-3xl text-center" data-animate="fade-up">
          <span class="eyebrow justify-center">${eyebrow}</span>
          <h2 class="mt-3 text-balanced font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">${title}</h2>
          <p class="mt-4 text-base leading-relaxed text-blue-50/75 max-w-2xl mx-auto" data-animate="fade-up">
            Karakter visual navy dan biru memberi rasa andal, sementara aksen orange menjaga energi otomotif tetap terasa aktif.
          </p>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          ${cards}
        </div>
      </div>
    </section>
  `
}

import { siteContent } from '../data/content.js'

export function renderHero(el) {
  const { eyebrow, headlineTop, headlineBottom, subheadline, ctaPrimary, ctaSecondary, stats } = siteContent.hero

  const statsMarkup = stats.map(item => `
    <div class="rounded-md bg-white/10 p-4">
      <div class="text-2xl font-black text-white">${item.value}</div>
      <div class="mt-1 text-xs font-semibold leading-5 text-blue-50/75">${item.label}</div>
    </div>
  `).join('')

  el.innerHTML = `
    <section class="relative overflow-hidden bg-surface-dark text-white">
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1800&auto=format&fit=crop" alt="Detail mobil di bengkel" class="h-full w-full object-cover opacity-35" loading="eager" />
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,45,0.96),rgba(7,22,45,0.82),rgba(7,22,45,0.5))]"></div>
      </div>

      <div class="container-main relative grid grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-24">
        <div class="max-w-2xl" data-animate="fade-up">
          <span class="eyebrow">${eyebrow}</span>
          <h1 data-animate-hero class="mt-5 text-balanced text-4xl font-black leading-[1.04] text-white sm:text-6xl lg:text-[72px]">
            ${headlineTop.split(' ').map(w => `<span class="chars inline-block">${w}&nbsp;</span>`).join('')}
          </h1>
          <p class="mt-5 max-w-2xl text-lg font-bold leading-relaxed text-blue-50 sm:text-xl">${headlineBottom}</p>
          <p class="mt-4 max-w-2xl text-sm leading-7 text-blue-50/75 sm:text-base">${subheadline}</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" class="button-primary">${ctaPrimary}</a>
            <a href="#services" class="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-ink-primary">${ctaSecondary}</a>
          </div>
        </div>

        <div class="panel-glow rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-md sm:p-4 lg:justify-self-end" data-animate="fade-up">
          <div class="overflow-hidden rounded-md">
            <img src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1400&auto=format&fit=crop" alt="Teknisi Unitech Garage menangani mobil" class="h-[300px] w-full object-cover sm:h-[420px] lg:h-[500px] lg:w-[620px]" />
          </div>
          <div class="mt-3 grid grid-cols-3 gap-3">
            ${statsMarkup}
          </div>
        </div>
      </div>
    </section>
  `
}

import { siteContent } from '../data/content.js'

export function renderLocation(el) {
  const { eyebrow, title, address, mapsEmbedUrl } = siteContent.location

  el.innerHTML = `
    <section class="section bg-surface-base">
      <div class="container-main grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div data-animate="fade-up">
          <span class="eyebrow">${eyebrow}</span>
          <h2 class="mt-4 text-balanced font-heading text-3xl font-black leading-tight text-ink-primary sm:text-5xl">${title}</h2>
          <p class="mt-5 text-base font-semibold text-ink-secondary">${address}</p>
          <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div class="rounded-lg border border-line bg-white p-5">
              <div class="text-sm font-heading font-black text-ink-primary">Konsultasi dulu</div>
              <p class="mt-2 text-sm leading-6 text-ink-secondary">Cocok untuk keluhan yang perlu dipetakan sebelum datang.</p>
            </div>
            <div class="rounded-lg border border-line bg-white p-5">
              <div class="text-sm font-heading font-black text-ink-primary">Datang ke bengkel</div>
              <p class="mt-2 text-sm leading-6 text-ink-secondary">Bawa mobil untuk pengecekan langsung oleh teknisi.</p>
            </div>
          </div>
        </div>

        <div class="overflow-hidden rounded-lg border border-line bg-white p-2 shadow-sm" data-animate="fade-up">
          <iframe
            src="${mapsEmbedUrl}"
            class="aspect-video w-full rounded-md"
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

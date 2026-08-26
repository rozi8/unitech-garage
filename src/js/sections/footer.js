import { siteContent } from '../data/content.js'

export function renderFooter(el) {
  const { tagline, address, whatsappDisplay } = siteContent.footer
  const year = new Date().getFullYear()
  const navLinks = siteContent.nav.map(n =>
    `<li><a href="${n.href}" class="text-sm font-semibold text-blue-50/70 transition-colors hover:text-brand-orange">${n.label}</a></li>`
  ).join('')

  el.innerHTML = `
    <footer class="w-full bg-surface-dark px-4 pb-8 pt-14 text-white sm:px-6">
      <div class="container-main grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div class="flex items-center gap-3">
            <img src="/img/logo.jpeg" alt="Unitech Garage" class="h-12 w-12 rounded-md bg-white object-contain p-1" />
            <div>
              <div class="text-lg font-black">Unitech Garage</div>
              <div class="text-xs font-semibold text-blue-50/60">Professional Auto Service</div>
            </div>
          </div>
          <p class="mt-5 max-w-sm text-sm leading-7 text-blue-50/70">${tagline}</p>
        </div>
        <div>
          <h4 class="text-sm font-black text-white">Navigasi</h4>
          <ul class="mt-4 space-y-3">${navLinks}</ul>
        </div>
        <div>
          <h4 class="text-sm font-black text-white">Kontak</h4>
          <p class="mt-4 text-sm leading-7 text-blue-50/70">${address}</p>
          <p class="mt-2 text-sm leading-7 text-blue-50/70">WhatsApp: ${whatsappDisplay}</p>
        </div>
      </div>
      <div class="container-main mt-10 border-t border-white/10 pt-6 text-center text-xs font-semibold text-blue-50/50">
        &copy; ${year} Unitech Garage. Seluruh hak dilindungi.
      </div>
    </footer>
  `
}

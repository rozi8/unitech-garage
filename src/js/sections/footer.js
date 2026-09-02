import { siteContent } from '../data/content.js'

export function renderFooter(el) {
  const { tagline, address, whatsappDisplay } = siteContent.footer
  const year = new Date().getFullYear()
  const navLinks = siteContent.nav.map(n =>
    `<li><a href="${n.href}" class="text-sm font-medium text-slate-300 transition-colors hover:text-brand-orange">${n.label}</a></li>`
  ).join('')

  el.innerHTML = `
    <footer class="w-full bg-slate-950 px-4 pb-8 pt-14 text-white sm:px-6 border-t border-white/10">
      <div class="container-main grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div class="flex items-center gap-3">
            <img src="/img/logo.png" alt="Unitech Garage" class="h-11 sm:h-12 w-auto object-contain rounded-xl bg-white p-1.5 shadow-sm shrink-0" />
            <div>
              <div class="text-lg font-heading font-bold tracking-tight text-white">Unitech Garage</div>
              <div class="text-xs font-normal text-slate-400">Professional Auto Service</div>
            </div>
          </div>
          <p class="mt-5 max-w-sm text-sm leading-relaxed text-slate-400 font-normal">${tagline}</p>
        </div>
        <div>
          <h4 class="text-sm font-heading font-bold tracking-wider uppercase text-white">Navigasi</h4>
          <ul class="mt-4 space-y-2.5">${navLinks}</ul>
        </div>
        <div>
          <h4 class="text-sm font-heading font-bold tracking-wider uppercase text-white">Kontak</h4>
          <p class="mt-4 text-sm leading-relaxed text-slate-400 font-normal">${address}</p>
          <p class="mt-2 text-sm leading-relaxed text-slate-400 font-normal">WhatsApp: ${whatsappDisplay}</p>
        </div>
      </div>
      <div class="container-main mt-10 border-t border-white/10 pt-6 text-center text-xs font-normal text-slate-500">
        &copy; ${year} Unitech Garage. Seluruh hak dilindungi.
      </div>
    </footer>
  `
}

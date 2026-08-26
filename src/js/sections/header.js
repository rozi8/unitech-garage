import { siteContent } from '../data/content.js'

export function renderHeader(el) {
  const links = siteContent.nav.map(n =>
    `<a href="${n.href}" class="rounded-md px-3 py-2 text-sm font-bold text-ink-secondary transition-colors hover:bg-surface-base hover:text-brand-orange">${n.label}</a>`
  ).join('')

  const mobileLinks = siteContent.nav.map(n =>
    `<a href="${n.href}" class="mobile-nav-link block rounded-md px-3 py-3 text-sm font-bold text-ink-primary transition-colors hover:bg-surface-base hover:text-brand-orange">${n.label}</a>`
  ).join('')

  el.innerHTML = `
    <header class="fixed left-0 right-0 top-0 z-50 border-b border-line bg-white/95 backdrop-blur-xl">
      <div class="container-main flex h-20 items-center justify-between px-4 sm:px-6">
        <a href="#hero" class="flex min-w-0 items-center gap-3" aria-label="Unitech Garage">
          <img src="/img/logo.jpeg" alt="Unitech Garage" class="h-12 w-12 rounded-md border border-line bg-white object-contain p-1" />
          <div class="min-w-0">
            <div class="text-base font-heading font-black leading-tight text-ink-primary">Unitech Garage</div>
            <div class="hidden text-xs font-semibold text-ink-secondary sm:block">Professional Auto Service</div>
          </div>
        </a>

        <nav class="hidden items-center gap-1 md:flex" role="navigation" aria-label="Main navigation">
          ${links}
        </nav>

        <a href="#contact" class="button-primary hidden px-4 py-2.5 text-xs sm:inline-flex">Booking</a>

        <button id="mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-menu" class="rounded-md border border-line p-2 text-ink-primary md:hidden" aria-label="Buka menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="max-h-0 overflow-hidden border-t border-line bg-white px-4 opacity-0 transition-all duration-300 md:hidden">
        <div class="space-y-1 py-3">
          ${mobileLinks}
          <a href="#contact" class="mobile-nav-link button-primary mt-2 w-full text-sm">Booking via WhatsApp</a>
        </div>
      </div>
    </header>
    <div class="h-20"></div>
  `

  const menu = el.querySelector('#mobile-menu')
  const toggleBtn = el.querySelector('#mobile-menu-toggle')

  function toggleMenu() {
    if (!menu || !toggleBtn) return
    const isOpen = menu.classList.contains('is-open')

    if (isOpen) {
      menu.classList.remove('is-open', 'opacity-100')
      menu.style.maxHeight = '0px'
      toggleBtn.setAttribute('aria-expanded', 'false')
    } else {
      menu.classList.add('is-open', 'opacity-100')
      menu.style.maxHeight = `${menu.scrollHeight || 350}px`
      toggleBtn.setAttribute('aria-expanded', 'true')
    }
  }

  // Global function for safety
  window.toggleMobileMenu = toggleMenu

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation()
      toggleMenu()
    })
  }

  // Close mobile menu when a mobile link is clicked
  const mobileNavLinks = el.querySelectorAll('.mobile-nav-link')
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menu && menu.classList.contains('is-open')) {
        toggleMenu()
      }
    })
  })
}

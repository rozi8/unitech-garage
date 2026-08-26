import { siteContent } from '../data/content.js'

export function renderContact(el) {
  const { eyebrow, title, subtitle, whatsappNumber, whatsappMessage } = siteContent.contact
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  el.innerHTML = `
    <section class="section bg-white">
      <div class="container-main overflow-hidden rounded-lg bg-[linear-gradient(135deg,#07162D,#12345A_55%,#2464B4)] text-white">
        <div class="grid grid-cols-1 gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12" data-animate="fade-up">
          <div>
            <span class="eyebrow">${eyebrow}</span>
            <h2 class="mt-4 max-w-3xl text-balanced text-3xl font-black leading-tight sm:text-5xl">${title}</h2>
            <p class="mt-4 max-w-2xl text-base leading-8 text-blue-50/80">${subtitle}</p>
          </div>
          <a href="${waLink}" target="_blank" rel="noopener" class="button-primary whitespace-nowrap">
            Chat via WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
}

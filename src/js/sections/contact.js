import { siteContent } from '../data/content.js'

export function renderContact(el) {
  const { whatsappNumber, whatsappMessage } = siteContent.contact
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  el.innerHTML = `
    <section id="contact" class="section bg-white py-8 sm:py-12">
      <div class="container-main">
        <div class="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-200/40" data-animate="fade-up">
          
          <!-- Soft Orange Glows (Pojok Kanan & Full Width Bottom sebatas bawah button) -->
          <div class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl"></div>
          <div class="pointer-events-none absolute bottom-0 inset-x-0 h-28 sm:h-32 bg-gradient-to-t from-orange-100/80 via-orange-50/40 to-transparent"></div>
          
          <div class="relative z-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] lg:items-center">
            
            <!-- Left Text & CTA Content -->
            <div>
              <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-heading font-black tracking-tight leading-[1.15] text-slate-900">
                Siap Merawat Mobil <span class="text-brand-orange">Tetap Prima?</span>
              </h2>

              <p class="mt-3 text-sm sm:text-base font-normal leading-relaxed text-slate-600 max-w-xl">
                Kirim pesan WhatsApp untuk konsultasi awal, estimasi biaya transparan, atau langsung tentukan jadwal kunjungan ke bengkel Unitech Garage Depok.
              </p>

              <div class="mt-6 sm:mt-8">
                <a 
                  href="${waLink}" 
                  target="_blank" 
                  rel="noopener" 
                  class="inline-flex items-center justify-between gap-4 bg-slate-900 hover:bg-brand-orange active:scale-[0.98] text-white font-bold text-sm sm:text-base pl-6 pr-2.5 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-orange-500/25 group cursor-pointer">
                  <span>Booking Servis Hari Ini</span>
                  <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg class="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <!-- Right Workshop Image Card Frame -->
            <div class="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-md border-2 sm:border-4 border-white bg-slate-900 group">
              <img 
                src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000&auto=format&fit=crop" 
                alt="Unitech Garage Workshop Tools" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `
}

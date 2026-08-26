import { siteContent } from '../data/content.js'

export function renderAbout(el) {
  const { eyebrow, titleTop, titleBottom, body, image, rating, features } = siteContent.about

  const featureIcons = [
    // Wrench / Skilled Technicians (Orange)
    `<svg class="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>`,
    // Cpu / Modern Equipment (Blue)
    `<svg class="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>`,
    // Shield / Trusted Service (Emerald)
    `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>`
  ]

  const featureBgStyles = [
    'bg-orange-50 border-orange-200/60',
    'bg-blue-50 border-blue-200/60',
    'bg-emerald-50 border-emerald-200/60'
  ]

  el.innerHTML = `
    <section class="section bg-white py-14 sm:py-20" id="about">
      <div class="container-main">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column: Portrait Workshop Photo with Floating Rating Badge -->
          <div class="lg:col-span-6" data-animate="fade-up">
            <div class="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/80 shadow-2xl group bg-slate-900">
              
              <!-- Floating Feedback Rating Badge -->
              <div class="absolute top-5 left-5 z-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-slate-200/80 flex items-center gap-3">
                <div class="flex -space-x-2 overflow-hidden">
                  <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Customer 1" />
                  <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Customer 2" />
                  <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="Customer 3" />
                </div>
                <div>
                  <div class="text-xs sm:text-sm font-bold text-slate-900">${rating}</div>
                  <div class="text-[11px] font-semibold text-amber-500 flex items-center gap-1">
                    <span>★★★★★</span>
                    <span class="text-slate-500 font-normal">4.9/5.0</span>
                  </div>
                </div>
              </div>

              <!-- Main Workshop Image -->
              <img 
                src="${image}" 
                alt="Karakter Bengkel Unitech Garage" 
                class="w-full h-[380px] sm:h-[480px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              
              <!-- Soft Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          <!-- Right Column: Content & 3 Vertical Feature Items -->
          <div class="lg:col-span-6" data-animate="fade-up">
            <span class="eyebrow text-brand-orange tracking-widest font-semibold uppercase text-xs sm:text-sm">${eyebrow}</span>
            
            <h2 class="mt-2.5 text-balanced font-heading text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.18] text-slate-900">
              ${titleTop}<br />
              <span class="text-brand-orange">${titleBottom}</span>
            </h2>
            
            <p class="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-xl">${body}</p>

            <!-- 3 Vertical Feature Items -->
            <div class="mt-7 space-y-4">
              ${features.map((feat, idx) => `
                <div class="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/60 group">
                  <div class="w-12 h-12 rounded-2xl ${featureBgStyles[idx]} border flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    ${featureIcons[idx]}
                  </div>
                  <div>
                    <h4 class="text-base sm:text-lg font-heading font-extrabold text-slate-900 leading-snug group-hover:text-brand-orange transition-colors">${feat.title}</h4>
                    <p class="mt-1 text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">${feat.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>
      </div>
    </section>
  `
}

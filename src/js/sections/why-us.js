import { siteContent } from '../data/content.js'

export function renderWhyUs(el) {
  const { eyebrow, title, points } = siteContent.whyUs

  // CTA button labels for each point
  const ctaLabels = [
    'Konsultasi Diagnosis',
    'Cek Biaya Transparan',
    'Hasil Kerja Garansi',
    'Chat via WhatsApp'
  ]

  const p0 = points[0] // Diagnosis Terarah
  const p1 = points[1] // Estimasi Transparan
  const p2 = points[2] // Eksekusi Rapi
  const p3 = points[3] // Respons Cepat

  el.innerHTML = `
    <section class="section bg-slate-950 text-white py-16 sm:py-24">
      <div class="container-main">
        
        <!-- Header Section -->
        <div class="mx-auto max-w-3xl text-center" data-animate="fade-up">
          <span class="eyebrow justify-center text-brand-orange">${eyebrow}</span>
          <h2 class="mt-3 text-balanced font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">${title}</h2>
          <p class="mt-4 text-base leading-relaxed text-slate-400 max-w-2xl mx-auto">
            Standar pengerjaan profesional dengan komunikasi terbuka dan hasil kerja presisi untuk kenyamanan berkendara Anda.
          </p>
        </div>

        <!-- Bento Grid Layout -->
        <div class="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6" data-animate="fade-up">
          
          <!-- Left Column Container (Landscape Cards 1 & 2) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Card 1: Top Left Landscape -->
            <article class="group relative w-full h-[260px] sm:h-[280px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-end p-6 sm:p-8">
              <img 
                src="${p0.image}" 
                alt="${p0.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              
              <div class="relative z-10">
                <h3 class="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">${p0.title}</h3>
                <p class="mt-2 text-sm sm:text-base font-normal text-white/85 max-w-md leading-relaxed">${p0.desc}</p>
                <a 
                  href="#contact" 
                  class="mt-4 inline-flex items-center gap-2.5 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 w-fit group/btn">
                  <span>${ctaLabels[0]}</span>
                  <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </article>

            <!-- Card 2: Bottom Left Landscape -->
            <article class="group relative w-full h-[260px] sm:h-[280px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-end p-6 sm:p-8">
              <img 
                src="${p1.image}" 
                alt="${p1.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              
              <div class="relative z-10">
                <h3 class="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">${p1.title}</h3>
                <p class="mt-2 text-sm sm:text-base font-normal text-white/85 max-w-md leading-relaxed">${p1.desc}</p>
                <a 
                  href="#contact" 
                  class="mt-4 inline-flex items-center gap-2.5 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 w-fit group/btn">
                  <span>${ctaLabels[1]}</span>
                  <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </article>

          </div>

          <!-- Right Column Container (Tall Featured Card 3 - Spans Full Height) -->
          <div class="lg:col-span-5">
            <article class="group relative w-full h-full min-h-[420px] lg:min-h-[586px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-end p-6 sm:p-8 lg:p-10">
              <img 
                src="${p2.image}" 
                alt="${p2.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 via-50% to-transparent"></div>
              
              <div class="relative z-10">
                <h3 class="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">${p2.title}</h3>
                <p class="mt-3 text-sm sm:text-base font-normal text-white/85 leading-relaxed">${p2.desc}</p>
                <a 
                  href="#contact" 
                  class="mt-6 inline-flex items-center gap-2.5 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 w-fit group/btn">
                  <span>${ctaLabels[2]}</span>
                  <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </article>
          </div>

          <!-- Bottom Full Width Bento Card 4 -->
          <div class="lg:col-span-12">
            <article class="group relative w-full h-[220px] sm:h-[240px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl flex flex-col justify-end p-6 sm:p-8">
              <img 
                src="${p3.image}" 
                alt="${p3.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
              
              <div class="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h3 class="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">${p3.title}</h3>
                  <p class="mt-1.5 text-sm sm:text-base font-normal text-white/85 max-w-xl leading-relaxed">${p3.desc}</p>
                </div>
                <a 
                  href="#contact" 
                  class="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 w-fit group/btn shrink-0">
                  <span>${ctaLabels[3]}</span>
                  <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  `
}

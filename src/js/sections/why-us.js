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
    <section class="section bg-slate-950 text-white py-12 sm:py-16">
      <div class="container-main">
        
        <!-- Refined Header Typography -->
        <div class="mx-auto max-w-3xl text-center" data-animate="fade-up">
          <span class="eyebrow justify-center text-brand-orange tracking-widest font-semibold uppercase text-xs sm:text-sm">${eyebrow}</span>
          <h2 class="mt-3 text-balanced font-heading text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight leading-[1.2] text-white max-w-2xl mx-auto">${title}</h2>
          <p class="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-400 font-normal max-w-xl mx-auto">
            Standar pengerjaan profesional dengan komunikasi terbuka dan hasil kerja presisi untuk kenyamanan berkendara Anda.
          </p>
        </div>

        <!-- Compact Bento Grid Layout -->
        <div class="mt-9 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5" data-animate="fade-up">
          
          <!-- Left Column Container (Landscape Cards 1 & 2 - Narrower Width) -->
          <div class="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            
            <!-- Card 1: Top Left Landscape -->
            <article class="group relative w-full h-[190px] sm:h-[210px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/15 shadow-xl flex flex-col justify-end p-5 sm:p-6">
              <img 
                src="${p0.image}" 
                alt="${p0.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent"></div>
              
              <div class="relative z-10">
                <h3 class="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight leading-snug">${p0.title}</h3>
                <p class="mt-1.5 text-xs sm:text-sm font-normal text-slate-300/90 max-w-md leading-relaxed">${p0.desc}</p>
                <a 
                  href="#contact" 
                  class="mt-3.5 inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md shadow-orange-500/20 transition-all duration-300 w-fit group/btn">
                  <span>${ctaLabels[0]}</span>
                  <div class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </article>

            <!-- Card 2: Bottom Left Landscape -->
            <article class="group relative w-full h-[190px] sm:h-[210px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/15 shadow-xl flex flex-col justify-end p-5 sm:p-6">
              <img 
                src="${p1.image}" 
                alt="${p1.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent"></div>
              
              <div class="relative z-10">
                <h3 class="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight leading-snug">${p1.title}</h3>
                <p class="mt-1.5 text-xs sm:text-sm font-normal text-slate-300/90 max-w-md leading-relaxed">${p1.desc}</p>
                <a 
                  href="#contact" 
                  class="mt-3.5 inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md shadow-orange-500/20 transition-all duration-300 w-fit group/btn">
                  <span>${ctaLabels[1]}</span>
                  <div class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </article>

          </div>

          <!-- Right Column Container (Tall Featured Card 3 - Spans Full Height) -->
          <div class="lg:col-span-7">
            <article class="group relative w-full h-full min-h-[300px] lg:min-h-[440px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/15 shadow-xl flex flex-col justify-end p-5 sm:p-6 lg:p-7">
              <img 
                src="${p2.image}" 
                alt="${p2.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 via-50% to-transparent"></div>
              
              <div class="relative z-10">
                <h3 class="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight leading-snug">${p2.title}</h3>
                <p class="mt-2 text-xs sm:text-sm font-normal text-slate-300/90 leading-relaxed max-w-lg">${p2.desc}</p>
                <a 
                  href="#contact" 
                  class="mt-4 inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-md shadow-orange-500/20 transition-all duration-300 w-fit group/btn">
                  <span>${ctaLabels[2]}</span>
                  <div class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>
            </article>
          </div>

          <!-- Bottom Full Width Bento Card 4 -->
          <div class="lg:col-span-12">
            <article class="group relative w-full h-[150px] sm:h-[170px] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/15 shadow-xl flex flex-col justify-end p-5 sm:p-6">
              <img 
                src="${p3.image}" 
                alt="${p3.title}" 
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                loading="lazy" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent"></div>
              
              <div class="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h3 class="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight leading-snug">${p3.title}</h3>
                  <p class="mt-1 text-xs sm:text-sm font-normal text-slate-300/90 max-w-xl leading-relaxed">${p3.desc}</p>
                </div>
                <a 
                  href="#contact" 
                  class="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs px-4 py-2 rounded-full shadow-md shadow-orange-500/20 transition-all duration-300 w-fit group/btn shrink-0">
                  <span>${ctaLabels[3]}</span>
                  <div class="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
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

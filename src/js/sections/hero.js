import { siteContent } from '../data/content.js'

export function renderHero(el) {
  const {
    headline,
    supportingHeadline,
    subheadline,
    ctaPrimary,
    ctaSecondary,
    whatsappNumber,
    bgImage,
    carsImage
  } = siteContent.hero

  const bookingMessage = encodeURIComponent(
    'Halo Unitech Garage, saya ingin booking service kendaraan.'
  )

  el.innerHTML = `
    <section class="hero-shell" aria-labelledby="hero-title">
      <div class="hero-section">
        <div class="hero-backdrop" aria-hidden="true">
          <img src="${bgImage}" alt="" fetchpriority="high">
          <div class="hero-backdrop-overlay"></div>
          <div class="hero-backdrop-vignette"></div>
        </div>

        <div class="hero-content" data-animate="fade-up">
          <h1 id="hero-title" class="hero-title">${headline}</h1>
          <p class="hero-supporting-title">${supportingHeadline}</p>
          <p class="hero-subtitle">${subheadline}</p>

          <div class="hero-actions">
            <a
              href="https://wa.me/${whatsappNumber}?text=${bookingMessage}"
              target="_blank"
              rel="noopener noreferrer"
              class="hero-cta-btn"
            >
              <span>${ctaPrimary}</span>
            </a>

            <a href="#services" class="hero-secondary-btn">
              ${ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div class="hero-vehicle-stage">
        <img
          src="${carsImage}"
          class="hero-car-lineup"
          alt="Deretan kendaraan yang ditangani Unitech Garage"
          fetchpriority="high"
        >
      </div>
    </section>
  `
}

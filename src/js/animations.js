import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initScrollAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Group animations per section to allow stagger for multiple children
  const sections = document.querySelectorAll('.section')

  sections.forEach((section) => {
    const items = section.querySelectorAll('[data-animate="fade-up"]')
    if (!items.length) return

    if (reduceMotion) {
      // simple reveal without motion
      items.forEach((el) => el.style.opacity = 1)
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 85%'
      }
    })

    tl.fromTo(items, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1 })
  })

  // Hero specific micro-animations
  const heroTitle = document.querySelector('[data-animate-hero]')
  if (heroTitle && !reduceMotion) {
    gsap.fromTo(heroTitle.querySelectorAll('.chars'), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.04, ease: 'power2.out', delay: 0.1, scrollTrigger: { trigger: heroTitle, start: 'top 90%' } })
  }
}

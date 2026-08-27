export function initScrollAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const items = document.querySelectorAll('[data-animate]')

  if (!items.length) return

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -4% 0px'
    }
  )

  items.forEach((item) => {
    const rect = item.getBoundingClientRect()

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      item.classList.add('is-visible')
    } else {
      observer.observe(item)
    }
  })
}

export function initScrollAnimations() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const items = document.querySelectorAll('[data-animate="fade-up"]')

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
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    }
  )

  items.forEach((item) => {
    const rect = item.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      item.classList.add('is-visible')
    } else {
      observer.observe(item)
    }
  })

  // Safety fallback reveal
  setTimeout(() => {
    items.forEach((el) => el.classList.add('is-visible'))
  }, 1200)
}

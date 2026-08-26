export default function initStackedCards(root = document) {
  const containers = Array.from(root.querySelectorAll('.stacked-cards'))
  containers.forEach(setup)

  function setup(container) {
    if (container.dataset.stackedCardsReady === 'true') return

    const cards = getCards(container)
    if (cards.length < 2) return

    container.dataset.stackedCardsReady = 'true'
    reStack(container)

    const nextBtn = container.querySelector('.stacked-next')
    const prevBtn = container.querySelector('.stacked-prev')

    nextBtn && nextBtn.addEventListener('click', () => cycleNext(container))
    prevBtn && prevBtn.addEventListener('click', () => cyclePrev(container))

    // support swipe (pointer)
    let startX = 0
    let down = false
    container.addEventListener('pointerdown', (event) => {
      down = true
      startX = event.clientX
      container.setPointerCapture?.(event.pointerId)
    })

    container.addEventListener('pointerup', (event) => {
      if (!down) return

      down = false
      container.releasePointerCapture?.(event.pointerId)

      const dx = event.clientX - startX
      if (dx < -40) cycleNext(container)
      if (dx > 40) cyclePrev(container)
    })

    container.addEventListener('pointercancel', () => {
      down = false
    })
  }

  function cycleNext(container) {
    if (container.dataset.stackedCardsAnimating === 'true') return

    const cards = getCards(container)
    if (!cards.length) return

    container.dataset.stackedCardsAnimating = 'true'
    const top = cards[0]
    top.style.transform = 'translateX(120%) translateY(-20px) scale(0.95)'
    top.style.opacity = '0'
    top.style.transition = 'transform 420ms cubic-bezier(.2,.9,.2,1), opacity 300ms ease'

    top.addEventListener('transitionend', function onEnd() {
      top.removeEventListener('transitionend', onEnd)
      top.parentElement.appendChild(top)
      top.style.transition = ''
      top.style.transform = ''
      top.style.opacity = ''
      reStack(container)
    }, { once: true })
  }

  function cyclePrev(container) {
    if (container.dataset.stackedCardsAnimating === 'true') return

    const cards = getCards(container)
    if (!cards.length) return

    container.dataset.stackedCardsAnimating = 'true'
    const last = cards[cards.length - 1]
    const deck = last.parentElement

    last.style.transition = 'none'
    last.style.transform = 'translateX(-120%) translateY(-20px) scale(0.95)'
    last.style.opacity = '0'
    deck.insertBefore(last, cards[0])

    requestAnimationFrame(() => {
      reStack(container)
    })
  }

  function reStack(container) {
    const cards = getCards(container)
    cards.forEach((card, i) => {
      card.style.zIndex = (cards.length - i).toString()
      requestAnimationFrame(() => {
        card.style.transition = 'transform 360ms cubic-bezier(.2,.9,.2,1), opacity 260ms ease'
        card.style.transform = `translateY(${i * 8}px) scale(${1 - i * 0.03})`
        card.style.opacity = `${1 - i * 0.08}`
      })
    })

    setTimeout(() => {
      cards.forEach((card) => {
        card.style.transition = ''
      })
      container.dataset.stackedCardsAnimating = 'false'
    }, 420)
  }

  function getCards(container) {
    return Array.from(container.querySelectorAll('.stacked-deck > .stacked-card'))
t(() => {
      cards.forEach(c => c.style.transition = '')
    }, 420)
  }
}

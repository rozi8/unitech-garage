export default function initBeforeAfter(root = document) {
  const sliders = Array.from(root.querySelectorAll('.before-after'))
  sliders.forEach(setupSlider)
}

function setupSlider(container) {
  if (container.dataset.beforeAfterReady === 'true') return

  const imgBefore = container.querySelector('.ba-before')
  const handle = container.querySelector('.ba-handle')
  const divider = container.querySelector('.ba-divider')
  if (!imgBefore || !handle || !divider) return

  container.dataset.beforeAfterReady = 'true'
  let position = 0.5

  function applyPosition(nextPosition) {
    position = Math.max(0.08, Math.min(0.92, nextPosition))
    const percent = `${position * 100}%`
    imgBefore.style.width = percent
    divider.style.left = percent
    handle.style.left = `calc(${percent} - 24px)`
  }

  function updateFromPointer(event) {
    const rect = container.getBoundingClientRect()
    const x = event.clientX - rect.left
    applyPosition(x / rect.width)
  }

  function onPointerDown(event) {
    event.preventDefault()
    container.setPointerCapture?.(event.pointerId)
    container.classList.add('ba-grabbing')
    updateFromPointer(event)
  }

  function onPointerMove(event) {
    if (!container.classList.contains('ba-grabbing')) return
    updateFromPointer(event)
  }

  function onPointerUp(event) {
    container.releasePointerCapture?.(event.pointerId)
    container.classList.remove('ba-grabbing')
  }

  container.addEventListener('pointerdown', onPointerDown)
  container.addEventListener('pointermove', onPointerMove)
  container.addEventListener('pointerup', onPointerUp)
  container.addEventListener('pointercancel', onPointerUp)
  container.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') applyPosition(position - 0.05)
    if (event.key === 'ArrowRight') applyPosition(position + 0.05)
  })

  container.tabIndex = 0
  applyPosition(position)
}

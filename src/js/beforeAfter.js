export default function initBeforeAfter(root = document) {
  const sliders = Array.from(root.querySelectorAll('.before-after'))
  sliders.forEach(setupSlider)
}

function setupSlider(container) {
  if (container.dataset.beforeAfterReady === 'true') return
  container.dataset.beforeAfterReady = 'true'

  const imgBefore = container.querySelector('.ba-before')
  const handle = container.querySelector('.ba-handle')
  const divider = container.querySelector('.ba-divider')
  if (!imgBefore || !handle || !divider) return

  let currentPos = 96
  let targetPos = 96
  let isDragging = false
  let animFrameId = null

  function updateDOM(pos) {
    const clamped = Math.max(1, Math.min(99, pos))
    imgBefore.style.clipPath = `polygon(0 0, ${clamped}% 0, ${clamped}% 100%, 0 100%)`
    divider.style.left = `${clamped}%`
    handle.style.left = `${clamped}%`
  }

  function animate() {
    if (isDragging) {
      currentPos = targetPos
      updateDOM(currentPos)
      animFrameId = null
      return
    }

    const diff = targetPos - currentPos
    if (Math.abs(diff) < 0.1) {
      currentPos = targetPos
      updateDOM(currentPos)
      animFrameId = null
    } else {
      currentPos += diff * 0.2
      updateDOM(currentPos)
      animFrameId = requestAnimationFrame(animate)
    }
  }

  function setPos(pos, smooth = false) {
    targetPos = Math.max(1, Math.min(99, pos))
    if (!smooth || isDragging) {
      currentPos = targetPos
      updateDOM(targetPos)
    } else {
      if (!animFrameId) {
        animFrameId = requestAnimationFrame(animate)
      }
    }
  }

  function getPercent(e) {
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    return (x / rect.width) * 100
  }

  function onPointerDown(e) {
    isDragging = true
    container.classList.add('ba-grabbing')
    try {
      container.setPointerCapture(e.pointerId)
    } catch (_) {}
    setPos(getPercent(e), false)
  }

  function onPointerMove(e) {
    if (!isDragging) return
    setPos(getPercent(e), false)
  }

  function onPointerUp(e) {
    if (!isDragging) return
    isDragging = false
    container.classList.remove('ba-grabbing')
    try {
      container.releasePointerCapture(e.pointerId)
    } catch (_) {}
  }

  container.addEventListener('pointerdown', onPointerDown)
  container.addEventListener('pointermove', onPointerMove)
  container.addEventListener('pointerup', onPointerUp)
  container.addEventListener('pointercancel', onPointerUp)

  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') setPos(targetPos - 5, true)
    if (e.key === 'ArrowRight') setPos(targetPos + 5, true)
  })

  container.style.touchAction = 'none'
  container.style.userSelect = 'none'

  setPos(96, false)
}

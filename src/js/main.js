import { renderHeader } from './sections/header.js'
import { renderHero } from './sections/hero.js'
import { renderAbout } from './sections/about.js'
import { renderServices } from './sections/services.js'
import { renderWhyUs } from './sections/why-us.js'
import { renderGallery } from './sections/gallery.js'
import { renderLocation } from './sections/location.js'
import { renderContact } from './sections/contact.js'
import { renderFooter } from './sections/footer.js'
import { initScrollAnimations } from './animations.js'
import initBeforeAfter from './beforeAfter.js'

renderHeader(document.getElementById('site-header'))
renderHero(document.getElementById('hero'))
renderAbout(document.getElementById('about'))
renderServices(document.getElementById('services'))
renderWhyUs(document.getElementById('why-us'))
renderGallery(document.getElementById('gallery'))
renderLocation(document.getElementById('location'))
renderContact(document.getElementById('contact'))
renderFooter(document.getElementById('site-footer'))

// Initialize UI animations and before/after sliders
initScrollAnimations()
// ensure sliders are initialized after DOM render
requestAnimationFrame(() => {
  initBeforeAfter(document)
})

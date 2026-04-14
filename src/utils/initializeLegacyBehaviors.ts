function bindMobileNavToggle() {
  const toggle = document.querySelector<HTMLElement>('[data-nav-toggle]')
  const menu = document.querySelector<HTMLElement>('[data-mobile-nav]')

  if (!toggle || !menu || toggle.dataset.bound === 'true') return

  toggle.dataset.bound = 'true'
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open')
  })
}

function bindHeaderMenuToggle() {
  const body = document.body
  const headerBtn = document.getElementById('menu-toggle') || document.getElementById('menu-btn')
  const closeBtn = document.getElementById('menu-close')
  const menu = document.getElementById('mobile-menu-new') || document.getElementById('mobile-menu')
  const icon = document.getElementById('menu-icon')

  if (!headerBtn || !menu || headerBtn.dataset.bound === 'true') return

  const setMenu = (open: boolean) => {
    headerBtn.setAttribute('aria-expanded', String(open))
    menu.toggleAttribute('hidden', !open)
    menu.classList.toggle('hidden', !open)
    if (icon) icon.textContent = open ? 'close' : 'menu'
    body.classList.toggle('menu-open', open)
  }

  headerBtn.dataset.bound = 'true'
  setMenu(false)

  headerBtn.addEventListener('click', () => {
    const open = headerBtn.getAttribute('aria-expanded') !== 'true'
    setMenu(open)
  })

  closeBtn?.addEventListener('click', () => setMenu(false))
}

function bindCookieBanner() {
  const banner = document.getElementById('cookie-banner')
  if (!banner) return

  const consentKey = 'getaweb_cookie_consent'
  const legacyChoiceKey = 'getaweb_cookie_choice'

  const applyVisibility = () => {
    const saved = localStorage.getItem(consentKey) || localStorage.getItem(legacyChoiceKey)
    banner.hidden = Boolean(saved)
  }

  applyVisibility()

  banner.querySelectorAll<HTMLElement>('[data-cookie]').forEach((btn) => {
    if (btn.dataset.bound === 'true') return
    btn.dataset.bound = 'true'

    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-cookie') === 'accept' ? 'accept' : 'reject'
      localStorage.setItem(consentKey, mode)
      localStorage.setItem(legacyChoiceKey, mode)
      banner.hidden = true
    })
  })
}

function bindContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null
  if (!form || form.dataset.bound === 'true') return

  form.dataset.bound = 'true'
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)
    const name = (formData.get('name') || '').toString().trim()
    const contact = (formData.get('contact') || '').toString().trim()
    const message = (formData.get('message') || '').toString().trim()

    const text = [
      'Nuova richiesta da GETAWEB.IT',
      '',
      `Nome: ${name}`,
      `Contatto: ${contact}`,
      `Messaggio: ${message}`,
      '',
      'Pagina: contatti.html'
    ].join('\n')

    window.location.href = `https://wa.me/393516112099?text=${encodeURIComponent(text)}`
  })
}

export function initializeLegacyBehaviors() {
  bindMobileNavToggle()
  bindHeaderMenuToggle()
  bindCookieBanner()
  bindContactForm()
}

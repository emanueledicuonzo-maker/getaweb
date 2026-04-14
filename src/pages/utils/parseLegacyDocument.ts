export function parseLegacyDocument(rawHtml: string, fallbackTitle: string) {
  const doc = new DOMParser().parseFromString(rawHtml, 'text/html')

  const title = doc.querySelector('title')?.textContent?.trim() || fallbackTitle
  const description =
    doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || ''

  doc
    .querySelectorAll(
      [
        'link[href*="assets/css/site.css"]',
        'script[src*="assets/js/site.js"]',
        'script[src*="assets/js/standard-pages.js"]'
      ].join(',')
    )
    .forEach((el) => el.remove())

  doc.body.querySelectorAll('script').forEach((el) => el.remove())

  const footerGrids = Array.from(doc.querySelectorAll('footer .grid')).filter(
    (el): el is HTMLElement => el instanceof HTMLElement
  )

  for (const footerGrid of footerGrids) {
    footerGrid.className = footerGrid.className
      .replace('xl:grid-cols-5', 'xl:grid-cols-4')
      .replace('lg:grid-cols-5', 'lg:grid-cols-4')

    const sections = Array.from(footerGrid.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    )

    const contactsCol = sections.find((section) =>
      section.textContent?.toLowerCase().includes('contatti')
    )
    const legalCol = sections.find((section) =>
      section.textContent?.toLowerCase().includes('legale')
    )

    if (contactsCol && legalCol && contactsCol !== legalCol) {
      legalCol.classList.add('mt-8')
      contactsCol.appendChild(legalCol)
    }
  }

  const body = doc.body.innerHTML
    .replaceAll('assets/img/', '/images/')
    .replaceAll(
      'src="pagespeed-staimanzo-performance.webp"',
      'src="/images/pagespeed-staimanzo-performance.webp"'
    )
    .replaceAll(
      'src="pagespeed-labottega-busca-performance.webp"',
      'src="/images/pagespeed-labottega-busca-performance.webp"'
    )

  return { title, description, body }
}

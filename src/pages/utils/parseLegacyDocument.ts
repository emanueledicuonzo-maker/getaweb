export function parseLegacyDocument(rawHtml: string, fallbackTitle: string) {
  const doc = new DOMParser().parseFromString(rawHtml, 'text/html')

  const title = doc.querySelector('title')?.textContent?.trim() || fallbackTitle
  const description =
    doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || ''

  const footerGrid = doc.querySelector('footer .grid.xl\\:grid-cols-5')
  if (footerGrid instanceof HTMLElement) {
    footerGrid.className = footerGrid.className.replace('xl:grid-cols-5', 'xl:grid-cols-4')

    const sections = Array.from(footerGrid.children).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    )

    if (sections.length >= 5) {
      const contactsCol = sections[3]
      const legalCol = sections[4]
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

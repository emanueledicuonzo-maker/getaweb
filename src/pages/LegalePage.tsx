import { useEffect, useMemo } from 'react'
import legaleHtml from '../content/legacy/legale.html?raw'

function parseLegale(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const title = doc.querySelector('title')?.textContent?.trim() || 'Legale | GETAWEB'
  const description =
    doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || ''

  const normalizedBody = doc.body.innerHTML
    .replaceAll('assets/img/', '/images/')
    .replaceAll('src="pagespeed-staimanzo-performance.webp"', 'src="/images/pagespeed-staimanzo-performance.webp"')
    .replaceAll(
      'src="pagespeed-labottega-busca-performance.webp"',
      'src="/images/pagespeed-labottega-busca-performance.webp"'
    )

  return { title, description, body: normalizedBody }
}

export default function LegalePage() {
  const parsed = useMemo(() => parseLegale(legaleHtml), [])

  useEffect(() => {
    document.title = parsed.title

    if (parsed.description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', parsed.description)
    }
  }, [parsed.title, parsed.description])

  return <main dangerouslySetInnerHTML={{ __html: parsed.body }} />
}

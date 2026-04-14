import { useEffect, useMemo } from 'react'
import territorioHtml from '../content/legacy/territorio.html?raw'

function parseTerritorio(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const title = doc.querySelector('title')?.textContent?.trim() || 'Territorio | GETAWEB'
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

export default function TerritorioPage() {
  const parsed = useMemo(() => parseTerritorio(territorioHtml), [])

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

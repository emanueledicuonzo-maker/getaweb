import { useEffect, useMemo } from 'react'
import serviziHtml from '../content/legacy/servizi.html?raw'

function parseServizi(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const title = doc.querySelector('title')?.textContent?.trim() || 'Servizi | GETAWEB'
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

export default function ServiziPage() {
  const parsed = useMemo(() => parseServizi(serviziHtml), [])

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

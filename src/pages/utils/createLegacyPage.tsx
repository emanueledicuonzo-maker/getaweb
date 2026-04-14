import { useEffect, useMemo } from 'react'

type LegacyPageProps = {
  rawHtml: string
  fallbackTitle: string
}

function normalizeBody(body: string) {
  return body
    .replaceAll('assets/img/', '/images/')
    .replaceAll('src="pagespeed-staimanzo-performance.webp"', 'src="/images/pagespeed-staimanzo-performance.webp"')
    .replaceAll(
      'src="pagespeed-labottega-busca-performance.webp"',
      'src="/images/pagespeed-labottega-busca-performance.webp"'
    )
}

export function LegacySourcePage({ rawHtml, fallbackTitle }: LegacyPageProps) {
  const parsed = useMemo(() => {
    const doc = new DOMParser().parseFromString(rawHtml, 'text/html')
    const title = doc.querySelector('title')?.textContent?.trim() || fallbackTitle
    const description =
      doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || ''

    return {
      title,
      description,
      body: normalizeBody(doc.body.innerHTML)
    }
  }, [rawHtml, fallbackTitle])

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

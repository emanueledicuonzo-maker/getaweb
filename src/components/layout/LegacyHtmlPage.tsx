import { useEffect, useMemo } from 'react'

type LegacyHtmlPageProps = {
  rawHtml: string
}

function normalizeHtml(rawHtml: string) {
  return rawHtml
    .replaceAll('assets/img/', '/images/')
    .replaceAll('src="pagespeed-staimanzo-performance.webp"', 'src="/images/pagespeed-staimanzo-performance.webp"')
    .replaceAll('src="pagespeed-labottega-busca-performance.webp"', 'src="/images/pagespeed-labottega-busca-performance.webp"')
}

export default function LegacyHtmlPage({ rawHtml }: LegacyHtmlPageProps) {
  const parsed = useMemo(() => {
    const normalized = normalizeHtml(rawHtml)
    const doc = new DOMParser().parseFromString(normalized, 'text/html')
    return {
      title: doc.querySelector('title')?.textContent?.trim() || 'GETAWEB',
      body: doc.body.innerHTML
    }
  }, [rawHtml])

  useEffect(() => {
    document.title = parsed.title
  }, [parsed.title])

  return <div className="legacy-content" dangerouslySetInnerHTML={{ __html: parsed.body }} />
}

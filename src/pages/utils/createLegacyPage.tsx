import { useEffect, useMemo } from 'react'
import { parseLegacyDocument } from './parseLegacyDocument'

type LegacyPageProps = {
  rawHtml: string
  fallbackTitle: string
}

export function LegacySourcePage({ rawHtml, fallbackTitle }: LegacyPageProps) {
  const parsed = useMemo(() => parseLegacyDocument(rawHtml, fallbackTitle), [rawHtml, fallbackTitle])

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

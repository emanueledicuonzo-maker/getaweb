import { useEffect, useMemo } from 'react'
import { parseLegacyDocument } from './utils/parseLegacyDocument'
import homeHtml from '../content/legacy/index.html?raw'

export default function HomePage() {
  const parsed = useMemo(() => parseLegacyDocument(homeHtml, 'Home | GETAWEB'), [])

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

import { useEffect, useMemo } from 'react'
import { parseLegacyDocument } from './utils/parseLegacyDocument'
import territorioHtml from '../content/legacy/territorio.html?raw'

export default function TerritorioPage() {
  const parsed = useMemo(() => parseLegacyDocument(territorioHtml, 'Territorio | GETAWEB'), [])

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

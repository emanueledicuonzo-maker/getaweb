import { useEffect, useMemo } from 'react'
import { parseLegacyDocument } from './utils/parseLegacyDocument'
import blogHtml from '../content/legacy/blog.html?raw'

export default function BlogPage() {
  const parsed = useMemo(() => parseLegacyDocument(blogHtml, 'Blog | GETAWEB'), [])

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

import { useEffect, useMemo } from 'react'
import { parseLegacyDocument } from './utils/parseLegacyDocument'
import contattiHtml from '../content/legacy/contatti.html?raw'

export default function ContattiPage() {
  const parsed = useMemo(() => parseLegacyDocument(contattiHtml, 'Contatti | GETAWEB'), [])
import contattiHtml from '../content/legacy/contatti.html?raw'

function parseContatti(html: string) {
  const doc = new DOMParser().parseFromString(html, 'text/html')
  const title = doc.querySelector('title')?.textContent?.trim() || 'Contatti | GETAWEB'
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

export default function ContattiPage() {
  const parsed = useMemo(() => parseContatti(contattiHtml), [])

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
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: parsed.body }} />

      <section className="py-16 bg-slate-50 border-t border-slate-200" id="brief-contatto">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Richiesta consulenza</h2>
          <p className="text-slate-600 mb-8">
            Compila il form con più dettagli possibili: ti rispondiamo con una valutazione concreta e i prossimi passi.
          </p>

          <form className="grid md:grid-cols-2 gap-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm" method="post" action="#" noValidate>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" required className="w-full border border-slate-300 rounded-xl px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="attivita">Attività</label>
              <input id="attivita" name="attivita" type="text" required className="w-full border border-slate-300 rounded-xl px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="citta">Città</label>
              <input id="citta" name="citta" type="text" required className="w-full border border-slate-300 rounded-xl px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="telefono">Telefono</label>
              <input id="telefono" name="telefono" type="tel" required className="w-full border border-slate-300 rounded-xl px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full border border-slate-300 rounded-xl px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="sito-attuale">Sito attuale</label>
              <input id="sito-attuale" name="sito_attuale" type="url" placeholder="https://" className="w-full border border-slate-300 rounded-xl px-4 py-3" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" htmlFor="cosa-ti-serve">Cosa ti serve</label>
              <input id="cosa-ti-serve" name="cosa_ti_serve" type="text" required className="w-full border border-slate-300 rounded-xl px-4 py-3" />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="budget">Budget indicativo</label>
              <select id="budget" name="budget_indicativo" className="w-full border border-slate-300 rounded-xl px-4 py-3">
                <option value="">Seleziona</option>
                <option value="sotto-1500">Sotto 1.500€</option>
                <option value="1500-3000">1.500€ - 3.000€</option>
                <option value="3000-6000">3.000€ - 6.000€</option>
                <option value="oltre-6000">Oltre 6.000€</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2" htmlFor="messaggio">Messaggio</label>
              <textarea id="messaggio" name="messaggio" rows={6} required className="w-full border border-slate-300 rounded-xl px-4 py-3 resize-none" />
            </div>

            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Ti rispondiamo con una proposta orientativa e un primo piano d’azione.</p>
              <button type="submit" className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all">Invia richiesta</button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-16" id="faq-contatti">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-8">FAQ contatti</h2>
          <div className="space-y-4">
            <details className="border border-slate-200 rounded-xl p-5 bg-white">
              <summary className="font-semibold cursor-pointer">Quanto tempo passa prima della risposta?</summary>
              <p className="mt-3 text-slate-600">Di norma rispondiamo entro 1 giorno lavorativo con un primo riscontro operativo.</p>
            </details>
            <details className="border border-slate-200 rounded-xl p-5 bg-white">
              <summary className="font-semibold cursor-pointer">Serve avere già un’idea tecnica precisa?</summary>
              <p className="mt-3 text-slate-600">No. Ci basta il contesto: obiettivo, attività e priorità. Ti aiutiamo noi a definire struttura e passi.</p>
            </details>
            <details className="border border-slate-200 rounded-xl p-5 bg-white">
              <summary className="font-semibold cursor-pointer">Lavorate solo su siti nuovi o anche su siti esistenti?</summary>
              <p className="mt-3 text-slate-600">Entrambe le opzioni: nuovo progetto da zero oppure revisione strategica/tecnica del sito attuale.</p>
            </details>
            <details className="border border-slate-200 rounded-xl p-5 bg-white">
              <summary className="font-semibold cursor-pointer">Potete seguire anche SEO e tracciamento?</summary>
              <p className="mt-3 text-slate-600">Sì. Possiamo includere SEO strategica, setup analytics e tracciamento eventi coerenti con gli obiettivi.</p>
            </details>
            <details className="border border-slate-200 rounded-xl p-5 bg-white">
              <summary className="font-semibold cursor-pointer">È possibile partire con uno step minimo?</summary>
              <p className="mt-3 text-slate-600">Sì, possiamo iniziare con un audit/consulenza iniziale e poi definire una roadmap progressiva.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}

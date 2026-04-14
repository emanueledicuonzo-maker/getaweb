import sitiWebHtml from '../../content/legacy/siti-web.html?raw'
import { LegacySourcePage } from '../utils/createLegacyPage'

export default function SitiWebDetailPage() {
  return <LegacySourcePage rawHtml={sitiWebHtml} fallbackTitle="Siti web | GETAWEB" />
}

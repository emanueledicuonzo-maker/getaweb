import copyHtml from '../../content/legacy/copy-e-messaggio.html?raw'
import { LegacySourcePage } from '../utils/createLegacyPage'

export default function CopyMessaggioDetailPage() {
  return <LegacySourcePage rawHtml={copyHtml} fallbackTitle="Copy e messaggio | GETAWEB" />
}

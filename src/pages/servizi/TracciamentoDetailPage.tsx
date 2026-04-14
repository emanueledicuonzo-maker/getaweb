import tracciamentoHtml from '../../content/legacy/tracciamento-e-misurazione.html?raw'
import { LegacySourcePage } from '../utils/createLegacyPage'

export default function TracciamentoDetailPage() {
  return <LegacySourcePage rawHtml={tracciamentoHtml} fallbackTitle="Tracciamento e misurazione | GETAWEB" />
}

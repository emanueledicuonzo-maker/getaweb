import backOfficeHtml from '../../content/legacy/back-office.html?raw'
import { LegacySourcePage } from '../utils/createLegacyPage'

export default function BackOfficeDetailPage() {
  return <LegacySourcePage rawHtml={backOfficeHtml} fallbackTitle="Back office | GETAWEB" />
}

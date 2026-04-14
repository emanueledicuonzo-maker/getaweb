import ecommerceHtml from '../../content/legacy/e-commerce.html?raw'
import { LegacySourcePage } from '../utils/createLegacyPage'

export default function EcommerceDetailPage() {
  return <LegacySourcePage rawHtml={ecommerceHtml} fallbackTitle="E-commerce | GETAWEB" />
}

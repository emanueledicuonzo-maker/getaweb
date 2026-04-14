import landingHtml from '../../content/legacy/landing-page.html?raw'
import { LegacySourcePage } from '../utils/createLegacyPage'

export default function LandingPageDetailPage() {
  return <LegacySourcePage rawHtml={landingHtml} fallbackTitle="Landing page | GETAWEB" />
}

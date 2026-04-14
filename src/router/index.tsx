import { Navigate, type RouteObject } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ServiziPage from '../pages/ServiziPage'
import TerritorioPage from '../pages/TerritorioPage'
import BlogPage from '../pages/BlogPage'
import ContattiPage from '../pages/ContattiPage'
import LegalePage from '../pages/LegalePage'
import LandingPageDetailPage from '../pages/servizi/LandingPageDetailPage'
import SitiWebDetailPage from '../pages/servizi/SitiWebDetailPage'
import EcommerceDetailPage from '../pages/servizi/EcommerceDetailPage'
import BackOfficeDetailPage from '../pages/servizi/BackOfficeDetailPage'
import CopyMessaggioDetailPage from '../pages/servizi/CopyMessaggioDetailPage'
import SeoStrategicaDetailPage from '../pages/servizi/SeoStrategicaDetailPage'
import TracciamentoDetailPage from '../pages/servizi/TracciamentoDetailPage'
import ComeOttimizzareGbpDetailPage from '../pages/blog/ComeOttimizzareGbpDetailPage'
import HaiUnSitoBelloDetailPage from '../pages/blog/HaiUnSitoBelloDetailPage'
import PagineSeoGeoFaqDetailPage from '../pages/blog/PagineSeoGeoFaqDetailPage'
import QuantoConvieneInvestireDetailPage from '../pages/blog/QuantoConvieneInvestireDetailPage'

const legacyRedirects: Record<string, string> = {
  '/alba.html': '/territorio#alba',
  '/cuneo.html': '/territorio#cuneo',
  '/saluzzo.html': '/territorio#saluzzo',
  '/savigliano.html': '/territorio#savigliano',
  '/torino.html': '/territorio#torino',
  '/architettura-informativa-updated.html': '/servizi/back-office',
  '/architettura-informativa.html': '/servizi/back-office',
  '/pagine-geo.html': '/servizi',
  '/perche-oggi-non-basta-avere-un-sito.html': '/blog/hai-un-sito-bello-ma-non-genera-richieste',
  '/perche-le-pagine-geo-aiutano-davvero-a-trovare-clienti.html': '/blog/pagine-seo-geo-faq-blog-vs-sito-vetrina'
}

export const appRoutes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/index.html', element: <HomePage /> },
  { path: '/servizi', element: <ServiziPage /> },
  { path: '/servizi.html', element: <ServiziPage /> },
  { path: '/territorio', element: <TerritorioPage /> },
  { path: '/territorio.html', element: <TerritorioPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog.html', element: <BlogPage /> },
  { path: '/contatti', element: <ContattiPage /> },
  { path: '/contatti.html', element: <ContattiPage /> },
  { path: '/legale', element: <LegalePage /> },
  { path: '/legale.html', element: <LegalePage /> },
  { path: '/servizi/landing-page', element: <LandingPageDetailPage /> },
  { path: '/landing-page.html', element: <LandingPageDetailPage /> },
  { path: '/servizi/landing-page.html', element: <LandingPageDetailPage /> },
  { path: '/servizi/siti-web', element: <SitiWebDetailPage /> },
  { path: '/siti-web.html', element: <SitiWebDetailPage /> },
  { path: '/servizi/siti-web.html', element: <SitiWebDetailPage /> },
  { path: '/servizi/e-commerce', element: <EcommerceDetailPage /> },
  { path: '/e-commerce.html', element: <EcommerceDetailPage /> },
  { path: '/servizi/e-commerce.html', element: <EcommerceDetailPage /> },
  { path: '/servizi/back-office', element: <BackOfficeDetailPage /> },
  { path: '/back-office.html', element: <BackOfficeDetailPage /> },
  { path: '/servizi/back-office.html', element: <BackOfficeDetailPage /> },
  { path: '/servizi/copy-e-messaggio', element: <CopyMessaggioDetailPage /> },
  { path: '/copy-e-messaggio.html', element: <CopyMessaggioDetailPage /> },
  { path: '/servizi/copy-e-messaggio.html', element: <CopyMessaggioDetailPage /> },
  { path: '/servizi/seo-strategica', element: <SeoStrategicaDetailPage /> },
  { path: '/seo-strategica.html', element: <SeoStrategicaDetailPage /> },
  { path: '/servizi/seo-strategica.html', element: <SeoStrategicaDetailPage /> },
  { path: '/servizi/tracciamento-e-misurazione', element: <TracciamentoDetailPage /> },
  { path: '/tracciamento-e-misurazione.html', element: <TracciamentoDetailPage /> },
  { path: '/servizi/tracciamento-e-misurazione.html', element: <TracciamentoDetailPage /> },
  { path: '/blog/come-ottimizzare-google-business-profile', element: <ComeOttimizzareGbpDetailPage /> },
  { path: '/come-ottimizzare-google-business-profile.html', element: <ComeOttimizzareGbpDetailPage /> },
  { path: '/blog/come-ottimizzare-google-business-profile.html', element: <ComeOttimizzareGbpDetailPage /> },
  { path: '/blog/hai-un-sito-bello-ma-non-genera-richieste', element: <HaiUnSitoBelloDetailPage /> },
  { path: '/hai-un-sito-bello-ma-non-genera-richieste.html', element: <HaiUnSitoBelloDetailPage /> },
  { path: '/blog/hai-un-sito-bello-ma-non-genera-richieste.html', element: <HaiUnSitoBelloDetailPage /> },
  { path: '/blog/pagine-seo-geo-faq-blog-vs-sito-vetrina', element: <PagineSeoGeoFaqDetailPage /> },
  { path: '/pagine-seo-geo-faq-blog-vs-sito-vetrina.html', element: <PagineSeoGeoFaqDetailPage /> },
  { path: '/blog/pagine-seo-geo-faq-blog-vs-sito-vetrina.html', element: <PagineSeoGeoFaqDetailPage /> },
  { path: '/blog/quanto-conviene-investire-in-un-sito-performante', element: <QuantoConvieneInvestireDetailPage /> },
  { path: '/quanto-conviene-investire-in-un-sito-performante.html', element: <QuantoConvieneInvestireDetailPage /> },
  { path: '/blog/quanto-conviene-investire-in-un-sito-performante.html', element: <QuantoConvieneInvestireDetailPage /> },
  { path: '/servizi/architettura-informativa.html', element: <Navigate to="/servizi/back-office" replace /> },
  { path: '/servizi/siti-web', element: <SitiWebDetailPage /> },
  { path: '/siti-web.html', element: <SitiWebDetailPage /> },
  { path: '/servizi/e-commerce', element: <EcommerceDetailPage /> },
  { path: '/e-commerce.html', element: <EcommerceDetailPage /> },
  { path: '/servizi/back-office', element: <BackOfficeDetailPage /> },
  { path: '/back-office.html', element: <BackOfficeDetailPage /> },
  { path: '/servizi/copy-e-messaggio', element: <CopyMessaggioDetailPage /> },
  { path: '/copy-e-messaggio.html', element: <CopyMessaggioDetailPage /> },
  { path: '/servizi/seo-strategica', element: <SeoStrategicaDetailPage /> },
  { path: '/seo-strategica.html', element: <SeoStrategicaDetailPage /> },
  { path: '/servizi/tracciamento-e-misurazione', element: <TracciamentoDetailPage /> },
  { path: '/tracciamento-e-misurazione.html', element: <TracciamentoDetailPage /> },
  { path: '/blog/come-ottimizzare-google-business-profile', element: <ComeOttimizzareGbpDetailPage /> },
  { path: '/come-ottimizzare-google-business-profile.html', element: <ComeOttimizzareGbpDetailPage /> },
  { path: '/blog/hai-un-sito-bello-ma-non-genera-richieste', element: <HaiUnSitoBelloDetailPage /> },
  { path: '/hai-un-sito-bello-ma-non-genera-richieste.html', element: <HaiUnSitoBelloDetailPage /> },
  { path: '/blog/pagine-seo-geo-faq-blog-vs-sito-vetrina', element: <PagineSeoGeoFaqDetailPage /> },
  { path: '/pagine-seo-geo-faq-blog-vs-sito-vetrina.html', element: <PagineSeoGeoFaqDetailPage /> },
  { path: '/blog/quanto-conviene-investire-in-un-sito-performante', element: <QuantoConvieneInvestireDetailPage /> },
  { path: '/quanto-conviene-investire-in-un-sito-performante.html', element: <QuantoConvieneInvestireDetailPage /> },
  ...Object.entries(legacyRedirects).map(([path, to]) => ({ path, element: <Navigate to={to} replace /> })),
  { path: '*', element: <Navigate to="/" replace /> }
]

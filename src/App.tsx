import { useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { appRoutes } from './router'
import { initializeLegacyBehaviors } from './utils/initializeLegacyBehaviors'

export default function App() {
  const location = useLocation()
  const routes = useRoutes(appRoutes)

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      initializeLegacyBehaviors()
    })

    return () => window.cancelAnimationFrame(raf)
  }, [location.pathname])

  return routes
}

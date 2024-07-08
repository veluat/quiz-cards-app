import { Navigate } from 'react-router-dom'

import { DecksPage } from '@/pages/decks-page'

export function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <DecksPage /> : <Navigate to={'/login'} />
}

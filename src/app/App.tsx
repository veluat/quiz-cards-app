import { Provider } from 'react-redux'

import { Router } from '@/app/providers/routes'
import { store } from '@/app/providers/store/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

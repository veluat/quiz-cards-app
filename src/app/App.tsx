import { Provider } from 'react-redux'

import { Router } from '@/common/routes/router'
import { store } from '@/common/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

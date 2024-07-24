import { decksReducer } from '@/features/decks/model/slice'
import { loadingReducer } from '@/features/loading/model/slice'
import { baseApi } from '@/services/base-api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    /*deck: deckReducer,*/
    decks: decksReducer,
    loading: loadingReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

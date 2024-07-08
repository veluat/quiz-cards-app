import { BaseApi } from '@/common/services/base-api'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(BaseApi.middleware),
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

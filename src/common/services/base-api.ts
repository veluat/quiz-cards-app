import { DecksListResponse } from '@/pages/decks-page/decks-types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BaseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksListResponse, void>({
        query: () => `v2/decks`,
      }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useGetDecksQuery } = BaseApi

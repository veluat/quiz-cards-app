import {
  CreateDeckArgs,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/features/decks/services/decks-types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDeck: builder.mutation<CreateDeckArgs, FormData>({
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        query: args => ({
          params: args ?? {},
          url: `v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'baseApi',
})

export const { useGetDeckByIdQuery, useGetDecksQuery } = baseApi

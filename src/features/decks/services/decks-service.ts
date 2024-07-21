import { RootState } from '@/app/providers/store'
import {
  currentPageSelector,
  searchNameSelector,
  sliderValueSelector,
} from '@/features/decks/model/selectors'
import {
  CreateDeckArgs,
  Deck,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
} from '@/features/decks/services/decks-types'
import { baseApi } from '@/services/base-api'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<void, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      getDeckById: builder.query<GetDecksResponse, GetDeckByIdArgs>({
        query: ({ id }) => `v1/decks/${id}`,
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? {},
          url: `v2/decks`,
        }),
      }),
      updateDeck: builder.mutation<Deck, { data: FormData; id: string }>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async ({ id, ...body }, { dispatch, getState, queryFulfilled }) => {
          const state = getState() as RootState
          const currentPage = currentPageSelector(state)
          const name = searchNameSelector(state)
          const minCards = sliderValueSelector(state)[0]
          const maxCards = sliderValueSelector(state)[1]

          // Функция для обновления кэша
          const updateDeckInCache = (draft: GetDecksResponse) => {
            const deck = draft.items.find(deck => deck.id === id)

            if (deck) {
              Object.assign(deck, {
                ...deck,
                ...body,
              })
            }
          }

          // Обновление кэша
          dispatch(
            decksService.util.updateQueryData(
              'getDecks',
              {
                currentPage,
                maxCardsCount: maxCards,
                minCardsCount: minCards,
                name,
              },
              updateDeckInCache
            )
          )
          await queryFulfilled
        },
        query: ({ data, id }) => ({
          body: data,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService

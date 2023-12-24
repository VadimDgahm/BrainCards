import {
  CreateDeckResponse,
  CreateDeckType,
  DeckDeleteResponse,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
  GetDecksResponseItems,
  UpdateDeck,
} from '@/src/services/decks.types'

import { baseApi } from './base-api'
import { RootState } from './store'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckType>({
        invalidatesTags: ['Decks'],
        onQueryStarted: async (_, { dispatch, getState, queryFulfilled }) => {
          const state = getState() as RootState
          const currentPage = state.decksReducer.currentPage
          const itemsPerPage = state.decksReducer.itemsPerPage
          const orderBy = state.decksReducer.orderBy
          const minCardsCount = state.decksReducer.sliderValues.minCardsCount
          const maxCardsCount = state.decksReducer.sliderValues.maxCardsCount
          const name = state.decksReducer.searchField
          const res = await queryFulfilled

          dispatch(
            decksService.util.updateQueryData(
              'getDecks',
              {
                currentPage,
                itemsPerPage,
                maxCardsCount,
                minCardsCount,
                name,
                orderBy,
              },
              draft => {
                draft.items.unshift(res.data)
              }
            )
          )
        },
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `decks`,
          }
        },
      }),
      deleteDeck: builder.mutation<DeckDeleteResponse, GetDeckByIdArgs>({
        invalidatesTags: ['Decks'],
        // onQueryStarted: async ({ id, ...body }, { dispatch, getState, queryFulfilled }) => {
        //   const state = getState() as RootState
        //   const currentPage = state.decksReducer.currentPage
        //   const itemsPerPage = state.decksReducer.itemsPerPage
        //   const orderBy = state.decksReducer.orderBy
        //   const minCardsCount = state.decksReducer.sliderValues.minCardsCount
        //   const maxCardsCount = state.decksReducer.sliderValues.maxCardsCount
        //   const name = state.decksReducer.searchField
        //
        //   dispatch(
        //     decksService.util.updateQueryData(
        //       'getDecks',
        //       {
        //         currentPage,
        //         itemsPerPage,
        //         maxCardsCount,
        //         minCardsCount,
        //         name,
        //         orderBy,
        //       },
        //       draft => {
        //         const deck = draft.items.find(item => item.id === id)
        //
        //         if (deck) {
        //           Object.assign(deck, { ...deck, ...body })
        //         }
        //       }
        //     )
        //   )
        //   await queryFulfilled
        // },
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `decks`,
          }
        },
      }),
      getDecksByID: builder.query<GetDecksResponseItems, GetDeckByIdArgs>({
        providesTags: ['Decks'],
        query: ({ id }) => {
          return {
            url: `decks/${id}`,
          }
        },
      }),
      updateDeck: builder.mutation<GetDecksResponseItems, UpdateDeck>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'PATCH',
            url: `decks/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksByIDQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService

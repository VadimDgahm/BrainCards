import { baseApi } from '@/services/base-api'
import {
  CreateDeckResponse,
  CreateDeckType,
  DeckDeleteResponse,
  GetDeckByIdArgs,
  GetDecksArgs,
  GetDecksResponse,
  GetDecksResponseItems,
  UpdateDeck,
} from '@/services/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckType>({
        invalidatesTags: ['Decks'],
        // onQueryStarted: async (_, { dispatch, getState, queryFulfilled }) => {
        //   const state = getState() as RootState
        //   // const currentPage = state.decks.currentPage
        //   // const name = state.decks.search
        //   // const minCards = state.decks.minCards
        //   // const maxCards = state.decks.maxCards
        //   const res = await queryFulfilled
        //
        //   dispatch(
        //     decksService.util.updateQueryData(
        //       'getDecks',
        //       {
        //         // currentPage,
        //         // maxCards, minCards, name
        //       },
        //       draft => {
        //         draft.items.unshift(res.data)
        //       }
        //     )
        //   )
        // },
        query: arg => {
          return {
            body: arg,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),
      deleteDeck: builder.mutation<DeckDeleteResponse, GetDeckByIdArgs>({
        invalidatesTags: ['Decks'],
        // onQueryStarted: async ({ id, ...body }, { dispatch, getState, queryFulfilled }) => {
        //   const state = getState() as RootState
        //   // const currentPage = state.decks.currentPage
        //   // const name = state.decks.search
        //   // const minCards = state.decks.minCards
        //   // const maxCards = state.decks.maxCards
        //
        //   dispatch(
        //     decksService.util.updateQueryData(
        //       'getDecks',
        //       {
        //         // currentPage,
        //         // maxCards, minCards, name
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
            url: `v1/decks/${id}`,
          }
        },
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => {
          return {
            params: args ?? {},
            url: `v1/decks`,
          }
        },
      }),
      getDecksByID: builder.query<GetDecksResponseItems, GetDeckByIdArgs>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}`,
          }
        },
      }),
      updateDeck: builder.mutation<GetDecksResponseItems, UpdateDeck>({
        invalidatesTags: ['Decks'],
        // onQueryStarted: async ({ id, ...body }, { dispatch, getState, queryFulfilled }) => {
        //   const state = getState() as RootState
        //   const currentPage = state.decks.currentPage
        //   // const name = state.decks.search
        //   // const minCards = state.decks.minCards
        //   // const maxCards = state.decks.maxCards
        //
        //   dispatch(
        //     decksService.util.updateQueryData(
        //       'getDecks',
        //       {
        //         currentPage,
        //         // maxCards, minCards, name
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
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'PATCH',
            url: `v1/decks/${id}`,
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

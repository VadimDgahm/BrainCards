import {
  GetCardsByDeckId,
  GetCardsForLearn,
  GetCarsdByDeckResponse,
  GetLearnResponse,
  RateSave,
} from '@/services/decks/decks.types'

import { baseApi } from './base-api'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      addCardByDeckId: builder.mutation<any, any>({
        invalidatesTags: ['Cards'],
        query: ({ body, id }) => {
          return {
            body,
            method: 'POST',
            url: `decks/${id}/cards`,
          }
        },
      }),
      createAndSaveRate: builder.mutation<void, RateSave>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'POST',
            url: `decks/${id}/learn`,
          }
        },
      }),
      getCardById: builder.query<any, any>({
        providesTags: ['Cards'],
        query: ({ id }) => {
          return {
            url: `cards/${id}`,
          }
        },
      }),
      getCardsByDeckId: builder.query<GetCarsdByDeckResponse, GetCardsByDeckId>({
        providesTags: ['Cards'],
        query: ({ id, ...args }) => {
          return {
            params: args || {},
            url: `decks/${id}/cards`,
          }
        },
      }),
      getCardsForLearn: builder.query<GetLearnResponse, GetCardsForLearn>({
        query: ({ id }) => {
          return {
            url: `decks/${id}/learn`,
          }
        },
      }),
      removeCardByDeckId: builder.mutation<any, any>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => {
          return {
            method: 'DELETE',
            url: `cards/${id}`,
          }
        },
      }),
      updateCardByDeckId: builder.mutation<any, any>({
        invalidatesTags: ['Cards'],
        query: ({ body, id }) => {
          return {
            body: body,
            method: 'PATCH',
            url: `cards/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useAddCardByDeckIdMutation,
  useCreateAndSaveRateMutation,
  useGetCardByIdQuery,
  useGetCardsByDeckIdQuery,
  useGetCardsForLearnQuery,
  useLazyGetCardsForLearnQuery,
  useRemoveCardByDeckIdMutation,
  useUpdateCardByDeckIdMutation,
} = decksService

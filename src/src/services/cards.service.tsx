import {
  CardCreation,
  GetCardsByDeckId,
  GetCardsForLearn,
  GetCarsdByDeckResponse,
  GetLearnResponse,
  RateSave,
} from '@/src/services/decks.types'

import { baseApi } from './base-api'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
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
      createCardQuestion: builder.mutation<void, CardCreation>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'POST',
            url: `decks/${id}/cards`,
          }
        },
      }),
      getCardsByDeckId: builder.query<GetCarsdByDeckResponse, GetCardsByDeckId>({
        query: ({ id }) => {
          return {
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
    }
  },
})

export const {
  useCreateAndSaveRateMutation,
  useCreateCardQuestionMutation,
  useGetCardsByDeckIdQuery,
  useGetCardsForLearnQuery,
} = decksService

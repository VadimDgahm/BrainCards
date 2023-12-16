import { baseApi } from '@/services/base-api'
import {
  CardCreation,
  GetCardsByDeckId,
  GetCardsForLearn,
  GetCarsdByDeckResponse,
  GetLearnResponse,
  RateSave,
} from '@/services/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createAndSaveRate: builder.mutation<void, RateSave>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'POST',
            url: `v1/decks/${id}/learn`,
          }
        },
      }),
      createCardQuestion: builder.mutation<void, CardCreation>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => {
          return {
            body,
            method: 'POST',
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      getCardsByDeckId: builder.query<GetCarsdByDeckResponse, GetCardsByDeckId>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      getCardsForLearn: builder.query<GetLearnResponse, GetCardsForLearn>({
        query: ({ id }) => {
          return {
            url: `v1/decks/${id}/learn`,
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

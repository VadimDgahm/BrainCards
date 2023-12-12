import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API_URL = 'https://api.flashcards.andrii.es/v1/'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: 'include',
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Auth', 'Learn', 'Cards', 'Decks'],
})

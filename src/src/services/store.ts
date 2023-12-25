import { baseApi } from '@/src/services/base-api'
import { cardsReducer } from '@/src/services/card.slice'
import { decksReducer } from '@/src/services/deck.slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cardsReducer,
    decksReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

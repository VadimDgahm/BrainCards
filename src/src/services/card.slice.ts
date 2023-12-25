import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type initialCardsStateType = {
  currentPage: number
  itemsPerPage: number
  orderBy: string
  search: string
}
const initialState: initialCardsStateType = {
  currentPage: 1,
  itemsPerPage: 10,
  orderBy: 'updated-desc',
  search: '',
}

const slice = createSlice({
  initialState,
  name: 'cards',
  reducers: {
    setCurrentPageCards: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setItemsPerPageCards: (state, action: PayloadAction<{ itemsPerPage: number }>) => {
      state.itemsPerPage = action.payload.itemsPerPage
    },
    setOrderByCards: (state, action: PayloadAction<{ orderBy: string }>) => {
      state.orderBy = action.payload.orderBy
    },
    setSearchFieldCards: (state, action: PayloadAction<{ searchField: string }>) => {
      state.search = action.payload.searchField
    },
  },
})

export const cardsReducer = slice.reducer
export const { setCurrentPageCards, setItemsPerPageCards, setOrderByCards, setSearchFieldCards } =
  slice.actions

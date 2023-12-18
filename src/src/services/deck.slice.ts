import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const initialState: initialDeckStateType = {
  currentPage: 1,
  itemsPerPage: 10,
  orderBy: 'updated-desc',
  searchField: '',
  selectedSortOption: 'Last Updated',
  sliderValues: {
    maxCardsCount: 61,
    minCardsCount: 0,
  },
}

export type initialDeckStateType = {
  currentPage: number
  itemsPerPage: number
  orderBy: string
  searchField: string
  selectedSortOption: string
  sliderValues: SliderValuesType
}

export type SliderValuesType = {
  maxCardsCount: number
  minCardsCount: number
}

const slice = createSlice({
  initialState,
  name: 'decks',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage
    },
    setItemsPerPage: (state, action: PayloadAction<{ itemsPerPage: number }>) => {
      state.itemsPerPage = action.payload.itemsPerPage
    },
    setOrderBy: (state, action: PayloadAction<{ orderBy: string }>) => {
      state.orderBy = action.payload.orderBy
    },
    setSearchField: (state, action: PayloadAction<{ searchField: string }>) => {
      state.searchField = action.payload.searchField
    },
    setSelectedSortOption: (state, action: PayloadAction<{ selectedSortOption: string }>) => {
      state.selectedSortOption = action.payload.selectedSortOption
    },
  },
})

export const decksReducer = slice.reducer
export const {
  setCurrentPage,
  setItemsPerPage,
  setOrderBy,
  setSearchField,
  setSelectedSortOption,
} = slice.actions

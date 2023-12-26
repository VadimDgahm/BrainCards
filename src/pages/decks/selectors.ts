import { RootState } from '@/services/store'

export const selectCurrentPage = (state: RootState) => state.decksReducer.currentPage
export const selectItemsPerPage = (state: RootState) => state.decksReducer.itemsPerPage
export const selectSearchFieldSetting = (state: RootState) => state.decksReducer.searchField
export const selectOrderBy = (state: RootState) => state.decksReducer.orderBy
export const selectSelectedSortOption = (state: RootState) => state.decksReducer.selectedSortOption
export const selectSliderValues = (state: RootState) => state.decksReducer.sliderValues

export const selectCurrentPageCards = (state: RootState) => state.cardsReducer.currentPage
export const selectItemsPerPageCards = (state: RootState) => state.cardsReducer.itemsPerPage
export const selectSearchFieldSettingCards = (state: RootState) => state.cardsReducer.search
export const selectOrderByCards = (state: RootState) => state.cardsReducer.orderBy

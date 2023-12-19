import { RootState } from '@/src/services/store'

export const selectCurrentPage = (state: RootState) => state.decksReducer.currentPage
export const selectItemsPerPage = (state: RootState) => state.decksReducer.itemsPerPage
export const selectSearchFieldSetting = (state: RootState) => state.decksReducer.searchField
export const selectOrderBy = (state: RootState) => state.decksReducer.orderBy
export const selectSelectedSortOption = (state: RootState) => state.decksReducer.selectedSortOption
export const selectSliderValues = (state: RootState) => state.decksReducer.sliderValues

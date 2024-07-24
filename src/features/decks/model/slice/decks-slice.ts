import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: {
    searchName: '',
    sliderValue: [0, 30],
    tabValue: '',
  },
  pagination: {
    currentPage: 1,
    pageSize: 5,
  },
}

const slice = createSlice({
  initialState,
  name: 'decks',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<{ newPage: number }>) => {
      state.pagination.currentPage = action.payload.newPage
    },
    setPageSize: (state, action: PayloadAction<{ newPageSize: number }>) => {
      state.pagination.pageSize = action.payload.newPageSize
    },
    setSearchName: (state, action: PayloadAction<{ newSearchName: string }>) => {
      state.filter.searchName = action.payload.newSearchName
    },
    setSliderValue: (state, action: PayloadAction<{ newSliderValue: number[] }>) => {
      state.filter.sliderValue = action.payload.newSliderValue
    },
    setTabValue: (state, action: PayloadAction<{ newTabValue: string }>) => {
      state.filter.tabValue = action.payload.newTabValue
    },
  },
})

export const decksReducer = slice.reducer

export const decksActions = slice.actions

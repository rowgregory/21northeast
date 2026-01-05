import { Reducer, createSlice } from '@reduxjs/toolkit'

export interface HeaderStatePayload {
  loading: boolean
  success: boolean
  error: string | false | null
  navigationDrawer: boolean
  keywordModal: boolean
  keyword: string
}

const initialHeaderState: HeaderStatePayload = {
  loading: false,
  success: false,
  error: null,
  navigationDrawer: false,
  keywordModal: false,
  keyword: ''
}

export const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeaderState,
  reducers: {
    openNavigationDrawer: (state) => {
      state.navigationDrawer = true
    },
    closeNavigationDrawer: (state) => {
      state.navigationDrawer = false
    },
    openKeywordModal: (state) => {
      state.keywordModal = true
    },
    closeKeywordModal: (state) => {
      state.keywordModal = false
    },
    setKeyword: (state, { payload }) => {
      state.keyword = payload.keyword
    }
  }
})

export const headerReducer = headerSlice.reducer as Reducer<HeaderStatePayload>

export const {
  openNavigationDrawer,
  closeNavigationDrawer,
  openKeywordModal,
  closeKeywordModal,
  setKeyword
} = headerSlice.actions

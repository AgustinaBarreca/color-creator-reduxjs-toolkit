import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  loading: false
}

const uiSlice = createSlice ({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading(state) {
      state.loading = !state.loading
    }
  }
}
)

export const uiReducer = uiSlice.reducer
export const uiActions = uiSlice.actions
import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: 0,
  },
  reducers: {
    add: state => {
      state.value += 1;
    }
  }
})

export const { add } = homeSlice.actions;
export default homeSlice.reducer
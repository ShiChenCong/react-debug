import { createSlice } from '@reduxjs/toolkit';

export const infoSlice = createSlice({
  name: 'info',
  initialState: {
    age: 22,
  },
  reducers: {
    add: state => {
      state.value += 1;
    }
  }
})

export const { add } = infoSlice.actions;
export default infoSlice.reducer
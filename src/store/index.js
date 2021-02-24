import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from '../home/slice';

export default configureStore({
  reducer: {
    home: HomeReducer,
  }
})
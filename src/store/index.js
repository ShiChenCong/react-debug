import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from '../home/slice';
import infoReducer from '../info/slice';

export default configureStore({
  reducer: {
    home: HomeReducer,
    info: infoReducer,
  }
})
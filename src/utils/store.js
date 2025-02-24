import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedslice'
import requestReducer from './requestSlice';
import connectionReducer from './connectionSlice';

const appStore = configureStore({
  reducer: {
    user : userReducer,
    feed : feedReducer,
    requests : requestReducer,
    connection : connectionReducer,
  }
});

export default appStore;
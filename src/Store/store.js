import { configureStore } from '@reduxjs/toolkit';
import {contactsApi} from './contactsSlice'
// import filter from './filterSlice';
import logger from "redux-logger";

export default configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    // filter,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    logger,
  ],
  devTools: process.env.NODE_ENV === "development",
});



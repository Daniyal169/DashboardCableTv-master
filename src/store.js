// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import zipCodeReducer from "./reducers/zipCodeReducer";

// Import your reducers here
// For example:
// import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    zipCodeReducer,
    // Add your reducers here
    // For example:
    // counter: counterReducer,
  },
});

export default store;

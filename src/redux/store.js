import { configureStore } from '@reduxjs/toolkit';
import { createReducer, createAction } from '@reduxjs/toolkit';

const increment = createAction('Myvalue/increment');
const decrement = createAction('Myvalue/decrement');
const myReducer = createReducer(10, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});

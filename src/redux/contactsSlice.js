import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  array: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.array.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.array.findIndex(
        contact => contact.id === action.payload
      );

      state.array.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

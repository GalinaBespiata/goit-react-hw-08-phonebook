import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations/fetchContacts ';
import { addContact } from './operations/addContact ';
import { removeContact } from './operations/removeContact';

const contactsInitialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',

  initialState: contactsInitialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContacts.pending, pendingHandler)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, rejectHandler)

      .addCase(addContact.pending, pendingHandler)
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = [action.payload, ...state.contacts.items];
      })
      .addCase(addContact.rejected, rejectHandler)

      .addCase(removeContact.pending, pendingHandler)
      .addCase(removeContact.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload
        );
      }),
});

function pendingHandler(state) {
  state.contacts.isLoading = true;
  state.contacts.error = null;
}
function rejectHandler(state, action) {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
}

export const { setFilter } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

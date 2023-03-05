import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectedWithValue }) => {
    try {
      const response = await axios.post('/contacts', newContact);
      const contact = response.data;
      return contact;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

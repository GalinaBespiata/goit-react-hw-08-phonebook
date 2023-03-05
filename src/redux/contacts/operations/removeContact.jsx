import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectedWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      const contacts = response.data.id;

      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

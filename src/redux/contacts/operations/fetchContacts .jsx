import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      const contacts = response.data;

      return contacts;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

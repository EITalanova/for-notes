import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://649ec3ce245f077f3e9cddc7.mockapi.io';

export const fetchNotes = createAsyncThunk(
  'notes/getNotes',
  async (_, thunkAPI) => {
    try {
        const res = await axios.get(`/note`);
      return { data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

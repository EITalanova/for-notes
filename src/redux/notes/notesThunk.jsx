import axios from 'axios';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchNotes = createAsyncThunk(
  'notes/getNotes',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('../api/fakeData');
      return { data: res.data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

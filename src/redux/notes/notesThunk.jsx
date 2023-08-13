import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64be7ae55ee688b6250c7edb.mockapi.io';

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

export const addNote = createAsyncThunk(
  'notes/addNote',
  async (note, thunkAPI) => {
    try {
      const res = await axios.post(`/note`, note);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNote = createAsyncThunk(
  'notes/deleteNote',
  async (note, thunkAPI) => {
    try {
      const res = await axios.delete(`/note/${note.id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateNote = createAsyncThunk(
  'notes/updateNote',
  async ({ note, updatedData }, thunkAPI) => {
    try {
      const res = await axios.put(`/note/${note.id}`, { ...note, ...updatedData });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

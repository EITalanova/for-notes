import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes } from './notesThunk';

const initialState = {
  notes: [],
  currentNotes: '',
  isLoading: false,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchNotes.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, { payload }) => {
        state.notes = payload.data;
        state.isLoading = false;
      })
      .addCase(fetchNotes.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const notesReducer = notesSlice.reducer;

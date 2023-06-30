import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes } from './notesThunk';

const initialState = {
  notes: [],
  currentNote: null,
  isLoading: false,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setCurrentNote: (state, { payload }) => {
      state.currentNote = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchNotes.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, { payload }) => {
        state.notes = payload.data;
        state.currentNote = payload.data.length > 0 ? payload.data[0] : null;
        state.isLoading = false;
      })
      .addCase(fetchNotes.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const { setCurrentNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;

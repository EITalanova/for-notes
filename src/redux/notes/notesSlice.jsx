import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, addNote, deleteNote, updateNote } from './notesThunk';

const initialState = {
  notes: [],
  currentNote: null,
  isLoading: false,
  error: null,
  isShowModal: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setCurrentNote: (state, { payload }) => {
      state.currentNote = payload;
    },
    setIsShowModal: (state, { payload }) => {
      state.isShowModal = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchNotes.pending, handlePending)
      .addCase(fetchNotes.fulfilled, (state, { payload }) => {
        state.notes = payload.data;
        state.currentNote = payload.data.length > 0 ? payload.data[0] : null;
        state.isLoading = false;
      })
      .addCase(fetchNotes.rejected, handleRejected)
      .addCase(addNote.pending, handlePending)
      .addCase(addNote.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.notes.push(payload);
      })
      .addCase(addNote.rejected, handleRejected),
  // .addCase(deleteNote.pending, handlePending)
  // .addCase(deleteNote.fulfilled, (state, { payload }) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   state.notes.push(payload);
  // })
  // .addCase(deleteNote.rejected, handleRejected),
});

export const { setCurrentNote, setIsShowModal } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes, addNote, deleteNote, updateNote } from './notesThunk';

const initialState = {
  notes: [],
  currentNote: null,
  error: null,
  filter: '',
  isLoading: false,
  isShowModal: false,
  isEditMode: false,
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
    setIsEditMode: (state, { payload }) => {
      state.isEditMode = payload;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
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
        state.notes.unshift(payload);
      })
      .addCase(addNote.rejected, handleRejected)
      .addCase(deleteNote.pending, handlePending)
      .addCase(deleteNote.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.notes.findIndex(note => note.id === payload.id);
        state.notes.splice(index, 1);
      })
      .addCase(deleteNote.rejected, handleRejected)
      .addCase(updateNote.pending, handlePending)
      .addCase(updateNote.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;

        const updatedNoteIndex = state.notes.findIndex(
          note => note.id === payload.id
        );
        if (updatedNoteIndex !== -1) {
          state.notes[updatedNoteIndex] = payload;
          if (state.currentNote && state.currentNote.id === payload.id) {
            state.currentNote = payload;
          }
        }
      })
      .addCase(updateNote.rejected, handleRejected),
});

export const { setCurrentNote, setIsShowModal, setIsEditMode, setFilter } =
  notesSlice.actions;
export const notesReducer = notesSlice.reducer;

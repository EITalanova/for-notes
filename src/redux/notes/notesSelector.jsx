export const selectNotes = state => state.notes.notes;
export const selectCurrentNote = state => state.notes.currentNote;
export const selectIsLoading = state => state.notes.isLoading;
export const selectIsShowModal = state => state.notes.isShowModal;
export const selectIsEditMode = state => state.notes.isEditMode;
export const selectFilter = state => state.notes.filter;
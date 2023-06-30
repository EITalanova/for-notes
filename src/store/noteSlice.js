// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const noteSlice = createSlice({
//   name: 'notes',
//   initialState: {
//     notes: [
//       {
//         id: '9595k5m555h5hh5',
//         noteText: 'заметочка',
//       },
//     ],
//     selectedItem: null,
//     editNote: '',
//   },

//   reducers: {
//     addNote(state, action) {
//       state.notes.push({
//         id: nanoid(),
//         noteText: action.payload,
//       });
//     },

//       updateNote(state, action, noteIndex, noteText) {
//     //   const updatedItems = [...state.notes];
//       state.notes[noteIndex] = action.payload;

//     //   return {
//     //     ...state,
//     //     notes: updatedItems,
//     //     selectedItem: updatedItem,
//     //   };
//     },

//       removeNote(state, action, noteIndex) {
//       const updatedItems = [...state.notes];
//       updatedItems.splice(noteIndex, 1);

//       return {
//         ...state,
//         notes: updatedItems,
//         selectedItem: null,
//       };
//     },

    


//     //   const lastEll = state.notes[state.notes.length - 1];
//     //     if (!action.payload) {
//     //     return state; // возвращаем текущее состояние хранилища, если payload не определен
//     //   }
//     //   const { id, noteText } = action.payload;

//     // if (id === undefined) {

//     // const updatedNote = state.notes.map(note =>
//     //   note.id === lastEll ? { ...note, lastEll } : note
//     // );
//     // return { ...state, notes: updatedNote };
//     // }
//     //     else {
//     //   const updatedNote = state.notes.map(note =>
//     //     note.id === id || note.id === lastEll ? { ...note, noteText } : note
//     //   );

//     //   return { ...state, notes: updatedNote };
//     //   }
//     // },
//   },
// });

// export const { addNote, editNote, removeNote, updateNote } = noteSlice.actions;
// export default noteSlice.reducer;

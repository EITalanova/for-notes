import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { notesReducer } from './notes/notesSlice';
import { themeReducer } from './theme/themeSlice';

const notesPersistConfig = {
  key: 'notes',
  storage,
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    notes: persistReducer(notesPersistConfig, notesReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware,
});

export const persistor = persistStore(store);

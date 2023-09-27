import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import { BrowserRouter } from "react-router-dom";



import { App } from 'App';

import '../src/sass/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename="/for-notes">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
      </BrowserRouter>
  </React.StrictMode>
);

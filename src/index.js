import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from './react-redux';
import { counterReducer } from './store/reducer';
import { createStore } from './redux';
import App from './App';

const store = createStore(counterReducer);
const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

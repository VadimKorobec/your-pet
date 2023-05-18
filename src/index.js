import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import './scss/app.scss';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/your-pet">
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles, globalTheme } from './styles/index';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './store/index';
import '../locales/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={globalTheme}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

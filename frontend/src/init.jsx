import React from 'react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import resources from './locales/index.js';
import store from './slices/index.js';
import App from './App.jsx';

const init = async () => {
  const i18n = i18next.createInstance();

  await i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem('language') || 'ru',
    fallbackLng: ['ru', 'en'],
  });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  );
};

export default init;

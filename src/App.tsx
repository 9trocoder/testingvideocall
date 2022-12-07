import TranslationProvider from '@components/TranslationProvider';
import { ConferenceCreateProvider } from '@context/ConferenceCreateContext';
import { CommsProvider, ThemeProvider } from '@dolbyio/comms-uikit-react';
import { Navigator } from '@src/routes/Navigator';
import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';

import './App.module.scss';

const App = () => {
  const location = useLocation();

  const urlToken = useMemo(() => {
    return encodeURIComponent(new URLSearchParams(window.location.search).get('token') || '');
  }, [location]);

  const YOUR_TOKEN = urlToken;

  return (
    <TranslationProvider>
      <ConferenceCreateProvider>
        <CommsProvider token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY3MDQ2MDg2Nywic3ViIjoiR2k1bnJuYW5wN3NTTVpYcmZKNl9rUT09Iiwic2NvcGUiOiJzZXNzaW9uIiwib2lkIjoiZTRjNDJmOGItMjZiOS00MTk1LTk4M2YtNTEzMGMyNWViYjE1IiwiYmlkIjoiOGEzNjhjMWY4MjM0OTRmYzAxODI1YTMzYTQ4NTM3M2EiLCJhaWQiOiI2MDgyMTVlYS00NGFlLTRjNWUtOTFhMS03Yjg3NDI0NTU4ZDciLCJhdXRob3JpdGllcyI6WyJST0xFX0NVU1RPTUVSIl0sImV4cCI6MTY3MDUwNDA2N30.InVGEY8AGZTCLe5jiGjHhC6G3U50FBU7DBV2l7J_QMp5dvZ8RgBiAAz-qr4Ij-ifimy2gEHC25SWDaH1cOVA4Q" packageUrlPrefix={`${import.meta.env.BASE_URL}assets/wasm`}>
          <ThemeProvider
            customThemes={{
              'My Theme': { colors: { white: 'yellow', primary: { 400: 'red' }, secondary: { 400: 'blue' } } },
            }}
          >
            <Navigator />
          </ThemeProvider>
        </CommsProvider>
      </ConferenceCreateProvider>
    </TranslationProvider>
  );
};

const container = document.getElementById('root');
// no-non-null-assertion comes from official react docs
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

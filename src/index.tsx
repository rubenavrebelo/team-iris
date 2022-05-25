import { StyledEngineProvider } from '@mui/material/styles';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <StyledEngineProvider  injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
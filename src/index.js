import React from 'react';
import ReactDOM from 'react-dom';
import { UIRouter } from 'ui-router-react';
import App from './App';
import './index.css';

import { plugins, states } from './router.config';

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <App />
  </UIRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './styles/app.css';

const container = document.getElementById('app');

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, container);
  });
}

ReactDOM.render(<App />, container);
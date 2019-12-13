import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Output from './components/Output';
import { store, history, } from './redux/store';

render(
  <Provider store={ store }>
    <Output history={ history } />
  </Provider>,
  document.getElementById('root'),
);

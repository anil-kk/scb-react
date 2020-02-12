import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducers';

const store = createStore(rootReducer);

const rootElement = document.getElementById('root');

let renderRootComponent = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
};

//HOT MODULE REPLACEMENT CONFIG FOR DEV
if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(renderRootComponent);
  });
}

renderRootComponent();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

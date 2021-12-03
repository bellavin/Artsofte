import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './components/app/app';
import {reducer} from './store/reducer';
import thunkMiddleware from 'redux-thunk';
import {fetchMessagesAction} from './store/actions';
import {ThunkAppDispatch} from './types';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

(store.dispatch as ThunkAppDispatch)(fetchMessagesAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from '../Main/Main';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../../redux/rootReducer';
import thunk from 'redux-thunk';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route
          path="/"
          component={Main}
        />
      </div>
    </Router>
  </Provider>
);

export default App;


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import Main from '../Main/Main';
import { createStore } from 'redux';
import { rootReducer } from '../../redux/rootReducer';

let store = createStore(rootReducer);

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


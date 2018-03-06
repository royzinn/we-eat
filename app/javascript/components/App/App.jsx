import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from '../Main/Main'

const App = (props) => (
  <Router>
    <div>
      <Route
        path='/'
        component={Main}
      />
    </div>
  </Router>
)

export default App

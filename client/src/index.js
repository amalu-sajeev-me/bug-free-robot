import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from './Components/App';

// ReactDOM.render(<App />, document.getElementById("root"));

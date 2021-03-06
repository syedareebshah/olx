import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from './comp/Details/Details'
import Form from './comp/Form/Form.js';
import { Provider } from 'react-redux';
import store from './store';
import SingleProduct from './comp/Prectice/SingleProduct';





ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Routes>
      <Route exect path="/" element={<App />} />
      <Route path="/form" element={<Form />} />
      <Route path="/details" element={<Details />} />
      <Route element={<SingleProduct/>} path='/:name' />
    </Routes>
  </Router>
  </Provider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

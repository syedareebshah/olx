import React from 'react';
import './App.css';
import Header from './comp/Header/Header'
import Ribbon from './comp/Ribbon/Ribbon'
import Banner from './comp/Banner/Banner'
import Product from './comp/Product/Product'
import Footer from './comp/Footer/Footer'
import {Provider} from 'react-redux';
import store from './store';
import Details from './comp/Details/Details'
import Form from './comp/Form/Form'


function App() {
  
  return (
    <div>
      <Header />
      <Ribbon  />
      <Banner />
      <Product />
      <Footer /> 
    </div>
  )
}

export default App;

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


function App() {
  
  return (
    <div>
    <Provider store={store}> 
      <Header />
      <Ribbon  />
      <Banner />
      <Product />
      <Footer />
    </Provider>   
    </div>
  )
}

export default App;

import React from 'react';
import './App.css';
import Header from './comp/Header/Header'
import Ribbon from './comp/Ribbon/Ribbon'
import Banner from './comp/Banner/Banner'
import Product from './comp/Product/Product'
import Footer from './comp/Footer/Footer'
import SingleProduct from './comp/Prectice/SingleProduct';




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

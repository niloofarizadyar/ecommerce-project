import React, { Children } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';

import { Home, Product, Products } from './pages';
import { Navbar, Footer } from './components'


const Layout = () => {
  return(
    <div className='App'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="product/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

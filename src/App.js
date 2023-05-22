import React, { Children } from 'react';
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children : [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/products/:id",
//         element: <Products />
//       },
//       {
//         path: "/product/:id",
//         element: <Product />
//       }
//     ]
//   },
  
// ]);

function App() {
  return (
    // <div>
    //   <RouterProvider router={router} />
    // </div>
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

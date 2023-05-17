import React, { Children } from 'react';
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      }
    ]
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;

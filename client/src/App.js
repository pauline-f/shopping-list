import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Product from './Components/Product';
import Login from './Components/Login';
import NavBar from './Components/NavBar';

function App() {
  const [listProduct, setListProduct] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1>Shopping list</h1>
        <a href='/login'>Login</a>
        <Route path="/list" render={() => <Product listProduct={listProduct} setListProduct={setListProduct} component={Product} />} />
        <Route path="/login" render={() => <Login component={Login} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Product from './Components/Product';

function App() {
  const [listProduct, setListProduct] = useState([]);

  return (
    <div className="App">
      <h1>Shopping list</h1>
      <Product listProduct={listProduct} setListProduct={setListProduct} />
    </div>
  );
}

export default App;

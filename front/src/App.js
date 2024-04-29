import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { ProdutDetails } from './components/products/ProductDetails';

//Router traido desde react-router-dom (no confundir con el de express)
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dashboard } from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import { Login } from './components/user/Login';
import { Cart } from './components/cart/Cart';
import { Register } from './components/user/Register';




function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Home' element={<Home/>}/>
            <Route path='/producto/:id' element={<ProdutDetails/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/productsList' element={<ProductsList />} />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


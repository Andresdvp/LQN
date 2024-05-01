import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { ProdutDetails } from './components/products/ProductDetails';

//Router traido desde react-router-dom (no confundir con el de express)
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Dashboard } from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import { Login } from './components/user/Login';

import { Register } from './components/user/Register';
import { loadUser } from './actions/userActions';
import store from "./store"
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import Cart from './components/cart/Cart';


function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Router >
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/producto/:id' element={<ProdutDetails />} />
            <Route path='/productsList' element={<ProductsList />} />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/carrito' element={<Cart/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/yo' element={<Profile />} />

            {/**rutas protegidas */}
            <Route path='/dashboard'
             element={<ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute>} />

          </Routes>
        </div>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />   
      </div>
    </Router>
  );
}

export default App;


import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { ProdutDetails } from './components/products/ProductDetails';

//Router traido desde react-router-dom (no confundir con el de express)
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

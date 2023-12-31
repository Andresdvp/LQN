import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
//Router traido desde react-router-dom (no confundir con el de express)
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

//clase 10

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './pages/home/Navbar';
import Home from './pages/home/Home';
import Band from './pages/band/Band';
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import NotFound from './pages/home/NotFound';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element ={<Home />}  />
            <Route path='/band' element ={<Band />}  />
            <Route path='/gallery' element ={<Gallery />}  />
            <Route path='/contact' element ={<Contact />}  />
            <Route path='*' element ={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

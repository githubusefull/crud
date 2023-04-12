import { useEffect, useState } from 'react';
import './App.css';

import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';


function App() {
 
 
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home/>}   />
     <Route path="/register" element={<Register />}   />

     </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;

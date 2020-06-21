import React from 'react';
import './App.css';

import Header from './components/header/Header.component';
import Homepage from './components/home/homepage.component';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="container-food">
        <Header />
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;

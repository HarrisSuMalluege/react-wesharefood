import React from 'react';
import './App.css';

import Header from './components/header/Header.component';
import Homepage from './components/home/homepage.component';


function App() {
  return (
    <div className="container-food">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;

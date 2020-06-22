import React from 'react';
import './App.css';

import Main from './components/MainComponent';

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  );
}

export default App;




// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container-food">
//         <Header />
//         <Homepage />
//       </div>
//     </BrowserRouter>
//   );
// }

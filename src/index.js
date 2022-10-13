import React from 'react';
import ReactDOM from 'react-dom/client';
//Globall
// import './scss/globall/globall.scss';
// import './scss/globall/mixin.scss';
import './index.scss';

// import App from './App';
import Header from './js/module/header.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);


"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter.jsx';
import PagesLinks from './pages/PagesLinks.jsx';

import './css/reset.css';
import './css/main.css';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducer from './redux/reducers';

let store=createStore(combinedReducer);


ReactDOM.render( 
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <PagesLinks />
        <PagesRouter />
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('container') );
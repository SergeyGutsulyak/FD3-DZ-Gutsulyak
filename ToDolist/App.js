"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ToDolist from './components/ToDolist.js';

// если необходимо, вид сборки можно проверить в коде:
// if (process.env.NODE_ENV === 'production') {
// if (process.env.NODE_ENV !== 'production') {

ReactDOM.render( 
  <ToDolist />
, document.getElementById('container') );

"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import '../css/reset.css'
import Ishop2 from './components/Ishop2';

var categoryText='Наборы инструментов';
    var itemsArr=[
      {title:'Универсальный набор инструментов Yato 216 предметов',description:'универсальный набор, 1/4", 3/8", 1/2", 216 предметов',price:250,imgURL:'images/frs1.jpg',count:15,code:1},
      {title:'Force 41082 108 предметов (для сорванных граней)',description:'универсальный набор, 1/4", 1/2", 108 предметов',price:196,imgURL:'images/frs2.jpg',count:21,code:2},
      {title:'FORSAGE 108 предметов 6 граней (41082-5)',description:'универсальный набор, 1/4", 1/2", 108 предметов',price:123,imgURL:'images/frs3.jpg',count:13,code:3},
      {title:'Force 4821 82 предмета',description:'универсальный набор, 1/4", 1/2", 82 предмета',price:170.29,imgURL:'images/frs4.jpg',count:9,code:4},
      {title:'PRO Startul PRO-111N 111 предметов',description:'набор торцевых головок, 1/4", 1/2", 111 предмет',price:168.60,imgURL:'images/frs5.jpg',count:15,code:5},
      {title:'Force 41421 142 предмета',description:'универсальный набор, 1/4", 3/8", 1/2", 142 предмета',price:457,imgURL:'images/frs6.jpg',count:16,code:6}
    ];

ReactDOM.render(
  <Ishop2
    category={categoryText}
    itemsArr={itemsArr}
  />
  , document.getElementById('container') 
);


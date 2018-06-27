"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ColorFrame from './components/ColorFrame';

var colorsArr=['red','green','blue','yellow','magenta','greenyellow'];

ReactDOM.render(
    <ColorFrame
        colors={colorsArr}
    />
    , document.getElementById('container')
);
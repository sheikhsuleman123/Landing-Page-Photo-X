import React, { Component } from 'react';
import './header.css';

import Navbar from '../Navbar/Navbar';

export default class componentName extends Component {
  render() {
    return (
    
      <header>
        <Navbar />
   <div className="text-light text-md-right text-center banner">
    <h1 className="display-4 banner-heading">
        Welcome to <span >PHOTO </span>  <span className="display-3"> X</span>
    </h1>
    <p className="lead para">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
   </div>
      </header>
    );
  }
}

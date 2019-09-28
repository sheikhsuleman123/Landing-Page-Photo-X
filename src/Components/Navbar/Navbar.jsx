import React, { Component } from 'react';
import './navbar.css';
import $ from 'jquery';

export default class Navbar extends Component {
  
  componentDidMount () {
   $(document).ready(function() {
     $('.nav-button').click(function(){
      $('.nav-button').toggleClass('change');
     });
   } );

   $(window).scroll(function(){
     let position = $(this).scrollTop();
     if(position >= 200){
       $('.nav-menu').addClass('custom-navbar');
     } else {
      $('.nav-menu').removeClass('custom-navbar');   
     }
   })

  }
  render() {
    return (
      <nav>
        <div className="navbar navbar-expand-lg fixed-top nav-menu">
          <a href="" className="navbar-brand">
           <span className="h2 font-weight-bold tc">PHOTO</span>
           <span className="h2 tc">X</span> 
          </a>
          <button className="navbar-toggler nav-button" type="button" 
          data-toggle="collapse" data-target="#myNavbar">
            <div className="bg-light line1"> </div>
            <div className="bg-light line2"> </div>
            <div className="bg-light line3"> </div>
          </button>
          <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="myNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link m-2 menu-item nav-active">Home</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link m-2 menu-item">Mission</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link m-2 menu-item">Collection</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link m-2 menu-item">Gallery</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link m-2 menu-item">Customer</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link m-2 menu-item">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link m-2 menu-item">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    );
  }
}

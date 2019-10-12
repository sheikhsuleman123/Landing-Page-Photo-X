import React, { Component } from 'react';
import img from '../../images/camera.png';
import $ from 'jquery';

export default class MissionTwo extends Component {
  componentDidMount () {
   
    $(window).scroll(function() {
      let position = $(this).scrollTop();
      if(position >= 650 ){
        $('.camera-img').addClass('fromleft');
        $('.mission-text').addClass('fromright');
      } else {
        $('.camera-img').removeClass('fromleft');
        $('.mission-text').removeClass('fromright');   
      }
    })
 
   }
  render() {
    return (
      <section className="mission">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-5 text-center">
                      <img src={img}  alt="Image not found" width="350" className="img-fluid camera-img" />
                  </div>
                  <div className="col-lg-7 mission-text">
                      <h1 className="text-white ">We know what we do</h1>
                      <p className="text-white lead text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam animi obcaecati dolorum cumque. Sequi fugit quibusdam rem laudantium repudiandae, animi, modi aliquid, nesciunt iusto laboriosam repellat obcaecati assumenda fuga. </p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

import React, { Component } from 'react';
import img from '../../images/camera.png';

export default class MissionTwo extends Component {
  render() {
    return (
      <section className="mission">
          <div className="container">
              
              <div className="row">
                  <div className="col-lg-5">
                      <img src={img}  alt="Image not found" width="350" className="img-fluid" />
                  </div>
                  <div className="col-lg-7">
                      <h1 className="text-white">We know what we do</h1>
                      <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quibusdam animi obcaecati dolorum cumque. Sequi fugit quibusdam rem laudantium repudiandae, animi, modi aliquid, nesciunt iusto laboriosam repellat obcaecati assumenda fuga. </p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

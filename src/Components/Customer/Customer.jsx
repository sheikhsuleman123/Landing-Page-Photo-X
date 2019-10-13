import React, { Component } from 'react';
import './customer.css';

import slider1 from '../../images/customer1.jpeg';
import slider2 from '../../images/customer2.jpeg';
import slider3 from '../../images/customer3.jpeg';

export default class Customer extends Component {
  render() {
    return (
      <section className="p-5 customer">
        <div className="container-fluid">
            <div className="row text-white text-center">
                <div className="col m-4">
                    <h1 className="display-4 mb-4">Happy Customer</h1>
                    <div className="underline mb-4"> </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe consequuntur tempore laborum sequi inventore iure, iusto commodi, aliquam eius exercitationem ipsa esse quia, voluptates soluta maiores natus fugit nulla ad!</p>
                    </div>
            </div>

            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="carousel slide" data-ride="carousel" id="customer-carousel">
                        <ol className="carousel-indicators">
                            < li data-target="#customer-carousel" data-slide-to="0" className="active"></li>
                            < li data-target="#customer-carousel" data-slide-to="1"></li>
                            < li data-target="#customer-carousel" data-slide-to="2"></li>            
                        </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center">
                            <img src={slider1} className="img-fluid rounded-circle m-5" width="150" alt="" />
                            <blockquote className="blockquote text-white"><p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eius delectus a quod vel qui. Doloremque tempore nisi autem sint. </p> </blockquote>
                            <h5 className="text-light text-white font-weight-bold mb-3">MONICA</h5>
                        <ul className="list-inline mb-5">
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                        </ul>
                        </div>
                        <div className="carousel-item text-center">
                            <img src={slider2} className="img-fluid rounded-circle m-5" width="150" alt="" />
                            <blockquote className="blockquote text-white"><p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eius delectus a quod vel qui. Doloremque tempore nisi autem sint. </p> </blockquote>
                            <h5 className="text-light text-white font-weight-bold mb-3">JONATHAN</h5>
                        <ul className="list-inline mb-5">
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                        </ul>
                        </div>
                        <div className="carousel-item text-center">
                            <img src={slider3} className="img-fluid rounded-circle m-5" width="150" alt="" />
                            <blockquote className="blockquote text-white"><p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eius delectus a quod vel qui. Doloremque tempore nisi autem sint. </p> </blockquote>
                            <h5 className="text-light text-white font-weight-bold mb-3">MONICA</h5>
                        <ul className="list-inline mb-5">
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                          <li className="list-inline-item">
                            <i className="fas fa-star text-warning"> </i>
                          </li>
                        </ul>
                        </div>
                    </div>
                  </div>
                </div>
            </div>

        </div>
      </section>
    );
  }
}

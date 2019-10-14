import React, { Component } from 'react';
import './pricing.css';
import $ from 'jquery';

export default class Pricing extends Component {
    componentDidMount() {
        $(window).scroll(function() {
            let position = $(this).scrollTop();
            // console.log(position)
            if(position >= 4450) {
                // alert(position)
                $('.card-1').addClass('movfromleft');
                $('.card-2').addClass('movfrombottom');
                $('.card-3').addClass('movfromright');
                } 
                else {
                $('.card-1').removeClass('movfromleft');
                $('.card-2').removeClass('movfrombottom');
                $('.card-3').removeClass('movfromright');
            }
        })
    }
  render() {
    return (
      <section className="bg-light text-center p-5">
          <div className="conatiner-fluid">
              <div className="row text-muted text-center">
                  
                  <div className="col m-4">
                      <h1 className="display-4 mb-4">Join Us</h1>
                      <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi labore nihil voluptatem adipisci voluptates earum sed dolores consequatur obcaecati amet eum ut illum modi velit architecto tempora, nemo officiis corporis!</p>
                  </div>
              </div>
            <div className="row text-align-items-center">
                <div className="col-lg-4">
                    <div className="card card-1 text-light py-4 my-4 mx-auto">
                        <div className="card-body">
                            <h5 className="text-uppercase font-weight-bold mb-5">Monthly Membership</h5>
                        <h1><i className="fas fa-dollar-sign"></i>19 </h1>
                        <ul className="list-unstyled">
                            <li className="font-weight-bold py-3 card-list-item"> Photoshop</li>
                            <li className="font-weight-bold py-3 card-list-item"> After Effects</li>
                            <li className="font-weight-bold py-3 card-list-item"> Graphics Design</li>
                            <li className="font-weight-bold py-3 card-list-item border-0"> Video Montage</li>
                        </ul>
                        <a href="" className="btn p-2 text-light text-uppercase font-weight-bold price-card-button">Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-2 text-light py-4 my-4 mx-auto">
                        <div className="card-body">
                            <h5 className="text-uppercase font-weight-bold mb-5">Unlimited Access</h5>
                        <h1><i className="fas fa-dollar-sign"></i>499 </h1>
                        <ul className="list-unstyled">
                            <li className="font-weight-bold py-3 card-list-item"> Photoshop</li>
                            <li className="font-weight-bold py-3 card-list-item"> After Effects</li>
                            <li className="font-weight-bold py-3 card-list-item"> Graphics Design</li>
                            <li className="font-weight-bold py-3 card-list-item"> Clip Making</li>
                            <li className="font-weight-bold py-3 card-list-item border-0"> Video Montage</li>
                        </ul>
                        <a href="" className="btn p-2 text-light text-uppercase font-weight-bold price-card-button">Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card card-3 text-light py-4 my-4 mx-auto">
                        <div className="card-body">
                            <h5 className="text-uppercase font-weight-bold mb-5">Monthly Membership</h5>
                        <h1><i className="fas fa-dollar-sign"></i>119 </h1>
                        <ul className="list-unstyled">
                            <li className="font-weight-bold py-3 card-list-item"> Photoshop</li>
                            <li className="font-weight-bold py-3 card-list-item"> After Effects</li>
                            <li className="font-weight-bold py-3 card-list-item"> Graphics Design</li>
                            <li className="font-weight-bold py-3 card-list-item border-0"> Video Montage</li>
                        </ul>
                        <a href="" className="btn p-2 text-light text-uppercase font-weight-bold price-card-button">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
            <h2 className="text-muted mb-4">Thanks for being with us</h2>
            <i className="fas fa-coffee fa-3x"></i>
          </div>
          </div>
      </section>
    );
  }
}

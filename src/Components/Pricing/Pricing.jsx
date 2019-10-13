import React, { Component } from 'react';

export default class Pricing extends Component {
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
            <div className="row">
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="text-uppercase font-weight-bold mb-5">Monthly Membership</h5>
                        <h1><i className="fas fa-dollar-sign"></i>19 </h1>
                        <ul className="list-unstyled">
                            <li className="font-weight-bold py-3"> Photoshop</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
    );
  }
}

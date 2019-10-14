import React, { Component } from 'react';
import './contact.css';


export default class Contact extends Component {
  render() {
    return (
      <section className="contact">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-5 pb-4">
                      <h3 className="display-4 mb-5">Get In Touch </h3>
                      <form className="contact-form">
                          <div className="form-group py-4">
                            <input type="text" className="form-control my-2 p-2 input" placeholder="Name" />
                            <label for="name" className="label"> Name</label>
                          </div>
                          <div className="form-group py-4">
                            <input type="email" className="form-control my-2 p-2 input" placeholder="Email Address" />
                            <label for="email" className="label"> Email Address</label>
                          </div>
                          <div className="form-group py-4 my-4">
                            <input type="checkbox" checked />
                            <label for="check">Send Annoucements</label>
                          </div>
                          <button type="submit" className="btn btn-block p-2 font-weight-bold text-uppercase submit-button">Subscribe</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

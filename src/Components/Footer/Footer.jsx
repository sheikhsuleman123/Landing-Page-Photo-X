import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark px-5">
        <div className="container-fluid">
            <div className="row text-light py-4">
                <div className="col-lg-4 col-sm-6">
                    <h5 className="pb-3">About Us</h5>
                    <p className="small">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse, odio doloremque minima quo nulla ipsam repellendus minus consequatur ratione vel? Dolor doloribus, dolorem praesentium cupiditate alias quisquam consequuntur voluptas.
                    </p>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <h5 className="pb-3">Visit Us</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="" className="footer-link">Home</a>
                        </li>
                        <li>
                            <a href="" className="footer-link">Mission</a>
                        </li>
                        <li>
                            <a href="" className="footer-link">Collection</a>
                        </li>
                        <li>
                            <a href="" className="footer-link">Gallery</a>
                        </li>
                        <li>
                            <a href="" className="footer-link">Customers</a>
                        </li>
                        <li>
                            <a href="" className="footer-link">Contact</a>
                        </li>

                    </ul>
                </div>
                <div className="col-lg-2 col-sm-6">
                    <h5 className="pb-3">Need Help</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="" className="footer-link text-uppercase">Customer Services</a>
                        </li>
                        <li>
                            <a href="" className="footer-link text-uppercase">Online Chat</a>
                        </li>
                        <li>
                            <a href="" className="footer-link text-uppercase">Support</a>
                        </li>
                        <li>
                            <a href="" className="text-info">photoX@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <h5 className="pb-3">Stay Connected</h5>
                    <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vel rerum, repudiandae quam incidunt nihil deleniti debitis unde pariatur non ullam consequatur nisi magnam, nesciunt dolore odio perferendis rem assumenda?</p>
                <form className="mb-3">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email Address"/>
                        <div className="input-group-append">
                            <button className="btn bg-danger text-white text-uppercase font-weight-bold">Sign up

                            </button>
                        </div>
                    </div>
                </form>
                <ul className="list-inline py-3">
                    <li className="list-inline-item"><i className="fab fa-facebook-square fa-2x text-primary"></i> </li>
                    <li className="list-inline-item"><i className="fab fa-google-plus fa-2x text-danger"></i> </li>
                    <li className="list-inline-item"><i className="fab fa-instagram fa-2x text-danger"></i> </li>
                    <li className="list-inline-item"><i className="fab fa-twitter fa-2x text-info"></i> </li>
                    <li className="list-inline-item"><i className="fab fa-youtube fa-2x text-danger"></i> </li>
                </ul>
                </div>
            </div>
            <div className="row">
                <div className="col text-center text-light border-top pt-3">
                    <p>&copy; 2019 Copyright All Right Reserved</p>
                </div>
            </div>
        </div>
      </footer>
    );
  }
}

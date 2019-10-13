import React, { Component } from 'react';
import './collection.css';

import pic1 from '../../images/nature.jpeg';
import pic2 from '../../images/wedding.jpeg';
import pic3 from '../../images/party.jpeg';
import pic4 from '../../images/business.jpeg';
import pic5 from '../../images/fashion.jpeg';
import pic6 from '../../images/family.jpeg';



export default class Collection extends Component {
  render() {
    return (
      <section className="bg-secondary py-4">
          <div className="container-fluid">
          <div className="row text-white text-center">
                   <div className="col m-4">
                    <h1 className="display-4 mb-4">Collection</h1>
                    <div className="underline mb-4">  </div>
                      <p className="lead text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis eius tempora vero cumque dolore veniam excepturi doloribus necessitatibus placeat quidem dicta officia, Dolor omnis eius tempora vero cumque dolore veniam excepturi sint quia mollitia id vel corrupti aliquam?
                      </p> 
                   </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6 my-5">
                    <div className="card border-0 card-shadow">
                        <img src={pic1} className="card-img"/>
                        <div className="card-img-overlay">
                            <h5 className="text-white font-weight-bold p-2 heading">Nature Photography</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 my-5">
                    <div className="card border-0 card-shadow">
                        <img src={pic2} className="card-img"/>
                        <div className="card-img-overlay">
                            <h5 className="text-white font-weight-bold p-2 heading">Weeding Photography</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 my-5">
                    <div className="card border-0 card-shadow">
                        <img src={pic3} className="card-img"/>
                        <div className="card-img-overlay">
                            <h5 className="text-white font-weight-bold p-2 heading">Party Photography</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 my-5">
                    <div className="card border-0 card-shadow">
                        <img src={pic4} className="card-img"/>
                        <div className="card-img-overlay">
                            <h5 className="text-white font-weight-bold p-2 heading">Business Photography</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 my-5">
                    <div className="card border-0 card-shadow">
                        <img src={pic5} className="card-img"/>
                        <div className="card-img-overlay">
                            <h5 className="text-white font-weight-bold p-2 heading">Family Photography</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 my-5">
                    <div className="card border-0 card-shadow">
                        <img src={pic6} className="card-img"/>
                        <div className="card-img-overlay">
                            <h5 className="text-white font-weight-bold p-2 heading">Party Photography</h5>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
    );
  }
}

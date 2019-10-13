import React, { Component } from 'react';
import './gallery.css';

import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import img3 from '../../images/img3.jpeg';
import img4 from '../../images/img4.jpeg';
import img5 from '../../images/img5.jpeg';
import img6 from '../../images/img6.jpeg';
import img7 from '../../images/img7.jpeg';
import img8 from '../../images/img8.jpeg';
import img9 from '../../images/img9.jpeg';
import img10 from '../../images/img10.jpeg';
import img11 from '../../images/img11.jpeg';
import img12 from '../../images/img12.jpeg';
import img13 from '../../images/img13.jpeg';
import img14 from '../../images/img4.jpeg';
import img15 from '../../images/img15.jpeg';

export default class Gallery extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container-fluid">
        <div className="row text-center">
          <div className="col m-4">
          <h1 className="display-4 text-muted mb-4">Gallery</h1>
          <div className="underline-dark mb-4">  </div>
          <p className="lead text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis eius tempora vero cumque dolore veniam excepturi doloribus necessitatibus placeat quidem dicta officia, Dolor omnis eius tempora vero cumque dolore veniam excepturi sint quia mollitia id vel corrupti aliquam?</p>            </div>
            </div>
            <ul className="list-inline text-center text-uppercase font-weight-bold my-4">
                <li className="list-inline-item gallery-list-item" data-filter="all">
                    All <span className="mx-5 text-muted">/</span>
                </li>
                <li className="list-inline-item gallery-list-item" data-filter="new">
                    New <span className="mx-5 text-muted">/</span>
                </li>
                <li className="list-inline-item gallery-list-item" data-filter="free">
                    Free <span className="mx-5 text-muted">/</span>
                </li>
                <li className="list-inline-item gallery-list-item" data-filter="pro">Pro
                </li>
            </ul>
            <div className="container-fluid">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="filter new"><img src={img1} width="300" alt="" /> </div>
                    <div className="filter free"><img src={img2} width="300" alt="" /> </div>
                    <div className="filter pro"><img src={img3} width="300" alt="" /> </div>
               
                    <div className="filter new"><img src={img4} width="300" alt="" /> </div>
                    <div className="filter free"><img src={img5} width="300" alt="" /> </div>
                    <div className="filter pro"><img src={img6} width="300" alt="" /> </div>
               
                    <div className="filter new"><img src={img7} width="300" alt="" /> </div>
                    <div className="filter free"><img src={img8} width="300" alt="" /> </div>
                    <div className="filter pro"><img src={img9} width="300" alt="" /> </div>
               
                    <div className="filter new"><img src={img10} width="300" alt="" /> </div>
                    <div className="filter free"><img src={img11} width="300" alt="" /> </div>
                    <div className="filter pro"><img src={img12} width="300" alt="" /> </div>
                
                    <div className="filter new"><img src={img13} width="300" alt="" /> </div>
                    <div className="filter free"><img src={img14} width="300" alt="" /> </div>
                    <div className="filter pro"><img src={img15} width="300" alt="" /> </div>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

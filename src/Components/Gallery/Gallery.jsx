import React, { Component } from 'react';
import './gallery.css';

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis eius tempora vero cumque dolore veniam excepturi doloribus necessitatibus placeat quidem dicta officia, Dolor omnis eius tempora vero cumque dolore veniam excepturi sint quia mollitia id vel corrupti aliquam?</p> 
                   </div>
            </div>
            <ul className="list-inline text-center text-uppercase">
                <li className="list-inline-item gallery-list-item">
                    All <span>/</span>
                </li>
                <li className="list-inline-item gallery-list-item">
                    New <span>/</span>
                </li>
                <li className="list-inline-item gallery-list-item">
                    Free <span>/</span>
                </li>
                <li className="list-inline-item gallery-list-item">
                </li>
            </ul>
        </div>
      </section>
    );
  }
}

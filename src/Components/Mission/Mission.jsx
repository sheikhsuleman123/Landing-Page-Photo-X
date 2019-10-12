import React, { Component } from 'react';
import './mission.css';

export default class Mission extends Component {
  render() {
    return (
       <section className="p-5 mission text-white">
           <div className="container-fluid">
               <div className="row text-center">
                   <div className="col m-4">
                    <h1 className="display-4 mb-4">Our Mission</h1>
                    <div className="underline mb-4">  </div>
                      <p className="lead text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis eius tempora vero cumque dolore veniam excepturi doloribus necessitatibus placeat quidem dicta officia, sint quia mollitia id vel corrupti aliquam?
                      </p> 
                   </div>
               </div>
               <div className="row my-5">
                    <div className="col-md-4 text-center">
                        <i className="fas fa-cogs fa-5x text-danger mb-4"></i>
                    </div>
                    <div className="col-md-4 text-center">

                    </div>
                    <div className="col-md-4 text-center">

                    </div>
               </div>
           </div>
       </section>
    );
  }
}

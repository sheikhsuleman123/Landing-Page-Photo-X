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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor omnis eius tempora vero cumque dolore veniam excepturi doloribus necessitatibus placeat quidem dicta officia, Dolor omnis eius tempora vero cumque dolore veniam excepturi sint quia mollitia id vel corrupti aliquam?
                      </p> 
                   </div>
               </div>
               <div className="row my-5">
                    <div className="col-md-4 text-center">
                        <i className="fas fa-cogs fa-5x  mb-4" style={{color: '#C76D18'}}></i>
                        <h1 className="mb-3">Creativity</h1>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi, voluptates nemo nihil, odit excepturi itaque tenetur praesentium laboriosam ullam rem sint ut illum, facilis inventore quidem distinctio? Repellendus, obcaecati?</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="fas fa-thumbs-up fa-5x  mb-4" style={{color: '#C76D18'}}></i>
                        <h1 className="mb-3">Quality</h1>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi, voluptates nemo nihil, odit excepturi itaque tenetur praesentium laboriosam ullam rem sint ut illum, facilis inventore quidem distinctio? Repellendus, obcaecati?</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <i className="fas fa-handshake fa-5x mb-4" style={{color: '#C76D18'}} ></i>
                        <h1 className="mb-3">Experience</h1>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae animi, voluptates nemo nihil, odit excepturi itaque tenetur praesentium laboriosam ullam rem sint ut illum, facilis inventore quidem distinctio? Repellendus, obcaecati?</p>
                    </div>
                    
               </div>
           </div>
       </section>
    );
  }
}

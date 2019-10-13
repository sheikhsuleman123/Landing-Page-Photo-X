import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Mission from './Components/Mission/Mission';
import MissionTwo from './Components/Mission/Mission2';
import Collection from './Components/Collection/Collection';
import Gallery from './Components/Gallery/Gallery';
import Customer from './Components/Customer/Customer';

function App() {
  return (
    <div>
      
      <Header />
      <Mission />
      <MissionTwo />
      <Collection />
      <Gallery />
      <Customer />
      
    </div>
  );
}

export default App;

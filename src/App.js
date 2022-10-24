import React from 'react';
import Header from './components/Header';
import SpaceMissions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <SpaceMissions />
      </>
    );
  }
}

export default App;

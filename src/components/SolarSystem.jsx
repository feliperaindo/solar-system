import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const renderPlanets = Planets.map((planet, id) => (<PlanetCard
      key={ id }
      planetName={ planet.name }
      planetImage={ planet.image }
    />));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { renderPlanets }
      </div>
    );
  }
}

export default SolarSystem;

import React, { Component } from 'react';
import Title from './Title';
import Missions from '../data/missions';
import MissionCard from './MissionCard';

class SpaceMissions extends Component {
  render() {
    const allMissions = Missions.map((eachMission, index) => (<MissionCard
      key={ `mission-${index}` }
      name={ eachMission.name }
      year={ eachMission.year }
      country={ eachMission.country }
      destination={ eachMission.destination }
    />));

    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {allMissions}
      </div>
    );
  }
}

export default SpaceMissions;

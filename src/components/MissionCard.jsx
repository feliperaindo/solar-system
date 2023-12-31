import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  name: 'Insira um nome válido',
  year: 'Insira um ano válido',
  country: 'Insira um país válido',
  destination: 'Insira um destino válido',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;

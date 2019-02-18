import React, { Component } from 'react';
import './PlanetDetails.scss';

class PlanetDetails extends Component {
    constructor(props) {
        super();
        this.state = {
            id: '',
            name: '',
            rotationPeriod: '',
            orbitalPeriod: '',
            diameter: '',
            climate: '',
            gravity: '',
            terrain: '',
            surfaceWater: '',
            population: '',
            url: props.url,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    name: data.name,
                    rotationPeriod: data.rotation_period,
                    orbitalPeriod: data.orbital_period,
                    diameter: data.diameter && 'unknown ',
                    climate: data.climate,
                    gravity: data.gravity,
                    terrain: data.terrain,
                    surfaceWater: data.surface_water && 'not provided ',
                    population: data.population,
                    loading: false
                })
            });
    }

    render() {
        let content = (
            <div className='planet-details'>
                <header className='planet-details__header'>
                    <h4 className='planet-details__title'>Detailed info of {this.state.name} planet</h4>
                    <button className='planet-details__button button button--close' onClick={(e) => this.props.handleDetailsPage(false, '', '')}>close</button>
                </header>
                
                <div className='planet-details__about'>
                    <div className='planet-details__logo'>
                        <div className='planet-details__logo-image'><span className='planet-details__logo-letter'>{this.state.name[0]}</span></div>
                        <div className='planet-details__logo-name'>{this.state.name}</div>
                    </div>

                    <div className='planet-details__info'>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Rotation period:</span> 
                            <span className='planet-details__prop-value'>{this.state.rotationPeriod}h</span>
                        </div>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Orbital period:</span> 
                            <span className='planet-details__prop-value'>{this.state.orbitalPeriod}d</span>
                        </div>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Diameter:</span> 
                            <span className='planet-details__prop-value'>{this.state.diameter}km</span>
                        </div>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Climate:</span> 
                            <span className='planet-details__prop-value'>{this.state.climate}</span>
                        </div>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Gravity:</span> 
                            <span className='planet-details__prop-value'>{this.state.gravity}</span>
                        </div>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Terrain:</span> 
                            <span className='planet-details__prop-value'>{this.state.terrain}</span>
                        </div>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Surface water:</span> 
                            <span className='planet-details__prop-value'>{this.state.surfaceWater}%</span>
                        </div>
                        <div className='planet-details__prop'>
                            <span className='planet-details__prop-text'>Population:</span> 
                            <span className='planet-details__prop-value'>{this.state.population}</span>
                        </div>
                    </div>
                </div>
            </div>
        )

        return(
            this.state.loading ? <span className='loading'></span> : content
        );
    }
}

export default PlanetDetails;
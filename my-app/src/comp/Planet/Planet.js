import React, { Component } from 'react';
import './Planet.scss';
import planet1 from '../../images/planet-bg.svg';
import planet2 from '../../images/planet-cheese.svg';
import planet3 from '../../images/planet-bulleye.svg';

class Planet extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.key,
            name: props.data.name,
            rotationPeriod: props.data.rotation_period,
            orbitalPeriod: props.data.orbital_period,
            diameter: props.data.diameter,
            climate: props.data.climate,
            gravity: props.data.gravity,
            terrain: props.data.terrain,
            surfaceWater: props.data.surface_water,
            population: props.data.population,
            url: props.data.url,
            visibilityProps: {
                display: 'none'
            },
            setPlanetColor: {
                backgroundColor: "#ffffff"
            }
        }

        this.handleClick = this.handleClick.bind(this);
        this.getRandomColor = this.getRandomColor.bind(this);
        this.getRandomSvgUrl = this.getRandomSvgUrl.bind(this);
    }

    componentDidMount() {        
        this.setState(() => ({
            setPlanetColor: {
                backgroundColor: this.getRandomColor(),
                backgroundImage: this.getRandomSvgUrl() 
            }
        }))
    }

    handleClick() {
        this.setState(prevState => {
            return {
                visibilityProps: {
                    display: prevState.visibilityProps.display == 'none' ? 'flex' : 'none'
                }
            }
        });
    }

    getRandomColor() {
        let colorCode = '#';
        var letters = '0123456789ABC';

        for (var i = 0; i < 6; i++) {
            colorCode += letters[Math.floor(Math.random() * letters.length)];
        }

        return (colorCode);
    }

    getRandomSvgUrl() {
        const imageURLs = [
            planet1,
            planet2,
            planet3
        ];
        const pref = "url('";
        const suff = "')"; 

        return  pref + imageURLs[Math.floor(Math.random() * imageURLs.length)] + suff;
    }

    render() {
        return (
            <section className='planet' key={this.state.id} onClick={this.handleClick}>
                <div className='planet__logo' style={this.state.setPlanetColor}></div>
                <h4 className='planet__title'>{this.state.name}</h4>
                <div className='planet__info' style={this.state.visibilityProps}>
                    <div className='planet__info-title'><strong>Planet's Details</strong></div>
                    <div className='planet__prop'>Name: {this.state.name}</div>
                    <div className='planet__prop'>Rotation period: {this.state.rotationPeriod}h</div>
                    <div className='planet__prop'>Orbital period: {this.state.orbitalPeriod}d</div>
                    <div className='planet__prop'>Diameter: {this.state.diameter}km</div>
                    <div className='planet__prop'>Climate: {this.state.climate}</div>
                    <div className='planet__prop'>Gravity: {this.state.gravity}</div>
                    <div className='planet__prop'>Terrain: {this.state.terrain}</div>
                    <div className='planet__prop'>Surface water: {this.state.surfaceWater}%</div>
                    <div className='planet__prop'>Population: {this.state.population}</div>
                </div>
            </section>
        );
    }
}

export default Planet;
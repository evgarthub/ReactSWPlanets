import React, { Component } from 'react';
import './Planet.scss';
import planet1 from '../../images/planet-bg.svg';
import planet2 from '../../images/planet-cheese.svg';
import planet3 from '../../images/planet-bulleye.svg';

class Planet extends Component {
    constructor(props) {
        super();
        this.state = {
            id: props.url,
            name: props.data.name,
            url: props.data.url,
            currentPageUrl: props.currentPageUrl,
            setPlanetColor: {
                backgroundColor: "#ffffff"
            }
        }

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

        return  `url('${imageURLs[Math.floor(Math.random() * imageURLs.length)]}')`;
    }

    render() {
        return (
            <section className='planet' onClick={(e) => this.props.handleDetailsPage(true, this.state.url, this.state.currentPageUrl)}>
                <div className='planet__logo' style={this.state.setPlanetColor}></div>
                <h4 className='planet__title'>{this.state.name}</h4>
            </section>
        );
    }
}

export default Planet;
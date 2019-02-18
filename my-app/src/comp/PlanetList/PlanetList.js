import React, { Component, Fragment } from 'react';
import Planet from '../Planet/Planet';
import './PlanetList.scss';

class PlanetList extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            planets: [],
            nextPageUrl: null,
            prevPageUrl: null,
            loading: false
        }

        this.fetchData = this.fetchData.bind(this);
        this.handleSwitchPage = this.handleSwitchPage.bind(this);
    }

    componentDidMount() {
        this.fetchData("https://swapi.co/api/planets/");
    }

    handleSwitchPage(pageUrl) {
        this.fetchData(pageUrl);
    }

    fetchData(url) {
        this.setState({loading: true});
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    count: data.count,
                    planets: data.results,
                    nextPageUrl: data.next,
                    prevPageUrl: data.previous,
                    loading: false
                })
            });
    }

    render() {
        let planetNodes = [];
        planetNodes = this.state.planets.map(planet => <Planet data={planet} />)

        return (
            <section className='planet-list'>
                <header className='planet-list__header'>
                    <h4 className='planet-list__counter'>Total number of planets: {this.state.count}</h4>
                    <div className='planet-list__controls'>
                        <button className='button button--prev' disabled={this.state.prevPageUrl == null} onClick={() => this.handleSwitchPage(this.state.prevPageUrl)}>prev</button>
                        <button className='button button--next' disabled={this.state.nextPageUrl == null} onClick={() => this.handleSwitchPage(this.state.nextPageUrl)}>next</button>
                    </div>
                </header>

                <div className='planet-list__list'>
                    {this.state.loading ? <span className='loading'></span> : planetNodes}
                </div>
            </section>
        );
    }
}

export default PlanetList;
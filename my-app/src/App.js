import React, { Component } from 'react';
import PlanetList from './comp/PlanetList/PlanetList';
import Particles from 'react-particles-js';
import './App.scss';
import PlanetDetails from './comp/PlanetDetails/PlanetDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDetails: false,
      linkToOpen: '',
      listPage: null
    }
    this.handleDetailsPage = this.handleDetailsPage.bind(this);
  }

  handleDetailsPage(value, url, currentPageUrl) {
    this.setState((prevState) => ({
        isDetails: value,
        linkToOpen: url,
        listPage: currentPageUrl ? currentPageUrl : prevState.listPage
    }));
  }

  render() {
    return (
      <>
        <Particles className='particles' params={{
                "particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 2
                    },
                    "line_linked": {
                        "distance": 100,
                        "opacity": .3,
                        "width": 1 
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        }
                    }
                }
            }} />

        <div className='app'>
          <h1 className='app__title'>Planets of Star Wars world</h1>
          {this.state.isDetails ? <PlanetDetails url={this.state.linkToOpen} handleDetailsPage={this.handleDetailsPage} /> : <PlanetList handleDetailsPage={this.handleDetailsPage} listPage={this.state.listPage} /> }
        </div>
      </>
    );
  }
}

export default App;

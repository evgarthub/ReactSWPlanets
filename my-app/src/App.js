import React, { Component } from 'react';
import PlanetList from './comp/PlanetList/PlanetList';
import Particles from 'react-particles-js';
import './App.scss';

class App extends Component {
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
          <PlanetList />
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Moui from './Moui.jsx'
import Card from './Card.jsx'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const lezards = [
  {
    name: 'lez1'
  },
  {
    name: 'lez2'
  }, {
    name: 'lez3'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Moui />
        <Grid container
          justify='center'
          spacing='8'
        >
          {
            lezards.map(lezard =>
                <Grid item
                xs={12} md={4}>
                  <Card lezardsName={lezard.name} />
                </Grid>
            )
          }
        </Grid>
      </div>
    );
  }
}

export default App;

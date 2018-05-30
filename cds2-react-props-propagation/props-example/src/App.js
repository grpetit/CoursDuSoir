import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppChild from './AppChild'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "jean claude",
      childName: ""
    }

  }
  toto=(name)=> {
    this.setState({
      childName:name
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <p>state : {JSON.stringify(this.state)}</p>
        <p>props : {JSON.stringify(this.props)}</p>
        <AppChild dadsName={this.state.name} toto={this.toto} />
      </div>
    );
  }
}

export default App;

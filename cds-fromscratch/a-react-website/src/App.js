import React, { Component } from 'react';
import Header from './Components/Header'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.css';
import ListTasks from './Components/ListTasks';
import Form from './Components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={ListTasks} />
              <Route  path='/new' component={Form} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

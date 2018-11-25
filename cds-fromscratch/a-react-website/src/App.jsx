import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import ListTasks from './Components/ListTasks';
import Form from './Components/Form';
import Weather from './Components/Weather';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const listDb = [
  { title: 'tache numéro 1', isDone: false },
  { title: 'tache numéro 2', isDone: false },
  { title: 'tache numéro 3', isDone: true },
];
const reducer = (state = { list: listDb }, { taskIndex }) => {
  if (taskIndex >= 0) {
    state.list[taskIndex].isDone = !state.list[taskIndex].isDone;
  }
  return { ...state, list: [...state.list] };
};
const store = createStore(reducer);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ListTasks} />
            <Route path="/new" component={Form} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;

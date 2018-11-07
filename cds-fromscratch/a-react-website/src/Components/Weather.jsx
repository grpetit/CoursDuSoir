import React, { Component } from 'react';
import {
  FormGroup, Label, Input, Button, Jumbotron,
} from 'reactstrap';
import axios from 'axios';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      town: localStorage.getItem('town'),
      temp: localStorage.getItem('temp') || '#',
    };
  }

  updateName = (e) => {
    localStorage.setItem('town', e.target.value);
    localStorage.setItem('temp', '#');

    this.setState({
      town: e.target.value,
      temp: '#',
    });
  };

  searchTemp = () => {
    const { town } = this.state;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${town}&units=metric&appid=3e0d6900003924f67b5e7d1fe93c2f37`)
      .then((result) => {
        localStorage.setItem('temp', result.data.main.temp);
        this.setState({
          temp: result.data.main.temp,
        });
      });
  }


  render() {
    const { town, temp } = this.state;
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">
            La température de
            {town}
          </h1>
          <h2 className="display-3">{temp}</h2>
          <hr className="my-2" />
          <p className="lead">
            <FormGroup>
              <Label for="exampleEmail">Entre le nom d'une ville</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Nom"
                value={town}
                onChange={this.updateName}
                style={{ textAlign: 'center' }}
              />
            </FormGroup>
            <Button onClick={this.searchTemp}>Rechercher</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Weather;

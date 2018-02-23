import React, { Component } from 'react';
import BattingSection from './BattingSection';
import './Boxscore.css';
import 'bootstrap/dist/css/bootstrap.css'

const API = 'http://localhost:3004/';

class Boxscore extends Component {


  constructor(props) {
    super(props);

    this.state = {
      awayteambatting: [],
      hometeambatting: []
    }
  }

  componentDidMount() {
      fetch(API + 'awayteambatting')
        .then(response => response.json())
        .then(data => this.setState({awayteambatting: data}));

      fetch(API + 'hometeambatting')
        .then(response => response.json())
        .then(data => this.setState({hometeambatting: data}))
  }

  render() {
    const { awayteambatting } = this.state;
    const { hometeambatting } = this.state;

    return (
      <div>
        <h1>Box Score goes here</h1>
        <div class='containner'>
          <div class='row'>
            <div class='col-sm'>
              <BattingSection batting={awayteambatting}/>
            </div>
            <div class='col-sm'>
              <BattingSection batting={hometeambatting}/>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Boxscore;

import React, { Component } from 'react';
import BattingSection from './BattingSection';
import './Boxscore.css';
import 'bootstrap/dist/css/bootstrap.css'

const hometeambatting = [
  {
    name: 'Player One',
    ab: 4,
    r: 0,
    h: 2,
    rbi: 1,
    bb: 1,
    so: 1,
    po: 1,
    a: 2
  },
  {
    name: 'Player Two',
    ab: 4,
    r: 1,
    h: 2,
    rbi: 2,
    bb: 1,
    so: 0,
    po: 0,
    a: 2
  }
];

const awayteambatting = [
  {
    name: 'Player One',
    ab: 4,
    r: 0,
    h: 2,
    rbi: 1,
    bb: 1,
    so: 1,
    po: 1,
    a: 2
  },
  {
    name: 'Player Two',
    ab: 3,
    r: 1,
    h: 3,
    rbi: 2,
    bb: 2,
    so: 0,
    po: 0,
    a: 2
  }
]

class Boxscore extends Component {
  render() {
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

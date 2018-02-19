import React, { Component } from 'react';
import BattingSection from './BattingSection';
import './Boxscore.css';
import 'bootstrap/dist/css/bootstrap.css'

class Boxscore extends Component {
  render() {
    return (
      <div>
        <h1>Box Score goes here</h1>
        <div class='containner'>
          <div class='row'>
            <div class='col-sm'>
              <BattingSection/>
            </div>
            <div class='col-sm'>
              <BattingSection/>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default Boxscore;
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class BattingSection extends Component {
  render() {
    return (
        <div class='container'>
          <div class='row'>
            <div class='col=sm'>
              <p>Batting</p>
            </div>
            <div class='col-sm'>
              <p>AB</p>
            </div>
            <div class='col-sm'>
              <p>R</p>
            </div>
            <div class='col=sm'>
              <p>H</p>
            </div>
            <div class='col-sm'>
              <p>RBI</p>
            </div>
            <div class='col-sm'>
              <p>BB</p>
            </div>
            <div class='col-sm'>
              <p>SO</p>
            </div>
            <div class='col-sm'>
              <p>PO</p>
            </div>
            <div class='col-sm'>
              <p>A</p>
            </div>
          </div>
        </div>      
      );
  }
}

export default BattingSection;
import React, { Component } from 'react';
import PlayerBattingLine from './PlayerBattingLine';
import 'bootstrap/dist/css/bootstrap.css'

class BattingSection extends Component {

  render() {
    return (
        <div class='container'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Batting</th>
                <th>AB</th>
                <th>R</th>
                <th>H</th>
                <th>RBI</th>
                <th>BB</th>
                <th>SO</th>
                <th>PO</th>
                <th>A</th>
              </tr>
            </thead>
            <tbody>
              {this.props.batting.map((line, index) =>
                <PlayerBattingLine line={line} />)}
            </tbody>
          </table>
        </div>
      );
  }
}

export default BattingSection;

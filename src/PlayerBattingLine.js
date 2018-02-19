import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class PlayerBattingLine extends Component {

  render () {
    return (
        <tr>
          <td>{this.props.line.name}</td>
          <td>{this.props.line.ab}</td>
          <td>{this.props.line.r}</td>
          <td>{this.props.line.h}</td>
          <td>{this.props.line.rbi}</td>
          <td>{this.props.line.bb}</td>
          <td>{this.props.line.so}</td>
          <td>{this.props.line.po}</td>
          <td>{this.props.line.a}</td>
        </tr>
    );
  }
}

export default PlayerBattingLine;

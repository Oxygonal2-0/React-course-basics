import React, { Component } from 'react'
import LiftingStateUp2 from './LisftingStateUp2';
export default class LiftingStateUp1 extends Component {
    state = {
        name: "Mayur"
    }
  render() {
    return (
        <LiftingStateUp2 name={this.state.name}></LiftingStateUp2>
    )
  }
}

import React, { Component } from 'react'
import HocMen from './HocMen'
import HocWomen from './HocWomen'

// Higher Order Components, used when we have same logic

export default class HOC extends Component {
  render() {
    return (
      <div>
            <HocMen camp="120"></HocMen>
            <HocWomen camp="160"></HocWomen>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ErrorBoundries extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error){
        return {hasError: true};
    }
  render() {
      if(this.state.hasError)
      {
          return <h3>Error: Image not found</h3>
      }
    return (
      <div>
          <img src={}/>
      </div>
    )
  }
}

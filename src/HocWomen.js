import React, { Component } from 'react'
import Army from './HocBoth';

class HocWomen extends Component {
    // state = {
    //     gunShots: 0
    // }
    // handleGunShots = () => {
    //     this.setState({gunShots : this.state.gunShots + 1});
    // }
  render() {
    return (
    //   <h3 onMouseOver={this.handleGunShots}>Soname {this.props.hocgunname} GunShots : {this.state.gunShots}</h3>
        <div>
            <h2> Camp : {this.props.camp} </h2>
            <h3 onMouseOver={this.props.hochandlegunshots}>Rahul {this.props.hocgunname} GunShots : {this.props.hocgunshot}</h3>
        </div> 
      
      )
  }
}

export default  Army(HocWomen, 20);
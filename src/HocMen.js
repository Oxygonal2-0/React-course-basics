import React, { Component } from 'react'
import Army from './HocBoth';

class HocMen extends Component {
    // state = {
    //     gunShots: 0
    // }
    // handleGunShots = () => {
    //     this.setState({gunShots : this.state.gunShots + 1});
    // }
  render() {
      console.log(this.props.camp)  // It is from HOC
    return (
        <div>
            <h2>Camp: {this.props.camp}</h2>
            <h3 onMouseOver={this.props.hochandlegunshots}>Rahul {this.props.hocgunname} GunShots : {this.props.hocgunshot}</h3>
        </div>
    )
  }
}

export default Army(HocMen, 10);

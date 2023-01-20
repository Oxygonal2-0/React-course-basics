import React, { Component } from 'react'

const Army = (Men, shot) =>{
    class NewMen extends Component{
        state = {
            gunShots: 0
        }
        handleGunShots = () => {
            this.setState({gunShots : this.state.gunShots + shot});
        }
        render(){
            return <Men hocgunname = 'AK47' hochandlegunshots={this.handleGunShots}  hocgunshot={this.state.gunShots} {...this.props}/>
        }
    }
    return NewMen;
}

export default Army;
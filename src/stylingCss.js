import React, { Component } from 'react';

export default class StylingCss extends Component {
    state = {
        change: false
    };
    clickHandle = () => {
        this.setState({change: true});
    }
  render() {
    // const btnStyle = {
    //     color: "blue",
    //     backgroundColor: "orange"
    // }
    // const txtc = {
    // color : "blue"
    // }
    //   const txts = {
    //     fontSize : "80px"
    // }
    // return <div>
    //     <button style={btnStyle}>Hello</button>
    //     <h1 style={{...txtc, ...txts}}>Hello App</h1>
    //     <h1 style={{...txtc, ...{fontSize: "50px"}}}>Hello App</h1>
    // </div>;
    const btnStyle = {
        color: "blue",
        backgroundColor: "orange"
    }
    if(this.state.change)
    {
        btnStyle.backgroundColor = "white";
    }
    
    return <div>
        <button onClick={this.clickHandle} style={btnStyle}>Button</button>
    </div>;
  }
}

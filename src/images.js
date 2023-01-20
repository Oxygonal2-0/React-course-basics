import React, { Component } from 'react';
import pic from './Leet.png';
export default class Images extends Component {
  render() {
    return <div>
        <p>My Images</p>
        <img src={process.env.PUBLIC_URL + "Leet.png"} width="100px"/>

        <p>New way to add Images</p>
        <img src={pic} width="100px"/>
    </div>;
  }
}

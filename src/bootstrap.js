import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default class Bootstrap extends Component {
  render() {
    return <div className='p-5'>Hello Bootstrap
        <br/>
        <button type='submit' className='btn btn-primary ml-5'>Bootstrap</button>
    </div>;
  }
}

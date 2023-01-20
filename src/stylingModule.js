import React, { Component } from 'react';
import styles from './App.module.css';
import './App.css';
export default class StylingModule extends Component {
  render() {
    return <div className='txt'>
        Hello, <span className={styles.txt}>Oxygonal</span>
    </div>;
  }
}

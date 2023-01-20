import React, { Component } from 'react'

// Controlled Component
export default class Form extends Component {
    state = {
        value : "Geekyshows",
        value1 : "Hello EveryOne, this is TextArea"
    }
    handleChange = (e) => 
    {
        console.log(e.target.value);
        this.setState({value: e.target.value.toUpperCase().substr(0,10)});
    }
    handleChangeTextArea = (e) => 
    {
        this.setState({value1: e.target.value.toUpperCase()});
    }
  render() {
    return (
        <div>
            <h2>Controlled by React</h2>
            <form>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="text" defaultValue="Geekyshow"/>
                <textarea value={this.state.value1} onChange={this.handleChangeTextArea}/>
            </form>
        </div>
    )
  }
}

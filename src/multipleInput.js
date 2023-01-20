import React, { Component } from 'react'

// Controlled Component
export default class Form extends Component {
    state = {
        userName : "",
        password : ""
    }
    handleChange = (e) => 
    {
        // console.log(e.target.name, e.target.value)
        // this.setState({[e.target.name] : e.target.value});
        const value = e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value;
        this.setState({[e.target.name] : value});
    }
    handleSubmit = (e) => 
    {
        console.log(e.target[0].name , e.target[0].value);
        e.preventDefault();
    }
  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/>
                </label>
                <br/>
                <br/>
                <label>
                    Password: <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
  }
}

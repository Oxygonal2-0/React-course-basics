import { element } from 'prop-types';
import React, { Component } from 'react'

export default class UncontrolledComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            value : ""
        }
        this.textInput = React.createRef();

        this.backRef = null;
        this.setBackRef = element => {
            this.backRef = element;
        }
    }

    // componentDidMount = () =>
    // {
    //     this.textInput.current.focus();
    // }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({value: this.textInput.current.value});
        console.log(this.textInput.current.value);
    }
    componentDidMount = () =>
    {
        this.backRef.focus();
    }
    
    render() {
        return (
            <div>
                <form>
                    <h2>You TYped : {this.state.value}</h2>
                    <form>
                        Input : <input type="text" ref = {this.textInput}/>
                        <input type="submit" onClick = {this.handleSubmit} value="Submit"/>
                    </form>
                    <form>
                        Password : <input type="text" ref = {this.setBackRef}/>
                        <input type="submit" onClick = {this.handleSubmit} value="Submit"/>
                    </form>
                    {/* Name : <input type="text"/>
                    <br/>
                    <br/>
                    Password : <input type="text" ref={this.textInput}/>
                    <br/>
                    <br/>
                    Address : <input type="text"/>
                    <br/>
                    <br/> */}
                </form>
            </div>
        )
    }
}

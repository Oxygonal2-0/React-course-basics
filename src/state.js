import React, {Component} from "react";

class StateProperty extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name : "rahul", 
            roll : 201, 
            id : this.props.id
        }
    }
    // state = {
    //      name : "rahul", 
    //      roll : 201, 
    //      id : this.props.id
    // }
    render(){
        return <h1> Hello {this.state.name} and Roll {this.state.roll} {this.state.id} </h1>
    }
    
}

export default StateProperty;
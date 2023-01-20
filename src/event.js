import React, {Component} from "react";

class Event extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            id : 1,
            name:"rahul",
            roll: this.props.roll
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e)=>{
        // e.preventDefault();
        this.setState({name:"Oxygonal", roll:103});
        this.setState(function(state, props){
            console.log(state.name);
        });
        console.log("Button Click");
        // No this for function Component
    }

    delete = (e) =>{
        this.deleteArg(this.state.id, "101", e);
    }
    deleteArg = (id,roll, e) =>{
        console.log(id, roll, e);
    }
    deleteArg1 = (id, e) =>{
        console.log(e, id);
    }
    // handleClick(){
    //     console.log("Button Click", this);
    // }
    render(){
        return (
            <div>
                <h1>Hello Event</h1>
                <h1>Hello {this.state.name}</h1>
                <h1>Hello {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click Me</button>
                <button onClick={this.delete}>Delete</button>
                <button onClick={(e) =>{
                    this.deleteArg(this.state.id, "101", e);
                }}>Delete</button>
                 <button onClick={this.deleteArg1.bind(this, this.state.id)}>Delete</button>
                <a href="https://www.google.com" onClick={this.handleClick}>Click Me</a>
                {/* Passing Argument to Event Handlers */}
                {/* <button onClick={handleClick}>Click Me</button> */} 
                {/* For Function Component */}
            </div>
        );
    };
}

export default Event;

/*

Phase of Component
-> Mounting
-> Updating
-> Error Handling
-> Unmounting

*/
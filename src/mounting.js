import React, {Component} from "react";
import Student from './student';
export default class MountingApp extends Component{
    constructor(props){
        super();
        console.log("App - Constructor Called");
        console.log(props);
        this.state = {
            roll : "101"
        }
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log("App - Get Derived State from Props");
        console.log(props, state);
        return null;
    }
    componentDidMount()
    {
        // Data capture from server and only onces in life Cycle
        console.log("App - Component Did Mount");
    }
    render(){
        console.log("App - render Method");
        return <Student name="Rahul"/>;
    }

}
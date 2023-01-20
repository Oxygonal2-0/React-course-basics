import React, {Component} from "react";
import Marks from "./marks";
export default class UpdatingApp extends Component{
    constructor()
    {
        super();
        this.state = {
            roll : 101
        }
    }
    clickHandle = () =>{
        console.log("Button CLicked");
        this.setState({roll : this.state.roll + 2});
    }
    componentDidMount()
    {
        console.log("App Mounted");
    }
    componentWillUnmount()
    {
        console.log("App Unmounted");
    }
    render()
    {
        return <div>
            <Marks roll={this.state.roll}/>
            <button onClick={this.clickHandle}>Change</button>   
        </div>;
    }
} 
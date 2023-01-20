import React, {Component} from "react";
import Guest from "./guest";
import User from "./conditionRending";


export default class Rendering extends Component{

    state = {
        isLoggedIn :false
    }
    
    clickLogin = () => {
        this.setState({isLoggedIn: true})
    }

    clickLogOut = () => {
        this.setState({isLoggedIn: false});
    }
    render()
    {
        // if(this.state.isLoggedIn)
        // {
        //     return <User name="Oxygonal" clickData = {this.clickLogOut}></User>;
        // }
        // else{
        //     return <Guest clickData = {this.clickLogin}></Guest>;
        // }

        // return <div>
        //     {this.state.isLoggedIn ? <User name="Oxygonal" clickData = {this.clickLogOut}></User>: <Guest clickData = {this.clickLogin}></Guest>}
        // </div>;

        //IIFE
        return <div>
        {(() => {
            if(this.state.isLoggedIn)
            {
                return <User name="Oxygonal" clickData = {this.clickLogOut}></User>;
            }
            else{
                return <Guest clickData = {this.clickLogin}></Guest>;
            }
        })()
        }
        </div>
        
    }
}
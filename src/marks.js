import React, {Component} from "react";

export default class Marks extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            mroll : this.props.roll
        }
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log("Get Derived State From Props");
        if(props.roll !== state.mroll)
        {
            return {mroll : props.roll};
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState)
    {
        if(this.state.mroll < 107)
        {
            console.log("Mark - Should Component Update");
            console.log(nextProps,nextState);
            return true;
        }
        console.log(nextProps,nextState);
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        console.log("Marks - GetSnapshotforUpdate -> It runs before update");
        console.log(prevProps, prevState);
        return 45;
    }
    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("marks - compenenDidUpdate -> It run after update");
        console.log(prevProps, prevState, snapshot);
    }
    componentWillUnmount()
    {
        console.log("Marks -> Unmount");
    }
    render()
    {
        return <h1>Hello, {this.props.roll} {this.state.mroll}</h1>
    }
}
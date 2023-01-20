import React, { Component } from 'react'
import ContextAPI2 from './ContextAPI2';
import { Provider } from './ContextAPI3';
export const MyContext = React.createContext();

export default class ContextAPI extends Component {
    state = {
        name: "Rahul",
        value : 10
    };
    handleClick = () => {
        this.setState({value: this.state.value + 1})
    }
  render() {
      const contextValue = {
          data : this.state,
          handleClickContext: this.handleClick
      }
    return (
       <>
       {/* <MyContext.Provider value = {contextValue}>
       {/* <MyContext.Provider value= {this.state.name}> }
            <h2>My WOrld</h2>
            <ContextAPI2/>
       </MyContext.Provider> */}
       <Provider value = {this.state}>
           <ContextAPI2></ContextAPI2>
       </Provider>
       </>
    )
  }
}

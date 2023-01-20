import React, { Component } from 'react'
// import { MyContext } from './ContextAPI'
// import { Consumer, MyContext } from './ContextAPI3'
import { MyContext } from './ContextAPI3'
export default class ContextAPI2 extends Component {
    static contextType = MyContext;
  render() {
      console.log('Hello', this.context)
    return (
        <div>
            {/* <MyContext.Consumer>{data => <h4>{data}</h4>}</MyContext.Consumer> */}
            {/* <MyContext.Consumer>
                {data => (<h4>Name: {data.name} Value : {data.value}</h4>)}
            </MyContext.Consumer> */}
            {/* <MyContext.Consumer>
                {( {data, handleClickContext}) => (
                    <div>
                        <h4>Name: {data.name} Value : {data.value}</h4>
                        <button type='submit' onClick={handleClickContext}>Click</button>
                    </div>
                )}
            </MyContext.Consumer> */}
            {/* <Consumer>
            { data => (
                    <div>
                        <h4>Name: {data.name} Value : {data.value}</h4>
                    </div>
                )}
            </Consumer> */}

            <h4> Name : {this.context.name}</h4>
        </div>
    )
  }
}

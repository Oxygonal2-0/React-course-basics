import React, {Component} from "react";
import { Fragment } from "react/cjs/react.production.min";

// let el = React.createElement("h1", null, "Hello Oxygonal");
// export default el;

class App extends Component{
  render(){
    // return React.createElement("h1", null, "Hello Oxygonal");
    return (<Fragment>
      <h1>Hello Oxygonal</h1>
      <h1>Hello Geekyshows</h1>
    </Fragment>)
    ;
  }
}
export default App;
 

//Fragment is used to group a list of children without adding extra nodes to the DOM.
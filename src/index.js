// To start server run -> npm start

// import React from "react";
// import ReactDOM from "react-dom";
// // let el = React.createElement("h1", null, "Geekyshows");
// let el = <h1>Hello Geekyshows</h1>
// ReactDOM.render(el, document.getElementById('root'));


// import React from "react";
// import ReactDOM from "react-dom";
// import el from "./App";
// ReactDOM.render(el, document.getElementById('root'));

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// ReactDOM.render(<App/>, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";
import NewJXS from "./JSX";
import AppNewJSX from "./props";
import el from "./JSX";
import AppNew from "./newApp";
import Student from "./student";
import StateProperty from "./state";
import Event from './event';
import LifeCycle from './LifeCycle';
import MountingApp from './mounting';
import UpdatingApp from './updating';
import UseStateHook from './useStateHook';
import UseEffect from './effectHook';
import CustomHook from './customHook';
import Rendering from './rendering';
import List from './list';
import StyleSheet from './stylingCss';
import StyleSheetExternal from './StyleSheetExternal';
import StylingModule from './stylingModule';
import Images from './images';
import Bootstrap from './bootstrap';
// import Form from './form';
import Form from './multipleInput';
import UncontrolledComponent from './uncontrolledComponent';
import LiftingStateUp1 from './LiftingStateUp1';
import ContextAPI from './ContextAPI';
import HOC from './HOC.js'


// 15/56
// ReactDOM.render(<AppNew/>, document.getElementById('root'));

// 16/56
// ReactDOM.render(el, document.getElementById('root'));  //el Not like a tag

// 18/56
// ReactDOM.render(<NewJXS name = "Oxygonal" roll = {100 + 1} />, document.getElementById('root'));

// 19/56
// ADD 1 package prop-types, mainly Used for development
// ReactDOM.render(<AppNewJSX  roll = "Hello" />, document.getElementById('root'));

// ReactDOM.render(<AppNewJSX  roll = "Hello">I am Child</AppNewJSX>, document.getElementById('root'));

// State -> 21/58
// It is only access in class only and state value can be change
// ReactDOM.render(<StateProperty id={101}/>, document.getElementById('root'))

//Event -> 22/58
// ReactDOM.render(<Event roll = {100}></Event>, document.getElementById('root'));

//LifeCycle Methods 26/58
// ReactDOM.render(<LifeCycle></LifeCycle>, document.getElementById('root'));

// Mounting 
// ReactDOM.render(<MountingApp name="Hello"></MountingApp>, document.getElementById('root'));

// Updating 
// ReactDOM.render(<UpdatingApp name="Hello"></UpdatingApp>, document.getElementById('root'));
// ReactDOM.render(<Student name="Hello"></Student>, document.getElementById('stu'));
// ReactDOM.unmountComponentAtNode(document.getElementById('root'));

// Hooks Usestate
// ReactDOM.render(<UseStateHook/>, document.getElementById('root'));

// Hooks Use Effect
// ReactDOM.render(<UseEffect/>, document.getElementById('root'));

// CUstome Hooks
// ReactDOM.render(<CustomHook></CustomHook>, document.getElementById('root'));

//REnderring
// ReactDOM.render(<Rendering consumer={true}></Rendering>, document.getElementById('root'));

// Lists
// const arr = [10, 20, 30, 40]
// ReactDOM.render(<List numbers={arr}></List>, document.getElementById('root'));

// CSS styling
// ReactDOM.render(<StyleSheet></StyleSheet>, document.getElementById('root'));
// ReactDOM.render(<StyleSheetExternal></StyleSheetExternal>, document.getElementById('root'));
// ReactDOM.render(<StylingModule></StylingModule>, document.getElementById('root'));

// Images/Assets  
// ReactDOM.render(<Images></Images>, document.getElementById('root'));

// Bootstrap
// ReactDOM.render(<Bootstrap></Bootstrap>, document.getElementById('root'));

// Form
// ReactDOM.render(<Form></Form>, document.getElementById('root'));
// ReactDOM.render(<UncontrolledComponent></UncontrolledComponent>, document.getElementById('root'));

// Lifting state up
// ReactDOM.render(<LiftingStateUp1></LiftingStateUp1>, document.getElementById('root'));

// Context API
// ReactDOM.render(<ContextAPI></ContextAPI>, document.getElementById('root'));

// HOC
ReactDOM.render(<HOC></HOC>, document.getElementById('root'));



